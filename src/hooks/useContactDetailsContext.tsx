import { useContext } from "react";
import { ContactDetailsContext } from "../contexts/contactDetailsContext";

const useContactDetailsContext = () => {
  const context = useContext(ContactDetailsContext);
  if (context === undefined) {
    throw new Error("Contact Details Context UNDEFINED");
  }
  return context;
};
export default useContactDetailsContext;
