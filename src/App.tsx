import React from "react";
import ContactsDetails from "./components/ContactsDetails";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Epicor Tech Test - Rob Cornelius</h1>
      <div style={{ marginLeft: "5%" }}>
        <h2>User Details</h2>
        <ContactsDetails />
        <h2>Things I would ideally do if I had more time</h2>
        <ul>
          <li>Validate inputs</li>
          <li>
            Put up an "are you sure" message when the user clicks "edit" before
            clicking "save"
          </li>
          <li>
            Used a design system such as{" "}
            <a href="https://mui.com/" target="_new">
              Material UI for the buttons etc.
            </a>
          </li>
          <li>
            convert all inline styles to{" "}
            <a href="https://styled-components.com/" target="_new">
              Styled components
            </a>
          </li>
          <li>write tests for</li>
          <ul>
            <li>User inputs</li>
            <li>non null</li>
            <li>things really save</li>
            <li>
              End to end tests using{" "}
              <a href="https://www.cypress.io/" target="_new">
                Cypress
              </a>
            </li>
          </ul>
          <li>
            In an ideal world the{" "}
            <code>/contexts/contactsDetailsContext.tsx</code> would get its data
            from an endpoint rather than static json 😉
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
