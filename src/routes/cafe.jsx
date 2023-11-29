import React from "react";
import TittleBar from "../components/titleBar/tittleBar";
import Info from "../components/info/info";
import banner6 from "../assets/img/banner_6.png";

/**
 * 
*/

function CafePage() {
  return (
    <div>
      <TittleBar text={"Nuestro café"}></TittleBar>
      <Info 
       seccion1={
          "El olor al café, a unos granos recién tostados, es la mejor bienvenida que cada día planificamos para brindarles cuando abrimos las puertas de nuestras tiendas. Pero eso es sólo el comienzo."
        }
        title={"Nuestro tostado Starbucks"}
        img={banner6}
        seccion2={
          "De cuerpo entero, un poco ahumado, con notas cítricas, con fuerte presencia de chocolate…el desafío que tenemos constantemente es que cada uno de nuestros clientes encuentre su mezcla favorita y a la vez, que explore nuestras amplias selecciones más singulares."
        }
        seccion3={
          "Cada café que ofrecemos exige un perfil de tostado único para crear una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en un delicado balance en calor, tiempo y arte, nuestros maestros en el tostado hacen resaltar estas únicas características de cada grano de café."
        }
      />
    </div>
  );
}

export default CafePage;
