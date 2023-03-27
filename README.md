# Kartaca - Live Auction Case ⚖️ 

![image](https://user-images.githubusercontent.com/79616834/227805523-df90c96c-7fb3-497b-87aa-92088b970e38.png)



 Hey there, this is Mert and welcome to my internship case repo for Kartaca!
 
In this web app, you can bid to active auction items, and track status in real-time. In order to engage with the app, you need to create an account via using your email adress.

When the time of the item is up, no more bids can be placed and the winner is announced on the Auction Card.<br/><br/>
**Docker command**<br/> 
I learned basics of Docker with this project, and since backend side is live on firebase, i decided to include only frontend app to the docker.

To start this project with docker, simyple use:

``
  docker compose up -d
``

**Testing**<br/> 
I used Jest for unit testing.

Use this command in frontend folder to run tests.

``
  npm run test
``


## UI Guide

I tried to use glassmorph theme on design, once you've logged in to your account, main page welcomes you with 3 Auction Card. You can apply your bet via using the input on the Auction Card, or in details page. You can access detail page by clicking name of the Auction Item on the card.

![image](https://user-images.githubusercontent.com/79616834/227809589-0769d45a-51e5-4221-a883-cfcae0aaa23f.png)
![image](https://user-images.githubusercontent.com/79616834/227812387-de73e8b5-1504-42bf-aaa4-c99c949ecae4.png)

## Tech Stack


**- NextJS 13.2**<br/>
**- NodeJS - Express**<br/>
**- Firebase**<br/>

**Database Security**
People who are not signed up to the app are not allowed to write or read the database data.
![image](https://user-images.githubusercontent.com/79616834/227814579-a134eb60-a053-4775-a6d0-b894860ae982.png)

