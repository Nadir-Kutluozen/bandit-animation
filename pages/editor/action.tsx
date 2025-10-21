import { useRouter } from "next/router";

export default function Action() {
  const router = useRouter();
  return (
    <main style={{ padding: 24 }}>
      <h3>Editor → Action</h3>
      <p>This is /editor/action</p>
      <button onClick={() => router.push("/editor")}>Back to Editor</button>
    </main>
  );
}
