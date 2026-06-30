import MyInput from "../components/UI/input/MyInut";
import MyButton from "../components/UI/button/MyButton";

export default function Login() {
    return (
        <form>
            <MyInput placeholder='Логин'/>
            <MyInput placeholder='Пароль'/>
            <MyButton>Войти</MyButton>
        </form>
    )
}