"use client";

import { useRef, useState } from "react";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const players = [
  { no: "61", name: "BUSE ERTUĞRAL", image: asset("/roster-athletes/buse-ertugral-cutout.png") },
  { no: "3", name: "EMİNE EYLÜL İLELİ" },
  { no: "18", name: "LARA SUDENAZ BOSTANCIOĞLU", image: asset("/roster-athletes/lara-bostancioglu-cutout.png") },
  { no: "17", name: "ELİF NAZ AKGÜMÜŞ" },
  { no: "99", name: "İLKE YILMAZ", image: asset("/roster-athletes/ilke-yilmaz-cutout.png") },
  { no: "19", name: "TUANA ZENGİN" },
  { no: "11", name: "ELÇİN SÜMER", image: asset("/roster-athletes/elcin-sumer-cutout.png") },
  { no: "2", name: "ELİF NAZ PELİSTER", image: asset("/roster-athletes/elif-naz-pelister-cutout.png") },
  { no: "22", name: "YAĞMUR GÜLSEREN", image: asset("/roster-athletes/yagmur-gulseren-cutout.png") },
  { no: "8", name: "DURU DENİZ BÖRKLÜ", image: asset("/roster-athletes/duru-deniz-borklu-cutout.png") },
  { no: "5", name: "ESMA NUR DUDU", image: asset("/roster-athletes/esma-nur-dudu-cutout.png") },
  { no: "14", name: "DURU PAMUK" },
  { no: "77", name: "BEREN BİLİCİ", image: asset("/roster-athletes/beren-bilici-cutout.png") },
  { no: "7", name: "DURU AKKOÇ", image: asset("/roster-athletes/duru-akkoc-cutout.png") },
];

const teamStories = [
  { name: "ELÇİN SÜMER", no: "11", image: asset("/team-stories/elcin-sumer.webp"), message: "Cesaretin oyunu değiştirir; her sayı yeni bir başlangıç." },
  { name: "BEREN BİLİCİ", no: "77", image: asset("/team-stories/beren-bilici.webp"), message: "Enerjin sahaya yayılsın, hedefin her zaman bir sonraki sayı olsun." },
  { name: "İLKE YILMAZ", no: "99", image: asset("/team-stories/ilke-yilmaz.webp"), message: "İnandığın sürece hiçbir top ulaşılmaz değildir." },
  { name: "YAĞMUR GÜLSEREN", no: "22", image: asset("/team-stories/yagmur-gulseren.webp"), message: "Azminle yüksel, mücadelenle iz bırak." },
  { name: "LARA BOSTANCIOĞLU", no: "18", image: asset("/team-stories/lara-bostancioglu.webp"), message: "Gücünü takımından al, kararlılığınla fark yarat." },
  { name: "DURU DENİZ BÖRKLÜ", no: "8", image: asset("/team-stories/duru-deniz-borklu.webp"), message: "Her antrenmanda geliş, her maçta daha güçlü ol." },
  { name: "BUSE ERTUĞRAL", no: "61", image: asset("/team-stories/buse-ertugral.webp"), message: "Tecrübenle yol göster, mücadelenle takıma güç kat." },
  { name: "ESMA NUR DUDU", no: "5", image: asset("/team-stories/esma-nur-dudu.webp"), message: "Yüreğini sahaya koy; emek daima karşılığını bulur." },
  { name: "ELİF NAZ PELİSTER", no: "2", image: asset("/team-stories/elif-naz-pelister.webp"), message: "Kendine inan, ritmini bul ve oyuna yön ver." },
  { name: "DURU AKKOÇ", no: "7", image: asset("/team-stories/duru-akkoc.webp"), message: "Gülümse, mücadele et ve her topun peşinden git." },
];

