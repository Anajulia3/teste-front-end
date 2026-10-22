import './Banners.scss';

interface Props { titles?: [string, string]; }

export default function Banners({ titles = ['Parceiros', 'Parceiros'] }: Props) {
  return (
    <section className="banners section container" aria-label="Destaques">
      {titles.map((title, i) => (
        <article key={i} className="banners__item">
          <h2 className="banners__title">{title}</h2>
          <p className="banners__text">Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#" className="banners__cta">Confira</a>
        </article>
      ))}
    </section>
  );
}
