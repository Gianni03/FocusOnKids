import Imagen from '../img/Imagen';
import Fecha from './Fecha';
// import TarjetaItems from './TarjetaItems';
import style from './tarjeta.module.css';
import defaultImage from '../../assets/novedades/novedad2.svg';

export default function Tarjeta({ image, date, place, contact }) {
  return (
    <div className={style.card__container}>
      {/* <TarjetaItems /> */}
      <div className={style.card}>
        <div className={style.card__img}>
          <Imagen src={image || defaultImage} alt="novedad" />
        </div>
        <div className={style.card__fecha}>
          <Fecha>{date || 'Desde 20.06.23'}</Fecha>
          <div className={style.card__lugar}>
            <span className={style.big}>{place || 'ROSARIO!'}</span>
            <div>
              <span className={style.arroba}>@ </span>
              <span className={style.contacto}> {contact || 'CONTACTAME'}</span>
            </div>
          </div>
        </div>
      </div>
      <p className={style.card__info}>
        5 Encuentros. <br />
        Curso destinado a profesionales de Terapia Ocupacional. <br />
        Online o presencial.
      </p>
      <div className={style.componente}>
        <span>VER FECHAS Y LUGAR ^</span>
      </div>
    </div>
  );
}
