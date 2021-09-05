import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchSongsActions } from '../../actions/songsActions';

const Songs = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSongsActions())
    }, [dispatch])

    

    return (
        <div>
          <h2 className="text-center">Songs</h2>  
        
          <table className="table table-striped .table-hover shadow text-center">
            <thead className="bg-info table-dark">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Url</th>
                <th scope="col">Rating</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Faded by Alan Walker</td>
                <td>https://www.youtube.com</td>
                <td>5</td>
                <td>
                    <button className="btn btn-info">Edit</button>
                    <button className="btn btn-info">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
}

export default Songs;