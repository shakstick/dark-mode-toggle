const inner = document.getElementById("inner");
const body = document.querySelector("body");
const outer = document.getElementById("outer");

inner.addEventListener("click", () => {
  inner.classList.toggle("left");
  inner.classList.toggle("right");
  body.classList.toggle("white");
  body.classList.toggle("black");
  inner.classList.toggle("white");
  inner.classList.toggle("black");
  outer.classList.toggle("white");
});
