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
console.log("side effect 1");

window.addEventListener("scroll", () => {
  console.log("side effect 2");
});

export function hello() {
  console.log("hello");
}
```

---

`package.json`:

```
// means no side effects considered in build time
// side effect 1 ❌
// side effect 2 ❌
{
  "sideEffects": false,
}
```

```
// default behaviour
// side effect 1 ✅
// side effect 2 ✅
{
  "sideEffects": true,
}
```

```
// consider the side effects in the file "./src/utils/fn.ts"
// side effect 1 ✅
// side effect 2 ✅
{
  "sideEffects": ["./src/utils/fn.ts"],
}
```
