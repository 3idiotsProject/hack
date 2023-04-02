import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Home";
import "./index.css";
import React from "react";
import logo from "./assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import { Route, Switch, NavLink } from "react-router-dom";
import Schemes from "./components/Schemes";
import Contact from "./components/Contact";
import Weather from "./components/Weather";
import MSP from "./components/LatestMSP";

function App() {

    const navigation = [
        { name: "Home", href: "Home.js" },
        { name: "WorkEx", href: "WorkExperience.js" },
        { name: "Projects", href: "Projects.js" },
        { name: "Achievements", href: "Achievements.js" },
        { name: "Artwork", href: "Artwork.js" },
        { name: "Freelance", href: "Freelancework.js" },
    ];

    return (
        <>
                <nav style={{fontSize: '23px', zIndex:'10', backgroundColor:'#31612d'}}
                    className="navbar nav navbar-expand-lg navbar-dark"
                    variant="dark"
                >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={logo} style={{ width: "50px" }}></img>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item item item">
                                    <NavLink exact to="/" class="nav-link">
                                        Home
                                    </NavLink>
                                </li>
                                <li class="nav-item item">
                                    <NavLink
                                        exact
                                        to="/schemes"
                                        class="nav-link"
                                    >
                                        Schemes
                                    </NavLink>
                                </li>
                                <li class="nav-item item">
                                    <NavLink
                                        exact
                                        to="/MSP"
                                        class="nav-link"
                                    >
                                        Latest MSP
                                    </NavLink>
                                </li>
                                <li class="nav-item item">
                                    <NavLink
                                        exact
                                        to="/weather"
                                        class="nav-link"
                                    >
                                        Weather
                                    </NavLink>
                                </li>
                                <li class="nav-item item">
                                    <NavLink
                                        exact
                                        to="/contact"
                                        class="nav-link"
                                    >
                                        Contact us
                                    </NavLink>
                                </li>
                            </ul> 
                        </div>
                    </div>
                </nav>
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/weather" component={Weather} />
                <Route path="/msp" component={MSP} />
                <Route path="/schemes" component={Schemes} />
                <Route path="/" component={Banner} />
            </Switch>

            <footer class="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>
            <div class="container pt-4">
                <section class="mb-4 icons">
                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://twitter.com/AgriGoI"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-twitter"></i
                ></a>

                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.instagram.com/farmersgov/?hl=en"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-instagram"></i
                ></a>
                </section>
            </div>
            <div class="text-center text-light p-3 end" style={{backgroundColor: "#31612d", opacity:'80%'}}>
                © 2023 Copyright
            </div>
            </footer>
        </>
    );
}

export default App;
