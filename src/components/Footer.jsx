import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t-4 border-black py-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-light rounded-full -ml-16 -mt-16 opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary rounded-full -mr-20 -mb-20 opacity-50"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left relative z-10">
                <div>
                    <h3 className="text-3xl font-display font-bold mb-4 text-primary drop-shadow-sm">Tanushree</h3>
                    <p className="text-dark font-body font-medium text-sm leading-relaxed">
                        Professional makeup artist specializing in bridal, editorial, and special events. ✨
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-display font-bold mb-4 text-dark">Quick Links</h4>
                    <ul className="space-y-2 text-sm font-body font-bold">
                        <li>
                            <Link to="/portfolio" className="text-dark hover:text-primary transition-colors inline-flex items-center gap-2">
                                📸 Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-dark hover:text-primary transition-colors inline-flex items-center gap-2">
                                💄 Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-dark hover:text-primary transition-colors inline-flex items-center gap-2">
                                💌 Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-display font-bold mb-4 text-dark">Connect</h4>
                    <div className="flex justify-center md:justify-start space-x-3">
                        <a href="https://www.instagram.com/tanushree_makeovers_20?igsh=aDNmMXphd2NmamFj" target="_blank" className="px-4 py-2 bg-primary text-white font-display font-bold text-sm rounded-full border-2 border-black shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all">
                            Instagram
                        </a>
                        {/* <a href="#" className="px-4 py-2 bg-accent text-white font-display font-bold text-sm rounded-full border-2 border-black shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all">
                            TikTok
                        </a> */}
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t-2 border-black text-center relative z-10">
                <p className="text-sm font-body font-bold text-dark">
                    &copy; {new Date().getFullYear()} Tanushree Makeover. Made with 💖
                </p>
            </div>
        </footer>
    );
};

export default Footer;
