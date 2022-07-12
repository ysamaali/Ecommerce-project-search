

# Ecommerce template
This repo contains a minimal e-commerce application in Node. This repo will document the many ways you can deploy this application.

## Prerequisties: 
This project will require NodeJS and NPM installation on your Mac / Window or Linux: 
https://nodejs.org/en/

## Run locally

1. Download the application using Git or in zip.

2. Run the project locally using the commands: 
```
npm install
npm start
```

3. Check if the application is running locally from: `127.0.0.1:5100`:
```
server running on port 5100
```

## Expose to the world

Now we need to expose the site on a public tunne, so that we can use the crawler. Thus we will use localtunnel. 

1. Installation:

```
#Using brew : https://formulae.brew.sh/formula/localtunnel
brew install localtunnel

#Using NPM : https://www.npmjs.com/package/localtunnel
npm install -g localtunnel
```

2. Setup a tunnel to you local server on port 5100
```
lt --port 5100

# Result
your url is: https://xyz.loca.lt
```
