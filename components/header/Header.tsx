"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function Navbar() {
  const pathname = usePathname();

  // Enable Bootstrap JS (for toggler on mobile)
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar bg-custom-dark navbar-expand-lg navbar-dark  border-bottom sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* --- Left: Logo --- */}
        <Link className="navbar-brand fw-semibold" href="/">
          <img src="/raccoon_street_logo.svg" alt="Raccoon Street Logo" style={{ height: "55px" }} />
        </Link>

        {/* --- Middle: Nav Links --- */}
        <div className="d-none d-lg-block">
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link fw-semibold${
                  pathname === "/" ? " active text-grey" : ""
                }`}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/about"
                className={`nav-link fw-semibold${
                  pathname === "/about" ? " active text-grey" : ""
                }`}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <a
                href="https://github.com/Nadir-Kutluozen/raccoon-street"
                target="_blank"
                rel="noreferrer"
                className="nav-link fw-semibold"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* --- Right: Get Started Button --- */}
        <div>
          <Link href="/get-started" className="btn btn-outline-light fw-semibold">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
