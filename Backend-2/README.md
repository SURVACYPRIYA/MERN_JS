1. Generate package.json
    npm init -y

2. Create server.js

3. Install , import "express" and create HTTP server. Assign port

### connect MongoDB database

        REST API  ----->mongodb native driver------>           MongoDB server
        REST API  ----->mongodb ODM tool(mongoose)------>      MongoDB server
    
    a. install mongoose and connect to mongodb server
    b. create Schema(blueprint of document) of resource
    c. create model of that schema
    d. perform DB operations on that model



### create PRODUCT API

product obj schema:{pid,productNmae,price}
1.post
2.get
3.get<id>
4.put<id>

--------------------
### topics:
1. projections
2. unique property
3. saving password
4. authentication
5. public and protected routes

####
every API has two routes:
1. public:accesable by everyone(every user)
2. private: can be accessible by only the authenticated users

### User Authentication
means submitting crediantials and getting a token,it is same as pay the amt. and get the ticket.Once the token is recieved by the user  then he is an authenticated user.

### Steps for user authentication
after recieving user crediantials object 
1. API verify the username
2. if username is matched it compares the password
3. if passwords are matched it generate an encrypted token
4. it send the token in response back to the client

### Json web token
once the user crediantials are verified,then the login route creates a jwt(json web token) token


### Storage of token in browser
browser has 3 storage locations
1. local storage
2. session storage
3. cookies

local and session storage content can be accessible by javascript of the browser.
normal cookie can also be accessible by javascript of the browser.
'Httponly' cookies can not be accessible by javascript of the browser.so this the safest place to store jwt token after user authentication.


### making authenticated request
1. when client application makes request after successfull login,the httpOnly cookie will be attached to every request automatically.
2. the middleware in express can extract the cookie from request using cookie-parser module