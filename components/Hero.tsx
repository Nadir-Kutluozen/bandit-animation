import React from 'react';
import Squares from './animations/Squares';
import { motion } from 'framer-motion';
import Wishlist from './Wishlist';

const Hero = () => {
    return (
        <section className="container-fluid min-vh-100 position-relative overflow-hidden d-flex align-items-center justify-content-center">
            {/* Background Animation Container */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                <Squares
                    direction="up"
                    speed={0.2}
                    borderColor="rgba(184, 4, 255, 0.15)"
                    hoverFillColor="rgba(169, 76, 255, 1)"
                    squareSize={40}
                />
                {/* Gradient Overlays for Depth */}
                <div className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, transparent 0%, var(--color-bg-dark) 90%)',
                        pointerEvents: 'none'
                    }}>
                </div>
            </div>

            <div className="container position-relative" style={{ zIndex: 1, marginTop: '60px' }}>
                <div className="row align-items-center justify-content-center text-center">
                    {/* Main Content */}
                    <div className="col-lg-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="display-1 mb-2 text-white fw-bold tracking-tight"
                                style={{
                                    fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                                    lineHeight: 1.1,
                                    fontFamily: 'jdCode, sans-serif'
                                }}>
                                BANDIT
                            </h1>
                            <h2 className="display-4 mb-5 text-gradient fw-bold"
                                style={{
                                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                                    fontFamily: 'jdCode, sans-serif',
                                    letterSpacing: '0.2em'
                                }}>
                                ANIMATION
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="h6 mb-5 text-secondary fw-light mx-auto"
                            style={{ maxWidth: '700px', lineHeight: '1.8' }}
                        >
                            The ultimate tool for converting static SVGs into production-ready animations.
                            <br className="d-none d-md-block" />
                            Simple, powerful, and built for developers.
                        </motion.p>

                        {/* Wishlist Integration */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="d-flex justify-content-center mb-5"
                        >
                            {/* <Wishlist /> */}
                        </motion.div>

                        {/* Feature Pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="d-flex flex-wrap justify-content-center gap-3"
                        >
                            {['Zero Runtime Overhead', 'Framework Agnostic', 'TypeScript Ready'].map((feature, i) => (
                                <div key={i}
                                    className="px-4 py-2 rounded-4 border-glow small text-muted"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    {feature}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
