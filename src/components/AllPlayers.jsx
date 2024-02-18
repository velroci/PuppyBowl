import React, { useState, useEffect } from "react";
import { gettingPlayers, removePlayer } from "../API";
import { Link } from "react-router-dom";

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchPlayers() {
            const fetchedPlayers = await gettingPlayers();
            setPlayers(fetchedPlayers);
        }
        fetchPlayers();
    }, []);

    const handleDelete = async (playerId) => {
        try {
            await removePlayer(playerId);
            setPlayers(players.filter(player => player.id !== playerId));
        } catch (error) {
            console.error("Error deleting player:", error);
        }
    };

    return (
        <>
            {players.map(player => (
                <div key={player.id}>
                    <h2>{player.name}</h2>
                    {/* <img src=""/> */}
                    <p>Breed: {player.breed}</p>
                    <p>Status: {player.status}</p>
                    <p>Team ID: {player.teamId}</p>
                    <button
                        className="delete-button"
                        onClick={() => handleDelete(player.id)}
                    >
                        Delete
                    </button>
                    <Link to={`/players/${player.id}`}>
                        <button className="details-button">See Details</button>
                    </Link>
                </div>
            ))}
        </>
    );
}