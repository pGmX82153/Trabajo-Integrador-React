import "./info.css";

/**
 * Componente utilizado en la pagina de nuestro cafe 
*/

export default function Info({
  img,
  title,
  seccion1,
  seccion2,
  seccion3,
  backgroundColor,
  color,
  height,
}) {
  return (
    <div className={`info__container`}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        height: `${height}px`,
      }}
    >
      <div className={`info__text`}>
        
        <p>{seccion1}</p>
        <div
        style={{ backgroundImage: `url(${img})` }}
        className={`info__img-container`}
        />
        <p>{seccion2}</p>
        <h2>{title}</h2>
        <p>{seccion3}</p>
        
      </div>
    </div>
  )

}
