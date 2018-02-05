@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :img_url, :cover_url
  end
end
