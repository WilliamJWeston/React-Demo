import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
            <h1>NavBar!</h1>
            <Link to="/"><button>Home Page</button></Link>
            <Link to="/Page1"><button>Page1</button></Link>
            <Link to="/Page2"><button>Page2</button></Link>
        </>
    )
}