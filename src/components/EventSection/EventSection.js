import React from 'react';
import LocationMap from '../Modal';
import SectionTitleS2 from '../SectionTitleS2';

const Accomodations = [
    {
        title1:'Accomodation',
        li1:'Westbury, NY is located 45 minutes from New York City. We will not discourage out traveling guests from staying in Manhattan. We are sure the city has much more to offer, but traveling times can be less than ideal. For your convenience we have made a block reservation near the Church and Venue.',
        li2:'Hotel: Hilton Garden Inn',
        li3:'Address:1575 Privado Rd, Westbury, NY 11590',
        li4:'Phone: 516-683-8200',
        li5:'Discount Code: FMWEDD',
        li6:'You also highly recommend using pages such as airbnb.com to find affordable lodgging.',
        title2: 'Hospedaje',
        li7: 'Westbury, NY está aproximadamente a 45 minutos de la Ciudad de New York. Si bien es cierto Manhattan tiene mas que ofrecer, tengan en cuenta los tiempos por tráfico vehicular. Para facilitar las distancias de viaje, tenemos un código de descuento en un hotel, cercano a la iglesia y local de recepción.',
        li8:'Hotel: Hilton Garden Inn',
        li9:'Dirección: 1575 Privado Rd, Westbury, NY 11590',
        li10:'Teléfono: 516-683-8200',
        li11:'Código de Descuento: FMWEDD',
        li12: 'Es muy recomendable buscar hospedaje en páginas web como airbnb.com',
    },
]
const Information = [
    {
        title1:'Our small ones will be missed',
        li1:'To give all our guests the opportunity to enjoy themselves and celebrate without having to worry about little eyes and ears, we politely request no children. We thank you for your understanding.',
        li2:'Attire: Long dress, Suits and ties.',
        title2: 'Nuestros pequeños seran extrañados',
        li3: 'Para darles la oportunidad a todos nuestros invitados de disfrutar y celebrar esta noche sin preocupación de nuestro pequeños ojos y oídos, les pedimos gentilmente no traer niños. Agradecemos su comprensión.',
        li4: 'Vestimenta: Vestido largo, Traje y corbata',
    },
]
const Events = [
    {
        title:'Religious Ceremony',
        li1:'St. Brigid Catholic Parish',
        li2:'Sunday, 03 Sep, 2023 4:15 PM – 5:15 PM',
        li3:'85 Post Ave. Westbury, NY 11590, USA',
        li4:'+1 516-334-0021',
        li5:'Time: The religious ceremony will start promptly at 4:15pm.',
        li6:'Hora: La ceremonia relegiosa comenzará a las 4:15pm hora exacta.',
        li7:'Parking: There is a parking lot across the Parish. Post Rd is a extremely busy street on Sundays. Make plans to arrive at least 15 minutes earlier.',
        li8:'Estacionamiento: Hay un estacionamiento al frente de la Parroquia. La calle "Post Ave" es muy congestionada los Domingos. Haga planes para llegar 15 minutos antes.'
    },
    {
        title:'Cocktail Reception & Dinner',
        li1:'Verdi\'s of Westbury NY',
        li2:'Sunday, 03 Sep, 2023 6:00 PM – 1:00 AM',
        li3:'680 Old Country Rd. Westbury, NY 11590, USA',
        li4:'+1 516-334-4552',
        li5:'Parking: We will be offering free valet parking to all guests. However Uber or Taxi is highly encourage.',
        li6:'Estacionamiento: Todos nuestro invitados podrán usar el servicio de \'valet parking\' sin costo extra',
        li7:'Drinks: Full open bar will be available throughout the evening.',
        li8:'Bebidas: Ofreceremos servicio completo de licores, vinos, cerveza y sodas ',      
        li9:'Meal: Waitstaff will be taken your order at your table.',
        li10:'Comida: Los meseros tomarán la order en su mesa.',
    },
]

const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="event">
            <div className="container">
                <SectionTitleS2 MainTitle={'Details / Detalles'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Information.map((information, eitem) => (
                            <div className="col col-lg-12 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>{information.title1}</h2>
                                        <ul>
                                            <li>{information.li1}</li>
                                            <li>{information.li2}</li>                                                                   
                                            {/*<li><LocationMap/></li>*/}
                                        </ul>
                                        <h2>{information.title2}</h2>
                                        <ul>
                                            <li>{information.li3}</li>
                                            <li>{information.li4}</li> 
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-6 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>{event.title}</h2>
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li>{event.li3}</li>
                                            <li>{event.li4}</li>
                                            <li>{event.li5}</li>
                                            <li>{event.li6}</li>
                                            <li>{event.li7}</li>                                    
                                            <li>{event.li8}</li>                                    
                                            <li>{event.li9}</li>                                  
                                            <li>{event.li10}</li>                                  
                                            {/*<li><LocationMap/></li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Accomodations.map((accomodations, eitem) => (
                            <div className="col col-lg-12 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>{accomodations.title1}</h2>
                                        <ul>
                                            <li>{accomodations.li1}</li>
                                            <li>{accomodations.li2}</li>                                                                   
                                            <li>{accomodations.li3}</li>                                                                   
                                            <li>{accomodations.li4}</li>                                                                   
                                            <li>{accomodations.li5}</li>                                                                   
                                            <li>{accomodations.li6}</li>                                                                   
                                            {/*<li><LocationMap/></li>*/}
                                        </ul>
                                        <h2>{accomodations.title2}</h2>
                                        <ul>
                                            <li>{accomodations.li7}</li>
                                            <li>{accomodations.li8}</li>
                                            <li>{accomodations.li9}</li>
                                            <li>{accomodations.li10}</li>
                                            <li>{accomodations.li11}</li>
                                            <li>{accomodations.li12}</li>
                                        </ul>
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

export default EventSection;