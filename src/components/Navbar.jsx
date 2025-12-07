import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/', emoji: '🏠' },
        { name: 'Portfolio', path: '/portfolio', emoji: '📸' },
        { name: 'Services', path: '/services', emoji: '💄' },
        { name: 'About', path: '/about', emoji: '✨' },
        { name: 'Contact', path: '/contact', emoji: '💌' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-sm border-b-4 border-black shadow-comic py-3'
                    : 'bg-white/80 backdrop-blur-sm border-b-2 border-black py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-3xl md:text-4xl font-display font-bold tracking-wider text-primary drop-shadow-[2px_2px_0_rgba(0,0,0,1)] hover:scale-110 hover:rotate-2 transition-all duration-200"
                >
                    ELENA ROSSI ✨
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-4 py-2 font-display font-bold text-sm uppercase tracking-wide transition-all duration-200 rounded-full border-2 hover:-translate-y-1 ${location.pathname === link.path
                                    ? 'bg-primary text-white border-black shadow-comic'
                                    : 'bg-secondary text-dark border-black hover:bg-primary-light hover:shadow-comic'
                                }`}
                        >
                            <span className="mr-1">{link.emoji}</span>
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden bg-primary text-white p-3 rounded-full border-2 border-black shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-black shadow-comic py-6 flex flex-col items-center space-y-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-6 py-3 font-display font-bold text-sm uppercase tracking-wide transition-all duration-200 rounded-full border-2 w-48 text-center ${location.pathname === link.path
                                    ? 'bg-primary text-white border-black shadow-comic'
                                    : 'bg-secondary text-dark border-black hover:bg-primary-light hover:shadow-comic'
                                }`}
                        >
                            <span className="mr-2">{link.emoji}</span>
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
