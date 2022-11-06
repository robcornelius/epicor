import React, { useState, createContext } from "react";
import initialContactDetails from "../data/contacts.json";
import {
  ContactDetailsInterface,
  ContactDetailsProviderProps,
} from "../types/ContactDetailsTypes";

export const ContactDetailsContext = createContext(
  {} as ContactDetailsInterface
);

const ContactDetailsProvider = ({ children }: ContactDetailsProviderProps) => {
  const [contactDetails, setContactDetails] = useState(initialContactDetails);
  const [editingRow, setEditingRow] = useState(-1);

  return (
    <ContactDetailsContext.Provider
      value={{ contactDetails, setContactDetails, editingRow, setEditingRow }}
    >
      {children}
    </ContactDetailsContext.Provider>
  );
};

export default ContactDetailsProvider;
