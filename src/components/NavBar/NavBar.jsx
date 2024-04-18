import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <link to='/'>
            <h3>Taconeras</h3>
            </link>

            <div className='Categories'> 
                <NavLink to={`/category/bota`} className={({isActive}) => isActive ? 'ActiveOption' : Option}>Bota</NavLink>
                <NavLink to={`/category/zapato`} className={({isActive}) => isActive ? 'ActiveOption' : Option}>Zapato</NavLink>
                <NavLink to={`/category/plataforma`} className={({isActive}) => isActive ? 'ActiveOption' : Option}>Plataforma</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar