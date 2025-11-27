import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Import Static SVG",
            description: "Upload your static SVG files. We parse every path and group for you."
        },
        {
            number: "02",
            title: "Animate on Timeline",
            description: "Create frames, define states (Hover, Click), and orchestrate motion on a visual timeline."
        },
        {
            number: "03",
            title: "Export Component",
            description: "Get a production-ready React component with all styles and interactions built-in."
        }
    ];

    return (
        <section id="how-it-works" className="container py-5">
            <div className="text-center mb-5">
                <h2 className="display-4 mb-3">The Pipeline</h2>
                <p className="text-secondary">Stop writing animation code by hand.</p>
            </div>

            <div className="row g-4">
                {steps.map((step, index) => (
                    <div key={index} className="col-md-4">
                        <div className="p-4 h-100 rounded-4 border-glow position-relative"
                            style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(10px)' }}>
                            <div className="display-1 fw-bold position-absolute top-0 end-0 p-3 opacity-25"
                                style={{ color: 'var(--color-primary)', lineHeight: 0.8 }}>
                                {step.number}
                            </div>
                            <h3 className="h2 mb-3 mt-4">{step.title}</h3>
                            <p className="text-secondary mb-0">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
