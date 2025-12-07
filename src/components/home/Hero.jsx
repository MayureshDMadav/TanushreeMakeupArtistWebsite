import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import homePageImage from '../../../public/homePage.png';
import mobileHomePage from '../../../public/mobileHomePage.jpeg';


const Hero = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = [
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = homePageImage;
                }),
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = mobileHomePage;
                })
            ];

            try {
                await Promise.all(imagePromises);
                setImagesLoaded(true);
            } catch (error) {
                console.error('Error loading hero images:', error);
                setImagesLoaded(true); // Show content anyway
            }
        };

        loadImages();
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden pt-20">
            {/* Loading Overlay */}
            {!imagesLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/80 z-20">
                    <div className="makeup-loader">
                        <div className="lipstick-spinner"></div>
                    </div>
                </div>
            )}

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
                style={{ backgroundImage: `url(${mobileHomePage})` }}
            >
                <div className="absolute inset-0 bg-dark/30"></div>
            </div>
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
                style={{ backgroundImage: `url(${homePageImage})` }}
            >
                <div className="absolute inset-0 bg-dark/30"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 z-10">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 md:mb-6 tracking-wide animate-bounce-slow text-shadow-comic text-primary-light drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                    Enhancing Natural Beauty
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-body font-bold mb-6 md:mb-10 max-w-2xl bg-white/80 text-dark p-3 md:p-4 rounded-xl border-2 border-black shadow-comic transform -rotate-1">
                    Professional makeup artistry for weddings, editorials, and special occasions.
                </p>
                <Link
                    to="/contact"
                    className="btn-comic text-base md:text-lg"
                >
                    Book Appointment
                </Link>
            </div>
        </div>
    );
};

export default Hero;
