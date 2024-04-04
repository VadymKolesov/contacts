import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contacts/operations";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <div className={css.contact}>
        <div>
          <BsFillPersonFill size={16} />
          <p className={css.member}>{name}</p>
        </div>
        <div>
          <BsFillTelephoneFill size={16} />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button
        className={css.delete}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
