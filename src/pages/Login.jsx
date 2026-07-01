import MyInput from "../components/UI/input/MyInut";
import MyButton from "../components/UI/button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../context";

export default function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    function Login(e) {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <form onSubmit={Login}>
            <MyInput placeholder='Логин'/>
            <MyInput placeholder='Пароль'/>
            <MyButton>Войти</MyButton>
        </form>
    )
}