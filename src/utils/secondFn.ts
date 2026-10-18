// side effect (in module scope)
console.log("side effect 3");

// side effect (in window scope)
window.addEventListener("scroll", () => {
  console.log("side effect 2");
});
