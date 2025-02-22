import React from 'react';
import image from '../assets/images/Imagotipo.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './ListCategories';
import LastProduct from './LastProduct';
import ContentRowMovies from './ContentRowMovies';
import ContentUsers from './ContentUsers';
import NotFound from './NotFound';
import {Link, Route, Routes} from 'react-router-dom';
import ContentProducts from './ContentProducts';

function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
            

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="http://localhost:3000/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Avalanna Muebles"/> 
                    </div>
                </a>
                

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Avalanna Muebles</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Registros</div>

                

                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Usuarios">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Usuarios</span></Link>
                </li>

                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Productos">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Productos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Routes>
                <Route path="/" element={ <ContentWrapper/>} />
               
                
                <Route path="/Usuarios" element={ <ContentUsers />}/>
                <Route path="/Productos" element={ <ContentProducts />}/>
                <Route component={NotFound} />
            </Routes>
            {/*<!-- End Microdesafio 2 -->*/}
        </>
    )
}
export default SideBar;