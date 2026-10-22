import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import './Header.scss';

const navItems = ['Todas Categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia'];

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <ul className="container header__benefits">
          <li><Icon name="shield" size={20} /> <span>Compra <strong>100% segura</strong></span></li>
          <li><Icon name="truck" size={20} /> <span><strong>Frete grátis</strong> acima de R$ 200</span></li>
          <li><Icon name="card" size={20} /> <span><strong>Parcele</strong> suas compras</span></li>
        </ul>
      </div>

      <div className="container header__main">
        <Logo />
        <form className="header__search" role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search" className="sr-only">Buscar produtos</label>
          <input id="search" type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar"><Icon name="search" size={28} /></button>
        </form>
        <div className="header__actions">
          <a href="#" aria-label="Meus pedidos"><Icon name="box" size={32} /></a>
          <a href="#" aria-label="Favoritos"><Icon name="heart" size={32} /></a>
          <a href="#" aria-label="Minha conta"><Icon name="user" size={32} /></a>
          <a href="#" aria-label="Carrinho"><Icon name="cart" size={32} /></a>
        </div>
      </div>

      <nav className="header__nav" aria-label="Categorias">
        <ul className="container header__nav-list">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#vitrine" className={item === 'Ofertas do dia' ? 'is-active' : ''}>{item}</a>
            </li>
          ))}
          <li className="header__nav-subscription"><a href="#"><Icon name="crown" size={20} /> Assinatura</a></li>
        </ul>
      </nav>
    </header>
  );
}
