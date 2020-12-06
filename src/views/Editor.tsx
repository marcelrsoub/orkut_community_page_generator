import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Hidden,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import { AddAPhoto, Check, PanoramaFishEye, Save, Visibility } from "@material-ui/icons";
import html2canvas from "html2canvas";
import React, { useRef, useState } from "react";
import Page, {initialValue} from "./Page";

const Editor = (props: any) => {
  const [imgOpen, setImgOpen] = useState(false);
  const downloadBtn = useRef();

  function gerarImagem() {
    window.scroll(0,0);
    html2canvas(document.querySelector("#capture"), {allowTaint:true}).then((canvas) => {
      // document.body.appendChild(canvas);
      const imgUrl = canvas.toDataURL("image/png");
      let element = document.getElementById("downloadBtn");
      if (element !== null) {
        element.setAttribute("href", imgUrl);
        element.click();
      }

      // setImgOpen(true);
    });
  }
  // const handleClick = event => {
  //   const anchor = (event.target.ownerDocument || document).querySelector(
  //     "#back-to-top-anchor"
  //   );

  //   if (anchor) {
  //     anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  //   }
  // };

  function preverImagem() {
    window.scroll(0,0);
    html2canvas(document.querySelector("#capture"), {allowTaint:true}).then((canvas) => {
      // document.body.appendChild(canvas);
      const imgUrl = canvas.toDataURL("image/png");
      let element = document.getElementById("showImg");
      if (element !== null) {
        element.setAttribute("src", imgUrl);
        // element.click();
      }

      // setImgOpen(true);
    });
  }

  const [contentObj, setContentObj] = useState(initialValue);

  function handlePicUpload(file: any) {
    const newSrc = URL.createObjectURL(file);

    setContentObj({
      ...contentObj,
      photoSrc: newSrc,
    });
  }

  return (
    <>
    <div className="canvas-top" style={{zIndex:-1000,overflow:"hidden",width:0,height:0,padding:0,margin:0}}><Page content={contentObj} /></div>
      <Container>
        <Card style={{ marginBottom: "50px", marginTop: "50px" }}>
          <CardContent>
            <Typography gutterBottom variant="h4" align="center">
              Gerador de Comunidades Orkut
            </Typography>
            <Typography gutterBottom variant="body1" align="center">
              Crie aqui a sua comunidade do orkut e salve a imagem.
            </Typography>
          </CardContent>
          <CardContent>
            <Grid container direction="column" spacing={1} alignItems="center">
              <Grid item>
                <TextField
                  variant="outlined"
                  label="Nome da Comunidade"
                  onChange={(event) => {
                    setContentObj({ ...contentObj, name: event.target.value });
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  multiline
                  variant="outlined"
                  label="Descrição da Comunidade"
                  onChange={(event) => {
                    setContentObj({
                      ...contentObj,
                      description: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  multiline
                  variant="outlined"
                  label="Número de Membros"
                  onChange={(event) => {
                    setContentObj({
                      ...contentObj,
                      members: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item>
                {contentObj.photoSrc !== "" ? <Check />:null}
                <Button
                  variant="outlined"
                  component="label"
                  style={{ width: "60px" }}
                >
                  <AddAPhoto />{" "}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event: any) => {
                      handlePicUpload(event.target.files[0]);
                    }}
                    hidden
                  />
                </Button>
                {/* <Button variant="outlined">Gerar Comunidade</Button> */}
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
            variant="outlined"
              onClick={() => {
                preverImagem();
              }}
            >
              <Visibility />
            </Button>
            <Button
            variant="outlined"
              style={{ marginLeft: "auto" }}
              onClick={() => {
                gerarImagem();
              }}
            >
             <Save />
            </Button>
            <a
              id="downloadBtn"
              download="comunidade-orkut.png"
              style={{ display: "none" }}
            >
              photo
            </a>
          </CardActions>
          <CardMedia>
            
            
      {/* <Page content={contentObj} /> */}
            <img id="showImg" style={{width:"100%"}} alt="" />
          </CardMedia>
          {/* </Hidden> */}

        </Card>
      </Container>

      
    </>
  );
};

export default Editor;
