import './navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="dropdown barware">
                    <a href="#" className="dropbtn">BARWARE</a>
                    <div className="dropdown-image">
                        <img src="barware-image.jpg" alt="Barware" />
                    </div>
                </li>
                <li className="dropdown dinnerware">
                    <a href="#" className="dropbtn">DINNERWARE</a>
                    <div className="dropdown-image">
                        <img src="dinnerware-image.jpg" alt="Dinnerware" />
                    </div>
                </li>
                <li className="dropdown gifting">
                    <a href="#" className="dropbtn">GIFTING</a>
                    <div className="dropdown-image">
                        <img src="gifting-image.jpg" alt="Gifting" />
                    </div>
                </li>
                <li className="dropdown deals">
                    <a href="#" className="dropbtn">DEALS</a>
                    <div className="dropdown-image">
                        <img src="deals-image.jpg" alt="Deals" />
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;