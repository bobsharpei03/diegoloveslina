import React from "react";
import SectionTitle from "../SectionTitle";
import timg1 from '../../images/team/img-1.jpg'
import timg2 from '../../images/team/img-2.jpg'
import timg3 from '../../images/team/img-3.jpg'
import timg4 from '../../images/team/img-4.jpg'
import timg5 from '../../images/team/img-5.jpg'
import timg6 from '../../images/team/img-6.jpg'

import shape1 from '../../images/team/shape1.jpg'
import shape2 from '../../images/team/shape2.jpg'


const brideGrooms = [
  {
    id:'1',
    tImg:timg1,
    name:'Lina Olga Chavez',
    title:'Brides Mother',
    message: 'Mas conocida como Doña Olgita. Distinguida como solo ella lo puede ser, espera ser el alma de la fiesta'
 },
 {
    id:'2',
    tImg:timg2,
    name:'Amparo Flores',
    title:'Brides Sister',
    message: 'Amparo es la hermana mayor, "Ella ya sabia que Diego y Lina se iban a casar"' 
 },
 {
    id:'3',
    tImg:timg3,
    name:'Maria Flores Zena',
    title:'Brides Sister',
    message: 'Mariol es la mas "nerviuda" con los preparativos de el matrimonio entre Diego y Lina, ella espera bailar la conga esa noche'
 },
 {
    id:'4',
    tImg:timg4,
    name:'Ana Cecilia Flores',
    title:'Bride’s Sister',
    message: 'Popularmente conocida como la "Cutus", La mas carismatica de las hermanas, ella junto a Amparo, son las que mas esperan la comi-comi'
 },
 {
    id:'5',
    tImg:timg5,
    name:'German Flores',
    title:'Bride’s older Brother',
    message: 'El mayor de los hermanos, espera bailar con el puño arriba toda la noche como en sus tiempos mosos en el Castelo'
 },
 {
    id:'6',
    tImg:timg6,
    name:'Javier Flores',
    title:'Bride’s younger Brother',
    message: 'Javier parece serio y malhumorado, pero cuando esta en familia siempre pone la picardia'
 },
]


const BrideGrooms = (props) => {

  return (
      <section className={`wpo-team-section ${props.tClass}`} id="bridegroom">
        <div className="container">
          <SectionTitle MainTitle={'Bridesmaids & Groomsmen'} />
          <div className="wpo-team-wrap">
            <div className="row">
              {brideGrooms.map((brideGroom, tm) => (
                <div className="col col-lg-4 col-md-6 col-sm-12 col-12" key={tm}>
                    <div className="wpo-team-item">
                        <div className="wpo-team-img">
                            <div className="wpo-team-img-inner">
                                <img src={brideGroom.tImg} alt="" />
                            </div>
                            <div className="shape-1"><img src={shape1} alt=""/></div>
                            <div className="shape-2"><img src={shape2} alt=""/></div>
                        </div>
                        <div className="wpo-team-text">
                            <h3>{brideGroom.name}</h3>
                            <p>{brideGroom.title}</p>
                            <span>{brideGroom.message}</span>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default BrideGrooms;