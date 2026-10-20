// Uncontrolled = the DOM owns the value.
// Controlled = React state owns the value.

import { useRef } from "react";
import type { SubmitEvent } from "react";

function UncontrolledInputs() {
  console.log("component render");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const genderMaleRef = useRef<HTMLInputElement>(null);
  const genderFemaleRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleMyForm = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(fileRef.current?.files?.[0]?.name);
    const formData = {
      firstName: firstNameRef.current?.value ?? "",
      lastName: lastNameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      mobile: mobileRef.current?.value ?? "",
      country: countryRef.current?.value ?? "",
      terms: termsRef.current?.checked ? true : false,
      gender: genderMaleRef.current?.checked
        ? "male"
        : genderFemaleRef.current?.checked
          ? "female"
          : "not selected",
      file: fileRef.current?.files?.[0]?.name ?? null,
      message: messageRef.current?.value ?? "",
    };

    formRef.current?.reset();

    console.log(formData);
  };

  return (
    <>
      <h2>Uncontrolled Inputs</h2>
      <form ref={formRef} onSubmit={handleMyForm}>
        <input
          ref={firstNameRef}
          type="text"
          placeholder="First name"
          name="firstName"
        />
        <input
          ref={lastNameRef}
          type="text"
          placeholder="Last name"
          name="lastName"
        />
        <input ref={emailRef} type="email" placeholder="Email" name="email" />
        <input
          ref={mobileRef}
          type="number"
          placeholder="Mobile"
          name="mobile"
        />

        <select ref={countryRef} name="country">
          <option value="">Select country</option>
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="uk">UK</option>
          <option value="au">Australia</option>
        </select>

        <label>
          <input ref={termsRef} type="checkbox" name="terms" /> Terms
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

        <input ref={fileRef} type="file" name="file" />

        <textarea
          ref={messageRef}
          placeholder="Message"
          name="message"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UncontrolledInputs;
