 TOPIC1: HTTP METHODS AND HTTP STATUS CODE
 
 Http method is a way for client to tell a server what kind of action it wants to perform on a specific resource.
The most common http methods are :
GET: It is used when we have to get data from server.Eg when a news website is  opened ,your browser sends a GET request to fetch artical.
POST: it is used to send data to the server to create something new.Eg: when you fill out the form to sign up on a website ,that information is sent using post request.
PUT: it is used to completely update something .Eg when you are editing your prifile then put request will replace the old data with new one
PATCH : it is used to partially update something .for eg when you only want to update your hone nu ber then a PATCH reuest will replace changes just that field.
DELETE:It is used to remove something.For eg: if you delete a post from your blog your browser sends DELETE request to the server.

HTTP STATUS CODE:When the request is send using http methos server responds with status code.
some status code are:
200 OK :Data sucessfully sent or recieved.
201 : when account was successfully made
404 Not Found: page is missing
403 Foridden: when  you are not logged in but try to access something private ,it means you are not allowed to see that page


TOPIC2:CSS SELECTORS
It is a pattern to select the html element you want to style.
  a.Universal selector(*)
            ->selects all element on the page.
            *{
                margin: 0;
                padding: 0;
            }
 b.Element selector
            ->Selects all element of specific type.
            p{
                color: red;
            }
  c.Class selector(.clasname)
            ->selects elements with a given class.
            .card{
                border: 1px solid black;
            }
   d.ID selector(#)
            ->selects single element with specific ID
            #header{
                background-color: gray;
            }

TOPIC3: GIT Basics 
     a.git init: Initialize a new git repository in folder.

     b.git add: Adds files to the staging area as prepares them for commit.
     Eg. git add file.txt 
         git add .

      c.git commit: saves a snapshot of your changes with a message.
      Eg.git commit -m "added homepage"

      d.git push:sends your commits to a remote repository.
      Eg. git push origin main

      e.git pull: Brings down the latest changes from the remotr repository.
      eg. git pull origin main

      f.git clone: makes a local copy of a remote Git repo.
      eg: git clone https://github.com/user/repo.git

      g.git branch: used to create new branches or list existing ones.
      eg git branch
        git branch new -feature
        git checkout new -feature   

TOPIC4: CALLBACK AND HIGH ORDER FUNCTION 
      A callback function is a function passed as an argument to another function and  then it gets called back later.
      Higher order functionis a function that does at least one of these :
        -> takes another function as a parameter.
        -> Returns a function

TOPIC5: Array Methods
      a.filter() - It returns items that meet a condition.
      b.map()- Transforms each item in an array.
      c.forEach() - Runs a function on each item.
      d. push()- Adds item to the end.
      e.pop()- removes item from the end.