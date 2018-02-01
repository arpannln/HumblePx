json.extract! @photo, :id, :title, :img_url, :author
json.author_name @photo.author.username
