import { Link, useLocation } from "react-router-dom"

const MenuLink = ({children, to}) => {
    const localizacao = useLocation();

    return (
        <Link className='link' to={to} style={{textDecoration: localizacao.pathname === to ? 'underline' : ''}}> 
            {children}
        </Link>
    )
}

export default MenuLink