import styles from "./paragraph.module.css";

const Paragraph = () => {
  return (
    <>
      <p
        className={styles.mypara}
        // style={{
        //   backgroundColor: "orange",
        //   padding: "20px 20px",
        //   color: "white",
        // }}
      >
        This is a simple paragraph
      </p>
    </>
  );
};

export default Paragraph;
