import styles from "./LoadingScreen.module.css";

const LoadingScreen = ({ loading }) => {
  return (
    <div className={`${styles.loading_overlay} ${loading ? styles.show : ""}`}>
      <h4>Setting up the Pizza Party</h4>
      <div className={styles.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
