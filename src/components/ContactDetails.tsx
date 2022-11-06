import React from "react";
import useContactDetailsContext from "../hooks/useContactDetailsContext";

const ContactDetails = (contactDetails: any) => {
  const { contact, index } = contactDetails;
  const { setEditingRow } = useContactDetailsContext();

  const setRow = () => {
    setEditingRow(index);
  };
  let stripe = { backgroundColor: "#ddd" };
  if (index % 2 === 0) {
    stripe = { backgroundColor: "#eee" };
  }
  return (
    <tr style={stripe}>
      <td
        width="20%"
        style={{ borderRight: "1px solid black", padding: "5px" }}
      >
        {contact.name}
      </td>
      <td
        width="20%"
        style={{ borderRight: "1px solid black", padding: "5px" }}
      >
        {contact.street}
      </td>
      <td
        width="20%"
        style={{ borderRight: "1px solid black", padding: "5px" }}
      >
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </td>
      <td
        width="20%"
        style={{ borderRight: "1px solid black", padding: "5px" }}
      >
        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
      </td>
      <td
        width="20%"
        style={{ borderRight: "1px solid black", padding: "5px" }}
      >
        {contact.age}
      </td>
      <td
        width="70px"
        style={{ borderRight: "1px solid black", padding: "5px" }}
      >
        <button onClick={setRow}>Edit</button>
      </td>
    </tr>
  );
};

export default ContactDetails;
