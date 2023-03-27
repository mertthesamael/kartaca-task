# Kartaca - Live Auction Case ⚖️ 

![image](https://user-images.githubusercontent.com/79616834/227805523-df90c96c-7fb3-497b-87aa-92088b970e38.png)


**Live: https://kartaca-task.vercel.app/**<br/>

 Hey there, this is Mert and welcome to my internship case repo for Kartaca!
 
In this web app, you can bid to active auction items, and track status in real-time. In order to engage with the app, you need to create an account via using your email adress.

When the time of the item is up, no more bids can be placed and the winner is announced on the Auction Card.<br/><br/>
**🐋Docker Command**<br/> 
I learned basics of Docker with this project, and since backend side is live on firebase, i decided to include only frontend app to the docker.

To start this project with docker, simyple use:

``
  docker compose up -d
``

**🧪Testing**<br/> 
I used Jest for unit testing.

Use this command in frontend folder to run tests.

``
  npm run test
``


## 🎨UI Guide

I tried to use glassmorph theme on design, once you've logged in to your account, main page welcomes you with 3 Auction Card. You can apply your bet via using the input on the Auction Card, or in details page. You can access detail page by clicking name of the Auction Item on the card.

![image](https://user-images.githubusercontent.com/79616834/227809589-0769d45a-51e5-4221-a883-cfcae0aaa23f.png)
![image](https://user-images.githubusercontent.com/79616834/227812387-de73e8b5-1504-42bf-aaa4-c99c949ecae4.png)

## ⚙️Tech Stack


**- NextJS 13.2**<br/>
**- NodeJS - Express**<br/>
**- Firebase**<br/>

**Database Security**
People who are not signed up to the app are not allowed to write or read the database data.
![image](https://user-images.githubusercontent.com/79616834/227814579-a134eb60-a053-4775-a6d0-b894860ae982.png)

***Also here is an example of firestore database that contains Auction Items***
![image](https://user-images.githubusercontent.com/79616834/227819962-62a619a8-e887-4600-9aac-bf9b760417d9.png)

## How i solved the challange

When i saw the challanged, i thanked to myself for doing an enigma machine project in the past. I used same algorithm to solve encrypted message. So here is the function that i made for solving the encrypted message:

```
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let reverseAlphabet = [...alphabet].reverse()
    
    const decode = (encodedMessage) => {
      let result = '';
      //Looping thorugh encoded message
      for(let i = 0;i<=encodedMessage.length;i++){
        if(alphabet.includes(encodedMessage[i])){
          //Replacing [i] of array with reversed alphabet
          result += reverseAlphabet[alphabet.indexOf(encodedMessage[i])]
        }else if(undefined){
          
        }
        else{
          result += encodedMessage[i]
        }
      }
      return result
    }
```
And finaly, here is my registrationKey: 1fe9937d8069860244bf6b72b7f7702212a0b1aec9e9bd61e4ba39e1ceebffec


Thanks for the chance, hope that it'll do enough!

Made with ❤️ for Kartaca.
