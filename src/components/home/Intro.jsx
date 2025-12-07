import { Link } from 'react-router-dom';
import Bayko from '../../../public/bayko.jpeg';
import LazyImage from '../LazyImage';

const Intro = () => {
    return (
        <section className="py-20 bg-secondary/30 border-t-4 border-b-4 border-black shadow-comic">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 animate-fade-in-up delay-100">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary rounded-3xl transform -rotate-3 border-4 border-black translate-x-4 translate-y-4"></div>
                            <LazyImage
                                src={Bayko}
                                alt="Makeup Artist"
                                className="w-full h-auto object-cover rounded-3xl border-4 border-black shadow-comic relative z-10"
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
                        <p className="text-dark font-body font-medium text-lg mb-6 leading-relaxed bg-secondary p-4 rounded-2xl border-2 border-black">
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
