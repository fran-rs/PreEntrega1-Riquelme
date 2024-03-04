import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>Taconeras</h3>
            <div>
                <button>Tacones</button>
                <button>Botas/Botines</button>
                <button>Sandalias</button>
                <button>Zapatos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar