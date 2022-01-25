import React, { useState } from 'react';

export default function App() {
  const [user, setuser] = useState({ name: '', dob: '', mail: '', mob: 0 });
  console.log(user);

  let buttonClicked = () => {
    let newLine = '\r\n';
    alert(
      ` Name : ${user.name}${newLine} D.O.B : ${user.dob}${newLine} Email : ${user.mail}${newLine} Mobile : ${user.mob}`
    );
  };

  return (
    <div>
      <form onSubmit={buttonClicked}>
        <h1> Library Membership Registration</h1>
        <label>Name : </label>
        <input
          placeholder=""
          type="text"
          onChange={(e) =>
            setuser((user) => ({ ...user, name: e.target.value }))
          }
        />
        <br />
        <br />
        <label>D.O.B : </label>
        <input
          type="date"
          onChange={(e) =>
            setuser((user) => ({ ...user, dob: e.target.value }))
          }
        />
        <br />
        <br />
        <label>Email : </label>
        <input
          type="text"
          onChange={(e) =>
            setuser((user) => ({ ...user, mail: e.target.value }))
          }
        />{' '}
        <br />
        <br />
        <label>Mobile : </label>
        <input
          type="Number"
          onChange={(e) =>
            setuser((user) => ({ ...user, mob: e.target.value }))
          }
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
