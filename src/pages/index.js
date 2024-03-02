'use client' // 👈 use it here
// And a Server Component shouldn't contain browser-specific things like click handlers or hooks such as useState. 
// If you need that, you should add "use client" at the top to tell Next.js to send the JavaScript needed for that component, 
// making it a Client Component
import styles from "./index.module.css";
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <main className={styles.main}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </main>
  )
}
