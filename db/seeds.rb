# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all

user1 = User.create(username: "arpan", password: "password", img_url: "http://www.skywardimaging.com/wp-content/uploads/2015/11/default-user-image-300x300.png", cover_url: "https://images.unsplash.com/photo-1494707633652-f43986561810?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4dfad53b74a1116eef8b47cf50cba066&auto=format&fit=crop&w=1524&q=80" )
user2 = User.create(username: "DemoUser", password: "password", img_url: "http://cdn.playbuzz.com/cdn/7c64b93c-5ece-4024-bfde-1a15b859f83b/dae5bd0c-8849-4071-8c13-e00198cf5fd3.png", cover_url: "https://images.unsplash.com/photo-1494707633652-f43986561810?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4dfad53b74a1116eef8b47cf50cba066&auto=format&fit=crop&w=1524&q=80")

10.times do
  Photo.create(title: "Wow what a picture",
    img_url: "https://images.unsplash.com/photo-1517422688858-c17ab068121c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d54ae00017c1c7bf5230e45bde3e0e6e&auto=format&fit=crop&w=1055&q=80",
    author_id: user1.id
  )
  Photo.create(title: "Wow even better picture!",
    img_url: "https://images.unsplash.com/photo-1517220639352-4efe7490c4a0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b9709b60f57d34b9be7dca91e531543&auto=format&fit=crop&w=1473&q=80",
    author_id: user2.id
  )
  Photo.create(title: "Sexy af pic",
    img_url: "https://images.unsplash.com/photo-1516474065851-b1259b79ab2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f6c95ee29065191e6a11604b4198074&auto=format&fit=crop&w=1050&q=80",
    author_id: user1.id
  )

  Photo.create(title: "Spiciest of pics",
    img_url: "https://images.unsplash.com/photo-1516664807529-7a82ca7d8665?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=debe91178498564b8c45aae1dbf8d060&auto=format&fit=crop&w=1050&q=80",
    author_id: user2.id
  )
  Photo.create(title: "Super spicy pic",
    img_url: "https://images.unsplash.com/photo-1511881830150-850572962174?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b5223b0ec6feade9046014891446af0&auto=format&fit=crop&w=634&q=80",
    author_id: user2.id
  )

  Photo.create(title: "LOL Spice",
    img_url: "https://images.unsplash.com/photo-1516319614097-58ca30cc6bc7?ixlib=rb-0.3.5&s=42823d93f2545a0755abbcdd1f8bda06&auto=format&fit=crop&w=658&q=80",
    author_id: user1.id
  )

  Photo.create(title: "SPICE",
    img_url: "https://images.unsplash.com/photo-1514749333461-32dfa7b1c3ad?ixlib=rb-0.3.5&s=71563377dbaed54d48a44c8d72c64e1b&auto=format&fit=crop&w=634&q=80",
    author_id: user1.id
  )

  Photo.create(title: "SPICE level 9000",
    img_url: "https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-0.3.5&s=beb062aa1ec542c5cc6cb4ce2d9b2e61&auto=format&fit=crop&w=700&q=80",
    author_id: user2.id
  )

  Photo.create(title: "Oh boy what a pic",
    img_url: "https://images.unsplash.com/photo-1514553237570-db8f22c96fd2?ixlib=rb-0.3.5&s=f3b08b697976b0cc126bf8d887402bda&auto=format&fit=crop&w=701&q=80",
    author_id: user1.id
  )

  Photo.create(title: "Dude this pic tho",
    img_url: "https://images.unsplash.com/photo-1511845241939-402489d3d670?ixlib=rb-0.3.5&s=62600abda1aad5229627953ae68cc76a&auto=format&fit=crop&w=634&q=80",
    author_id: user2.id
  )






end
