import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Wishlist = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('wishlistCount');
        if (storedCount) {
            setCount(parseInt(storedCount));
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCount(count + 1);
        localStorage.setItem('wishlistCount', count.toString());
    };

    return (
        <div className="w-100" style={{ maxWidth: '450px' }}>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email" className="form-control" />
                <button type="submit">Join</button>
            </form>

            <p>Count: {count}</p>



        </div>
    );
};

export default Wishlist;
