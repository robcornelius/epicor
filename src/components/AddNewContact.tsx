import React, { useState } from "react";
import useContactDetailsContext from "../hooks/useContactDetailsContext";

const AddNewContact = () => {
  const { contactDetails, setContactDetails } = useContactDetailsContext();

  const [name, setName] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [age, setAge] = useState<string>();

  const addName = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    setName(ev.currentTarget.value);
  };
  const addStreet = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    setStreet(ev.currentTarget.value);
  };
  const addEmail = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    setEmail(ev.currentTarget.value);
  };
  const addPhone = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    setPhone(ev.currentTarget.value);
  };
  const addAge = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    setAge(ev.currentTarget.value);
  };

  const saveNewContact = () => {
    const newContactDetails = [...contactDetails];
    newContactDetails.push({ name, street, email, phone, age });
    setContactDetails(newContactDetails);
    setName("");
    setStreet("");
    setEmail("");
    setPhone("");
    setAge("");
  };

  return (
    <tr style={{ backgroundColor: "#fee", height: "30px" }}>
      <td style={{ borderRight: "1px solid black", padding: "5px" }}>
        <input type="text" onKeyUp={addName} placeholder="Name" />
      </td>
      <td style={{ borderRight: "1px solid black", padding: "5px" }}>
        <input type="text" onKeyUp={addStreet} placeholder="Street" />
      </td>
      <td style={{ borderRight: "1px solid black", padding: "5px" }}>
        <input
          type="email"
          onKeyUp={addEmail}
          placeholder="email@address.com"
        />
      </td>
      <td style={{ borderRight: "1px solid black", padding: "5px" }}>
        <input type="phone" onKeyUp={addPhone} placeholder="Phone" />
      </td>
      <td style={{ borderRight: "1px solid black", padding: "5px" }}>
        <input type="number" onInput={addAge} placeholder="Age" />
      </td>
      <td style={{ borderRight: "1px solid black", padding: "5px" }}>
        <button style={{ width: "100%" }} onClick={saveNewContact}>
          Save
        </button>
      </td>
    </tr>
  );
};
export default AddNewContact;
