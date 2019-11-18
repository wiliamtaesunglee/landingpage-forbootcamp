import React from 'react'
import style from './EmbedVideo.module.css'

const EmbedVideo = () => (

  <div className={style.video}>
    <div className={style.videoDiv}>
      <iframe title='youtube-video' className={style.embed} type="text/html" src='https://www.youtube.com/embed/pMdiF3AKNrY?autoplay=1&controls=1' width='100%' height='100%' frameborder='0'/>
    </div>

    <div className={style.facebookComents}>
    <iframe
      name="fea49a08844a68"
      title="fb:comments Facebook Social Plugin"
      allowtransparency="true"
      allowfullscreen="true"
      scrolling="no"
      allow="encrypted-media"
      //style="border: medium none; visibility: visible; width: 100%; height: 281px;"
      src="https://www.facebook.com/v3.2/plugins/comments.php?app_id=1991473767799229&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Df2dbd2af090654e%26domain%3Dwww.feitodeiridium.com.br%26origin%3Dhttps%253A%252F%252Fwww.feitodeiridium.com.br%252Fffc8015ab121a2%26relation%3Dparent.parent&amp;container_width=900&amp;height=100&amp;href=https%3A%2F%2Fwww.feitodeiridium.com.br%2Fprotocol-mass-programa-hipertrofia-revolucionar-ganhos%2F&amp;locale=pt_BR&amp;numposts=10&amp;sdk=joey&amp;version=v3.2"
      class=""
      frameborder="0">
    </iframe>
    </div>
  </div>

)

export default EmbedVideo
