// A controlled input is a form field whose value is stored and managed by React state. React is the single source of truth — the field displays whatever is in state, and the only way its value changes is when your code updates that state.

// An uncontrolled input is a form field whose value is managed by the browser (the DOM). React does not track it as it changes — you only read the value when you need it, typically at submit time, using a ref or the form itself.

// Controlled = React state owns the value.
// Uncontrolled = the DOM owns the value.

import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

type FormElement = ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;
type HandleChange = FormElement;

type HandleMyForm = SubmitEvent<HTMLFormElement>;

const intialValue = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  country: "",
  gender: "",
  subscribe: "",
  message: "",
};

const ControlledInputs = () => {
  const [formData, setFormData] = useState(intialValue);

  const handleChange = (e: HandleChange) => {
    const { value, name, type } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "number" ? Number(value) : value };
    });
  };

  const handleMyForm = (e: HandleMyForm) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      //   mobile: Number(formData.mobile),
    };
    console.log(finalData);
    setFormData(intialValue);
  };

  return (
    <>
      <h2>Controlled Inputs</h2>

      <form onSubmit={handleMyForm}>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="mobile"
          placeholder="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">Usa</option>
          <option value="china">China</option>
        </select>

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          female
        </label>

        <label>
          <input
            type="checkbox"
            name="subscribe"
            value="yes"
            checked={formData.subscribe === "yes"}
            onChange={handleChange}
          />
          yes
        </label>
        <label>
          <input
            type="checkbox"
            name="subscribe"
            value="no"
            checked={formData.subscribe === "no"}
            onChange={handleChange}
          />
          no
        </label>

        <textarea
          name="message"
          placeholder="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default ControlledInputs;
