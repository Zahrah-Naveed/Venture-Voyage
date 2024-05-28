export const getRooms = async (dispatch) => {
    dispatch({ type: 'START_LOADING' });
    const result = await fetchData({ url, method: 'GET' }, dispatch);
    if (result) {
      dispatch({ type: 'UPDATE_ROOMS', payload: result });
    }
    dispatch({ type: 'END_LOADING' });
  };