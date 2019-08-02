# Node Backend Developer - Test

### A simple Chat with the following features:

* New user Creation
* Send messages prompt
* connected nick box
* send command msg /stock=code to an external api

## Installation & Setup
1. Install [Node.js](https://nodejs.org/) & [MongoDB](https://www.mongodb.org/) if you haven't already.
2. Clone this repository and install its dependencies.		
		> git clone git://git@github.com:lennyhiggins/node-backend-developer.git
		> chat-jobsity
		> npm install
		
3. In a separate shell start MongoDB.
 
		> mongod

4. From within the chat-jobsity directory start the server.

		> npm run dev (nodemon server)
        > npm start

5. For test with mocha and supertest, and from within the node-backend-developer directory

		> npm run test
        > npm run test-bot
        > npm run only-test (for debbuging test chrome://inspect)
		
6. Open a browser window and navigate to: [http://localhost:3000](http://localhost:3000) 
7. Could Open another browser instace for simulate another users conected
