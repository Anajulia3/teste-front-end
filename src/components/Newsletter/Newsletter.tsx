import { useState, type FormEvent } from 'react';
import './Newsletter.scss';

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="newsletter section" aria-labelledby="newsletter-title">
      <div className="container newsletter__inner">
        <div className="newsletter__text">
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__fields">
            <label className="sr-only" htmlFor="nl-name">Nome</label>
            <input id="nl-name" type="text" placeholder="Digite seu nome" required />
            <label className="sr-only" htmlFor="nl-email">E-mail</label>
            <input id="nl-email" type="email" placeholder="Digite seu e-mail" required />
            <button type="submit">INSCREVER</button>
          </div>
          <label className="newsletter__terms">
            <input type="checkbox" required /> Aceito os termos e condições
          </label>
          {sent && <p role="status" className="newsletter__done">Inscrição realizada com sucesso!</p>}
        </form>
      </div>
    </section>
  );
}
