class Like < ApplicationRecord
  belongs_to :liker,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'User'

  belongs_to :photo,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: 'Photo'
end
