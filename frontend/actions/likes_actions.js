import * as APIUtil from "../util/likes_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = (likeId) => ({
  type: REMOVE_LIKE,
  likeId
});

export const createLike = (like) => dispatch => (
  APIUtil.createLike(like).then( like2 => dispatch(receiveLike(like2)))
);

export const deleteLike = (likeId) => dispatch => (
  APIUtil.deleteLike(likeId).then( like => dispatch(removeLike(likeId)))
);
