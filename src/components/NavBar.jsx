import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <br />
            <Link to="/AllPlayers">All Players</Link>
            <br />
            <Link to="/NewPlayerForm">New Player Form</Link>
            <br />
            <Link to="/SinglePlayer"> Single Player</Link>
        </nav>
    )
}