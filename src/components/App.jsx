import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
  useLocation
} from 'react-router-dom';
import Burgers from './pages/Burgers';
import Pizzas from './pages/Pizzas';
import Menu from './pages/Menu';
import Drinks from './pages/Drinks';
import Layout from './Layout';



function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/burgers' element={<Burgers/>}/>
        <Route path='/pizzas' element={<Pizzas/>}/>
        <Route path='/drinks' element={<Drinks/>}/>
      </Route>
    )
  )

  return (

    <>

      
     <RouterProvider router={routes}/>
    </>

    
  );
}

export default App;