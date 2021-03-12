import * as React from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import logo from "./logo.svg";
import "url-search-params-polyfill";



const Header: React.FunctionComponent<RouteComponentProps> = props => {
    const [search, setSearch] = React.useState("");
    React.useEffect(() => {
        const searchParams = new
            URLSearchParams(props.location.search);
        setSearch(searchParams.get("search") || "");
    }, []);

    return (
        <header className="header">
                <div className="search-container">
                    <input type="search" placeholder="search" value={search} onChange={handleSearchChange} onKeyDown={handleSearchKeydown} />
                </div>
                <img src={logo} className="header-logo" alt="logo" />
                <h1 className="header-title">React Shop</h1>
                <nav>
                    <NavLink to="/products" activeClassName="header-link">Products</NavLink>
                    <NavLink to="/admin" activeClassName="header-link">Admin</NavLink>
                </nav>
        </header>
    );
};
export default Header;
