import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { addSongActions, getSongActions, editSongActions } from '../../actions/songsActions';

const SongForm = ({history, match}) => {
    const {handleSubmit, errors, register} = useForm();
    const dispatch = useDispatch();
    const song = useSelector(state => state.songs.songs);
    const [title, setTitle] = useState('New Song');

    const submitForm = (data) => {
        if (match.params.id) {
            dispatch(editSongActions({id: +match.params.id, ...data}))
            history.push('/songs')
        } else {
            dispatch(addSongActions(data));
            history.push('/songs');
        }   
    }

    useEffect(() => {
        if (match.params.id) {
            setTitle('Edit Song');

            dispatch(getSongActions(+match.params.id));
        }
    }, [dispatch, match.params.id])
    return <div className="row justify-content-center mt-5">
    <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4 font-weight-bold ">{title}</h2>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control  "
                placeholder="Song Title"
                name="title"
                ref={register({required: true})}
                defaultValue={song.title}
              />
              {errors.title && (
                  <div className="font-weight-bold alert alert-danger text-center mt-4">
                    This field is required
                  </div>
                )}
            </div>
            <div className="form-group">
              <label>Url</label>
              <input
                type="text"
                className="form-control  "
                placeholder="Song URL"
                name="url"
                ref={register({register: true})}
                defaultValue={song.url}
              />
              {errors.url && (
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                  This field is required
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Rating</label>
              <input
                type="number"
                className="form-control"
                placeholder="Song Rating"
                name="rating"
                ref={register({register: true})}
                defaultValue={song.rating}
              />
              {errors.rating && (
                  <div className="font-weight-bold alert alert-danger text-center mt-4">
                    This field is required
                  </div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-info rounded-pill font-weight-bold text-uppercase d-block w-100"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>;
}

export default SongForm;