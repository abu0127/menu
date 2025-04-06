
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import '../styles/Header.css'

function Layout() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <>
            <header className="header">
                {location.pathname !== '/menu/' &&
                    <button className="back-button" onClick={() => navigate(-1)}>
                      <i class="fa-solid fa-arrow-left-long"></i>
                    </button>
                }
{       location.pathname == '/menu/' &&       <div className="logo">logo</div>}


                <div className="page-location">
                    {    
                       location.pathname !== '/menu/' &&
                         <h1 className='navigation'>{location.pathname}</h1>
                    }
                   
        
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout