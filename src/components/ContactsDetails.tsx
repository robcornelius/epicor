import React from "react";
import useContactDetailsContext from "../hooks/useContactDetailsContext";
import ContactDetails from "../components/ContactDetails";
import EditContactDetails from "./EditContactDetails";
import AddNewContact from "./AddNewContact";

const ContactsDetails = () => {
  const { contactDetails, editingRow } = useContactDetailsContext();
  return (
    <div style={{ border: "2px solid black", margin: "0 5% 0 0" }}>
      <table cellPadding={0} cellSpacing={0} border={0}>
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid black",
                padding: "5px 0",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid black",
              }}
            >
              Street
            </th>
            <th style={{ border: "1px solid black" }}>Email</th>
            <th style={{ border: "1px solid black" }}>Phone</th>
            <th style={{ border: "1px solid black" }}>Age</th>
            <th style={{ border: "1px solid black" }}>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {contactDetails.map((contact, idx) => {
            if (idx === editingRow) {
              return (
                <EditContactDetails contact={contact} key={idx} index={idx} />
              );
            }
            return <ContactDetails contact={contact} key={idx} index={idx} />;
          })}
          <AddNewContact />
        </tbody>
      </table>
    </div>
  );
};
export default ContactsDetails;
