import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import penguins from "@/assets/movie.gif";
import cat from "@/assets/yeay.gif";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mw ga nonton bareng aku" },
      { name: "description", content: "A cute little ask." },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" },
    ],
  }),
  component: Ask,
});

const NO_LABELS = ["eum.. gimana ya", "nggak mau ah", "ga mw", "masih g mw"];

function randomPos(
  btnW: number,
  btnH: number,
  stage: number,
  yesBox: { x: number; y: number; w: number; h: number } | null
) {
  const pad = 12;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const isOverlapping = (px: number, py: number) => {
    if (!yesBox) return false;
    const buffer = 80;
    const minX = yesBox.x - buffer;
    const maxX = yesBox.x + yesBox.w + buffer;
    const minY = yesBox.y - buffer;
    const maxY = yesBox.y + yesBox.h + buffer;

    return (
      px + btnW >= minX &&
      px <= maxX &&
      py + btnH >= minY &&
      py <= maxY
    );
  };

  if (stage === 4) {
    // Tucked corner
    const corners = [
      { x: pad, y: pad },
      { x: vw - btnW - pad, y: pad },
      { x: pad, y: vh - btnH - pad },
      { x: vw - btnW - pad, y: vh - btnH - pad },
    ];
    const validCorners = corners.filter((c) => !isOverlapping(c.x, c.y));
    if (validCorners.length > 0) {
      return validCorners[Math.floor(Math.random() * validCorners.length)];
    }
    return corners[Math.floor(Math.random() * corners.length)];
  }
  let x = pad;
  let y = pad;
  for (let attempt = 0; attempt < 100; attempt++) {
    x = Math.random() * Math.max(1, vw - btnW - pad * 2) + pad;
    y = Math.random() * Math.max(1, vh - btnH - pad * 2) + pad;
    if (!isOverlapping(x, y)) {
      break;
    }
  }
  return { x, y };
}

