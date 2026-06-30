import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../../../context";

export default function Navbar() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        <div className="navbar">
            {isAuth
                &&
                <MyButton
                    onClick={() => setIsAuth(false)}
                >Выйти</MyButton>
            }

            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}