
# APP NAME : FOOGLE

## Food + Google = Foogle

Users can add and search through a database of restaurants that are reviewed by culinary professionals in this Foogle Site powered by honesty and trust. Users can also post their reviews for each restaurant.

**Technologies Used :**


HTML,CSS,JavaScript,JQuery,Ajax,BootStrap,MongoDb


## Existing Features

**SPRINT 0:**

**SERVER & FILE STRUCTURE SETUP**

Step 1: Server basic setup.  

Step 2: Serving the HTML views from Express.  

Step 3: Serve static files from Express.

Step 4: Setting up database file structure.  


*Story:*  

User should be able to go to localhost:3000 and see a welcome page with a top nav.

**SPRINT 1:**

**DISPLAYING SEEDED DATA**  

We will seed data for the restaurant and review model.

*Story:*  

User will be able to view all restaurant names on the home page.
User can click on restaurant name to expand each restaurant’s section and see more details / reviews.

**SPRINT 2:**

**POST A REVIEW**  

Implementing post review functionality.

*Story:*  

User can see a text area under each of the restaurant details/section where he/she can post a review and submit.
Submitting a review will make the review show up on the page.


**SPRINT 3:**

**UPDATE A REVIEW**  

There will be a update button along with each of the reviews.

*Story:*  

The user will be able to see an update button next to each of the reviews. Clicking on the update button will transform the label review text into a text box with contents as review text and username. Now the user can update the review and click the save button to save changes.

**SPRINT 4:**

**DELETE A REVIEW**  

There will be a delete button next to each of the reviews.

*Story:*  

The user can click on the delete button which will destroy the review.


**BONUS**

**SPRINT 5:**

**SEARCH BY NAME**  

There will be a search bar located at the top of the page for searching by restaurant name.

*Story:*

The user can type the name of the restaurant and the corresponding details will be displayed.
User will be able to perform post/update/delete reviews for that restaurant.

All other restaurants and its details will be hidden.

Emptying this search bar will display all restaurants.

**SPRINT 6:**

**SEARCH BY CUISINE**  

There will be another search bar at the top of the page for searching by cuisine.

*Story:*

The user can type the cuisine name and the corresponding details will be displayed.
User will be able to perform post/update/delete reviews for that restaurant.

All other restaurants and its details will be hidden.

Emptying this search bar will display all restaurants.

**SPRINT 7:**

**ADD NEW RESTAURANT**

There will be a button with a plus sign next to the search bars for adding new restaurant information.

*Story:*

When the user clicks on the add new restaurant button, a modal window opens up in front of the page prompting the user to enter the information of new restaurant. At the bottom of the modal, there will be Close and Save Changes buttons. Once the user is sure of the data that he/she enters, he should click Save Changes button to add this to the database. And the modal gets hidden. New restaurant information gets added as last entry in the page.

**SPRINT 8:**

**DELETE RESTAURANT**

There will be a delete button with a bin icon inside each of the restaurant accordion.

*Story:*

When the user clicks this button, that restaurant gets deleted from db and page.


**SPRINT 9:**

**UPDATE RESTAURANT**

There will be a update button with a pencil icon inside each of the restaurant accordion.

*Story:*

When the user clicks this button, pencil icon gets hidden. New Save Changes button appears at the bottom of its accordion.
And each of the restaurant property value gets displayed in a editable text box. User can change values and click Save Changes. Data gets updated and displayed as last entry.

## Planned Features

**SPRINT 10:**

**ADDING A SIGN UP & LOGIN**

A signup button and a login button will be located right next to each other in the homepage.

*Story:*

The user clicks the sign-up button then a pop-up window will appear and will prompt the user to create a user name and a password. The credentials will be saved in the database.

A login button will be located next to the sign-up button in the home page. When the user clicks the login button a pop-up window will appear and will prompt the user to key in a user name and a password. If the correct username/password is entered the user can perform all crud operations on the Foogle site.
