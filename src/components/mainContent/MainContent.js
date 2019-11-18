import React from 'react';
import style from './MainContent.module.css';

const MainContent = () => (
  <div className={style.video}>
    <div className={style.videoDiv}>
      <iframe title='youtube-video' className={style.embed} type="text/html" src='https://www.youtube.com/embed/pMdiF3AKNrY?autoplay=1&controls=1' width='100%' height='100%' frameborder='0'/>
    </div>

    <h1 className={style.objectiveTime}>Acelere seus resultados sem botar a mão no bolso!</h1>

    <p className={style.videoText}>
      Na maratona de 7 Lives da Semana da Hipertrofia eu vou revelar pra você de um jeito descomplicado o que separa os homens dos meninos! Meu objetivo é deixar você pronto pra começar o seu próprio projeto de transformação, pra entrar em 2020 com tudo! Vem comigo!
    </p>

    <ul className={style.list}>
      <li>100% online</li>
      <li>100% gratuíto</li>
      <li>100% ao vivo</li>
    </ul>

    <p className={style.formText}>Faça seu cadastro abaixo para receber a sequência de lives!</p>
  </div>

)

export default MainContent
