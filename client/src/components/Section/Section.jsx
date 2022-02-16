import styles from "./Section.module.css";

const Section = ({
  children,
  bgcolor = "transparent",
  color = "black",
  size,
  id,
}) => {
  let padding;

  switch (size) {
    case "large":
      padding = styles.large; //"6rem 3rem";
      break;
    case "xl":
      padding = styles.xl; //"9rem 3rem";
      break;
    default:
      padding = styles.default; //"3rem";
      break;
  }

  return (
    <section
      className={`${styles.section} ${padding}`}
      style={{ backgroundColor: bgcolor, color: color }}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
