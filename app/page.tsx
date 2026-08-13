"use client";

import { useState } from "react";

const players = [
  { no: "07", name: "Duru Aksoy", role: "Pasör", height: "178 cm", born: "2002", hand: "Sağ", tone: "lime" },
  { no: "10", name: "Ece Yalçın", role: "Smaçör", height: "184 cm", born: "2000", hand: "Sağ", tone: "blue" },
  { no: "12", name: "Selin Kaya", role: "Orta Oyuncu", height: "190 cm", born: "1999", hand: "Sağ", tone: "green" },
  { no: "18", name: "İdil Demir", role: "Libero", height: "172 cm", born: "2003", hand: "Sağ", tone: "yellow" },
];

const fixtures = [
  { date: "18 EKI", day: "CUM", opponent: "İstanbul Voleybol", place: "İç Saha", time: "19:00" },
  { date: "26 EKI", day: "CTS", opponent: "Bursa Büyükşehir", place: "Deplasman", time: "16:30" },
  { date: "02 KAS", day: "PZR", opponent: "Ankara Spor", place: "İç Saha", time: "14:00" },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="demo-bar">2026–27 SEZONU · KADINLAR 2. LİGİ <span>Demo içerik</span></div>
      <header className="site-header">
        <a className="brand" href="#anasayfa" aria-label="Dev Ataşehir ana sayfa">
          <img src="/logo.png" alt="Dev Ataşehir Spor Kulübü" />
          <span>DEV ATAŞEHİR<small>SPOR KULÜBÜ</small></span>
        </a>
        <button className="menu-button" aria-label="Menüyü aç veya kapat" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <i></i><i></i>
        </button>
        <nav className={menuOpen ? "open" : ""} aria-label="Ana menü">
          <a href="#takim" onClick={() => setMenuOpen(false)}>Takım</a>
          <a href="#teknik" onClick={() => setMenuOpen(false)}>Teknik Ekip</a>
          <a href="#fikstur" onClick={() => setMenuOpen(false)}>Fikstür</a>
          <a href="#puan" onClick={() => setMenuOpen(false)}>Puan Durumu</a>
          <a className="nav-cta" href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim <ArrowIcon /></a>
        </nav>
      </header>

      <section className="hero" id="anasayfa">
        <div className="court-lines" aria-hidden="true"></div>
        <div className="hero-copy">
          <p className="eyebrow"><span></span> Kadınlar 2. Ligi</p>
          <h1>SAHADA<br /><em>TEK YÜREK.</em></h1>
          <p className="hero-lead">Ataşehir’in enerjisi, kadın voleybolunun gücü. Yeni sezonda her sayı için birlikte mücadele ediyoruz.</p>
          <div className="hero-actions">
            <a className="button primary" href="#takim">Takımı tanı <ArrowIcon /></a>
            <a className="button ghost" href="#fikstur">Fikstürü gör</a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <div className="orb"><img src="/logo.png" alt="" /></div>
          <div className="season"><b>2026</b><span>YENİ SEZON</span></div>
        </div>
        <div className="scroll-note">AŞAĞI KAYDIR <span>↓</span></div>
      </section>

      <section className="match-wrap" aria-labelledby="next-match-title">
        <div className="section-kicker"><span>01</span> SIRADAKİ MAÇ</div>
        <div className="match-card">
          <div className="match-date"><strong>18</strong><span>EKİM<br />CUMA · 19:00</span></div>
          <div className="team home"><img src="/logo.png" alt="Dev Ataşehir logosu" /><div><small>EV SAHİBİ</small><b>DEV<br />ATAŞEHİR</b></div></div>
          <div className="versus"><small>2. LİG · 04. HAFTA</small><strong id="next-match-title">VS</strong><span>Ülker Spor ve Etkinlik Salonu</span></div>
          <div className="team away"><div className="away-badge">İV</div><div><small>DEPLASMAN</small><b>İSTANBUL<br />VOLEYBOL</b></div></div>
          <a className="match-link" href="#fikstur" aria-label="Tüm fikstürü görüntüle"><ArrowIcon /></a>
        </div>
      </section>

      <section className="roster section" id="takim">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span></span> KADIN A TAKIMI</p><h2>SAHADAKİ<br /><em>GÜCÜMÜZ</em></h2></div>
          <p>Her biri farklı bir yetenek, hepsi aynı hedef için sahada. Kartların üzerine gelerek sporcu bilgilerini keşfedin.</p>
        </div>
        <div className="player-grid">
          {players.map((player) => (
            <article className={`player-card ${player.tone}`} key={player.no} tabIndex={0}>
              <div className="player-visual"><span className="player-number">{player.no}</span><div className="player-silhouette"><i></i></div><span className="position-tag">{player.role}</span></div>
              <div className="player-info"><div><small>{player.no} · KADIN A TAKIMI</small><h3>{player.name}</h3></div><span className="circle-arrow"><ArrowIcon /></span></div>
              <div className="player-stats"><span><small>BOY</small>{player.height}</span><span><small>DOĞUM</small>{player.born}</span><span><small>EL</small>{player.hand}</span></div>
            </article>
          ))}
        </div>
        <a className="text-link" href="#takim">Tüm kadroyu gör <span>→</span></a>
      </section>

      <section className="fixtures-section" id="fikstur">
        <div className="section-heading light">
          <div><p className="eyebrow"><span></span> MAÇ TAKVİMİ</p><h2>SIRADAKİ<br /><em>RANDEVULAR</em></h2></div>
          <p>Takımımızın yaklaşan lig maçlarını takip edin. Salon ve saat bilgileri değişiklik gösterebilir.</p>
        </div>
        <div className="fixture-list">
          {fixtures.map((game, index) => (
            <article className="fixture-row" key={game.date}>
              <div className="fixture-index">0{index + 1}</div>
              <div className="fixture-date"><b>{game.date}</b><span>{game.day}</span></div>
              <div className="fixture-teams"><b>DEV ATAŞEHİR</b><span>vs</span><b>{game.opponent}</b></div>
              <div className="fixture-place"><span>{game.place}</span><b>{game.time}</b></div>
            </article>
          ))}
        </div>
      </section>

      <section className="coach section" id="teknik">
        <div className="coach-visual"><span className="coach-label">BAŞANTRENÖR</span><div className="coach-silhouette"><i></i></div><div className="big-type">OYUNU<br />BİRLİKTE<br />KURARIZ.</div></div>
        <div className="coach-copy"><p className="eyebrow dark"><span></span> TEKNİK EKİP</p><h2>DENİZ<br /><em>ERDEM</em></h2><p className="coach-role">Başantrenör · 2024’ten beri</p><blockquote>“Sahada cesaret, disiplinde istikrar ve her zaman takım ruhu.”</blockquote><p>Genç oyuncu gelişimini merkeze alan oyun anlayışıyla takımımızın yeni sezon yolculuğuna liderlik ediyor.</p><a className="text-link" href="#teknik">Teknik ekibi tanı <span>→</span></a></div>
      </section>

      <section className="standings section" id="puan">
        <div className="standings-title"><p className="eyebrow dark"><span></span> LİG TABLOSU</p><h2>PUAN<br /><em>DURUMU</em></h2><p>3. hafta sonunda güncel görünüm.</p></div>
        <div className="table-wrap">
          <div className="table-head"><span>#</span><span>TAKIM</span><span>O</span><span>G</span><span>M</span><span>P</span></div>
          {[
            ["1", "Bursa Büyükşehir", "3", "3", "0", "9"],
            ["2", "DEV ATAŞEHİR", "3", "2", "1", "7"],
            ["3", "İstanbul Voleybol", "3", "2", "1", "6"],
            ["4", "Ankara Spor", "3", "1", "2", "4"],
            ["5", "Ege Voleybol", "3", "1", "2", "3"],
          ].map((row) => <div className={`table-row ${row[1] === "DEV ATAŞEHİR" ? "active" : ""}`} key={row[0]}>{row.map((cell, i) => <span key={i}>{cell}{i === 1 && row[1] === "DEV ATAŞEHİR" ? <small>BİZ</small> : null}</span>)}</div>)}
        </div>
      </section>

      <footer id="iletisim">
        <div className="footer-main"><img src="/logo.png" alt="Dev Ataşehir Spor Kulübü" /><div><p>Ataşehir’den yükselen<br />kadın voleybolunun sesi.</p><a href="mailto:info@devatasehir.org">info@devatasehir.org <ArrowIcon /></a></div><div className="footer-links"><a href="#takim">Takım</a><a href="#fikstur">Maçlar</a><a href="#teknik">Teknik Ekip</a><a href="#puan">Puan Durumu</a></div><div className="footer-social"><span>BİZİ TAKİP ET</span><a href="#iletisim">Instagram ↗</a><a href="#iletisim">YouTube ↗</a></div></div>
        <div className="footer-bottom"><span>© 2026 Dev Ataşehir Spor Kulübü</span><span>Örnek içeriklerle hazırlanmış tasarım prototipi</span></div>
      </footer>
    </main>
  );
}
