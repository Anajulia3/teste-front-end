import Logo from '../Logo/Logo';
import './Brands.scss';

export default function Brands() {
  return (
    <section className="brands section container" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title">Navegue por marcas</h2>
      <ul className="brands__list">
        {Array.from({ length: 5 }, (_, i) => (
          <li key={i} className="brands__item"><Logo variant="brand" /></li>
        ))}
      </ul>
    </section>
  );
}
