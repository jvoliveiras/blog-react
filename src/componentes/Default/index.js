import { Outlet } from 'react-router-dom'
import Banner from '../Banner'

const Default = ({children}) => {
    return (
        <main>
            <Banner />

            <Outlet />
            {children}
        </main>
    )
}

export default Default