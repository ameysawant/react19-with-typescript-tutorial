type ImageProps = {
  imageUrl: string;
};

const Image = ({ imageUrl }: ImageProps) => {
  return <img src={imageUrl} alt="" />;
};

export default Image;
