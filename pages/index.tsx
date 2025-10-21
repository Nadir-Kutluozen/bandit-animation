// pages/index.tsx
import Header from "@/components/header/Header";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raccoon Street</title>
        <meta name="description" content="Zero-learning-curve SVG animation to React components." />
      </Head>
      <Header></Header>



      <header className="bg-custom-dark text-light py-5">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold lh-1 mb-3">Animate SVGs. <span className="text-secondary">No learning curve.</span></h1>
              <p className="lead text-secondary">
                Import or draw your mascot, pick preset states (idle, hover, click), and export a transparent SVG and a typed React component.
              </p>
              <div className="d-flex gap-3">
                <Link href="/editor" className="btn btn-primary btn-lg">Start Editor →</Link>
                <a href="#features" className="btn btn-outline-light btn-lg">Learn More</a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card shadow-lg bg-body rounded-4">
                <div className="card-header">Preview</div>
                <div className="card-body" style={{ minHeight: 240, background: "linear-gradient(180deg,#f8f9fa,#e9ecef)" }}>
                  <div className="h-100 d-flex align-items-center justify-content-center text-muted">
                    Timeline • Layers • Canvas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="features" className="py-5  p-3 bg-custom-dark ">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Draw or Import</h5>
                  <p className="card-text text-muted">Start from your SVG mascot or sketch simple shapes. Transparent by default.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Preset States</h5>
                  <p className="card-text text-muted">Idle (breathe/blink), Hover (wave), Click (bounce). No timelines to learn.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Export to React</h5>
                  <p className="card-text text-muted">Get a typed TSX component with <code>size</code>, <code>color</code>, <code>state</code>, and <code>onClick</code> props.</p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </section>
      <footer className="">
        <div className="container py-2 text-center ">
          <p className="text-light mb-0">Made with 🦝 by Raccoon Street.</p>
           <p className="text-center text-light ">© {new Date().getFullYear()} Raccoon Street</p>
        </div>
      </footer>
    </>
  );
}
