//import deleteImages from './utils/deleteImages';
import fetchData from './utils/fetchData';

const url = process.env.REACT_APP_SERVER_URL + '/room';

export const createRoom = async (room, currentUser, dispatch) => {
  dispatch({ type: 'START_LOADING' });

  const result = await fetchData(
    { url, body: room, token: currentUser?.token },
    dispatch
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'The room has been added successfully',
      },
    });
    clearRoom(dispatch, currentUser);
    dispatch({ type: 'UPDATE_SECTION', payload: 0 });
    dispatch({ type: 'UPDATE_ROOM', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const getRooms = async (dispatch) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData({ url, method: 'GET' }, dispatch);
  if (result) {
    dispatch({ type: 'UPDATE_ROOMS', payload: result });
  }
  dispatch({ type: 'END_LOADING' });
};

export const deleteRoom = async (room, currentUser, dispatch) => {
  dispatch({ type: 'START_LOADING' });

  const result = await fetchData(
    { url: `${url}/${room._id}`, method: 'DELETE', token: currentUser?.token },
    dispatch
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'The room has been deleted successfully',
      },
    });

    dispatch({ type: 'DELETE_ROOM', payload: result._id });
    deleteImages(room.images, room.uid);
  }

  dispatch({ type: 'END_LOADING' });
};

