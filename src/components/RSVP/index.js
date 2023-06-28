import React, { useState} from 'react'
import SimpleReactValidator from 'simple-react-validator';
import SectionTitle from '../../components/SectionTitle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import vec1 from '../../images/rsvp/flower1.png';
import vec2 from '../../images/rsvp/flower2.png';

import shape1 from '../../images/rsvp/shape1.png';
import shape2 from '../../images/rsvp/shape2.png';
//import {v4 as uuidv4} from 'uuid';
import {db} from '../../firebase/firebase';

//const RSVP = (props) => {
const RSVP = (props) => {
    //const ref = firebase.firestore().collection("weddingrsvp");
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_CENTER
        })
    }
    const [forms, setForms] = useState({});
    /*const [forms, setForms] = useState({
        Attend: '',
        Email: '',
        Guest: '',
        Meal: '',
        Name: '',
        id: ''       
    });*/

 

    const handleChange = (e) => {
        e.persist();
        setForms((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }))
    }
    function addRsvp(newRsvp) {
        db
          //.doc() use if for some reason you want that firestore generates the id
          .doc(newRsvp.id)
          .set(newRsvp)
          .then(() => {
            setForms((prev) => [newRsvp, ...prev]);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    const changeHandler = e => {
        console.log(e.target.name, e.target.value);
        setForms({ 
            ...forms,
            [e.target.name]: e.target.value
        })        
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {        
        e.preventDefault();
        console.log("forms", forms);
        if (validator.allValid()) {
            console.log("submit success");
            validator.hideMessages();
            sendMail();
            
        } else {
            console.log("submit error");
            validator.showMessages();
        }
    }
//https://us-central1-project-1-1557190380231.cloudfunctions.net/submit
    const sendMail = async () => {
        console.log("sendMail");
        const res = await fetch('https://us-central1-project-1-1557190380231.cloudfunctions.net/submit', {
            method: "POST",            
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(forms)
        });
        const json = await res.json();
        console.log(json);

        db.collection('RSVP').add({
            Attend: forms.Attend,
            Email: forms.Email,
            /*Guest: forms.Guest,
            Meal1: forms.Meal1,
            Meal2: forms.Meal2,*/
            Name: forms.Name,
            Song1: "",
            Song2: "",
            time: new Date(),
        })
        showToastMessage();
        setForms({
            Attend: '',
            Email: '',
            /*Guest: '',
            Meal1: '',
            Meal2: '',*/
            Name: '',
            Song1: '',
            Song2: ''
        })
    }

    return (
        <section className={`wpo-contact-section ${props.pt}`} id="RSVP">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="wpo-contact-form-area">
                        <SectionTitle MainTitle={'Are you attending?'} />
                      {/*  <p className=''>This is a couples or singles only event</p>*/}            
                        <form onSubmit={submitHandler} className="contact-validation-active" >
                        <div className="radio-buttons" onChange={e => changeHandler(e)}>
                                <p>
                                    {/*<input type="radio" id="attend" name="radio-group" defaultChecked />*/}
                                    <input value="Yes" type="radio" id="Yes" name="Attend" />
                                    <label htmlFor="Yes">Yes, I will be there</label>
                                </p>
                                <p>
                                    <input value="No" type="radio" id="No" name="Attend"/>
                                    <label htmlFor="No">Sorry, I can’t come</label>
                                </p>
                            </div>
                            {/*<div className="form-field">                            
                                <select
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    value={forms.Guest}
                                    type="text"
                                    className="form-control"
                                    name="Guest">
                                    <option>Number of guests</option>
                                    <option>01</option>
                                    <option>02</option>
                                </select>
                                {validator.message('Guest', forms.Guest, 'required')}
                            </div>*/}
                            <div className="form-field">
                                <input
                                    value={forms.Name}
                                    type="text"
                                    name="Name"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    className="form-control"
                                    placeholder="Name/s" />
                                {validator.message('Name', forms.Name, 'required|alpha_space')}
                            </div>
                            <div className="form-field">
                                <input
                                    value={forms.Email}
                                    type="email"
                                    name="Email"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    className="form-control"
                                    placeholder="Your Email" />
                                {validator.message('Email', forms.Email, 'required|Email')}
                            </div>
                            <div className="form-field">
                                <label>What song you would like dancing in the party?</label>
                                <input
                                value={forms.Song1}
                                type="text"
                                name="Song1"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                className="form-control"
                                placeholder="I'll like to dance ....." />
                                {/*{validator.message('Song1', forms.Song1, 'required')}*/}
                            </div>
                            <div className="form-field">
                                <label>What other song would you like dancing?</label>
                                <input
                                value={forms.Song2}
                                type="text"
                                name="Song2"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                className="form-control"
                                placeholder="I'll like to dance also....." />
                                {/*{validator.message('Song2', forms.Song2, 'required')}*/}
                            </div>
                            {/*<div className="form-field">
                                <label>First Guest Meal Choice</label>
                                <select
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    value={forms.Meal1}
                                    type="text"
                                    className="form-control"
                                    name="Meal1">
                                    <option>Click the dropdown/ Elija con la flecha hacia abajo</option>
                                    <option>Beef/Res</option>
                                    <option>Chicken/Pollo</option>
                                    <option>Fish/Pescado</option>
                                    <option>Vegetarian/Vegetariano</option>
                                    <option>Vegan/Vegano</option>
                                </select>
                             {/*}   {validator.message('meal', forms.Meal1, 'required')}*/}
                            {/*</div>
                            <div className="form-field">
                                <label>Second Guest Meal Choice</label>
                                <select
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    value={forms.Meal2}
                                    type="text"
                                    className="form-control"
                                    name="Meal2">
                                    <option>Click the dropdown/ Elija con la flecha hacia abajo</option>
                                    <option>Beef/Res</option>
                                    <option>Chicken/Pollo</option>
                                    <option>Fish/Pescado</option>
                                    <option>Vegetarian/Vegetariano</option>
                                    <option>Vegan/Vegano</option>
                                </select>
                                {/*{validator.message('meal', forms.Meal2, 'required')}*/}
                           {/* </div>*/}
                            <div className="submit-area">
                                <button type="submit" className="theme-btn">Submit Now</button>
                                {/*<button className="theme-btn" onClick={() => addRsvp({ forms, id:uuidv4() })}>Submit Now</button>*/}
                            </div>
                        </form >
                    </div>
                    <div className="vector-1">
                        <img src={vec1} alt="" />
                    </div>
                    <div className="vector-2">
                        <img src={vec2} alt="" />
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <img src={shape1} alt=""/>
            </div>
            <div className="shape-2">
                <img src={shape2} alt=""/>
            </div>
        </section>
    )
}
export default RSVP;
