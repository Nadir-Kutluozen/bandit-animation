import Link from "next/link";

export default function Editor() {
  return (
    <main className="">
      <h1>Editor</h1>
      <h2 className="">Editor Coming soon 🦝</h2>
      <p>Build your mascot animation here.</p>
      <Link href="/editor/action">Go to Action page →</Link>
    </main>
  );
}