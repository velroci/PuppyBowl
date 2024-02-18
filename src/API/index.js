const cohortName = '2308-ACC-PT-WEB-PT-B';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export async function gettingPlayers() {
    try {
        const response = await fetch(`${APIURL}/players`)
        const playerData = await response.json()
        return (
            playerData.data.players
        )
    } catch (error) {
        console.log(error)
    }
}

export async function getSinglePlayer(playerId) {
    try {
        const resp = await fetch(`${APIURL}/players/${playerId}`)
        const singlePlayer = await resp.json()
        return(
            singlePlayer
        )
    } catch (error) {
        console.log(error)
    }
}

export async function addNewPlayer(playerObj) {
    try {
        const res = await fetch(APIURL + "/players", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(playerObj),
                
        });
        const updatedPlayers = await res.json();
        return(
            updatedPlayers
            );
    } catch (error) {
        console.log(error);
    }
};

export async function removePlayer(playerId) {
    try {
        const respo = await fetch(APIURL + "/players/" + playerId, {
            method: "DELETE",
        });
        const deletePlayers = await respo.json();
        return(
            deletePlayers
            );
    } catch (error) {
        console.log(error);
    }
}