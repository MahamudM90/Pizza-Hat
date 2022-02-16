import styles from "./Hero.module.css";
import ContainerFlex from "../ContainerFlex/ContainerFlex";
import { useLocation } from "react-router-dom";
import mobileImg from "images/pizzabg.jpg";

const Hero = ({
  children,
  title,
  subtitle,
  src,
  alt,
  videoSrc,
  align,
  justify,
  textAlign,
  fullHeight,
  overlay,
}) => {
  const location = useLocation();

  const renderImage = () => (
    <div className={styles.hero_image}>
      {overlay && <div className={styles.hero_image__overlay} />}
      <img className={styles.hero__desktop_image} src={src} alt={alt} />
      <img className={styles.hero__mobile_image} src={mobileImg} alt={alt} />
    </div>
  );

  const renderVideo = () => (
    <div className={styles.hero_video}>
      <video className={styles.hero_video__media} autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {overlay && <div className={styles.hero_image__overlay} />}
    </div>
  );
  return (
    <section
      className={`${styles.hero} ${
        fullHeight ? styles.hero__full_height : ""
      } ${
        location.pathname === "/shopping-basket"
          ? styles.hero__shopping_basket
          : ""
      }`}
    >
      <ContainerFlex align={align} justify={justify} textAlign={textAlign}>
        <div className={styles.hero_text}>
          <h1 className={styles.hero_title}>{title}</h1>
          {subtitle && <h2 className={styles.hero_subtitle}>{subtitle}</h2>}
          <footer className={styles.hero_text__footer}>{children}</footer>
        </div>
      </ContainerFlex>
      {src && renderImage()}
      {videoSrc && renderVideo()}
    </section>
  );
};

export default Hero;
