import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top py-3">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between w-100 p-1 rounded-5 border-glow"
                    style={{ background: 'rgba(24, 17, 29, 0.42)', backdropFilter: 'blur(8px)', border: '1px solid rgba(168, 85, 247, 0.2)' }}>

                    {/* Logo - Text Fallback since SVG is lost */}
                    <Link href="/" className="navbar-brand fw-bold text-white d-flex align-items-center gap-2">
                        <img src="/raccoon_street_logo.svg" alt="" className="img-fluid" width={30} height={30} />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="d-none d-md-flex align-items-center gap-4">
                        <Link href="#features" className="nav-link text-secondary text-decoration-none small fw-medium">Features</Link>
                        <Link href="#how-it-works" className="nav-link text-secondary text-decoration-none small fw-medium">How it works</Link>
                        <Link href="#pricing" className="nav-link text-secondary text-decoration-none small fw-medium">Pricing</Link>
                    </div>

                    {/* CTA */}
                    <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-primary rounded-4 px-4 fw-bold">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
