import "./App.css";

import UserInfo from "./UserInfo";

import { createContext , useState} from "react";

export const sharedData = createContext();


function App() {

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [agree, setAgree] = useState(false);

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateAgree = (e) => {
    setAgree(e.target.checked);
  }
  return (
    <div className="fieldset-container">
  <fieldset>
    <label className="label">FirstName:</label>
    <input type="text" className="input" value={firstName} onChange={updateFirstName} />
    <br/>
    <br/>
    <label className="label">LastName:</label>
    <input type="text" className="input" value={lastName} onChange={updateLastName} />
    <br/>
    <br/>
    <label className="checkbox-label">
      Agree to T & C 
      <input type="checkbox" className="checkbox" onChange={updateAgree} />
    </label>
    <sharedData.Provider value={firstName + " " + lastName}>
      {agree ? <UserInfo className="userInfo" /> : ""}
    </sharedData.Provider>
  </fieldset>
</div>
  );
}

export default App;
