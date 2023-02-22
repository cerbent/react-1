import React from 'react';
import logo from "../image/Rectangle.png"
const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={logo} alt=""/>
                    <div className="nav">
                        <a href="#">Home</a>
                        <a href="#">Recipes</a>
                        <a href="#">Meat</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Support</a>
                    </div>
                    <div className="btn">
                        <button>Sign in</button>
                        <button>Request demo</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Header;