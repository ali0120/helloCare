import React from "react";
// Image Logo
import ImageLogo from './../assets/Identity_Submission_3_March-02 1.png'
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "#38a3d1" }}>
      <footer className="container">
        <a class="btn-chat" href="https://wa.me/+201201094004" target="_blank" rel="noreferrer">
          <i class="fab fa-whatsapp"></i>
        </a>
        <div className="main_item">
          <div className="image_container">
            <img
              src={ImageLogo}
              alt="logo"
            />
          </div>
          <p>
            {t(`hello_bio`)}
          </p>
        </div>
        <div className="links">
          <h4>{t(`links`)}</h4>
          <ul className="links">
            <li><a href={`https://heallocare.com/${localStorage.LANGUAGE}/services`} target={"_blank"} rel="noreferrer">{t('services')}</a></li>
            <li><a href={`https://heallocare.com/${localStorage.LANGUAGE}/about-us`} target={"_blank"} rel="noreferrer">{t('whoWe')}</a></li>
            <li><a href={`https://heallocare.com/${localStorage.LANGUAGE}/contact-us`} target={"_blank"} rel="noreferrer">{t('callUs')}</a></li>
            <li><a href={`https://heallocare.com/${localStorage.LANGUAGE}/privacy-policy`} target={"_blank"} rel="noreferrer">{t('policy')}</a></li>
            <li><a href={`https://heallocare.com/${localStorage.LANGUAGE}/privacy-policy`} target={"_blank"} rel="noreferrer">{t('policy')}</a></li>
          </ul>
        </div>

        <div className="contact">
          <h4>{t(`contact`)}</h4>
          <ul>
            <li>
              <a style={{ color: "white" }} href="tel:123-456-7890">
                <span>16911 </span>
              </a>
              /
              <a style={{ color: "white" }} href="tel:123-456-7890">
                <span>{t('telphone')}</span>
              </a>
              <i className="fa-solid fa-phone"></i>
            </li>
            <li>
              <a style={{ color: "white" }} href="mailto: info@heallocare.com">
                info@heallocare.com
              </a>
              <i className="fa-solid fa-envelope"></i>
            </li>
            <li>
              <span>6058 Carrefour st, Maadi, Cairo, Egypt.</span>
              <i className="fa-solid fa-location-dot"></i>
            </li>
          </ul>
          <div className="social_container">
            <ul className="my-2">
              <li>
                <a href="https://www.facebook.com/HealloCare/" target={"_blank"} rel="noreferrer">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/CareHeallo" target={"_blank"} rel="noreferrer">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/heallocare/" target={"_blank"} rel="noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/heallocare/" target={"_blank"} rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="container border-top rights">
        <p className="m-0">
          {t('copy')} <span>|</span> {t('designBy')}
        </p>
      </div>
    </div>
  );
}

export default Footer;
