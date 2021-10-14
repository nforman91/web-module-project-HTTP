import React from 'react';
import { Link, 
    // useHistory 
} from 'react-router-dom';

const MovieHeader = ()=> {
    // const { push } = useHistory();

    // const handleAddButton = () => {
    //     // console.log('clicked add new movie button')
    //     push('/movies/add');
    // }

    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>IMDB Movie Database</h2>
        </div>
        <div className="col-sm-6">
            <Link to='/movies/add' className="btn btn-success"><i className="material-icons">&#xE147;</i> 
                <span 
                    // onClick={handleAddButton}
                >Add New Movie</span></Link>
            <Link to="/movies" className="btn btn-primary">View All Movies</Link>
        </div>
        </div>
    </div>);
}

export default MovieHeader;