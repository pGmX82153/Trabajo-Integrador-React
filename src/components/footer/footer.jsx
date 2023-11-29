import { useContext } from "react";
import FooterButton from "./footerButton/footerButton";
import "./footer.css";
import logoFace from "../../assets/ico/logoFace.svg";
import logoInsta from "../../assets/ico/logoInsta.svg";
import logoLink from "../../assets/ico/logoLink.svg";


const buttonList = [
  {
    name: "",
    link: "https://www.facebook.com/StarbucksArgentina",
    customCss: "",
    img: logoFace,
  },
  {
    name: "",
    link: "https://www.instagram.com/starbucksargentina",
    customCss: "",
    img: logoInsta,
  },
  {
    name: "",
    link: "https://www.linkedin.com/company/starbucks-coffee-argentina/",
    customCss: "",
    img: logoLink,
  },
];
/** 
*  Footer component es el pie de la web
*/
function Footer() {
  return (
    <header>
      <nav>
        <div className="wrapper">
          {/* ToDo: Buscar nombre de forma de escribir este css */}
          <ul className="footer__container">
            {buttonList.map((aButton, index) => {
              return <FooterButton key={index} data={aButton} />;
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Footer;
