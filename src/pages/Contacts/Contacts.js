import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Title } from 'pages/Login/Login.styled'


export const Contacts = () => {
  return (
    <main>
      <ContactForm />
      <Title>Contact list</Title>
      <ContactList/>
    </main>
  );
};
export default Contacts;
