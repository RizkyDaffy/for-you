import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
const penguins = "/assets/movie-BGWwQYPv.gif";
const cat = "/assets/yeay-Da1dYHHu.gif";
const NO_LABELS = ["eum.. gimana ya", "nggak mau ah", "ga mw", "masih g mw"];
function randomPos(btnW, btnH, stage, yesBox) {
  const pad = 12;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isOverlapping = (px, py) => {
    if (!yesBox) return false;
    const buffer = 80;
    const minX = yesBox.x - buffer;
    const maxX = yesBox.x + yesBox.w + buffer;
    const minY = yesBox.y - buffer;
    const maxY = yesBox.y + yesBox.h + buffer;
    return px + btnW >= minX && px <= maxX && py + btnH >= minY && py <= maxY;
  };
  if (stage === 4) {
    const corners = [{
      x: pad,
      y: pad
    }, {
      x: vw - btnW - pad,
      y: pad
    }, {
      x: pad,
      y: vh - btnH - pad
    }, {
      x: vw - btnW - pad,
      y: vh - btnH - pad
    }];
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
  return {
    x,
    y
  };
}
function Ask() {
  const [stage, setStage] = reactExports.useState(1);
  const [noHits, setNoHits] = reactExports.useState(0);
  const [noPos, setNoPos] = reactExports.useState(null);
  const yesRef = reactExports.useRef(null);
  const [yesBox, setYesBox] = reactExports.useState(null);
  const [location, setLocation] = reactExports.useState("");
  const [movie, setMovie] = reactExports.useState("");
  const [dateStr, setDateStr] = reactExports.useState("");
  const [showCustomMovieInput, setShowCustomMovieInput] = reactExports.useState(false);
  const [customMovieInput, setCustomMovieInput] = reactExports.useState("");
  const MAX_HITS = 10;
  const noGone = noHits >= MAX_HITS;
  const yesScale = noGone ? 1 : 1 + noHits * 0.1;
  const yesLabel = noGone ? "Yaudah, ayuk" : "Iyahh, gaskeun";
  const noLabel = NO_LABELS[Math.min(stage - 1, NO_LABELS.length - 1)];
  const measureYes = () => {
    const el = yesRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setYesBox({
      x: r.left,
      y: r.top,
      w: r.width,
      h: r.height
    });
  };
  reactExports.useEffect(() => {
    measureYes();
    const onR = () => measureYes();
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, [stage, noHits, noGone]);
  const bumpNo = () => {
    setNoHits((h) => {
      const next = Math.min(h + 1, MAX_HITS);
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "stage", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cat, alt: "Happy cat", className: "hero fade-in", width: 1024, height: 1024 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "question final fade-in", children: "Yeayy, makasih yaaa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-yes fade-in", style: {
        marginTop: "1rem"
      }, onClick: () => setStage(7), children: "Lanjut atur jadwal yuk!" })
    ] });
  }
  if (stage === 7) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "stage", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "question fade-in", children: "Mau nonton dimana?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-col fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-yes", onClick: () => {
          setLocation("KCM");
          setStage(8);
        }, children: "KCM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-yes", onClick: () => {
          setLocation("Summarecon Mall (SMB)");
          setStage(8);
        }, children: "Summarecon Mall (SMB)" })
      ] })
    ] });
  }
  if (stage === 8) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "stage", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "question fade-in", children: "Mau nonton apa?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-col fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-yes", onClick: () => {
          setMovie("Spiderman No Way Home");
          setStage(9);
          setShowCustomMovieInput(false);
        }, children: "Spiderman No Way Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-yes", onClick: () => {
          setMovie("Sekawan Limo");
          setStage(9);
          setShowCustomMovieInput(false);
        }, children: "Sekawan Limo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-yes", onClick: () => {
          setMovie("Tumbal Proyek");
          setStage(9);
          setShowCustomMovieInput(false);
        }, children: "Tumbal Proyek" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-yes", onClick: () => setShowCustomMovieInput(true), children: "ada opsi lain ga" }),
        showCustomMovieInput && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-in", style: {
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "100%"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "input-custom", placeholder: "aku mau nonton ini...", value: customMovieInput, onChange: (e) => setCustomMovieInput(e.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-yes full", disabled: !customMovieInput, onClick: () => {
            setMovie(customMovieInput);
            setStage(9);
          }, children: "Lanjut dengan film ini" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-no", onClick: () => {
          setMovie("Ntar ajah pilih nya");
          setStage(9);
        }, style: {
          position: "relative"
        }, children: "Ntar ajah pilih nya" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-no", onClick: () => {
          setStage(7);
          setShowCustomMovieInput(false);
        }, children: "kembali ke pilihan tempat" })
      ] })
    ] });
  }
  if (stage === 9) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "stage", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "question fade-in", children: "Kapan nih jadinya?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-col fade-in", style: {
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "datetime-local", className: "input-custom", value: dateStr, onChange: (e) => setDateStr(e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-yes full", disabled: !dateStr, style: {
          opacity: !dateStr ? 0.5 : 1,
          width: "100%",
          marginTop: "0.5rem"
        }, onClick: () => setStage(10), children: "Lanjut" })
      ] })
    ] });
  }
  if (stage === 10) {
    const waText = encodeURIComponent(`dap, nonton ny ini ${movie} aja di ${location}, tanggal ny ini ya ${dateStr.replace("T", " jam ")} oce thank uuuuu`);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "stage", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "question fade-in", children: "Yeayy, udah beres!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "fade-in text-center", style: {
        color: "var(--ink)",
        maxWidth: "80%",
        fontSize: "1.1rem",
        lineHeight: "1.6"
      }, children: [
        "Nonton: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: movie }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Tempat: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: location }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Waktu: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: dateStr.replace("T", " jam ") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://api.whatsapp.com/send?phone=628139949585&text=${waText}`, target: "_blank", rel: "noopener noreferrer", className: "btn btn-yes fade-in", style: {
        textDecoration: "none",
        textAlign: "center",
        marginTop: "1.5rem"
      }, children: "Kirim ke WhatsApp!" })
    ] });
  }
  const showRing = stage === 3;
  const showHelper = stage === 4;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "stage", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: penguins, alt: "Penguins", className: "hero", width: 1024, height: 1024 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "question", children: "Mw ga jalan nonton bareng aku" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ref: yesRef, className: `btn btn-yes ${noGone ? "full" : ""}`, style: !noGone ? {
        transform: `scale(${yesScale})`
      } : void 0, onClick: handleYes, children: yesLabel }),
      !noGone && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `btn btn-no ${noPos ? "fly" : ""}`, style: noPos ? {
        left: noPos.x,
        top: noPos.y
      } : void 0, onPointerDown: advanceNo, onMouseEnter: dodge, onTouchStart: (e) => {
        e.preventDefault();
        advanceNo();
      }, children: noLabel })
    ] }),
    showRing && yesBox && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ring", style: {
      left: yesBox.x + yesBox.w / 2 - Math.max(yesBox.w, yesBox.h) * 0.85,
      top: yesBox.y + yesBox.h / 2 - Math.max(yesBox.w, yesBox.h) * 0.85,
      width: Math.max(yesBox.w, yesBox.h) * 1.7,
      height: Math.max(yesBox.w, yesBox.h) * 1.7
    } }),
    showRing && yesBox && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arrow", style: {
      left: yesBox.x + yesBox.w + 30,
      top: yesBox.y + yesBox.h / 2 - 12
    }, children: "←" }),
    showHelper && yesBox && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "helper", style: {
      left: yesBox.x + yesBox.w / 2 - 70,
      top: yesBox.y + yesBox.h + 14,
      width: 140
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "up", children: "↑" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Klik ini aja plss :(" })
    ] })
  ] });
}
export {
  Ask as component
};
