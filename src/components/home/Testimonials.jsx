const Testimonials = () => {
    // Placeholder for testimonials data, as it's used in the new code but not provided in the original or instruction.
    // In a real application, this data would likely come from a prop, a state, or an external source.
    const testimonials = [
        {
            id: 1,
            text: "Elena was absolutely amazing! She made me feel so beautiful on my wedding day. The makeup lasted all night and looked perfect in photos. I couldn't have asked for a better experience.",
            name: "Sarah Jenkins",
            role: "Bride"
        },
        {
            id: 2,
            text: "I've never felt so confident! Elena's artistic touch transformed my look for the photoshoot. She's a true professional with a fantastic eye for detail.",
            name: "Jessica Lee",
            role: "Model"
        },
        {
            id: 3,
            text: "Booking Elena for our corporate event was the best decision. Her team was efficient, friendly, and everyone looked stunning. Highly recommend!",
            name: "Mark Davis",
            role: "Event Organizer"
        }
    ];

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
                        <div key={testimonial.id} className="bg-white p-8 border-4 border-black rounded-3xl shadow-comic hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 relative">
                            <div className="text-primary text-6xl font-display absolute -top-6 -left-2 transform -rotate-12 drop-shadow-sm">"</div>
                            <p className="text-dark font-body text-lg italic mb-6 leading-relaxed relative z-10">
                                {testimonial.text}
                            </p>
                            <div className="flex items-center">
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
