// ================================================================
// && operator (Logical AND)
// ================================================================
// RULE: Left falsy hai → left value dikhayega. Left truthy hai → right value dikhayega.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//      true      && "Hello"   // "Hello"
//      false     && "Hello"   // false
//      0         && "Hello"   // 0
//      -0        && "Hello"   // -0
//      ''        && "Hello"   // ''
//      null      && "Hello"   // null
//      undefined && "Hello"   // undefined
//      NaN       && "Hello"   // NaN
//      1         && "Hello"   // "Hello"
//      -1        && "Hello"   // "Hello"
//      'hi'      && "Hello"   // "Hello"
//      '0'       && "Hello"   // "Hello"
//      'false'   && "Hello"   // "Hello"
//      []        && "Hello"   // "Hello"
//      {}        && "Hello"   // "Hello"
// ================================================================

// ================================================================
// || operator (Logical OR)
// ================================================================
// RULE: Left truthy hai → left value dikhayega. Left falsy hai → right value dikhayega.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//      true      || "Hello"   // true
//      false     || "Hello"   // "Hello"
//      0         || "Hello"   // "Hello"
//      -0        || "Hello"   // "Hello"
//      ''        || "Hello"   // "Hello"
//      null      || "Hello"   // "Hello"
//      undefined || "Hello"   // "Hello"
//      NaN       || "Hello"   // "Hello"
//      1         || "Hello"   // 1
//      -1        || "Hello"   // -1
//      'hi'      || "Hello"   // 'hi'
//      '0'       || "Hello"   // '0'
//      'false'   || "Hello"   // 'false'
//      []        || "Hello"   // []
//      {}        || "Hello"   // {}
// ================================================================

// ================================================================
// ?? operator (Nullish Coalescing)
// ================================================================
// RULE: Left null/undefined hai → right value dikhayega. Baaki sab → left value dikhayega.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//      true      ?? "Hello"   // true
//      false     ?? "Hello"   // false
//      0         ?? "Hello"   // 0
//      -0        ?? "Hello"   // -0
//      ''        ?? "Hello"   // ''
//      null      ?? "Hello"   // "Hello"
//      undefined ?? "Hello"   // "Hello"
//      NaN       ?? "Hello"   // NaN
//      1         ?? "Hello"   // 1
//      -1        ?? "Hello"   // -1
//      'hi'      ?? "Hello"   // 'hi'
//      '0'       ?? "Hello"   // '0'
//      'false'   ?? "Hello"   // 'false'
//      []        ?? "Hello"   // []
//      {}        ?? "Hello"   // {}
// ================================================================

// && → Agar left side falsy hai toh left return karta hai, warna right return karta hai.
// || → Agar left side truthy hai toh left return karta hai, warna right return karta hai.
// ?? → Agar left side null ya undefined hai toh right return karta hai, warna left return karta hai.

//  ========================================
//  KAB KYA USE KAREIN
//  ========================================

//  Render ya kuch nahi        →  &&   →  Jab condition true ho tabhi UI dikhana ho, warna kuch na dikhe.
//  Fallback (string)           →  ||   →  Jab string empty ya missing ho tab default text dikhana ho.
//  Fallback (0 valid)          →  ??   →  Jab 0 bhi valid value ho aur sirf null/undefined pe default chahiye.
//  Boolean setting (false)     →  ??   →  Jab false bhi valid ho aur sirf missing pe default chahiye.
//  Number input                →  ??   →  Jab number field mein 0 valid ho aur empty pe default chahiye.
//  Form fields                 →  ??   →  Jab empty string valid ho aur sirf null/undefined pe default chahiye.
//  Safe access (nested data)   →  ?.   →  Jab object ya nested property missing ho sakti ho, crash se bachne ke liye.
//  Do options dikhane hain     →  ? :  →  Jab condition ke hisaab se do alag UI ya values mein se ek dikhana ho.

import { useState } from "react";

function ShortCircuit() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [count, setCount] = useState<number | null>(null);

  return (
    <div>
      <h2>1. && (AND)</h2>

      {isLoggedIn && <p>Welcome dikhega</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>

      <hr />

      <h2>2. || (OR)</h2>
      <p>Name: {name || "Guest"}</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type name"
      />

      <hr />

      <h2>3. ?? (NULLISH)</h2>
      <p>Count: {count ?? 0}</p>

      <button onClick={() => setCount(0)}>Set 0</button>
      <button onClick={() => setCount(5)} style={{ marginLeft: "8px" }}>
        Set 5
      </button>
      <button onClick={() => setCount(null)} style={{ marginLeft: "8px" }}>
        Set Null
      </button>

      <hr />
    </div>
  );
}

export default ShortCircuit;
