import { useEffect, useState } from "react";

const Testimonials = () => {
    const SHEET_ID = import.meta.env.VITE_SPREED_SHEET_ID;
    const SHEET_NAME = import.meta.env.VITE_SPREED_SHEET_NAME;
    const [testimonials, setTestimonials] = useState([]);

    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.text())
            .then(text => {
                const json = JSON.parse(text.substring(47).slice(0, -2));
                const rows = json.table.rows.map(row =>
                    row.c.map(cell => cell?.v)
                );
                const testimonials = rows.map((row, i) => ({
                    id: i + 1,
                    text: row[2],
                    name: row[5],
                    role: row[3]?.split(",")[0]
                }));
                setTestimonials(testimonials);
            });
    }, []);

    // Helper function to truncate text to a specific length
    const truncateText = (text, maxLength = 200) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    };

    return (
        <section className="py-20 bg-white/95 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce-slow">💖</div>
            <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}>✨</div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Kind Words</h2>
                    <p className="text-xl font-body font-bold text-dark bg-white inline-block px-6 py-2 rounded-full border-2 border-black shadow-comic transform rotate-1">Love notes from happy clients 💌</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-8 border-4 border-black rounded-3xl shadow-comic hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 relative flex flex-col min-h-[280px]">
                            <div className="text-primary text-6xl font-display absolute -top-6 -left-2 transform -rotate-12 drop-shadow-sm">"</div>
                            <p className="text-dark font-body text-lg italic mb-6 leading-relaxed relative z-10 flex-grow">
                                {truncateText(testimonial.text, 200)}
                            </p>
                            <div className="flex items-center mt-auto">
                                <div className="w-12 h-12 bg-primary-light rounded-full border-2 border-black mr-4 flex items-center justify-center text-xl">
                                    👩
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-dark text-lg">{testimonial.name}</h4>
                                    <p className="text-accent font-body text-sm font-bold uppercase tracking-wide">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
