import { useState, useEffect } from "react"
import { addNewPlayer } from "../API"

export default function NewPlayer() {

    const [playerInfo, setPlayerInfo] = useState({
        name: "",
        breed: "",
        status: "field",
        imageUrl: "",
        teamId: ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPlayerInfo({
            ...playerInfo,
            [name]: value
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newPlayer = await addNewPlayer(playerInfo);
            console.log("New Player Added:", newPlayer);
        } catch (error) {
            console.error("Error adding new player:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={playerInfo.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Breed
            <input
              type="text"
              name="breed"
              value={playerInfo.breed}
              onChange={handleChange}
            />
          </label>
          <label>
            Status
            <select
              name="status"
              value={playerInfo.status}
              onChange={handleChange}
            >
              <option value="field">field</option>
              <option value="bench">bench</option>
            </select>
          </label>
          <label>
            Url
            <input
              type="text"
              name="imageUrl"
              value={playerInfo.imageUrl}
              onChange={handleChange}
            />
          </label>
          <label>
            Team ID
            <input
              type="number"
              name="teamId"
              value={playerInfo.teamId}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Player</button>
        </form>
      );
}

// const renderNewPlayerForm = () => {
//     try {
//         const newPlayerFormContainer = document.getElementById('new-player-form');
        
//         //Listener for addNewPlayer function and new player submit button
//         newPlayerFormContainer.addEventListener('submit', async (event) => {
//             event.preventDefault();

//             const playerObj = {
//                 name: newPlayerFormContainer.name.value,
//                 breed: newPlayerFormContainer.breed.value, 
//                 status: newPlayerFormContainer.status.value,
//                 imageUrl: newPlayerFormContainer.imageUrl.value,
//                 teamId: newPlayerFormContainer.teamId.value,
//             };

//             await addNewPlayer(playerObj);
//             console.log(newPlayerFormContainer);

//             //Clears the form after submission
//             newPlayerFormContainer.reset();
//         });

//     } catch (err) {
//         console.error('Uh oh, trouble rendering the new player form!', err);
//     }
// };