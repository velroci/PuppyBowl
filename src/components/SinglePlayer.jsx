import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSinglePlayer } from "../API";

export default function SinglePlayer() {
    const [player, setPlayer] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function fetchPlayer() {
            try {
                const fetchedPlayer = await getSinglePlayer(id);
                setPlayer(fetchedPlayer);
            } catch (error) {
                console.error("Error fetching player details:", error);
            }
        }
        fetchPlayer();
    }, [id]);

    return (
        <>
            <h2>Name: {player.name}</h2>
            <p>ID: {player.id}</p>
            <p>Breed: {player.breed}</p>
            {/* <p>Url: {player.imageUrl}</p> */}
            <p>Status: {player.status}</p>
            <p>Team ID: {player.teamId}</p>
            <p>Created: {player.createdAt}</p>
            <p>Last Update: {player.updatedAt}</p>
            <p>Cohort ID: {player.cohortId}</p>
        </>
    );
}