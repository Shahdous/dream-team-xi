import logoFooter from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1d] text-white py-12">
            <div className='flex justify-center py-20'>
                <img src={logoFooter} alt="" />
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                {/* About Us Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <p className="text-gray-400">
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </div>
                
                {/* Quick Links Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li><a href="#home" className="hover:text-gray-200">Home</a></li>
                        <li><a href="#services" className="hover:text-gray-200">Services</a></li>
                        <li><a href="#about" className="hover:text-gray-200">About</a></li>
                        <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
                    </ul>
                </div>

                {/* Subscribe Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
                    <p className="text-gray-400 mb-4">
                        Subscribe to our newsletter for the latest updates.
                    </p>
                    <div className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg text-gray-700 focus:outline-none"
                        />
                        <button className="px-4 py-2 font-semibold text-black rounded-lg bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 shadow-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
                <p>&copy; 2024 Your Company All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
