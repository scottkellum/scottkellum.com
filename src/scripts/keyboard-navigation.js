const cardWidth = window.innerWidth * 0.5;
let lastWheelTime = 0;

const prevNext = (type) => {
  if (type === "prev") {
    window.scrollBy({ left: -cardWidth, behavior: "smooth" });
  } else if (type === "next") {
    window.scrollBy({ left: cardWidth, behavior: "smooth" });
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    prevNext(e.key === "ArrowDown" ? "next" : "prev");
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    prevNext("prev");
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    prevNext("next");
  }
});

window.addEventListener("wheel", (e) => {
  const now = Date.now();
  if (Math.abs(e.deltaY) > 20 && now - lastWheelTime > 100) {
    prevNext(e.deltaY > 0 ? "next" : "prev");
    lastWheelTime = now;
  }
});
