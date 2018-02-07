json.extract! user, :id, :username, :cover_url, :img_url
json.liked_photos user.liked_photo_ids
