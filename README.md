# barnabas
Tool to save your VPC Info


## building:
`npm i`   
Then:   
`make build`   

## Requirements:
set your mongoDB location by using:   
`export MONGO_DB=mongodb://<mongodb location>:<mongodb port>/<database name>`

if you need mongoDB on docker use:   
`docker run --name=mongo -d -p 27017:27017 mongo`   
then    
`export MONGO_DB=mongodb://localhost:27017/mydb`

## To Run:
### All in one:
Build first then start the server using:  
`node /dst/server.js`

### Backend + docker frontend:
Build first then set:  
`export NOFE=true`   
start the server using:   
`node /dst/server.js`   
start the frontend with:   
`docker run --name=barnabas -d -p 8080:80 mjkubba/barnabas`