function Ask() {
  const [stage, setStage] = useState(1); // 1..6 (visual buckets + final), 7..10 for flow
  const [noHits, setNoHits] = useState(0); // 0..10
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);
  const yesRef = useRef<HTMLButtonElement>(null);
  const [yesBox, setYesBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

  const [location, setLocation] = useState("");
  const [movie, setMovie] = useState("");
  const [dateStr, setDateStr] = useState("");

  // New states for custom movie input
  const [showCustomMovieInput, setShowCustomMovieInput] = useState(false);
  const [customMovieInput, setCustomMovieInput] = useState("");

  const MAX_HITS = 10;
  const noGone = noHits >= MAX_HITS;
  const yesScale = noGone ? 1 : 1 + noHits * 0.1; // grows 10% per hit
  const yesLabel = noGone ? "Yaudah, ayuk" : "Iyahh, gaskeun";
  const noLabel = NO_LABELS[Math.min(stage - 1, NO_LABELS.length - 1)];

  const measureYes = () => {
    const el = yesRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setYesBox({ x: r.left, y: r.top, w: r.width, h: r.height });
  };

  useEffect(() => {
    measureYes();
    const onR = () => measureYes();
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, [stage, noHits, noGone]);

  const bumpNo = () => {
    setNoHits((h) => {
      const next = Math.min(h + 1, MAX_HITS);
      // stage buckets for label/ring/helper progression
      const nextStage = next >= MAX_HITS ? 5 : next < 3 ? 2 : next < 6 ? 3 : 4;
      setStage(nextStage);
      if (next >= MAX_HITS) {
        setNoPos(null);
      } else {
        const btnW = 110;
        const btnH = 42;
        setNoPos(randomPos(btnW, btnH, nextStage, yesBox));
      }
      return next;
    });
  };

  const advanceNo = bumpNo;
  const dodge = () => {
    if (noGone) return;
    bumpNo();
  };

  const handleYes = () => setStage(6);


  if (stage === 6) {
    return (
      <main className="stage">
        <img src={cat} alt="Happy cat" className="hero fade-in" width={1024} height={1024} />
        <h1 className="question final fade-in">Yeayy, makasih yaaa</h1>
        <button
          className="btn btn-yes fade-in"
          style={{ marginTop: "1rem" }}
          onClick={() => setStage(7)}
        >
          Lanjut atur jadwal yuk!
        </button>
      </main>
    );
  }

  if (stage === 7) {
    return (
      <main className="stage">
        <h1 className="question fade-in">Mau nonton dimana?</h1>
        <div className="btn-col fade-in">
          <button className="btn btn-yes" onClick={() => { setLocation("KCM"); setStage(8); }}>KCM</button>
          <button className="btn btn-yes" onClick={() => { setLocation("Summarecon Mall (SMB)"); setStage(8); }}>Summarecon Mall (SMB)</button>
        </div>
      </main>
    );
  }

  if (stage === 8) {
    return (
      <main className="stage">
        <h1 className="question fade-in">Mau nonton apa?</h1>
        <div className="btn-col fade-in">
          <button className="btn btn-yes" onClick={() => { setMovie("Spiderman No Way Home"); setStage(9); setShowCustomMovieInput(false); }}>Spiderman No Way Home</button>
          <button className="btn btn-yes" onClick={() => { setMovie("Sekawan Limo"); setStage(9); setShowCustomMovieInput(false); }}>Sekawan Limo</button>
          <button className="btn btn-yes" onClick={() => { setMovie("Tumbal Proyek"); setStage(9); setShowCustomMovieInput(false); }}>Tumbal Proyek</button>
          <button className="btn btn-yes" onClick={() => setShowCustomMovieInput(true)}>ada opsi lain ga</button>
          {showCustomMovieInput && (
            <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }}>
              <input
                type="text"
                className="input-custom"
                placeholder="aku mau nonton ini..."
                value={customMovieInput}
                onChange={(e) => setCustomMovieInput(e.target.value)}
              />
              <button
                className="btn btn-yes full"
                disabled={!customMovieInput}
                onClick={() => {
                  setMovie(customMovieInput);
                  setStage(9);
                }}
              >
                Lanjut dengan film ini
              </button>
            </div>
          )}
          <button className="btn btn-no" onClick={() => { setMovie("Ntar ajah pilih nya"); setStage(9); }} style={{ position: "relative" }}>Ntar ajah pilih nya</button>
          <button className="btn btn-no" onClick={() => { setStage(7); setShowCustomMovieInput(false); }}>kembali ke pilihan tempat</button>
        </div>
      </main>
    );
  }

  if (stage === 9) {
    return (
      <main className="stage">
        <h1 className="question fade-in">Kapan nih jadinya?</h1>
        <div className="btn-col fade-in" style={{ alignItems: "center" }}>
          <input
            type="datetime-local"
            className="input-custom"
            value={dateStr}
            onChange={(e) => setDateStr(e.target.value)}
          />
          <button
            className="btn btn-yes full"
            disabled={!dateStr}
            style={{ opacity: !dateStr ? 0.5 : 1, width: "100%", marginTop: "0.5rem" }}
            onClick={() => setStage(10)}
          >
            Lanjut
          </button>
        </div>
      </main>
    );
  }

  if (stage === 10) {
    const waText = encodeURIComponent(`dap, nonton ny ini ${movie} aja di ${location}, tanggal ny ini ya ${dateStr.replace('T', ' jam ')} oce thank uuuuu`);
    return (
      <main className="stage">
        <h1 className="question fade-in">Yeayy, udah beres!</h1>
        <p className="fade-in text-center" style={{ color: "var(--ink)", maxWidth: "80%", fontSize: "1.1rem", lineHeight: "1.6" }}>
          Nonton: <b>{movie}</b><br />
          Tempat: <b>{location}</b><br />
          Waktu: <b>{dateStr.replace('T', ' jam ')}</b>
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=628139949585&text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-yes fade-in"
          style={{ textDecoration: "none", textAlign: "center", marginTop: "1.5rem" }}
        >
          Kirim ke WhatsApp!
        </a>
      </main>
    );
  }

  const showRing = stage === 3;
  const showHelper = stage === 4;

  return (
    <main className="stage">
      <img src={penguins} alt="Penguins" className="hero" width={1024} height={1024} />
      <h1 className="question">Mw ga jalan nonton bareng aku</h1>

      <div className="btn-row">
        <button
          ref={yesRef}
          className={`btn btn-yes ${noGone ? "full" : ""}`}
          style={!noGone ? { transform: `scale(${yesScale})` } : undefined}
          onClick={handleYes}
        >
          {yesLabel}
        </button>

        {!noGone && (
          <button
            className={`btn btn-no ${noPos ? "fly" : ""}`}
            style={noPos ? { left: noPos.x, top: noPos.y } : undefined}
            onPointerDown={advanceNo}
            onMouseEnter={dodge}
            onTouchStart={(e) => { e.preventDefault(); advanceNo(); }}
          >
            {noLabel}
          </button>
        )}
      </div>

      {showRing && yesBox && (
        <div
          className="ring"
          style={{
            left: yesBox.x + yesBox.w / 2 - Math.max(yesBox.w, yesBox.h) * 0.85,
            top: yesBox.y + yesBox.h / 2 - Math.max(yesBox.w, yesBox.h) * 0.85,
            width: Math.max(yesBox.w, yesBox.h) * 1.7,
            height: Math.max(yesBox.w, yesBox.h) * 1.7,
          }}
        />
      )}
      {showRing && yesBox && (
        <div
          className="arrow"
          style={{
            left: yesBox.x + yesBox.w + 30,
            top: yesBox.y + yesBox.h / 2 - 12,
          }}
        >
          ←
        </div>
      )}

      {showHelper && yesBox && (
        <div
          className="helper"
          style={{
            left: yesBox.x + yesBox.w / 2 - 70,
            top: yesBox.y + yesBox.h + 14,
            width: 140,
          }}
        >
          <span className="up">↑</span>
          <span>Klik ini aja plss :(</span>
        </div>
      )}
    </main>
  );
}
