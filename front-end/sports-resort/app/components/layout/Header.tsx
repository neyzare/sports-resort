import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <h1>header</h1>
            <Link to="/login">login</Link>
        </>
    )
}