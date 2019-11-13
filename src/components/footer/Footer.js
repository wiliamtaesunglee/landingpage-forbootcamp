import React from 'react'
import style from './Footer.module.css'

const Footer = () => (
<section className={style.section}>
  <div className={style.div}>

    <a className={style.logo} href=''>
      <img src='http://static.photongroup.com/protocolmass/bootcamp/iridium-logo.png' />
    </a>

    <p className={style.text}>
     A Iridium Labs é uma empresa de suplementos esportivos e smart foods, que expandiu seus horizontes para entregar para seus clientes cada vez mais conteúdo e tecnologia em Fitness. Nossa missão é ajudar você a ultrapassar seus limites e conquistar seus objetivos.
    </p>
    <p className={style.text}>
      O Protocol Mass é o nosso primeiro programa de treinamento avançado - criado com o Personal Trainer Laercio Refundini CREF 095569-G/SP para acelerar seu processo de hipertrofia muscular.
    </p>
    <p className={style.text}>
      Vem com a gente!
    </p>
    <a className={style.social} href="https://www.facebook.com/IridiumLabsBR/">
      <img src='http://static.photongroup.com/protocolmass/bootcamp/facebook.png' />
    </a>

    <a className={style.social}  href="https://www.instagram.com/iridiumlabsbrasil/">
      <img src='http://static.photongroup.com/protocolmass/bootcamp/instagram.png' />
    </a>

    <a className={style.social}  href="https://www.youtube.com/channel/UCcpHQ-vfrQ-BL9GjYafNmbg">
      <img src='http://static.photongroup.com/protocolmass/bootcamp/yt.png' />
    </a>

  </div>
</section>
)

export default Footer
