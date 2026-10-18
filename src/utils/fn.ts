// side effect (in module scope)
console.log("side effect 1");

// side effect (in window scope)
window.addEventListener("scroll", () => {
  console.log("side effect 2");
});

// not side effect (in module scope)
export function hello() {
  console.log("hello");
}
