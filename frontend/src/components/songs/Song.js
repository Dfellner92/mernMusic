import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import alert from 'sweetalert2';

import { deleteSongActions } from '../../actions/songsActions';

const Song = ({ song }) => {
    const dispatch = useDispatch();
    const handleDeleteSong = (id) => {
        alert
          .fire({
            title: 'Delete Song',
            text: 'The deleted item cannot be recovered!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8e44ad',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete',
          })
          .then((result) => {
            if (result.value) {
              alert.fire(
                'Removed',
                'The item was successfully removed.',
                'success'
              );
              dispatch(deleteSongActions(id));
            }
          });
      };
    return (
        <tr>
            <td>{song.title}</td>
            <td>{song.url}</td>
            <td>{song.rating}</td>
            <td>
                <Link to={`/songs/edit/${song._id}`} className="btn btn-outline-info px-4">
                    Edit
                </Link>

                <button className="btn btn-outline-danger ml-2"
                onClick={() => handleDeleteSong(song._id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
};

export default Song;
