import { Contact } from './Contact/Contact';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = [
    { id: '1', name: 'Lityan Coronse', phone: '232-3231-11123' },
    { id: '2', name: 'rose sda', phone: '99-5464-2213' },
  ];
  return (
    <>
      <List>
        {contacts.map(contact => {
          const { id, phone, name } = contact;
          return <Contact key={id} name={name} phone={phone} />;
        })}
      </List>
    </>
  );
};
