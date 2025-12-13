import { useState } from 'react';
import LazyImage from '../components/LazyImage';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Bridal', 'Hairstyle', 'Occasion', 'Creative'];

    const bridalItems = Array.from({ length: 14 }, (_, i) => ({
        id: i + 1,
        category: 'Bridal',
        image: `/bridal/bridal_${i + 1}.webp`,
    }));

    const Occasion = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        category: 'Occasion',
        image: `/occasion/ocassion_${i + 1}.webp`,
    }));

    const hairStyle = Array.from({ length: 22 }, (_, i) => ({
        id: i + 1,
        category: 'Hairstyle',
        image: `/hairstyle/hairstyle_${i + 1}.webp`,
    }));

    const creaTive = Array.from({ length: 2 }, (_, i) => ({
        id: i + 1,
        category: 'Creative',
        image: `/creative/creative_${i + 1}.webp`,
    }));


    const portfolioItems = [
        ...bridalItems,
        ...Occasion,
        ...hairStyle,
        ...creaTive
    ];

    const filteredItems = filter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-white/95">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-primary drop-shadow-[3px_3px_0_rgba(0,0,0,1)] animate-bounce-slow">Portfolio</h1>
                    <p className="text-xl font-body font-bold text-dark bg-white inline-block px-6 py-2 rounded-full border-2 border-black shadow-comic transform rotate-1">A collection of my favorite looks 📸</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-200">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 text-sm font-display font-bold uppercase tracking-widest transition-all duration-300 border-2 border-black rounded-full shadow-comic hover:-translate-y-1 hover:shadow-comic-hover ${filter === cat
                                ? 'bg-primary text-white transform scale-105'
                                : 'bg-white text-dark hover:bg-secondary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-300">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="group relative overflow-hidden cursor-pointer border-4 border-black rounded-3xl shadow-comic hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 bg-white p-2">
                            <div className="relative overflow-hidden rounded-2xl">
                                <LazyImage
                                    src={item.image}
                                    alt={item.category}
                                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-display font-bold text-3xl tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,1)] transform -rotate-3 border-2 border-black px-4 py-2 rounded-xl bg-primary-light text-primary shadow-comic">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
