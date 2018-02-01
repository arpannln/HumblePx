# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(username: "arpan", password: "password")
User.create(username: "DemoUser", password: "password")

100.times do
  Photo.create(title: "Wow what a picture",
    img_url: "https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=1055&q=80",
    author_id: 2
  )
end

Photo.create(title: "Wow what a picture",
  img_url: "https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=1055&q=80",
  author_id: 2
)

Photo.create(title: "Wow what a picture",
  img_url: "https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=1055&q=80",
  author_id: 2
)

Photo.create(title: "Wow what a picture",
  img_url: "https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=1055&q=80",
  author_id: 2
)

Photo.create(title: "Wow what a picture",
  img_url: "https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=1055&q=80",
  author_id: 2
)

Photo.create(title: "Wow what a picture",
  img_url: "https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=1055&q=80",
  author_id: 2
)

Photo.create(title: "Wow what a picture",
  img_url: "https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=1055&q=80",
  author_id: 2
)

Photo.create(title: "Wow what a picture",
  img_url: "https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=1055&q=80",
  author_id: 2
)


Photo.create(title: "Wow what a picture",
  img_url: "https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=1055&q=80",
  author_id: 2
)

Photo.create(title: "Wow what a picture",
  img_url: "https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=1055&q=80",
  author_id: 2
)

Photo.create(title: "Wow what a picture",
  img_url: "https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=1055&q=80",
  author_id: 2
)
