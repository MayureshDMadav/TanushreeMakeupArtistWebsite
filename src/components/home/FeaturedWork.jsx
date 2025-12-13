import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';

const FeaturedWork = () => {
    const works = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop',
            category: 'Bridal',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',
            category: 'Creative',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=2070&auto=format&fit=crop',
            category: 'Occasion',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary drop-shadow-sm">Selected Works</h2>
                    <p className="text-xl font-body font-bold text-dark transform -rotate-2">A glimpse into my portfolio ✨</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {works.map((work) => (
                        <div key={work.id} className="group relative overflow-hidden cursor-pointer border-4 border-black rounded-2xl shadow-comic transition-all duration-300 hover:shadow-comic-hover hover:-translate-y-2">
                            <LazyImage
                                src={work.image}
                                alt={work.category}
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-display font-bold text-3xl tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,1)] transform rotate-3">
                                    {work.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/portfolio"
                        className="btn-comic inline-block"
                    >
                        View Full Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
