import React, {Fragment} from 'react';
import Navbar1 from '../../components/Navbar';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import BlogSingle from '../../components/BlogDetails'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Footer from '../../components/footer/Footer';

const BlogDetailsLeftSiide =() => {
    const { id } = useParams()
    const BlogDetails = blogs.find(item => item.id === id)
    
    return(
        <Fragment>
            {/*<Navbar1/>*/}
            <Navbar2/>
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'}/>
            {/*<PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/>*/}
            <BlogSingle blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Scrollbar/>
            <Footer/>
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


