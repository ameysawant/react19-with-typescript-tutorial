// Uncontrolled = the DOM owns the value.
// Controlled = React state owns the value.

import { useState, useRef } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  country: string;
  gender: string;
  terms: boolean;
  file: string;
  message: string;
};

type FormElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type HandleChange = ChangeEvent<FormElements>;
type FormSubmitEvent = SubmitEvent<HTMLFormElement>;

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  country: "",
  gender: "",
  terms: false,
  file: "",
  message: "",
};

const ControlledInputs = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef);

  console.log("component render");
  const [formData, setFormData] = useState<FormData>(initialValue);

  const handleChange = (e: HandleChange) => {
    const { name, value, type } = e.target;
    const isChecked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => {
      if (type === "checkbox") {
        return { ...prev, [name]: isChecked };
      }

      // if (type === "number") {
      //   return { ...prev, [name]: Number(value) };
      // }

      return { ...prev, [name]: value };
    });
  };

  const handleMyForm = (e: FormSubmitEvent) => {
    e.preventDefault();

    const file = inputRef.current?.files?.[0];
    console.log(file);

    const finalData = {
      ...formData,
      file: file ? file.name : null,
      mobile: Number(formData.mobile),
    };

    setFormData(initialValue);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    console.log(finalData);
  };

  return (
    <>
      <h2>Controlled Inputs</h2>
      <form onSubmit={handleMyForm}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="china">China</option>
        </select>

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>

        <label>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />{" "}
          I accept Terms & Conditions
        </label>

        <input ref={inputRef} type="file" name="file" />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ControlledInputs;
