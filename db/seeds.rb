# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all

user1 = User.create(username: "Arpan", password: "password", img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518194025/uhzd0spzpw4yviy65j7z.png", cover_url: "https://res.cloudinary.com/arpannln/image/upload/v1518194071/zgarjuicoegk72fv4zah.jpg" )
user2 = User.create(username: "DemoUser", password: "password", img_url: "http://res.cloudinary.com/arpannln/image/upload/a_90/v1522350995/IMG_2055.jpg", cover_url: "https://res.cloudinary.com/arpannln/image/upload/v1518194071/zgarjuicoegk72fv4zah.jpg")


  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518114010/r4npg7yuulprzju5lluk.jpg",
    author_id: user2.id,
    caption: "What a place for a swim"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518114309/lwa9ykdiej6u1ow6pnou.jpg",
    author_id: user1.id,
    caption: "Honeymoon in Venice!"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518114184/i2pqaoajvkonxxsqnwk2.jpg",
    author_id: user2.id,
    caption: "Home sweet home <3"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518114135/rtnngw6tgdfikltzhjja.jpg",
    author_id: user1.id,
    caption: "Best bridge in the bay!"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518114081/jg6dndo5son0zqytqbqp.jpg",
    author_id: user2.id,
    caption: "Wow China is so colorful!"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518114047/smhb1qw4yq0vokhntcth.jpg",
    author_id: user2.id,
    caption: "Reminds me of Spider-man"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518199722/yq20iihokmcorbl16mw7.jpg",
    author_id: user1.id,
    caption: "Someone please tell me where this is"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518113750/llyibukl6e4t4l8gtmpu.jpg",
    author_id: user2.id,
    caption: "Paris is truly the city of love"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518113720/jgrrgaexyomrgtcixcmp.jpg",
    author_id: user2.id,
    caption: "Had to run it back with this bridge"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518113686/caekt19ep1pbnasfjkxa.jpg",
    author_id: user2.id,
    caption: "The horizon has never been prettier"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518113649/ujdjgkatoeg2vp4vkcdh.jpg",
    author_id: user2.id,
    caption: "TRON is that you?"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518113592/pkhgfdniipu6m8yvjibj.jpg",
    author_id: user2.id,
    caption: "Definitely some lighting effects here"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518113566/pvj42h5hcghjkysykzu7.jpg",
    author_id: user2.id,
    caption: "Basically Spider-man 2 right here"
  )
  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1518113274/bl9e6hwlcfhbs2a9cnwk.jpg",
    author_id: user2.id,
    caption: "You don't understand how much I love SF"
  )

  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1520913041/photo-1465446861595-68b66a78521e.jpg",
    author_id: user2.id,
    caption: "Speeding through China woooo!"
  )

  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1520913029/photo-1499856871958-5b9627545d1a.jpg",
    author_id: user1.id,
    caption: "Paris is something else with that horizon..."
  )


  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1520913024/photo-1514276637766-4c641e206f7d.jpg",
    author_id: user2.id,
    caption: "Another reason why I'll never leave SF <3"
  )

  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1520913020/photo-1425321395722-b1dd54a97cf3.jpg",
    author_id: user1.id,
    caption: "Even in the morning nothing compares with SF"
  )

  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1520913015/photo-1475189778702-5ec9941484ae.jpg",
    author_id: user2.id,
    caption: "Since when does SF look like Hawaii?"
  )

  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1520913013/photo-1467086674598-290e1df3352f.jpg",
    author_id: user1.id,
    caption: "Catching that smexy Golden Gate Bridge in SF at night"
  )


  Photo.create(title: "Wow what a picture",
    img_url: "https://res.cloudinary.com/arpannln/image/upload/v1520913005/photo-1489625549274-f51a27bd787a.jpg",
    author_id: user1.id,
    caption: "The heart of SF, the perfect bridge in the perfect horizon"
  )
