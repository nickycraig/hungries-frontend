import { Link } from 'react-router-dom';

function Header () {
    return(
        <>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <Link to='/'>
                    <h2 className='text-2xl'>Home</h2>
                </Link>
                <h1 className='text-4xl'>Hungry Guys Recipe File</h1>
                <Link to='/recipes'>
                    <h2 className='text-2xl'>Recipes</h2>
                </Link>
            </nav>
        </>
    )
}

export default Header;