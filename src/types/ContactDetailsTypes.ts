import React from "react";

export type ContactDetailsType = {
  name: string;
  street: string;
  email: string;
  phone: string;
  age: any;
};
export type ContactDetailType = {
  contact: ContactDetailType;
};
export interface ContactDetailsInterface {
  contactDetails: ContactDetailsType[];
  setContactDetails: (value: ContactDetailsType[]) => void;
  editingRow: number;
  setEditingRow: (value: number) => void;
}
export type ContactDetailsProviderProps = {
  children?: React.ReactNode;
};
