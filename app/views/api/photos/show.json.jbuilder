json.extract! @photo, :id, :title, :img_url, :likers, :caption
json.author do
  json.partial! '/api/users/user', user: @photo.author
end



json.currentUserLikes @photo.likers.include?(current_user)
