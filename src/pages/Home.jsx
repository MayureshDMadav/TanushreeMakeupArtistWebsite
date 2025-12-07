import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import FeaturedWork from '../components/home/FeaturedWork';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
    return (
        <div className="animate-fade-in">
            <Hero />
            <Intro />
            <FeaturedWork />
            <Testimonials />
        </div>
    );
};

export default Home;
