# README
<a href="https://humblepx.herokuapp.com"><img width=30% src="http://res.cloudinary.com/arpannln/image/upload/v1518212250/v1rblg0obxlbrymmbokc.png"></a>

  Humble is a clone of 500px, a website recognized for users to be able to share and discover photos. Humble 
  uses Ruby on Rails with PostgreSQL to assemble the backend, while React and Redux coordinate to compose the frontend.
 
 
## Key Features

* [Home-Page](#user-auth)
* [User Profile](#user-profile)
* [Photo Uploads](#photo-upload-modal)
* [Discover Photos](#discover-page)
* [Photo Show](#photo-show-modal)
* [Future Features](#future-features)


### User Auth

  Built the entire backend to never store passwords and simply use BCrypt to hash into a more secure password digest. Utilized CSS
mechanics to create a Sign In modal so the user never has to leave the page. Users are able to register and sign back in to the website in a secure manner.

![Home](https://res.cloudinary.com/arpannln/image/upload/v1518206227/is0fi7x8xvfddcxc9sbh.png)


### User Profile

  Each user can view their own pictures, and with the nifty help of react we are able to see which photos the currently logged in user likes. The logic for selecting which pictures to display can be seen below: 

```let photos = [];
    if (this.props.users[user.id] && this.state.display === "All") {
      photos = Object.values(this.props.photos);
    }
    if (this.props.photos && this.state.display === "Liked") {
      photos = Object.values(this.props.photos);
      photos = photos.filter( (photo) => photo.currentUserLikes === true);
    }
```
The outer conditionals are necessary to bypass any unwanted asynchronous behavior and then it's just a matter of properly parsing into our state.

![UserProfile](https://res.cloudinary.com/arpannln/image/upload/v1518210578/qsrbfewsmkqn1tkrfekv.png)


### Photo Upload Modal
  
  As previously stated, each user has the ability to upload photos from their computer. Using Cloudinary, these images are then assigned a URL which is then stored in the database. After upload, the picture is dynamically added to the User Profile as well as discovery page. Once again, a modal was implemented to spare the user from having to leave their profile page and for an easy exit back to their profile page. 


![Upload](https://res.cloudinary.com/arpannln/image/upload/v1518210897/szoinoeznp1jugyhondn.png)



### Discover Page
  
  Each user also has the choice of looking for new images posted by other users to like dynamically and save for later browsing. 
  
![Discover](https://res.cloudinary.com/arpannln/image/upload/v1518210589/xg1zavqmblm4slcb7v0v.png)



### Photo Show Modal

  Each photo link has a modal that appears to display the photo, caption, and ability to like the photo. Once again implementing the show as a modal allows for a more fluid discovery experience with the quick exit feature. 

![Show](https://res.cloudinary.com/arpannln/image/upload/v1518210559/rkzspbjaqiimby3qo53u.png)

### Future Features

* Add Tags to Pictures 
* Add Search to Nav Bar
* Add Comments to Pictures 
* Follows