const teamLogos: Record<string, string> = {
  "Kartal Belediyespor": asset("/teams-transparent/kartal-belediye.webp"),
  "Kamarin Spor": asset("/teams-transparent/kamarin.webp"),
  "Ataşehir Kartalları": asset("/teams-transparent/atasehir-kartallari.webp"),
  "Alp Spor": asset("/teams-transparent/istanbul-alp.webp"),
  "Kartal Anadolu": asset("/teams-transparent/kartal-anadolu.webp"),
  Galatasaray: asset("/teams-transparent/galatasaray.webp"),
  "Dev Ataşehir": asset("/teams-transparent/dev-atasehir.webp"),
  "Can Milan Atletik": asset("/teams-transparent/milan-athletic.webp"),
  "Dinamo Spor": asset("/teams-transparent/dinamo.webp"),
  "Çengelköy Voleybol": asset("/teams-transparent/cengelkoy.webp"),
};

const matchWeeks = [
  [["Kartal Belediyespor", "Kamarin Spor"], ["Ataşehir Kartalları", "Alp Spor"], ["Kartal Anadolu", "Galatasaray"], ["Dev Ataşehir", "Can Milan Atletik"], ["Dinamo Spor", "Çengelköy Voleybol"]],
  [["Alp Spor", "Kartal Belediyespor"], ["Kamarin Spor", "Kartal Anadolu"], ["Can Milan Atletik", "Ataşehir Kartalları"], ["Galatasaray", "Dinamo Spor"], ["Çengelköy Voleybol", "Dev Ataşehir"]],
  [["Kartal Belediyespor", "Kartal Anadolu"], ["Alp Spor", "Can Milan Atletik"], ["Dinamo Spor", "Kamarin Spor"], ["Ataşehir Kartalları", "Çengelköy Voleybol"], ["Dev Ataşehir", "Galatasaray"]],
  [["Can Milan Atletik", "Kartal Belediyespor"], ["Kartal Anadolu", "Dinamo Spor"], ["Çengelköy Voleybol", "Alp Spor"], ["Kamarin Spor", "Dev Ataşehir"], ["Galatasaray", "Ataşehir Kartalları"]],
  [["Kartal Belediyespor", "Dinamo Spor"], ["Can Milan Atletik", "Çengelköy Voleybol"], ["Dev Ataşehir", "Kartal Anadolu"], ["Alp Spor", "Galatasaray"], ["Ataşehir Kartalları", "Kamarin Spor"]],
  [["Çengelköy Voleybol", "Kartal Belediyespor"], ["Dinamo Spor", "Dev Ataşehir"], ["Galatasaray", "Can Milan Atletik"], ["Kartal Anadolu", "Ataşehir Kartalları"], ["Kamarin Spor", "Alp Spor"]],
  [["Kartal Belediyespor", "Dev Ataşehir"], ["Çengelköy Voleybol", "Galatasaray"], ["Ataşehir Kartalları", "Dinamo Spor"], ["Can Milan Atletik", "Kamarin Spor"], ["Alp Spor", "Kartal Anadolu"]],
  [["Galatasaray", "Kartal Belediyespor"], ["Dev Ataşehir", "Ataşehir Kartalları"], ["Kamarin Spor", "Çengelköy Voleybol"], ["Dinamo Spor", "Alp Spor"], ["Kartal Anadolu", "Can Milan Atletik"]],
  [["Kartal Belediyespor", "Ataşehir Kartalları"], ["Galatasaray", "Kamarin Spor"], ["Alp Spor", "Dev Ataşehir"], ["Çengelköy Voleybol", "Kartal Anadolu"], ["Can Milan Atletik", "Dinamo Spor"]],
  [["Kamarin Spor", "Kartal Belediyespor"], ["Alp Spor", "Ataşehir Kartalları"], ["Galatasaray", "Kartal Anadolu"], ["Can Milan Atletik", "Dev Ataşehir"], ["Çengelköy Voleybol", "Dinamo Spor"]],
  [["Kartal Belediyespor", "Alp Spor"], ["Kartal Anadolu", "Kamarin Spor"], ["Ataşehir Kartalları", "Can Milan Atletik"], ["Dinamo Spor", "Galatasaray"], ["Dev Ataşehir", "Çengelköy Voleybol"]],
  [["Kartal Anadolu", "Kartal Belediyespor"], ["Can Milan Atletik", "Alp Spor"], ["Kamarin Spor", "Dinamo Spor"], ["Çengelköy Voleybol", "Ataşehir Kartalları"], ["Galatasaray", "Dev Ataşehir"]],
  [["Kartal Belediyespor", "Can Milan Atletik"], ["Dinamo Spor", "Kartal Anadolu"], ["Alp Spor", "Çengelköy Voleybol"], ["Dev Ataşehir", "Kamarin Spor"], ["Ataşehir Kartalları", "Galatasaray"]],
  [["Dinamo Spor", "Kartal Belediyespor"], ["Çengelköy Voleybol", "Can Milan Atletik"], ["Kartal Anadolu", "Dev Ataşehir"], ["Galatasaray", "Alp Spor"], ["Kamarin Spor", "Ataşehir Kartalları"]],
  [["Kartal Belediyespor", "Çengelköy Voleybol"], ["Dev Ataşehir", "Dinamo Spor"], ["Can Milan Atletik", "Galatasaray"], ["Ataşehir Kartalları", "Kartal Anadolu"], ["Alp Spor", "Kamarin Spor"]],
  [["Dev Ataşehir", "Kartal Belediyespor"], ["Galatasaray", "Çengelköy Voleybol"], ["Dinamo Spor", "Ataşehir Kartalları"], ["Kamarin Spor", "Can Milan Atletik"], ["Kartal Anadolu", "Alp Spor"]],
  [["Kartal Belediyespor", "Galatasaray"], ["Ataşehir Kartalları", "Dev Ataşehir"], ["Çengelköy Voleybol", "Kamarin Spor"], ["Alp Spor", "Dinamo Spor"], ["Can Milan Atletik", "Kartal Anadolu"]],
  [["Ataşehir Kartalları", "Kartal Belediyespor"], ["Kamarin Spor", "Galatasaray"], ["Dev Ataşehir", "Alp Spor"], ["Kartal Anadolu", "Çengelköy Voleybol"], ["Dinamo Spor", "Can Milan Atletik"]],
];

