import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import swal from "sweetalert";
import axios from "axios";


const Navbar = () => {
    const history = useHistory();
    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then((res) => {
            if (res.data.status === 200) {
                localStorage.removeItem("auth_token");
                localStorage.removeItem("auth_name");
                swal("Success", res.data.message, "success");
                history.push("/");
            }
        });
    };

    const [isNavOpen, setIsNavOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600 && isNavOpen) {
                setIsNavOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isNavOpen]);


    return (
        <nav className="sb-topnav navbar navbar-expand navbar-white bg-white">
            <Link className="navbar-brand ps-3" to="/admin">Coffee House</Link>

            {/* <a id="menu_toggle"><i class="fa fa-bars"></i></a> */}

            <button onClick={() => setIsNavOpen(!isNavOpen)} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" ><i className="fas fa-bars"></i></button>

            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-outline-success my-2 my-sm-0" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>


            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user fa-fw"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        {/* <li><Link className="dropdown-item" to="#!">Settings</Link></li> */}
                        <li><Link className="dropdown-item" to="#!">Activity Log</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li onClick={logoutSubmit}><Link className="dropdown-item" >Logout</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );

}

export default Navbar;