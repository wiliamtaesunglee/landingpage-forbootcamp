import React from 'react'
import style from './Calendar.module.css'
import Cards from '../cards/Cards'
import ScrollButton from '../scrollButton/ScrollButton'

const Calendar = () => (
  <section className={style.section}>
    <div className={style.div}>
    <h3 className={style.title}>Calendário das aulas ao vivo</h3>
    <span className={style.span}></span>
    <Cards
      number='1'
      date='18/11/2019'
      title='TUDO QUE VOCÊ PRECISA SABER ANTES DE COMEÇAR A TREINAR.'
      text={['Anatomia da mente de um campeão', 'Como se alimentar pré-treino', 'Ambiente de treino', 'A diferença que música pode fazer']}
    />
    <Cards
      number='2'
      date='19/11/2019'
      title='COMO OS MÚSCULOS FUNCIONAM E SÃO CONSTRUÍDOS'
      text={['Tipos de contração muscular', 'Fibras musculares e seu impacto', 'Por que micro-lesões são importantes', 'Teoria da super compensação']}

    />
    <Cards
      number='3'
      date='20/11/2019'
      title='O QUE A MUSCULAÇÃO TRAZ ALÉM DE  MÚSCULOS?'
      text={['Impactos no perfil lipídico (gordura)', 'Como afastar pré-diabetes de você?', 'Homens que treinam têm mais saúde e melhor imunidade. Vivem mais e melhor.']}

    />
    <Cards
      number='4'
      date='21/11/2019'
      title='VOCÊ ESTÁ TREINANDO - E AGORA?'
      text={['Sua postura pode melhorar resultados?', 'Articulações são seu bem mais precioso', 'Quanto peso você precisa pra crescer?']}
    />
    <Cards
      number='5'
      date='22/11/2019'
      title='É AQUI QUE O BICHO PEGA: BIOMECÂNICA E FISIOLOGIA'
      text={['Como tirar vantagem das articulações?', 'Articulações + Músculos movem tudo!', 'Como manter intensidade sem lesões?', 'O que acontece quando vc “rouba”?']}
    />
    <Cards
      number='6'
      date='23/11/2019'
      title='PESOS E REPETIÇÕES - O QUE FUNCIONA DE VERDADE PARA HIPERTROFIA?'
      text={['Relação entre carga e repetições', 'Tonelagem é o nome do jogo', 'Se eu te contasse um segredo, seria esse!']}
    />
    <Cards
      number='7'
      date='24/11/2019'
      title='COMO COMBINAR OS EXERCÍCIOS E OS GRUPOS P/ TER RESULTADOS INSANOS'
      text={['Como dividir seu treino para crescer?', 'Dividir é o certo pra todos os casos? ', 'AB, ABC, ABCD, Qual o melhor pra você?']}
    />
  </div>

  <ScrollButton/>
  </section>
)

export default Calendar
