import React, { useState, useEffect } from 'react';
import ContactRow from './ContactRow.jsx'

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

// NOTE: currently no data at this url
const url = 'https://jsonplace-univclone.herokuapp.com/users'

export default function ContactList() { 

  const [contacts, setContacts] = useState(dummyContacts)

  useEffect(() => {
  async function fetchContacts() {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setContacts(result);
    } catch (error) {
      console.error(error);
    }
  }
  fetchContacts()
}, []);

  console.log("Contacts: ", contacts)

  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
              // Map over data here
              contacts.map((contact)=>{
                return <ContactRow key={contact.id} contact={contact} />
              })
             }
          </tbody>
        </table>
    ); 
}


// const ContactList = () => {

//   return (
//     <div>
//       <h2>Contact List</h2>
//       <ul>
//         {contacts.map(contact => (
//           <li key={contact.id}>
//             <strong>{contact.name}</strong>: {contact.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactList;