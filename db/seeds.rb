# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create(username: "arpan", password: "password")
user2 = User.create(username: "DemoUser", password: "password")

10.times do
  Photo.create(title: "Wow what a picture",
    img_url: "https://images.unsplash.com/photo-1459885516159-5c68a9cf5de5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23fc6d61c8212331b0e294489a13fa37&auto=format&fit=crop&w=1050&q=80",
    author_id: user1.id
  )
  Photo.create(title: "Wow even better picture!",
    img_url: "https://images.unsplash.com/photo-1462363634827-0734e51f24c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1049199ba24452a78174d6eee53b8465&auto=format&fit=crop&w=1050&q=80",
    author_id: user2.id
  )
  Photo.create(title: "Sexy af pic",
    img_url: "https://images.unsplash.com/photo-1517213628252-ae2125f4f270?ixlib=rb-0.3.5&s=f08de1b3eeb5adc9214e56ebdbbda1b1&auto=format&fit=crop&w=800&q=80",
    author_id: user1.id
  )

  Photo.create(title: "Spiciest of pics",
    img_url: "https://images.unsplash.com/photo-1489843704329-b420d20a0b43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6de64d0b2cf3df6f17e7627fb90ff4a9&auto=format&fit=crop&w=1086&q=80",
    author_id: user2.id
  )
  Photo.create(title: "Super spicy pic",
    img_url: "https://images.unsplash.com/photo-1431010540232-4d592e86ac42?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0091d8be3b77d9d0a53ebe2601b0b138&auto=format&fit=crop&w=634&q=80",
    author_id: user2.id
  )

  Photo.create(title: "LOL Spice",
    img_url: "https://images.unsplash.com/photo-1493308903033-e622ac815e5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=08a57031839573822d00845ab1b51b71&auto=format&fit=crop&w=1110&q=80",
    author_id: user1.id
  )

  Photo.create(title: "SPICE",
    img_url: "https://images.unsplash.com/photo-1488551511020-571c741f122a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ef02675c768fbccd2c25aef5758f27aa&auto=format&fit=crop&w=1050&q=80",
    author_id: user1.id
  )

  Photo.create(title: "SPICE level 9000",
    img_url: "https://images.unsplash.com/photo-1487537086746-d1450528fb10?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c4ca58d04c4182b6c09e2c701278a4&auto=format&fit=crop&w=1834&q=80",
    author_id: user2.id
  )

  Photo.create(title: "Oh boy what a pic",
    img_url: "https://images.unsplash.com/photo-1509841983117-b1743ecf2281?ixlib=rb-0.3.5&s=51cfd1f26a890ae2f8a4e849f6c9693b&auto=format&fit=crop&w=634&q=80",
    author_id: user1.id
  )

  Photo.create(title: "Dude this pic tho",
    img_url: "https://images.unsplash.com/photo-1506144226159-28c018698c57?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=97b38009174d457784b4afd893385569&auto=format&fit=crop&w=634&q=80",
    author_id: user2.id
  )






end
