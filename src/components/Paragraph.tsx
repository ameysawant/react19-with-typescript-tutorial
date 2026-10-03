import styles from "./paragraph.module.css";

type ParagraphProps = {
  description: string;
};

const Paragraph = ({ description }: ParagraphProps) => {
  console.log(description);
  return (
    <>
      <p className={styles.mypara}> {description}</p>
    </>
  );
};

export default Paragraph;
