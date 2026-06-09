import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import penguins from "@/assets/penguins.jpg";
import cat from "@/assets/cat.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Would you go out with me?" },
      { name: "description", content: "A cute little ask." },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" },
    ],
  }),
  component: Ask,
});

const NO_LABELS = ["emm.. no", "no man", "hmmm no", "still no"];

function randomPos(btnW: number, btnH: number, stage: number) {
  const pad = 12;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (stage === 4) {
    // Tucked corner
    const corners = [
      { x: pad, y: pad },
      { x: vw - btnW - pad, y: pad },
      { x: pad, y: vh - btnH - pad },
      { x: vw - btnW - pad, y: vh - btnH - pad },
    ];
    return corners[Math.floor(Math.random() * corners.length)];
  }
  const x = Math.random() * Math.max(1, vw - btnW - pad * 2) + pad;
  const y = Math.random() * Math.max(1, vh - btnH - pad * 2) + pad;
  return { x, y };
}

function Ask() {
  const [stage, setStage] = useState(1); // 1..6
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);
  const yesRef = useRef<HTMLButtonElement>(null);
  const [yesBox, setYesBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

  const yesScale = stage === 1 ? 1 : stage === 2 ? 1.1 : stage === 3 ? 1.3 : stage === 4 ? 1.5 : 1;
  const yesLabel = stage >= 5 ? "Alright fine" : "alright..";
  const noLabel = NO_LABELS[Math.min(stage - 1, 3)];

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
  }, [stage]);

  const handleNo = () => {
    const next = stage + 1;
    if (next >= 5) {
      setStage(5);
      setNoPos(null);
      return;
    }
    // measure no button approx size
    const btnW = 110;
    const btnH = 42;
    setNoPos(randomPos(btnW, btnH, next));
    setStage(next);
  };

  const handleYes = () => {
    if (stage >= 5) setStage(6);
  };

  if (stage === 6) {
    return (
      <main className="stage">
        <img src={cat} alt="Happy cat" className="hero fade-in" width={1024} height={1024} />
        <h1 className="question final fade-in">Aww, thanks babe</h1>
      </main>
    );
  }

  const showRing = stage === 3;
  const showHelper = stage === 4;

  return (
    <main className="stage">
      <img src={penguins} alt="Penguins" className="hero" width={1024} height={1024} />
      <h1 className="question">Would you go out with me?</h1>

      <div className="btn-row">
        <button
          ref={yesRef}
          className={`btn btn-yes ${stage >= 5 ? "full" : ""}`}
          style={stage < 5 ? { transform: `scale(${yesScale})` } : undefined}
          onClick={handleYes}
        >
          {yesLabel}
        </button>

        {stage < 5 && (
          <button
            className={`btn btn-no ${noPos ? "fly" : ""}`}
            style={noPos ? { left: noPos.x, top: noPos.y } : undefined}
            onClick={handleNo}
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
          <span>Click here plss :(</span>
        </div>
      )}
    </main>
  );
}
