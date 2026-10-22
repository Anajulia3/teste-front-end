import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import './Footer.scss';

const columns = [
  { title: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__inner">
          <div className="footer__brand">
            <Logo variant="footer" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="footer__social" aria-label="Redes sociais">
              <li><a href="#" aria-label="Instagram"><Icon name="instagram" /></a></li>
              <li><a href="#" aria-label="Facebook"><Icon name="facebook" /></a></li>
              <li><a href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a></li>
            </ul>
          </div>
          <span className="footer__divider" aria-hidden="true" />
          <nav className="footer__columns" aria-label="Rodapé">
            {columns.map((col) => (
              <div key={col.title} className="footer__column">
                <h2>{col.title}</h2>
                <ul>{col.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <p className="footer__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </footer>
  );
}
