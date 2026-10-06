// onClick        → React.MouseEvent<HTMLButtonElement>
// onChange       → React.ChangeEvent<HTMLInputElement>
// onSubmit       → React.FormEvent<HTMLFormElement>
// onMouseEnter   → React.MouseEvent<HTMLDivElement>
// onFocus        → React.FocusEvent<HTMLInputElement>
// onBlur         → React.FocusEvent<HTMLInputElement>
// onMouseLeave   → React.MouseEvent<HTMLDivElement>
// onKeyDown      → React.KeyboardEvent<HTMLInputElement>
// onDoubleClick  → React.MouseEvent<HTMLButtonElement>

const Events = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
  };

  return (
    <>
      <button onClick={handleClick}>sample</button>
      <input onChange={handleOnChange} type="text" placeholder="first name" />
    </>
  );
};

export default Events;
