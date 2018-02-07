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
    img_url: "https://images.unsplash.com/photo-1517449905587-f80695d63356?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=36dd87f58a5389c9820df1b6420e0f48&auto=format&fit=crop&w=1498&q=80",
  )

  Photo.create(title: "LOL Spice",
    img_url: "https://images.unsplash.com/photo-1503642551022-c011aafb3c88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e402f612efd271ac52647651246a2cd9&auto=format&fit=crop&w=750&q=80",
    author_id: user1.id
  )

  Photo.create(title: "SPICE",
    img_url: "https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b41bd48dc97da6dafe203676b2594c0&auto=format&fit=crop&w=750&q=80",
    author_id: user1.id
  )

  Photo.create(title: "SPICE level 9000",
    img_url: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f4033e517acff897a1536ed69fc9dab&auto=format&fit=crop&w=889&q=80",
    author_id: user2.id
  )

  Photo.create(title: "Oh boy what a pic",
    img_url: "https://images.unsplash.com/photo-1484690088595-faea13012c39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afc5c4f919c63950f55da41ac96267b9&auto=format&fit=crop&w=751&q=80",
    author_id: user1.id
  )

  Photo.create(title: "Dude this pic tho",
    img_url: "https://images.unsplash.com/photo-1505205296326-2178af1b47bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16ef2e41e10c852a17abf9ce4f430d62&auto=format&fit=crop&w=750&q=80",
    author_id: user2.id
  )

  Photo.create(title: "Dude this pic",
    img_url: "https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-0.3.5&s=55596933da0673eb5d076d5f91b1b7f9&auto=format&fit=crop&w=1500&q=80",
    author_id: user1.id
  )






end
