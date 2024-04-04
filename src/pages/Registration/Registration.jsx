import clsx from "clsx";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./Registration.module.css";

export default function Registration() {
  return (
    <div className={clsx("container", css.pageWrap)}>
      <RegistrationForm />
    </div>
  );
}
