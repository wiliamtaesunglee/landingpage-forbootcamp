import React from 'react'
import style from './EmbedVideo.module.css'

const EmbedVideo = () => (

  <div className={style.video}>
    <div className={style.img}>
    <img alt='semanadahipertrofia' src="http://static.photongroup.com/protocolmass/bootcamp/bootcamp-logo.png"/>
    </div>

    <div className={style.videoDiv}>
      <iframe title='youtube-video' className={style.embed} type="text/html" src='https://www.youtube.com/embed/pMdiF3AKNrY?autoplay=1&controls=1' width='100%' height='100%' frameborder='0'/>
    </div>

    <div className={style.facebookComents}>
      <div
        class="fb-comments"
        data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
        data-width=""
        data-numposts="5">
      </div>
    </div>
  </div>

)

export default EmbedVideo
