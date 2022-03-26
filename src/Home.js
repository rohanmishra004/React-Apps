import { useState , useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './usefetch';

const Home = () => {
    const {data:blogs , isPending, error} = useFetch('http://localhost:8000/blogs')
    
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading .... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* we are using && as conditional JS , because once left is true only then code on right will be executed */}
            {/* we are using property from Home(parent Component) to BlogList(child) using prop */}
            
        </div>
     );
}
 

 
export default Home;