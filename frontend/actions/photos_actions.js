import * as APIUtil from "../util/photos_api_util";

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

const removePhoto = (photoId) => ({
  type: REMOVE_PHOTO,
  photoId
});

const receivePhotoErrors = (errors) => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});

const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

export const fetchAllPhotos = () => dispatch => (
  APIUtil.fetchAllPhotos().then( photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = (id) => dispatch => (
  APIUtil.fetchPhoto(id).then( photo => dispatch(receivePhoto(photo)),
    err => (dispatch(receivePhotoErrors(err.responsJSON))))
);

export const createPhoto = (photo) => dispatch => (
  APIUtil.createPhoto(photo).then( photo2 => dispatch(receivePhoto(photo2)),
    err => (dispatch(receivePhotoErrors(err.responsJSON))))
);

export const updatePhoto = (photo) => dispatch => (
  APIUtil.updatePhoto(photo).then( photo2 => dispatch(receivePhoto(photo2)),
    err => (dispatch(receivePhotoErrors(err.responsJSON))))
);

export const deletePhoto = (photoId) => dispatch => (
  APIUtil.deletePhoto(photoId).then( photo => dispatch(removePhoto(photoId)),
    err => (dispatch(receivePhotoErrors(err.responsJSON))))
);
