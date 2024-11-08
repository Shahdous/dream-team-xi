import bgShadow from '../../assets/bg-shadow.png'; // Import the background shadow image

const Subscribe = () => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-white text-center mt-10 py-14 px-8 rounded-2xl shadow-lg max-w-5xl mx-auto -mb-20  relative"
            style={{
                backgroundImage: `url(${bgShadow})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <h2 className="text-3xl font-semibold mb-2">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-6">Get the latest updates and news right in your inbox!</p>
            <div className="flex space-x-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="px-6 py-2 font-semibold text-black rounded-lg bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 shadow-md">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Subscribe;
