
# APP NAME : FOOGLE

## Food + Google = Foogle

Users can search through a database of restaurants that are reviewed by culinary professionals in this Foogle Site powered by honesty and trust.

**Technologies Used :**


HTML,CSS,JavaScript,JQuery,Ajax,BootStrap,MongoDb

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

There will be a search bar located at the top of the page.

*Story:*

The user can type the name of the restaurant and the corresponding details will be displayed.
User will be able to perform post/update/delete reviews for that restaurant.

**SPRINT 6:**

**SEARCH BY CUISINE**  

There will be a dropdown menu where the user can also now search by which cuisine.

*Story:*

When the user decides to search by cuisine, a text box appears below the dropdown menu where they can key in specific cuisine names (ex Japanese, Italian, Mexican, etc). Once user keys in the cuisine name a list of restaurants of that cuisine are displayed below the text box.
All other restaurants and its details are hidden.


**SPRINT 7:**

**SEARCH BY MENU ITEM**

There will be a dropdown menu where the user can also now search by menu item.

*Story:*

The user decides to search by menu item, a text box appears below the dropdown menu where they can key in a specific menu item (ex pizza, taco, burger, ice cream etc). Once they key in the menu item a list of restaurants which serve that menu item are displayed below the text box.
All other restaurants and its details are hidden.


**SPRINT 8:**

**ADDING A SIGN UP & LOGIN**

A signup button and a login button will be located right next to each other in the homepage.

*Story:*

The user clicks the sign-up button then a pop-up window will appear and will prompt the user to create a user name and a password. The credentials will be saved in the database.

A login button will be located next to the sign-up button in the home page. When the user clicks the login button a pop-up window will appear and will prompt the user to key in a user name and a password. If the correct username/password is entered the user can perform all crud operations on the Foogle site.
