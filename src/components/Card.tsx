import Image from "@/components/Image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

// type CardProps = {
//   imageUrl: string;
//   title: string;
//   description: string;
//   price: number;
// };

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const Card = ({ imageUrl, title, description, price }: CardProps) => {
  return (
    <>
      <div>
        <Image imageUrl={imageUrl} />
        <Heading>{title}</Heading>
        {/* <Paragraph description={description} />
        <Paragraph price={price} /> */}
        <Paragraph>{description}</Paragraph>
        <Paragraph>{price}</Paragraph>
      </div>
    </>
  );
};

export default Card;
