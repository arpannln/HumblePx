export const fetchAllPhotos = () => (
  $.ajax({
    method: "GET",
    url: "api/photos",
  })
);

export const fetchPhoto = (id) => (  //check this request
  $.ajax({
    method: "GET",
    url: `api/photos/${id}`
  })
);

export const createPhoto = (photo) => {
  return $.ajax({
    method: "POST",
    url: `api/photos`,
    data: photo
  });
};


export const updatePhoto = (photo) => (
  $.ajax({
    method: "PATCH",
    url: `api/photos/${photo.id}`,
    data: photo
  })
);

export const deletePhoto = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/photos/${id}`,
  })
);
