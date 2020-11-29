import React from "react";
import "./Page.css";

import join from "../assets/img/camera.png";
import invite from "../assets/img/pessoinha.png";
import report from "../assets/img/denunciar.png";
import searchbar from "../assets/img/searchbar.png";
import logo from "../assets/img/logo.png";

interface contentObj {
  name: string;
  description: string;
  photoSrc: string;
}

const Page = (props: { content: contentObj }) => {
  const content: contentObj = props.content;
  return (
    <div className="wrapper">
      <div className="body">
        <div className="navbar">
          <div className="logo">
            <img className="logo-img" src={logo} alt="" />
          </div>
          <div className="menu-btn">Home</div>
          <div className="menu-btn">Perfil</div>
          <div className="menu-btn">Recados</div>
          <div className="menu-btn">Amigos</div>
          <div className="menu-btn">Comunidades</div>

          <div className="menu-right search">
            <img src={searchbar} className="search" alt="" />
          </div>
          <div className="menu-right">Desconectar</div>
          <div className="menu-right email">email@email.com</div>
        </div>

        <div className="main-body">
          <div className="cont-left">
            <div className="left-pic">
              <img
                src={content.photoSrc || ""}
                className="left-main-img"
                alt=""
              />
            </div>
            <span className="left-title center">
              {content.name || "Comunidade"}
            </span>
            <span className="left-subtitle center">(7.795 members)</span>
            <hr />
            <ul className="left-menu">
              <li>
                <img src={join} className="icon" alt="" />
                join
              </li>
              <li>
                <img src={invite} className="icon" alt="" />
                invite friends
              </li>
              <li>
                <img src={report} className="icon" alt="" />
                report abuse
              </li>
            </ul>
            <hr />
          </div>

          <div className="cont-mid">
            <span className="title-mid">{content.name || "Comunidade"}</span>
            <ul className="breadcrumbs">
              <li>Home</li>
              <li>Communities</li>
              <li>Cultures & Communities</li>
              <li>{content.name || "Comunidade"}</li>
            </ul>

            <table className="mid-table">
              <tr>
                <td>descrição:</td>
                <td>
                  {content.description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu est ultricies, iaculis ligula eget, efficitur eros. Sed vehicula neque eu tempor mollis. Fusce quis augue lobortis, tincidunt lacus ac, ultrices magna. Praesent ornare auctor velit, sit amet euismod elit pretium sit amet. Fusce aliquet urna pretium mi aliquam gravida in commodo augue. Maecenas varius lorem eget bibendum blandit. Nunc vel ex nibh. Morbi feugiat accumsan scelerisque. Morbi sodales molestie tortor eu lacinia."}
                </td>
              </tr>
              <tr>
                <td>idioma:</td>
                <td>Português (BR)</td>
              </tr>
              <tr>
                <td>categoria</td>
                <td></td>
              </tr>
              <tr>
                <td>membros</td>
                <td></td>
              </tr>
              <tr>
                <td>tipo:</td>
                <td>pública</td>
              </tr>
              <tr>
                <td>data de criação:</td>
                <td>{Date.now()}</td>
              </tr>
              {/* <tr>
                            <td>description</td>
                            <td></td>
                        </tr> */}
            </table>
          </div>

          <div className="cont-right">
            <span className="title-right">comunidades relacionadas</span>

            <div className="cards">
              <div className="card">
                <div className="card-pic border"></div>
                <div className="card-desc">
                  <span className="card-title">Avengers</span>
                  <br />
                  <span className="card-number">(11,470)</span>
                </div>
              </div>
              <div className="card">
                <div className="card-pic border"></div>
                <div className="card-desc">
                  <span className="card-title">Avengers</span>
                  <br />
                  <span className="card-number">(11,470)</span>
                </div>
              </div>
              <div className="card">
                <div className="card-pic border"></div>
                <div className="card-desc">
                  <span className="card-title">Avengers</span>
                  <br />
                  <span className="card-number">(11,470)</span>
                </div>
              </div>
              <div className="card">
                <div className="card-pic border"></div>
                <div className="card-desc">
                  <span className="card-title">Avengers</span>
                  <br />
                  <span className="card-number">(11,470)</span>
                </div>
              </div>
              <div className="card">
                <div className="card-pic border"></div>
                <div className="card-desc">
                  <span className="card-title">Avengers of the century</span>
                  <br />
                  <span className="card-number">(11,470)</span>
                </div>
              </div>
              <div className="card">
                <div className="card-pic border"></div>
                <div className="card-desc">
                  <span className="card-title">Avengers</span>
                  <br />
                  <span className="card-number">(11,470)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
