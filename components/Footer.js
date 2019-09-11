import React from "react";
import { WhatsAppIcon, InstagramIcon } from "./Icons";

const Footer = props => {
  return (
    <>
      <div className={"footer"}>
        <div className={"wrapper"}>
          <div className={"desc"}>Мы в социальных сетях</div>
          <div className={"groups"}>
            <a href="https://instagram.com/kokos_uss" target="_blank">
              <div className={"icon"}>
                <InstagramIcon />
              </div>
            </a>
            <a href="https://wa.me/79149754854">
              <div className={"icon"}>
                <WhatsAppIcon />
              </div>
            </a>
          </div>
          <div className={"desc"}>
            <a className={"link"} href={"http://kokos.top"}>
              Корейская косметика
            </a>{" "}
            известных брендов по выгодным ценам. Отправка по всей России.
            Регулярные акции и скидки.
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
        }
        .link {
          color: #222;
        }
        .wrapper {
          max-width: 1300px;
          margin: 0 auto;
          text-align: center;
        }
        .desc {
          padding: 10px 0px;
        }
        .groups {
          display: flex;
          margin: 0 auto;
          justify-content: center;
        }
        .groups .icon {
          margin: 0px 10px;
        }
        .icon {
          width: 40px;
        }
        @media (max-width: 991.98px) {
          .desc {
            font-size: 14px;
            padding: 0px 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
