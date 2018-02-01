json.extract! @photo, :id, :title, :img_url
json.author do
  json.partial! '/api/users/user', user: @photo.author
end
