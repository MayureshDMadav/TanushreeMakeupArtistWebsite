import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        service: 'Bridal',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you shortly.');
        setFormData({ name: '', email: '', date: '', service: 'Bridal', message: '' });
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-white/95">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-primary drop-shadow-[3px_3px_0_rgba(0,0,0,1)] animate-bounce-slow">Get in Touch</h1>
                    <p className="text-xl font-body font-bold text-dark bg-white inline-block px-6 py-2 rounded-full border-2 border-black shadow-comic transform -rotate-1">Let's create something beautiful together 💌</p>
                </div>

                <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="w-full md:w-1/3 animate-fade-in-up delay-200">
                        <div className="bg-white p-8 border-4 border-black rounded-3xl shadow-comic h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary rounded-full -mr-12 -mt-12 z-0"></div>
                            <h3 className="text-3xl font-display font-bold mb-6 text-dark relative z-10">Contact Info</h3>
                            <div className="space-y-6 relative z-10">
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Email</p>
                                    <a href="mailto:hello@elenarossi.com" className="text-dark hover:text-accent font-body text-lg transition-colors">hello@elenarossi.com</a>
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Phone</p>
                                    <a href="tel:+1234567890" className="text-dark hover:text-accent font-body text-lg transition-colors">+1 (555) 123-4567</a>
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Studio</p>
                                    <p className="text-dark font-body text-lg">123 Fashion Ave, Suite 400<br />New York, NY 10001</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Social</p>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-dark hover:text-accent font-bold text-lg transition-colors">Instagram</a>
                                        <a href="#" className="text-dark hover:text-accent font-bold text-lg transition-colors">TikTok</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="w-full md:w-2/3 animate-fade-in-up delay-300">
                        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border-4 border-black rounded-3xl shadow-comic relative">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-dark mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-2 border-black rounded-xl p-3 focus:outline-none focus:shadow-comic transition-all font-body bg-secondary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-dark mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-2 border-black rounded-xl p-3 focus:outline-none focus:shadow-comic transition-all font-body bg-secondary"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-dark mb-2">Event Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full border-2 border-black rounded-xl p-3 focus:outline-none focus:shadow-comic transition-all font-body bg-secondary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-dark mb-2">Service Type</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full border-2 border-black rounded-xl p-3 focus:outline-none focus:shadow-comic transition-all font-body bg-secondary"
                                    >
                                        <option>Bridal</option>
                                        <option>Editorial</option>
                                        <option>Special Event</option>
                                        <option>Lesson</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-bold uppercase tracking-widest text-dark mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                    className="w-full border-2 border-black rounded-xl p-3 focus:outline-none focus:shadow-comic transition-all font-body bg-secondary"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-comic w-full text-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
