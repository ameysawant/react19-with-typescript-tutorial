type ButtonProps = {
  name: string;
};

const Button = ({ name }: ButtonProps) => {
  return <div>Button {name}</div>;
};

export default Button;
