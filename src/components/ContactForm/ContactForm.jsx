import { useState } from "react";

export default function ContactForm() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <>
      <form noValidate action="" className="w-50 p-3 mx-auto mt-5">
        <label
          htmlFor="userName"
          className={`position-relative ${userName ? "top-0" : "top-40"}`}
        >
          userName :
        </label>
        <input
          id="userName"
          type="text"
          placeholder="userName"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative mb-3"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label
          htmlFor="userAge"
          className={`position-relative ${userAge ? "top-0" : "top-40"}`}
        >
          userAge :
        </label>
        <input
          id="userAge"
          type="text"
          placeholder="userAge"
          name="userAge"
          className="form-control border-0 border-bottom py-3 position-relative mb-3"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
        />

        <label
          htmlFor="userEmail"
          className={`position-relative ${userEmail ? "top-0" : "top-40"}`}
        >
          userEmail :
        </label>
        <input
          id="userEmail"
          type="text"
          placeholder="userEmail"
          name="userEmail"
          className="form-control border-0 border-bottom py-3 position-relative mb-3"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <label
          htmlFor="userPassword"
          className={`position-relative ${userPassword ? "top-0" : "top-40"}`}
        >
          userPassword :
        </label>
        <input
          id="userPassword"
          type="password"
          placeholder="userPassword"
          name="userPassword"
          className="form-control border-0 border-bottom py-3 position-relative mb-3"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />

        <button className="btn mt-4 text-white bg-main"> send Message </button>
      </form>
    </>
  );
}
