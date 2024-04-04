import clsx from "clsx";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./Login.module.css";

export default function Login() {
  return (
    <div className={clsx("container", css.pageWrap)}>
      <LoginForm />
    </div>
  );
}
