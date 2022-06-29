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
npm run test:cypress
```
### Backend
```
cd ./server
npm test
```