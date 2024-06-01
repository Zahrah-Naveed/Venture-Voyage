export const getUsers = async (dispatch) => {
    dispatch({ type: 'START_LOADING' });
    const result = await fetchData({ url, method: 'GET' }, dispatch);
    if (result) {
      dispatch({ type: 'UPDATE_USERS', payload: result });
    }
    dispatch({ type: 'END_LOADING' });
  };