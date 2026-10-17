type ErrorProps = {
  isError: null | string;
};

const IsError = ({ isError }: ErrorProps) => {
  return <h2>{isError}</h2>;
};

export default IsError;
