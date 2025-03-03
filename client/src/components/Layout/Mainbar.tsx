import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Mainbar.module.sass";
import esFlag from "../UI/assets/Flags/es.svg";
import usFlag from "../UI/assets/Flags/us.svg";
import { Button } from "@mui/material";

export function Mainbar() {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("im clicking");
    navigate("./login", { replace: true });
  };
  const handleChangleLng = (lng: any) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <nav className={styles.mainbar}>
      <div className={styles.logo}>ReserveFacil.com</div>
      <ul className={styles["items-list"]}>
        <li>
          <a href="/">{t("main-home.main-home")}</a>
        </li>
        <li>
          <a href="/about">{t("main-about.main-about")}</a>
        </li>
        <li>
          <a href="/contact">{t("main-contact.main-contact")}</a>
        </li>
        <li>
          <div className="dropdown">
            {/* <span>lang</span> */}
            <div className="dropdown-content">
              <label onClick={() => handleChangleLng("es")}>
                ES <img className={styles.img} src={esFlag} alt="es" />
              </label>
              &nbsp;&nbsp;&nbsp;
              <label onClick={() => handleChangleLng("en")}>
                EN <img className={styles.img} src={usFlag} alt="es" />
              </label>
            </div>
          </div>
        </li>
      </ul>
      <Button onClick={handleLogin}>{t("login.login")}</Button>
    </nav>
  );
}
