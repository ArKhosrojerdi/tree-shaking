`./src/App.tsx`:

```
import { hello } from "./utils/fn";

function App() {
  return null;
}

export default App;
```

---

`./src/utils/fn.ts`:

```
import "./secondFn";

console.log("side effect 1");

window.addEventListener("scroll", () => {
  console.log("side effect 2");
});

export function hello() {
  console.log("hello");
}
```

---

`./src/utils/secondFn.ts`;

```
// side effect (in module scope)
console.log("side effect 3");

// side effect (in window scope)
window.addEventListener("scroll", () => {
  console.log("side effect 2");
});
```

---

`package.json`:

```
// means no side effects considered in build time
// side effect 1 ❌
// side effect 2 ❌
// side effect 3 ❌
// side effect 4 ❌
{
  "sideEffects": false,
}
```

```
// default behaviour and keep all the side effects
// side effect 1 ✅
// side effect 2 ✅
// side effect 3 ✅
// side effect 4 ✅
{
  "sideEffects": true,
}
```

```
// consider the side effects only in the file "./src/utils/fn.ts", not "./src/utils/secondFn.ts" although it is imported in that file
// side effect 1 ✅
// side effect 2 ✅
// side effect 3 ❌
// side effect 4 ❌
{
  "sideEffects": ["./src/utils/fn.ts"],
}
```
