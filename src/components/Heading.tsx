type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <h2>{children}</h2>;
};

export default Heading;
