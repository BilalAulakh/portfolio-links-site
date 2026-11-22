import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page" style={{ textAlign: "center", paddingTop: 120 }}>
      <h1>404</h1>
      <p className="bio">
        <Link href="/">Back to links</Link>
      </p>
    </main>
  );
}
