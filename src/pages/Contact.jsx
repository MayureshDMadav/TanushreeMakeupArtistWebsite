import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_PUBLIC_API_SERVICE_ID;
        const templateId = import.meta.env.VITE_PUBLIC_API_TEMPLATE_ID;
        const secretKey = import.meta.env.VITE_PUBLIC_API_PUBLIC_KEY;
        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: secretKey,
            })
            .then(
                () => {
                    alert('Thank you for your message! I will get back to you shortly.');
                    setFormData({ user_name: '', user_email: '', message: '' });
                },
                (error) => {
                    alert('Submitted Failed Please try again tommorrow');
                },
            );

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
                                    <a href="mailto:tanushreemadav@gmail.com" className="text-dark hover:text-accent font-body text-lg transition-colors">tanushreemadav@gmail.com</a>
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Phone</p>
                                    <a href="tel:+919326272150" className="text-dark hover:text-accent font-body text-lg transition-colors">+91 9326272150</a>
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Studio</p>
                                    <p className="text-dark font-body text-lg">Thane 400605</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Social</p>
                                    <div className="flex space-x-4">
                                        <a href="https://www.instagram.com/tanushree_makeovers_20?igsh=aDNmMXphd2NmamFj" target="_blank" className="text-dark hover:text-accent font-bold text-lg transition-colors">Instagram</a>
                                        {/* <a href="#" className="text-dark hover:text-accent font-bold text-lg transition-colors">TikTok</a> */}
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
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-2 border-black rounded-xl p-3 focus:outline-none focus:shadow-comic transition-all font-body bg-secondary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-dark mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-2 border-black rounded-xl p-3 focus:outline-none focus:shadow-comic transition-all font-body bg-secondary"
                                    />
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
