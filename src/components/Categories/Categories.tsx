import './Categories.scss';

const categories = [
  { name: 'Tecnologia', image: 'tecnologia' },
  { name: 'Supermercado', image: 'supermercado' },
  { name: 'Bebidas', image: 'bebidas' },
  { name: 'Ferramentas', image: 'ferramentas' },
  { name: 'Saúde', image: 'saude' },
  { name: 'Esportes e Fitness', image: 'esportes' },
  { name: 'Moda', image: 'moda' },
];

export default function Categories() {
  return (
    <section className="categories container" aria-label="Compre por categoria">
      <ul className="categories__list">
        {categories.map((c, i) => (
          <li key={c.name}>
            <a href="#vitrine" className={`categories__item ${i === 0 ? 'is-active' : ''}`}>
              <span className="categories__circle">
                <img src={`/images/categorias/${c.image}.png`} alt="" width={61} height={61} />
              </span>
              <span className="categories__name">{c.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
