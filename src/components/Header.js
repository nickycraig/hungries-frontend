import { Link } from 'react-router-dom';

function Header () {
    return(
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/recipes'>Recipes</Link>
            </nav>
            <h1>Hungry Guys Recipe File</h1>
        </>
    )
}

export default Header;