import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import Navbar1 from '../../components/Navbar';
import Navbar2 from '../../components/Navbar2';
import BlogList from '../../components/BlogList'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';

const BlogPage =() => {
    return(
        <Fragment>
            <Navbar1/>
            {/*<Navbar2/>*/}
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            {/*<BlogList/>*/}
            <BlogList blLeft={'order-lg-2'} blRight={'order-lg-1'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPage;

