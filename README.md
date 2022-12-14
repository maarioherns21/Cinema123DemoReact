### WIREFRAMING
<!-- ![alt text](./client/movieflick/public/memories.png) -->


### TECHNOLOGIES
This is a full Mern app  with full CRUD
MongoDB, Express, React, Node

### RELATIONSHIPS
A user has many movies(userMovie)/ a movie belongs to a User.
A user can delete his own  movie / a movie can be deleted by his owner
A user can search movies / a movie can be search by many user 
A Users can have their own profile 

#### ADDING Movies

Note that in this app, a user can "add" a movie by creating it in mongoDB database. these one-to-many relationships are modeled inside the postSchema that references the  the user that create a post.
.

#### Updating/Deleting of Movies

Each movie and rating needs to know the user that submitted it. not just for display purposes, but to restrict the ability to update and/or delete a likes or the post itself of the user that submitted. te userId property in the  Schema holds the _id of the user that submitted the review and can therefore be compared to the logged in the users  _id to render the additional UI for updating/deleting.


## Example Routing

#### MEMORIES

|HTTP<br>Method|URL<br>Endpoint|Controller<br>Action|Purpose|
|---|---|---|---|
| GET | "/movies" | fetchMovie | View all the post regardless of who submitted (use querystring params to perform filtering) |
| GET | '/movies/:id' |  index | View the details of any post |
| POST | '/movies' | createMovie | View a form for submitting a post |
| PATCH | 'movies/:id '| updateMovie | Handle the new recipe form being submitted |
| DELETE | '/movies/:id'| deleteMovie | Delete a post(restrict to user who didnt submitted) |


#### FUTURE FEATURES 2.0
- Users can comment many movies 
- Users can chat with each other
- Users can review many post 