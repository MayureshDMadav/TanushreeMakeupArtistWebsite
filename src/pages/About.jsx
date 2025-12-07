import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 animate-fade-in-up">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 border-4 border-black translate-x-4 translate-y-4"></div>
                            <img
                                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop"
                                alt="Elena Rossi"
                                className="w-full h-[600px] object-cover relative z-10 rounded-3xl border-4 border-black"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 animate-fade-in-up delay-100">
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-primary drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">My Story</h1>
                        <p className="text-xl font-body font-medium text-dark mb-6 leading-relaxed bg-secondary p-6 rounded-2xl border-2 border-black shadow-comic">
                            Hello! I'm Elena, a professional makeup artist based in New York City. My journey began over a decade ago when I discovered the transformative power of makeup—not just to change how we look, but how we feel.
                        </p>
                        <p className="text-lg text-dark mb-6 leading-relaxed">
                            I trained at the prestigious Makeup Designory and have since worked with hundreds of brides, models, and private clients. My style is defined by a "less is more" approach, focusing on radiant skin and enhancing natural features rather than masking them.
                        </p>
                        <p className="text-lg text-dark mb-8 leading-relaxed">
                            When I'm not holding a brush, you can find me exploring art galleries, experimenting with new skincare formulations, or enjoying a good espresso.
                        </p>

                        <h3 className="text-3xl font-display font-bold mb-4 text-accent">My Philosophy 💖</h3>
                        <p className="text-lg text-dark mb-8 leading-relaxed italic border-l-4 border-primary pl-4">
                            I believe that beauty is personal. Every face tells a story, and my job is to help you tell yours with confidence and grace.
                        </p>

                        <Link
                            to="/contact"
                            className="btn-comic inline-block text-lg"
                        >
                            Work With Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
