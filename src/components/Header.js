import { Link } from 'react-router-dom';

function Header () {
    return(
        <>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <Link to='/'>Home</Link>
            <h1 className='text-4xl'>Hungry Guys Recipe File</h1>
                <Link to='/recipes'>Recipes</Link>
            </nav>
        </>
    )
}

export default Header;