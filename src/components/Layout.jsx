import { Outlet, useLocation, useNavigate } from "react-router-dom"
import '../styles/Header.css'

function Layout() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <>
            <header className="header">
                {location.pathname !== '/menu/' &&
                    <button className="back-button" onClick={ ()=> navigate(-1)}>
                        Bakc
                        </button>
                }

                <div className="logo">logo</div>
                <div className="page-location">
                    {location.pathname}
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout