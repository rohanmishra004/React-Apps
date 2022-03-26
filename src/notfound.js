import { Link } from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>sorry</h1>
            <p>Page cannot be found</p>
            <Link to='/'>Back to the HomePage</Link>
        </div>
     );
}
 
export default NotFound;