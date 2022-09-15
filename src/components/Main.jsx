import React from "react";
import { useTranslation } from "react-i18next";
import PopUp from "./PopUp/PopUp";

function Main() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container main-content">
        <p>
          {t(`wellcomeText`)}
        </p>
        <p>
          {t(`wellcomeInfo`)}
        </p>
        <div className="contact-main">
          <div className="d-flex justify-content-center align-items-center">
            <img className="mx-2" src="./assets/whatsapp 3.png" alt="" />
            <p className="m-0">+20 120 109 4004</p>
          </div>
          <span className="m-2 seperator"></span>
          <div className="hotline d-flex justify-content-center align-items-center">
            <img
              className="mx-2 phone-icon-main"
              src="./assets/Path 45595.png"
              alt=""
              srcset=""
            />
            <p className="m-0">
              16<span>911</span>
            </p>
          </div>
        </div>
      </div>
      <PopUp />
    </>
  );
}

export default Main;
