# HENI Full-Stack Challenge
## How to run?
Start the Backend and Frontend with one of the options below. Frontend is served in port `3000` and Backend in port `4000`
### From local
#### Frontend
```
cd ./client
npm i
npm start
```
#### Backend
Create a `.env` file in the `server` folder containing the following
```
API_KEY=your_secret_key
HARVARD_URL=https://api.harvardartmuseums.org
```
Then run
```
cd ./server
npm i
npm start
```
For development mode run 
```
npm run start:dev
```
### From Docker
From this repository root folder run the following command to start both Backend and Frontend
```
API_KEY=your_secret_key docker-compose up
```

## How to test?
### Frontend
Unit tests
```
cd ./client
npm test
```
E2E tests (uses cypress)
```
cd ./client
npm run test:cypress (with the app running)
```
### Backend
```
cd ./server
npm test
```

## Notes to reviewer

### If you had more time, would you do anything different/go further?

This is the first time I made a GraphQL application so I had to learn how to use Apollo from scratch. If I had more time, I would have liked to learn more about good practices or common anti-patterns while developing the app. For the same reason I feel that I could have added more tests in the backend but I wasn't sure where/how.