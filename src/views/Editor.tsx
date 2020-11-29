import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { AddAPhoto } from "@material-ui/icons";
import React, { useState } from "react";
import Page from "./Page";

const Editor = (props: any) => {

    const [contentObj, setContentObj] = useState({
        name: "Community Name of it",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu est ultricies, iaculis ligula eget, efficitur eros. Sed vehicula neque eu tempor mollis. Fusce quis augue lobortis, tincidunt lacus ac, ultrices magna. Praesent ornare auctor velit, sit amet euismod elit pretium sit amet. Fusce aliquet urna pretium mi aliquam gravida in commodo augue. Maecenas varius lorem eget bibendum blandit. Nunc vel ex nibh. Morbi feugiat accumsan scelerisque. Morbi sodales molestie tortor eu lacinia.",
        photoSrc: "",
      })

    function handlePicUpload (file:any){
        const newSrc = URL.createObjectURL(file);

        setContentObj({
            ...contentObj,
            photoSrc:newSrc
        })

    }
    
  return (
    <>
      <Container>
        <Typography variant="h4">Criador de Comunidades Orkut</Typography>
        <Typography variant="body1">
          Crie aqui a sua comunidade do orkut e salve a imagem.
        </Typography>
        <Grid container direction="column" spacing={3}>
            <Grid item><TextField variant="outlined" label="Nome da Comunidade" onChange={(event)=>{setContentObj({...contentObj,name:event.target.value})}} /></Grid>
            <Grid item><TextField multiline variant="outlined" label="Descrição da Comunidade" onChange={(event)=>{setContentObj({...contentObj,description:event.target.value})}} /></Grid>
            <Grid item><Button variant="outlined" component="label" style={{ width: "60px" }}>
            <AddAPhoto /> <input type="file" accept="image/*" onChange={(event:any)=>{handlePicUpload(event.target.files[0])}} hidden />
          </Button>
          {/* <Button variant="outlined">Gerar Comunidade</Button> */}
          </Grid>
          
          
          
        </Grid>
      </Container>
      <Page content={contentObj} />
    </>
  );
};

export default Editor;
