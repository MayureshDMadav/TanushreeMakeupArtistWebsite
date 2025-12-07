import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            {/* Decorative Backgrounds */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
                <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdd403ccc?q=80&w=2070&auto=format&fit=crop"
                    alt="Background Decoration"
                    className="absolute top-0 right-0 w-[500px] h-auto object-contain mix-blend-multiply transform rotate-12 translate-x-1/4 -translate-y-1/4"
                />
                <img
                    src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop"
                    alt="Background Decoration"
                    className="absolute bottom-0 left-0 w-[600px] h-auto object-contain mix-blend-multiply transform -rotate-12 -translate-x-1/4 translate-y-1/4"
                />
                {/* Generated Cartoon Asset */}
                <img
                    src="/cartoon_makeup_kit.png"
                    alt="Cartoon Makeup Kit"
                    className="absolute top-1/2 right-0 w-[300px] h-auto object-contain transform -translate-y-1/2 translate-x-1/4 opacity-20 rotate-12"
                />
            </div>

            <Navbar />
            <main className="flex-grow z-10 relative">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
