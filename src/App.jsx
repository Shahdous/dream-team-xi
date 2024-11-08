import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import MainSection from './components/MainSection/MainSection';

const App = () => {
    const [coins, setCoins] = useState(0);

    const increaseCoins = () => {
        setCoins(coins + 1000000);
        toast.success("Credit Added to your Account");
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <ToastContainer position="top-center" autoClose={3000} />
            <Navbar coins={coins} />
            <main className="max-w-7xl mx-auto px-4">
                <Banner increaseCoins={increaseCoins} />
                {/* Pass coins and setCoins as props */}
                <MainSection coins={coins} setCoins={setCoins} />
                <Subscribe />
            </main>
            <Footer />
        </div>
    );
};

export default App;
