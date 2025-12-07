import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <section className="py-20 md:py-32 bg-white/95 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 text-6xl opacity-10 animate-bounce-slow">💄</div>
            <div className="absolute bottom-10 left-10 text-6xl opacity-10 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>✨</div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary rounded-3xl transform -rotate-3 border-4 border-black translate-x-4 translate-y-4"></div>
                            <img
                                src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2053&auto=format&fit=crop"
                                alt="Makeup Artist"
                                className="w-full h-[500px] object-cover rounded-3xl border-4 border-black shadow-comic relative z-10"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                            Meet Tanushree 👋
                        </h2>
                        <p className="text-dark font-body font-medium text-lg mb-6 leading-relaxed bg-secondary p-4 rounded-2xl border-2 border-black">
                            With many years of experience in the beauty industry, I specialize in creating timeless, elegant looks that highlight your unique features. My philosophy is simple: makeup should empower you, not mask you. ✨
                        </p>
                        <p className="text-dark font-body text-lg mb-8 leading-relaxed">
                            Whether it's your wedding day or a high-fashion editorial shoot, I bring passion, precision, and a calming presence to every appointment.
                        </p>
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-display font-bold uppercase tracking-wide border-2 border-black rounded-full shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all duration-200"
                        >
                            Read More About Me
                            <span>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
