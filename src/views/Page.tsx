import React, { useEffect } from "react";
import "./Page.css";

import join from "../assets/img/camera.png";
import invite from "../assets/img/pessoinha.png";
import report from "../assets/img/denunciar.png";
import searchbar from "../assets/img/searchbar.png";
import logo from "../assets/img/logo.png";
import comunidades from "../models/comunidades";

export interface contentObj {
  name: string;
  description: string;
  photoSrc: string;
  members:number|string;
}

export const initialValue:contentObj = {
  name: "Nome da comunidade",
  description:
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu est ultricies, iaculis ligula eget, efficitur eros. Sed vehicula neque eu tempor mollis. Fusce quis augue lobortis, tincidunt lacus ac, ultrices magna. Praesent ornare auctor velit, sit amet euismod elit pretium sit amet. Fusce aliquet urna pretium mi aliquam gravida in commodo augue. Maecenas varius lorem eget bibendum blandit. Nunc vel ex nibh. Morbi feugiat accumsan scelerisque. Morbi sodales molestie tortor eu lacinia.",
  photoSrc: "",
  members:"7.795"
}

const Page = (props: { content: contentObj }) => {
  let content: contentObj = props.content;
  let relComArray:number[] = new Array();
  if(!content) content=initialValue;
  return (
    <div className="wrapper">
      <div className="body" id="capture">
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
                src={content.photoSrc || initialValue.photoSrc}
                className="left-main-img"
                alt=""
              />
            </div>
            <span className="left-title center">
              {content.name || initialValue.name}
            </span>
            <span className="left-subtitle center">({content.members || initialValue.members} membros)</span>
            <hr />
            <ul className="left-menu">
              <li>
                <img src={join} className="icon" alt="" />
                participar
              </li>
              <li>
                <img src={invite} className="icon" alt="" />
                convidar amigos
              </li>
              <li>
                <img src={report} className="icon" alt="" />
                denunciar
              </li>
            </ul>
            <hr />
          </div>

          <div className="cont-mid">
            <span className="title-mid">{content.name || initialValue.name}</span>
            <br/>
            <span className="breadcrumbs">
              Início <span className="rarrow">&gt; </span>
              Comunidades <span className="rarrow">&gt; </span>
              {content.name || initialValue.name}
            </span>

            <table className="mid-table">
              <tr>
                <td>descrição:</td>
                <td>
                  {content.description ||
                    initialValue.description}
                </td>
              </tr>
              <tr>
                <td>idioma:</td>
                <td>Português (BR)</td>
              </tr>
              {/* <tr>
                <td>categoria:</td>
                <td></td>
              </tr> */}
              <tr>
                <td>membros:</td>
                  <td>{content.members || initialValue.members}</td>
              </tr>
              <tr>
                <td>tipo:</td>
                <td>pública</td>
              </tr>
              <tr>
                <td>data de criação:</td>
                <td>{new Date(Date.now()).toLocaleString('pt-br')}</td>
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
              {Array.apply(null, Array(6)).map(()=>{
                let index = Math.floor(Math.random()*(comunidades.length));
                while(true){
                  if(!relComArray.includes(index)){
                    relComArray.push(index)
                    break;
                  }
                  index = Math.floor(Math.random()*(comunidades.length));
                }
                const relComObj = comunidades[index]
                return(
                  <div className="card">
                <div className="card-pic"><img src={relComObj.picture} alt=""/></div>
                <div className="card-desc">
                  <span className="card-title">{relComObj.name}</span>
                  <br />
                  <span className="card-number">({relComObj.members || "11.470"})</span>
                </div>
              </div>
                )
              })}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
