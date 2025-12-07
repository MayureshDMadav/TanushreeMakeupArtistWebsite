import { Link } from 'react-router-dom';
import homePageImage from '../../../public/homePage.png';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden pt-20">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${homePageImage})` }}
            >
                <div className="absolute inset-0 bg-dark/30"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 z-10">
                <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-wide animate-bounce-slow text-shadow-comic text-primary-light drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                    Enhancing Natural Beauty
                </h1>
                <p className="text-xl md:text-2xl font-body font-bold mb-10 max-w-2xl bg-white/80 text-dark p-4 rounded-xl border-2 border-black shadow-comic transform -rotate-1">
                    Professional makeup artistry for weddings, editorials, and special occasions.
                </p>
                <Link
                    to="/contact"
                    className="btn-comic text-lg"
                >
                    Book Appointment
                </Link>
            </div>
        </div>
    );
};

export default Hero;
