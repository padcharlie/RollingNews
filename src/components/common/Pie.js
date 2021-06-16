import { NavLink } from "react-router-dom";
import "../common/Navegacion.css";

const Footer = () => {
  return (
    <div className="colordefondo">
      <div className="text-center text-light d-flex pt-3 justify-content-center">
        <div className="m-2">
          <h6>Nuestras redes:</h6>
          <a
            href="https://es-la.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="text-light"
          >
            Facebook
          </a>{" "}
          <br />
          <a
            href="https://www.instagram.com/rollingcodeschool/"
            rel="noreferrer"
            target="_blank"
            className="text-light"
          >
            Instagram
          </a>{" "}
          <br />
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="text-light"
          >
            Youtube
          </a>{" "}
          <br />
        </div>
      </div>
      <div className="d-flex justify-center">
        <NavLink
          exact={true}
          to="/aboutUs"
          className="nav-link text-light"
        >
          Sobre Nosotros
        </NavLink>
        <NavLink
          exact={true}
          to="/TerminosCondiciones"
          className=" nav-link text-light"
        >
          Términos y Condiciones
        </NavLink>
        <NavLink
          exact={true}
          to="/ContacUs"
          className="nav-link text-light"
        >
          Contáctenos
        </NavLink>
      </div>
      <p className="text-light text-center">
        &copy; Todos los derechos reservados
      </p>
    </div>
  );
};
export default Footer;
