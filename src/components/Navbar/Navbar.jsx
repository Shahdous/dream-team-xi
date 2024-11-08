import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import coinIcon from '../../assets/coin.png';

const Navbar = ({ coins }) => {
    return (
        <nav className="flex justify-between  items-center py-4 px-8 pt-10 max-w-7xl mx-auto">
            <div className="flex items-center">
                <img src={logo} alt="Cricket Logo" className="w-12 h-12 mr-4" />
                <h1 className="text-2xl font-bold">Cricket Team</h1>
            </div>
            <div className="flex space-x-8 text-gray-800">
                <a href="#home" className="text-lg font-medium hover:text-gray-600">Home</a>
                <a href="#fixture" className="text-lg font-medium hover:text-gray-600">Fixture</a>
                <a href="#teams" className="text-lg font-medium hover:text-gray-600">Teams</a>
                <a href="#schedules" className="text-lg font-medium hover:text-gray-600">Schedules</a>
                <div className="flex items-center border-2 border-gray-300 rounded-full px-4 py-1">
                    <span className="text-lg font-semibold mr-2">{coins} Coin</span>
                    <img src={coinIcon} alt="Coin Icon" className="w-6 h-6" />
                </div>
            </div>
            
        </nav>
    );
};

Navbar.propTypes = {
    coins: PropTypes.number.isRequired,
};

export default Navbar;
