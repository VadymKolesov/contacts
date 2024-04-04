import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import clsx from "clsx";
import css from "./Contacts.module.css";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={clsx("container", css.pageWrap)}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
