import React from 'react'
import './Hero.scss'

const Hero = React.createClass({
  render() {
    return (
      <div className="hero">
        <h1 className="hero-title">
          Torne-se um desenvolvedor de software profissional.
        </h1>
        <p className="hero-subtitle">
          Finalmente, uma plataforma de ensino para o nosso século.
          Aprenda mais rápido do que nunca e receba ofertas de emprego das melhores empresas do mercado.
          <br/>
          Qual vai ser o seu caminho? 
          <br/>
          Estamos animados para descobrir.
        </p>
      </div>
    )
  }
})

export default Hero