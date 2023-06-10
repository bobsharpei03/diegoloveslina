import React from 'react';
import LocationMap from '../Modal';
import SectionTitleS2 from '../SectionTitleS2';

const Events = [
    {
        title:'The Reception: Verdi\'s of Westbury',
        li1:'Sunday, 03 Sep, 2023 6:30 PM – 12:00 AM',
        li2:'680 Old Country Rd. Westbury, NY 11590, USA',
        li3:'+1 516-334-4552'
    },
    {
        title:'Parish: St. Brigid Catholic Church',
        li1:'Sunday, 03 Sep, 2023 4:00 PM – 5:00 PM',
        li2:'80 Post Rd. Westbury, NY 11590, USA',
        li3:'+1 516-334-0021'
    },
    {
        title:'Wedding Party',
        li1:'Monday, 25 Sep, 2022 1:00 PM – 4:30 PM',
        li2:'Estern Star Plaza, Road 123, USA',
        li3:'+1 234-567-8910'
    },

]

const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="event">
            <div className="container">
                <SectionTitleS2 MainTitle={'When & Where'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>{event.title}</h2>
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li>{event.li3}</li>
                                            <li><LocationMap/></li>
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