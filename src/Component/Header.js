import {Link} from "react-router-dom";

export const Header = () => (
    <header>
        <div className="wrapper">
            <div className="headerName">Kim Ellis</div>
        </div>
        <div className="mainMenu">
            <div className="wrapper">
                <div className="headerMenu">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/pages">pages</Link></li>
                        <li>about me</li>
                        <li>typography</li>
                        <li>contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
)