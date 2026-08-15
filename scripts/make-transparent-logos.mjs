import sharp from "file:///C:/Users/kbkar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const logos = [
  ["public/logo.png", "public/teams-transparent/dev-atasehir.png"],
  ["public/teams/atasehir-kartallari.jpg", "public/teams-transparent/atasehir-kartallari.png"],
  ["public/teams/cengelkoy.jpg", "public/teams-transparent/cengelkoy.png"],
  ["public/teams/dinamo.png", "public/teams-transparent/dinamo.png"],
  ["public/teams/galatasaray.png", "public/teams-transparent/galatasaray.png"],
  ["public/teams/istanbul-alp.png", "public/teams-transparent/istanbul-alp.png"],
  ["public/teams/kamarin.jpg", "public/teams-transparent/kamarin.png"],
  ["public/teams/kartal-anadolu.png", "public/teams-transparent/kartal-anadolu.png"],
  ["public/teams/kartal-belediye.jpg", "public/teams-transparent/kartal-belediye.png"],
  ["public/teams/milan-athletic.jpg", "public/teams-transparent/milan-athletic.png"],
];

function isBackground(data, index) {
  const r = data[index];
  const g = data[index + 1];
  const b = data[index + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return min >= 225 && max - min <= 24;
}

for (const [input, output] of logos) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const seen = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  const enqueue = (x, y) => {
    const pixel = y * width + x;
    if (seen[pixel]) return;
    const offset = pixel * channels;
    if (!isBackground(data, offset)) return;
    seen[pixel] = 1;
    queue[tail++] = pixel;
  };

  for (let x = 0; x < width; x++) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  for (let y = 1; y < height - 1; y++) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  while (head < tail) {
    const pixel = queue[head++];
    const x = pixel % width;
    const y = Math.floor(pixel / width);
    if (x > 0) enqueue(x - 1, y);
    if (x + 1 < width) enqueue(x + 1, y);
    if (y > 0) enqueue(x, y - 1);
    if (y + 1 < height) enqueue(x, y + 1);
  }

  for (let pixel = 0; pixel < seen.length; pixel++) {
    if (seen[pixel]) data[pixel * channels + 3] = 0;
  }

  await mkdir(dirname(output), { recursive: true });
  await sharp(data, { raw: info }).png().toFile(output);
}

console.log(`Created ${logos.length} transparent logo files.`);
