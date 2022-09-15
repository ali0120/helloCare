import React, { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
// Image Logo
import ImageLogo from './../assets/Identity_Submission_3_March-02 1.png'
import "../App.css";

function Header() {
  const { t } = useTranslation();
  const [Language, setLanguage] = useState(
    window.localStorage.LANGUAGE || "ar"
  );
  const LanguageHandling = (e) => {
    setLanguage(e.target.id);
    localStorage.LANGUAGE = e.target.id;
  };
  useEffect(() => {
    // document.querySelector("html").lang = Language;
    const htmlRoot = document.querySelector("html");
    htmlRoot.setAttribute("dir", Language === "en" ? "ltr" : "rtl");
    htmlRoot.setAttribute("lang", Language === "en" ? "en" : "ar");
    i18next.changeLanguage(Language).then();
  }, [Language]);
  return (
    <header>
      <div className="container">
        {/* first row */}
        <div className="d-flex justify-content-between align-items-center">
          <img
            className="logo-header"
            src={ImageLogo}
            alt="heallo care logo"
          />
          {/* <!-- logo and hotline --> */}
          <div>
            <div className="translate_wrapper">
              <button onClick={LanguageHandling} className="lng_conrainer">
                <ul>
                  <li
                    id={localStorage.LANGUAGE === "en" ? "ar" : "en"}
                    type="button"
                  >
                    {localStorage.LANGUAGE === "en" ? t("ar") : t("en")}
                  </li>
                </ul>
              </button>
            </div>
            <div className="hotline d-flex justify-content-center align-items-center">
              <img
                className="mx-2 phone-icon-header"
                src="./assets/Path 21400.png"
                alt=""
              />
              <p className="m-0">
                16<span>911</span>
              </p>
            </div>
          </div>

          {/* <!-- slogan --> */}
        </div>
        {/* <!-- second row --> */}
        <div className="slogan-container">
          <h1>Headline1 goes here</h1>
          <p>sub text goes here</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
