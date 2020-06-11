import React from 'react';
import Tabla from './Tabla';
import Carrusel from './Carrusel';
import { Container } from '@material-ui/core';

const Jumbo = (props) => {
  return (
    <div>
      <Container className=" Jumbo1 ">
        <h1 className="display-3">Bienvenidos Destroyers </h1>
        <p className="lead">Somos un gran movimiento fit que tiene como proposito destruir cada uno de nuestros miedos , malas energias y negativismo mediante la motivacion , el aprendizaje, entrenamientos y risas. 
        Para que de esta manera todos seamos dueños de nuestro cuerpo, tiempo y tengamos claras nuestras metas.
        Aqui podras encontrar la informacion que mas te gusta de manera organizada, asi no tendras que buscar para poder encontrar todas las publicaciones de tu sesion favorita</p>
        <Container className="Carrusel1">
          <div>
            <Carrusel/>
          </div>
        </Container>
        <hr className="my-2" />
        <Container disableGutters= "bool" fixed="bool">
          <div>
            <h2 className="display-3">Adminstradores </h2>
          </div>
          <p className= "lead"> Este gran movimiento es dirigido por un grupo muy enfocado distribuido de la siguiente manera : </p>
          <div className="Margentabla">
            <Tabla />
          </div>
       </Container>
        <hr className="my-4" />
      </Container>
    </div>
  );
};
export default Jumbo;