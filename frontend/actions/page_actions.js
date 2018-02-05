export const RECEIVE_PAGE = "RECEIVE_PAGE";

const receivePage = () => ({
  type: RECEIVE_PAGE,
});

export const changePage = () => (dispatch) => dispatch(receivePage());
