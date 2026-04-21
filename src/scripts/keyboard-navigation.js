const cardWidth = window.innerWidth * 0.6;
let scrollTimeout;

const prevNext = (type) => {
  if (type === "prev") {
    window.scrollBy({ left: -cardWidth, behavior: "smooth" });
  } else if (type === "next") {
    window.scrollBy({ left: cardWidth, behavior: "smooth" });
  }
};

const debounce = (fn, delay) => {
  return (...args) => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => fn(...args), delay);
  };
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
