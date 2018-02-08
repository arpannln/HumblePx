# json.extract! @photos,
  @photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :title, :img_url, :likers
      json.author do
        json.partial! '/api/users/user', user: photo.author
      end
      json.currentUserLikes photo.likers.include?(current_user)
    end
  end
