import { CTAContact } from '../components/cta/CTAContact';
import { Layout } from '../components/layout/Layout';
import { Title } from '../components/title/Title';
import CTASocialMedia from '../components/cta/CTASocialMedia';

import style from './novedades.module.css';
import Tarjeta from '../components/tarjeta/Tarjeta';
import novedad1 from '../assets/novedades/novedad1.svg';
import novedad2 from '../assets/novedades/novedad2.svg';
import novedad3 from '../assets/novedades/novedad3.svg';
import novedad4 from '../assets/novedades/novedad4.svg';

const NOVEDADES_DATA = [
  {
    image: novedad4,
    date: 'Desde 15.02.24',
    place: 'NEUQUEN!',
    contact: 'CONTACTAME',
  },
  {
    image: novedad2,
    date: 'Desde 20.06.23',
    place: 'ROSARIO!',
    contact: 'INFO AQUÍ',
  },
  {
    image: novedad3,
    date: 'Próximamente',
    place: 'VIRTUAL',
    contact: 'RESERVA',
  },
  {
    image: novedad1,
    date: 'En Curso',
    place: 'BS AS',
    contact: 'SUMATE',
  },
];

function Novedades() {
  return (
    <Layout>
      <Title>NOVEDADES</Title>
      <main className={style.container__novedades}>
        <section className={style.encuentros}>
          <div className={style.subTitulo}>
            <h2>NUEVOS ENCUENTROS</h2>
            <hr className={style.division} />
          </div>
          <div className={style.tarjeta}>
            {NOVEDADES_DATA.map((item, index) => (
              <Tarjeta
                key={`${item.place}-${index}`}
                image={item.image}
                date={item.date}
                place={item.place}
                contact={item.contact}
              />
            ))}
          </div>
        </section>
      </main>
      <CTAContact alwaysActive />
    </Layout>
  );
}

export default CTASocialMedia(Novedades);
