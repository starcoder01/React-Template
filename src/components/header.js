const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <h1>Movie search</h1>
            </div>
            
            <div>
                <ul className="nav">
                    <li>HOME</li>
                    <li>Now Playing</li>
                    <li>Coming Soon</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;