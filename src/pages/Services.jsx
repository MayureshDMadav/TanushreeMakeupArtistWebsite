import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            title: 'Bridal Makeup',
            price: 'Starting at $250',
            description: 'Includes consultation, trial run, and wedding day application. Lashes included.',
            features: ['90-minute trial', 'Premium skin prep', 'Long-wear application', 'Touch-up kit'],
        },
        {
            title: 'Special Event',
            price: '$150',
            description: 'Perfect for proms, galas, photoshoots, or any special occasion where you want to look your best.',
            features: ['60-minute application', 'Lashes included', 'Customized look', 'Setting spray'],
        },
        {
            title: 'Makeup Lesson',
            price: '$200',
            description: 'A 2-hour one-on-one session to learn techniques tailored to your features and lifestyle.',
            features: ['Product review', 'Step-by-step guidance', 'Face chart', 'Product recommendations'],
        },
    ];

    const faqs = [
        {
            question: 'Do you travel to the venue?',
            answer: 'Yes, I am available for on-site services. Travel fees may apply depending on the location.',
        },
        {
            question: 'How do I secure my wedding date?',
            answer: 'A signed contract and a 50% non-refundable retainer are required to reserve your date.',
        },
        {
            question: 'What brands do you use?',
            answer: 'I use a curated kit of high-end professional products including NARS, Charlotte Tilbury, MAC, and Dior.',
        },
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-white/95">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-primary drop-shadow-[3px_3px_0_rgba(0,0,0,1)] animate-bounce-slow">Services & Pricing</h1>
                    <p className="text-xl font-body font-bold text-dark bg-white inline-block px-6 py-2 rounded-full border-2 border-black shadow-comic transform rotate-2">Invest in yourself 💖</p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 border-4 border-black rounded-3xl shadow-comic hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary-light rounded-bl-full -mr-8 -mt-8 z-0"></div>
                            <h3 className="text-2xl font-display font-bold mb-2 text-dark relative z-10">{service.title}</h3>
                            <p className="text-accent font-display font-bold text-2xl mb-4 relative z-10">{service.price}</p>
                            <p className="text-dark font-body mb-6 text-sm leading-relaxed relative z-10">{service.description}</p>
                            <ul className="space-y-3 mb-8 relative z-10">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm font-bold text-dark">
                                        <span className="w-2 h-2 bg-primary rounded-full border border-black mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/contact"
                                className="btn-comic w-full block text-center text-sm"
                            >
                                Book Now
                            </Link>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto animate-fade-in-up delay-300">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-dark drop-shadow-sm">Frequently Asked Questions 🤔</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 border-2 border-black rounded-2xl shadow-comic hover:shadow-comic-hover transition-all duration-300">
                                <h3 className="text-xl font-display font-bold mb-2 text-primary">{faq.question}</h3>
                                <p className="text-dark font-body leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
