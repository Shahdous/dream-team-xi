import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const MainSection = ({ coins, setCoins }) => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [showAvailable, setShowAvailable] = useState(true);

    useEffect(() => {
        fetch('/Players.json')
            .then(response => response.json())
            .then(data => setPlayers(data))
            .catch(error => console.error('Error fetching players:', error));
    }, []);

    const handleChoosePlayer = (player) => {
        if (coins < player.price) {
            toast.error("Not enough coins to select this player!");
            return;
        }
        if (selectedPlayers.length >= 6) {
            toast.warn("You can only select up to 6 players.");
            return;
        }
        if (selectedPlayers.some(p => p.playerId === player.playerId)) {
            toast.warn("Player is already selected.");
            return;
        }

        setCoins(coins - player.price);
        setSelectedPlayers([...selectedPlayers, player]);
        toast.success(`${player.name} has been selected!`);
    };

    const handleRemovePlayer = (playerId) => {
        const playerToRemove = selectedPlayers.find(player => player.playerId === playerId);
        if (playerToRemove) {
            setCoins(coins + playerToRemove.price);
            setSelectedPlayers(selectedPlayers.filter(player => player.playerId !== playerId));
            toast.info(`${playerToRemove.name} has been removed.`);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4">
            {/* Toggle Buttons */}
            <div className="flex justify-end mb-4 space-x-2">
                <button
                    onClick={() => setShowAvailable(true)}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                        showAvailable ? 'bg-yellow-300' : 'bg-gray-200'
                    }`}
                >
                    Available
                </button>
                <button
                    onClick={() => setShowAvailable(false)}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                        !showAvailable ? 'bg-yellow-300' : 'bg-gray-200'
                    }`}
                >
                    Selected ({selectedPlayers.length} / 6)
                </button>
            </div>

            {/* Display Available or Selected Players */}
            {showAvailable ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {players.map((player) => (
                        <div key={player.playerId} className="border rounded-lg p-4 shadow-lg">
                            <img src={player.image} alt={player.name} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold">{player.name}</h3>
                            <p className="text-gray-600">{player.country}</p>
                            <p className="text-sm">{player.role}</p>
                            <p className="text-sm">Batting: {player.battingType}</p>
                            <p className="text-sm">Bowling: {player.bowlingType}</p>
                            <p className="text-lg font-bold">Price: ${player.price}</p>
                            <button
                                onClick={() => handleChoosePlayer(player)}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold"
                            >
                                Choose Player
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Selected Players ({selectedPlayers.length} / 6)</h2>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        {selectedPlayers.map((player) => (
                            <div key={player.playerId} className="border rounded-lg p-4 shadow-lg flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <img src={player.image} alt={player.name} className="w-16 h-16 object-cover rounded-md" />
                                    <div>
                                        <h3 className="text-xl font-semibold">{player.name}</h3>
                                        <p className="text-sm">{player.role}</p>
                                        <p className="text-lg font-bold">Price: ${player.price}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemovePlayer(player.playerId)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-start">
                        <button
                            onClick={() => setShowAvailable(true)}
                            className="px-6 py-3 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold rounded-lg"
                        >
                            Add More Players
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainSection;
