# json.extract! @photos,
json.photos do
  @photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :title, :img_url
      json.author do
        json.partial! '/api/users/user', user: photo.author
      end
    end
  end
end
