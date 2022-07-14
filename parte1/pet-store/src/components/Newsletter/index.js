import React from "react";
import "./Newsletter.css";
import iconHeart from "../../assets/img/iconHeart.png";

const index = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-info-container">
        <div className="news-icons">
          <img src={iconHeart} />
          <p className="news-text">Entrega gratuita apartir de R$ 99</p>
        </div>
        <div className="news-icons">
          <img src={iconHeart} />
          <p className="news-text">Parcelamento sem juros</p>
        </div>
        <div className="news-icons">
          <img src={iconHeart} />
          <p className="news-text">cadastre-se e ganhe desconto</p>
        </div>
      </div>

      <div className="newsletter-text-container">
        <p className="newsLetter-title">Assine nossa Newsletter</p>
        <p className="newsLetter-text">
          cadastre-se para receber nossas novidades e descontos exclusivos!
        </p>
      </div>

      <div className="newsletter-form-container">
        <form>
          <input
            className="input-name"
            placeholder="Nome"
            requireds
            type="text"
          />
          <input
            className="input-email"
            placeholder="E-mail"
            required
            type="email"
          />
          <button>enviar</button>
        </form>
      </div>
    </section>
  );
};

export default index;
