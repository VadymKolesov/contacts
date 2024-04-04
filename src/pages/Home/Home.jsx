import clsx from "clsx";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={clsx("container", css.pageWrap)}>
      <h1>Welcome to the home page!</h1>
    </div>
  );
}