const standings = [
  { rank: "1", name: "Çengelköy Voleybol Spor Kulübü", logo: asset("/teams-transparent/cengelkoy.webp"), played: "0", won: "0", points: "0" },
  { rank: "2", name: "Dev Ataşehir Spor Kulübü", logo: asset("/teams-transparent/dev-atasehir.webp"), played: "0", won: "0", points: "0", ours: true },
  { rank: "3", name: "Kartal Belediyesi Spor Kulübü", logo: asset("/teams-transparent/kartal-belediye.webp"), played: "0", won: "0", points: "0" },
  { rank: "4", name: "Galatasaray Spor Kulübü", logo: asset("/teams-transparent/galatasaray.webp"), played: "0", won: "0", points: "0" },
  { rank: "5", name: "Can Milan Athletic Spor Kulübü", logo: asset("/teams-transparent/milan-athletic.webp"), played: "0", won: "0", points: "0" },
  { rank: "6", name: "İstanbul Alp Spor Kulübü", logo: asset("/teams-transparent/istanbul-alp.webp"), played: "0", won: "0", points: "0" },
  { rank: "7", name: "Kamarin Spor Kulübü", logo: asset("/teams-transparent/kamarin.webp"), played: "0", won: "0", points: "0" },
  { rank: "8", name: "Dinamo Spor Kulübü", logo: asset("/teams-transparent/dinamo.webp"), played: "0", won: "0", points: "0" },
  { rank: "9", name: "Kartal Anadolu Spor Kulübü", logo: asset("/teams-transparent/kartal-anadolu.webp"), played: "0", won: "0", points: "0" },
  { rank: "10", name: "Ataşehir Kartalları Spor Kulübü", logo: asset("/teams-transparent/atasehir-kartallari.webp"), played: "0", won: "0", points: "0" },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const storyTrack = useRef<HTMLDivElement>(null);
  const slideStories = (direction: number) => storyTrack.current?.scrollBy({ left: direction * Math.max(280, storyTrack.current.clientWidth * 0.82), behavior: "smooth" });
  return (
    <main className="page-shell">
      <div className="site-frame">
        <header className="topbar">
          <a className="brand" href="#home"><b>DEV ATAŞEHİR<span>SPOR KULÜBÜ</span></b></a>
          <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Menüyü aç">☰</button>
          <nav className={menu ? "show" : ""}>
            <a href="#home" onClick={() => setMenu(false)}>ANA SAYFA</a><a href="#takim" onClick={() => setMenu(false)}>KADRO⌄</a><a href="#maclar" onClick={() => setMenu(false)}>FİKSTÜR</a><a href="#teknik" onClick={() => setMenu(false)}>TEKNİK EKİP</a><a href="#puan" onClick={() => setMenu(false)}>KULÜP</a>
          </nav>
          <a className="contact-pill" href="#iletisim">İLETİŞİM <span>↗</span></a>
        </header>

        <section className="hero-panel" id="home">
          <div className="hero-icon-rail">
            <div className="orbit-ball"><span>↙</span><img src={asset("/volleyball.webp")} alt="Voleybol topu" loading="eager" decoding="async" /><span>↘</span></div>
            <small>SAHADA<br />EN İYİ OYUN</small><div className="rail-arrows">‹ &nbsp;&nbsp; ›</div>
            <div className="rail-divider"></div>
            <div className="crest-icon"><img src={asset("/teams-transparent/dev-atasehir.webp")} alt="Dev Ataşehir arması" loading="eager" decoding="async" /></div><small>ZAFER İÇİN<br />BİRLİKTEYİZ</small>
          </div>
          <div className="hero-athlete"><img src={asset("/hero-athlete.webp")} alt="Dev Ataşehir forması giyen kadın voleybolcu" loading="eager" decoding="async" fetchPriority="high" /></div>
          <div className="hero-copy">
            <span className="mini-label"><img src={asset("/tvf-logo.svg")} alt="Türkiye Voleybol Federasyonu" /><b>KADINLAR 2. LİGİ</b></span>
            <div className="headline-line"><h1>SAHADA<br />TEK YÜREK</h1><div className="mini-action"><img src={asset("/team-highfive.jpg")} alt="Takım kutlaması" /><span>🏐</span></div></div>
            <div className="hero-bottom"><p>✉ &nbsp; ATAŞEHİR’DEN<br />ZAFERE BİRLİKTE</p><p>HER SAYIDA MÜCADELE,<br />HER MAÇTA AYNI HEDEF.</p></div>
          </div>
        </section>

        <section className="quick-grid">
          <article className="intro-copy"><p className="kicker">KADIN A TAKIMI</p><h2>GÜCÜMÜZ<br />BİRLİĞİMİZ.</h2><a href="#takim">KADROYU İNCELE ↗</a></article>
          <article className="next-match card sky"><div className="card-top"><span>SIRADAKİ MAÇ</span><b>↗</b></div><div className="teams"><img src={asset("/teams-transparent/dev-atasehir.webp")} alt="Dev Ataşehir" loading="eager" decoding="async" /><strong>VS</strong><div className="rival">İV</div></div><div className="card-tags"><span>İÇ SAHA</span><span>2. LİG</span></div><h3>18 EKİM · 19:00</h3><p>Ülker Spor ve Etkinlik Salonu</p></article>
          <article className="result-card card orange"><div className="card-top"><span>SON MAÇ</span><b>↗</b></div><strong className="score">3 — 1</strong><div className="card-tags"><span>GALİBİYET</span><span>04. HAFTA</span></div><h3>DEV ATAŞEHİR</h3><p>Ege Voleybol karşısında galibiyet</p></article>
          <article className="ball-card card aqua"><div className="card-top"><span>FORM DURUMU</span><b>↗</b></div><div className="ball-icon">🏐</div><div className="card-tags"><span>GÜÇLÜ</span><span>FORMDA</span></div><div className="form-dots"><i>G</i><i>G</i><i>M</i><i>G</i><i>G</i></div></article>
        </section>

        <section className="feature-row">
          <div className="feature-copy"><h2>HER SAYIDA<br />AYNI HEDEF</h2><p>Oyun disiplinimiz, enerjimiz ve Ataşehir’den aldığımız güçle sahadayız.</p><a className="dark-button" href="#maclar">FİKSTÜRÜ GÖR <span>↗</span></a></div>
          <div className="feature-image"><img src={asset("/team-highfive.jpg")} alt="Voleybolcular sayı sonrası kutlama yapıyor" /></div>
          <div className="feature-side"><div className="round-icon green">🏆</div><small>SEZON HEDEFİ</small><h3>PLAY-OFF</h3><div className="yellow-note"><b>3</b><span>MAÇTA<br />2 GALİBİYET</span></div></div>
        </section>

        <section className="roster" id="takim">
          <div className="section-title"><div><p className="kicker">KADIN A TAKIMI</p><h2>SAHADAKİ<br />GÜCÜMÜZ</h2></div><p>Dev Ataşehir Kadın A Takımı’nın güçlü kadrosunu ve forma numaralarını keşfedin.</p></div>
          <div className="player-grid">
            {players.map((p, index) => (
              <article className="player-card roster-card" key={p.no} aria-label={`${p.name}, ${p.no} numaralı sporcu`}>
                <div className="player-image roster-visual">
                  <div className="player-rank"><b>{String(index + 1).padStart(2, "0")}</b><span>KADRO</span></div>
                  <img className="roster-crest" src={asset("/teams-transparent/dev-atasehir.webp")} alt="Dev Ataşehir" loading="lazy" decoding="async" />
                  <strong className="jersey-number">{p.no}</strong>
                  {p.image ? <><img className="roster-athlete" src={p.image} alt={`${p.name}, ${p.no} numaralı sporcu`} loading="lazy" decoding="async" /><span className="waist-mask" aria-hidden="true"></span></> : null}
                  <span className="team-strip">KADIN A TAKIMI</span>
                </div>
                <h3 className={`athlete-name ${p.name.length > 22 ? "long-name" : ""}`}>{p.name}</h3>
                <div className="player-meta"><img src={asset("/teams-transparent/dev-atasehir.webp")} alt="Dev Ataşehir" loading="lazy" decoding="async" /><b>{p.no}</b><i></i><span>SPORCU</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="schedule" id="maclar">
          <div className="schedule-head"><div><p className="kicker light">4. GRUP · KADINLAR 2. LİGİ</p><h2>18 HAFTALIK<br />FİKSTÜR</h2></div><div className="volley-icon">🏐</div></div>
          <div className="week-grid">
            {matchWeeks.map((matches, weekIndex) => (
              <article className="week-card" key={weekIndex}>
                <header><span>{String(weekIndex + 1).padStart(2, "0")}</span><h3>{weekIndex + 1}. HAFTA</h3><b>5 MAÇ</b></header>
                <div className="week-matches">
                  {matches.map(([home, away]) => (
                    <div className={`week-match ${home === "Dev Ataşehir" || away === "Dev Ataşehir" ? "ours" : ""}`} key={`${home}-${away}`}>
                      <div className="week-team home"><span>{home}</span><img src={teamLogos[home]} alt={`${home} logosu`} loading="lazy" decoding="async" /></div>
                      <i>VS</i>
                      <div className="week-team away"><img src={teamLogos[away]} alt={`${away} logosu`} loading="lazy" decoding="async" /><span>{away}</span></div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="team-stories" id="teknik">
          <div className="stories-head">
            <div><p className="kicker">YENİ SEZON · TEK YÜREK</p><h2>BİRLİKTE<br />DAHA GÜÇLÜ</h2></div>
            <div className="stories-intro"><p>Formayı taşıyan her sporcumuz, aynı hedefe yürüyen güçlü hikâyemizin bir parçası.</p><div className="story-controls"><button type="button" onClick={() => slideStories(-1)} aria-label="Önceki sporcu">←</button><button type="button" onClick={() => slideStories(1)} aria-label="Sonraki sporcu">→</button></div></div>
          </div>
          <div className="story-track" ref={storyTrack}>
            {teamStories.map((story, index) => (
              <article className="story-card" key={story.name}>
                <div className="story-photo"><img src={story.image} alt={`${story.name} yeni sezon görseli`} loading="lazy" decoding="async" /><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="story-copy"><div><small>FORMA {story.no}</small><h3>{story.name}</h3></div><p>“{story.message}”</p></div>
              </article>
            ))}
          </div>
          <p className="story-swipe">KAYDIRARAK TAKIMI KEŞFET <span>↔</span></p>
        </section>

        <section className="table-section" id="puan">
          <div className="table-title"><p className="kicker">SEZON BAŞLANGICI</p><h2>PUAN<br />DURUMU</h2><p className="data-note">Maç verileri Google Drive bağlantısı eklendiğinde otomatik güncellenecek.</p><div className="round-icon">🏐</div></div>
          <div className="league-table"><div className="t-head"><span>#</span><span>TAKIM</span><span>O</span><span>G</span><span>P</span></div>{standings.map(team=><div className={`t-row ${team.ours?"active":""}`} key={team.name}><span>{team.rank}</span><span className="team-cell"><img src={team.logo} alt={`${team.name} logosu`} loading="lazy" decoding="async" /><b>{team.name}</b>{team.ours?<small>BİZ</small>:null}</span><span>{team.played}</span><span>{team.won}</span><span>{team.points}</span></div>)}</div>
        </section>

        <section className="join-banner"><div><small>TRİBÜNDE BİRLİKTE</small><h2>ATAŞEHİR’İN<br />SESİ OL</h2></div><img src={asset("/teams-transparent/dev-atasehir.webp")} alt="Dev Ataşehir logosu" loading="lazy" decoding="async" /><a href="#iletisim">BİZE KATIL <span>↗</span></a></section>

        <footer id="iletisim"><div className="footer-brand"><img src={asset("/teams-transparent/dev-atasehir.webp")} alt="Dev Ataşehir" loading="lazy" decoding="async" /><h3>DEV ATAŞEHİR</h3><p>Kadın voleybolunun yükselen sesi.</p></div><div><b>KULÜP</b><a href="#takim">Takım</a><a href="#teknik">Teknik Ekip</a><a href="#puan">Puan Durumu</a></div><div><b>MAÇLAR</b><a href="#maclar">Fikstür</a><a href="#maclar">Sonuçlar</a><a href="#home">Salon Bilgisi</a></div><div><b>TAKİP ET</b><a href="#iletisim">Instagram ↗</a><a href="#iletisim">YouTube ↗</a><a href="mailto:info@devatasehir.org">E-posta ↗</a></div><div className="newsletter"><b>TAKIMDAN HABERDAR OL</b><p>Maç ve duyurular için e-posta listemize katıl.</p><label><input placeholder="E-posta adresin" aria-label="E-posta adresi" /><button aria-label="Gönder">→</button></label></div></footer>
        <div className="copyright">© 2026 DEV ATAŞEHİR SPOR KULÜBÜ <span>Demo içeriklerle hazırlanmıştır.</span></div>
      </div>
    </main>
  );
}
