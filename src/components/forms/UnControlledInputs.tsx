// Uncontrolled (refs)
// Input may Type karne pe re-render nahi hota. Submit dabane pe ref se value ek baar padhte hain.

import { useRef } from "react";

// Controlled (state)
// Har letter type karne pe state update hoti hai aur page re-render hota hai.

// 3 use of useRef
// HTML element ko get karne ke liye
// Background mein value yaad rakhne ke liye like Timer ki ID or purana score or value
// Value ko change karne par page refresh (re-render) na ho

function UncontrolledInputs() {
  console.log("component render");

  const formRef = useRef<HTMLFormElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const subscribeYesRef = useRef<HTMLInputElement>(null);
  const subscribeNoRef = useRef<HTMLInputElement>(null);
  const genderMaleRef = useRef<HTMLInputElement>(null);
  const genderFemaleRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleMyForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = fileRef.current?.files?.[0] ?? null;
    // console.log(file);
    const formData = {
      firstName: firstNameRef.current?.value ?? "",
      lastName: lastNameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      mobile: mobileRef.current?.value ?? "",
      country: countryRef.current?.value ?? "",
      subscribe: subscribeYesRef.current?.checked
        ? "yes"
        : subscribeNoRef.current?.checked
          ? "no"
          : "not selected",
      gender: genderMaleRef.current?.checked
        ? "male"
        : genderFemaleRef.current?.checked
          ? "female"
          : "not selected",
      file: file ? file.name : null,
      message: messageRef.current?.value ?? "",
    };

    formRef.current?.reset();

    console.log(formData);
  };

  return (
    <>
      <h2>Uncontrolled Inputs</h2>
      <form ref={formRef} onSubmit={handleMyForm}>
        <input ref={firstNameRef} type="text" placeholder="First name" />
        <input ref={lastNameRef} type="text" placeholder="Last name" />
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={mobileRef} type="number" placeholder="Mobile" />

        <select ref={countryRef}>
          <option value="">Select country</option>
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="uk">UK</option>
          <option value="au">Australia</option>
        </select>

        <label>
          <input ref={subscribeYesRef} type="checkbox" value="yes" /> Yes
        </label>
        <label>
          <input ref={subscribeNoRef} type="checkbox" value="no" /> No
        </label>

        <label>
          <input ref={genderMaleRef} type="radio" name="gender" value="male" />{" "}
          Male
        </label>
        <label>
          <input
            ref={genderFemaleRef}
            type="radio"
            name="gender"
            value="female"
          />{" "}
          Female
        </label>

        <input ref={fileRef} type="file" />

        <textarea ref={messageRef} placeholder="Message" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UncontrolledInputs;
