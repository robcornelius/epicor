import React, { useState } from "react";
import useContactDetailsContext from "../hooks/useContactDetailsContext";

const EditContactDetails = (contactDetail: any) => {
  const { contact } = contactDetail;
  const { contactDetails, setContactDetails, editingRow, setEditingRow } =
    useContactDetailsContext();

  const [name, setName] = useState<string>(contact.name);
  const [street, setStreet] = useState<string>(contact.street);
  const [email, setEmail] = useState<string>(contact.email);
  const [phone, setPhone] = useState<string>(contact.phone);
  const [age, setAge] = useState<number>(contact.age);

  const updateName = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    setName(ev.currentTarget.value);
  };
  const updateStreet = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    setStreet(ev.currentTarget.value);
  };
  const updateEmail = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    setEmail(ev.currentTarget.value);
  };
  const updatePhone = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    setPhone(ev.currentTarget.value);
  };
  const updateAge = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    setAge(Number(ev.currentTarget.value));
  };

  const saveContact = () => {
    const newContactDetails = [...contactDetails];
    newContactDetails[editingRow] = { name, street, email, phone, age };
    setContactDetails(newContactDetails);
    setEditingRow(-1);
  };
  return (
    <tr style={{ backgroundColor: "#fee", height: "30px" }}>
      <td style={{ borderRight: "1px solid black" }}>
        <input type="text" defaultValue={contact.name} onKeyUp={updateName} />
      </td>
      <td style={{ borderRight: "1px solid black", padding: "5px" }}>
        <input
          type="text"
          defaultValue={contact.street}
          onKeyUp={updateStreet}
        />
      </td>
      <td style={{ borderRight: "1px solid black", padding: "5px" }}>
        <input
          type="email"
          defaultValue={contact.email}
          onKeyUp={updateEmail}
        />
      </td>
      <td style={{ borderRight: "1px solid black", padding: "5px" }}>
        <input
          type="phone"
          defaultValue={contact.phone}
          onKeyUp={updatePhone}
        />
      </td>
      <td style={{ borderRight: "1px solid black", padding: "5px" }}>
        <input type="number" defaultValue={contact.age} onInput={updateAge} />
      </td>
      <td style={{ borderRight: "1px solid black", padding: "5px" }}>
        <button style={{ width: "100%" }} onClick={saveContact}>
          Save
        </button>
      </td>
    </tr>
  );
};
export default EditContactDetails;
