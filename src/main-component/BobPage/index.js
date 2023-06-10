import React, {Fragment} from 'react';
import Navbar1 from '../../components/Navbar';
import Navbar2 from '../../components/Navbar2';
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';
import Bob from '../../components/Bob/Bob';

const BobPage =() => {
    return(
        <Fragment>
            <Navbar1/>
            {/*<Navbar2/>*/}
            <Bob/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BobPage;

