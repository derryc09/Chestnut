import React from 'react';
import './Header.scss';
class Header extends React.Component{
    render(){
        return (
            <>
            <div className="header-padding">
                <div className="container">
                <p>中/En</p>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-t-md">
                <div className="container">
                    <a className="navbar-brand" href="#">Chestnut</a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="navbar-collapse collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Recipe <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Videos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            </>
        );
    }
}
export default Header;