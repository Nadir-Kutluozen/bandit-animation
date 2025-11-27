import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Universal Support",
            description: "Works seamlessly with Rive, Lottie (Adobe AE), and SVGator exports."
        },
        {
            title: "TypeScript Ready",
            description: "Generated components come with full TypeScript definitions for props and state."
        },
        {
            title: "Zero Runtime Overhead",
            description: "Optimized code that doesn't bloat your bundle size."
        },
        {
            title: "Interactive Controls",
            description: "Map animation triggers and inputs to React props automatically."
        }
    ];

    return (
        <section id="features" className="container py-5">
            <div className="mb-5">
                <h2 className="display-4 mb-3">Features</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <p className="text-secondary lead">Everything you need to bridge the gap between motion design and frontend development.</p>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                {features.map((feature, index) => (
                    <div key={index} className="col-md-6">
                        <div className="p-5 rounded-4 border-glow h-100 d-flex flex-column justify-content-center"
                            style={{ background: 'linear-gradient(145deg, rgba(11,11,18,0.9) 0%, rgba(20,20,30,0.9) 100%)' }}>
                            <h3 className="h2 mb-3 text-gradient">{feature.title}</h3>
                            <p className="text-secondary mb-0 fs-5">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
