import React, { useState } from "react";

const Password = ({ ...data }) => {
  const [password, setPassword] = useState(" ");

  const [length, setLength] = useState(25);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const changehandler = (e) => {
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumber &&
      !includeSymbols
    ) {
      alert("You must Select atleast one option");
    }
    let list = "";
    if (includeNumber) {
      list = list + data.number;
    }
    if (includeUpperCase) {
      list = list + data.uppercase;
    }
    if (includeLowerCase) {
      list = list + data.lowercase;
    }
    if (includeSymbols) {
      list = list + data.symbols;
    }
    setPassword(createpassword(list));
  };

  const createpassword = (list) => {
    let password = "";
    const charlistlength = list.length;
    for (let i = 0; i < length; i++) {
      const charIndex = Math.round(Math.random() * charlistlength);
      password = password + list.charAt(charIndex);
    }
    return password;
  };

  return (
    <>
      <div className="main">
        <div className="sub-main">
          <h1>Password Generator</h1>
          <input type="text" className="text" value={password} />
          <div className="select">
            <span>Select password length</span>
            <input
              defaultValue={length}
              onChange={(e) => setLength(e.target.value)}
              type="number"
              id="password-strength"
              name="password-strength"
              max="25"
              min="8"
            />
          </div>

          <div className="checkBox">
            <input
              type="checkbox"
              name="includeUppercaseLetter"
              id=""
              checked={includeUpperCase}
              onChange={(e) => setIncludeUpperCase(e.target.checked)}
            />
            <span>include uppercase letter</span>
            <br />
            <input
              type="checkbox"
              name="includeLowercaseLetter"
              id=""
              checked={includeLowerCase}
              onChange={(e) => setIncludeLowerCase(e.target.checked)}
            />
            <span>include lowercase letter</span>
            <br />
            <input
              type="checkbox"
              name="include number"
              id=""
              checked={includeNumber}
              onChange={(e) => setIncludeNumber(e.target.checked)}
            />
            <span>include number</span>
            <br />
            <input
              type="checkbox"
              name="include symbols"
              id=""
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <span>include symbols</span>
            <br />
          </div>
          <div className="btn">
            <button onClick={changehandler}>Generate Password</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
