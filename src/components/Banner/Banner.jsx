import PropTypes from 'prop-types';
import bannerMain from '../../assets/banner-main.png';
import bgShadow from '../../assets/bg-shadow.png'; // Importing the background image

const Banner = ({ increaseCoins }) => {
    return (
        <div 
            className="flex flex-col items-center justify-center text-center text-white bg-black py-20 px-8 rounded-2xl shadow-lg mt-8 max-w-7xl mx-auto"
            style={{
                backgroundImage: `url(${bgShadow})`,  // Setting the background image
                backgroundSize: 'cover',              // Ensures the image covers the entire area
                backgroundPosition: 'center',         // Centers the background image
                backgroundRepeat: 'no-repeat'         // Prevents the image from repeating
            }}
        >
            <img className="pb-5" src={bannerMain} alt="Cricket Banner" />
            <h2 className="text-5xl font-semibold mb-4 tracking-tight">Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className="text-2xl mb-8 text-gray-300 font-light">Beyond Boundaries Beyond Limits</p>
            <button
                onClick={increaseCoins}
                className="bg-[#E7FE29] hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full text-lg shadow-md border-2 border-black"
            >
                Claim Free Credit
            </button>
        </div>
    );
};

Banner.propTypes = {
    increaseCoins: PropTypes.func.isRequired,
};

export default Banner;
