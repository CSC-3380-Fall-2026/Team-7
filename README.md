# Globetrotter : [Team Number 7]

# Members
Project Manager: Diamond Lewis ([dlew137])\
Communications Lead: Reagan Mangram ([GitHub Name])\
Git Master: Jermiah Holmes (Jerry0555)\
Design Lead: Chastity Hampton ([GitHub Name])\
Quality Assurance Tester: Daylen Doucet ([GitHub Name])

# About Our Software

Globetrotter is a travel web app that matches users with vacation destinations based on their preferences. Users swipe through destination cards and save the ones they like, and the app adjusts its suggestions to their choices. It also includes a trip planner and a vacation budget planner that finds the best pricing at that time.

## Platforms Tested on
- Linux
- Windows

  
# Important Links
Kanban Board: https://globetrotter1.atlassian.net/?continue=https%3A%2F%2Fglobetrotter1.atlassian.net%2Fwelcome%2Fsoftware%3FprojectId%3D10000&atlOrigin=eyJpIjoiZGQ2MjZiYzFkMzgxNDcwMmI4YzRiODg0MTM3NjBlNzQiLCJwIjoiamlyYS1zb2Z0d2FyZSJ9

Designs: [link]\

Styles Guides:Airbnb JavaScript Style Guide (https://github.com/airbnb/javascript), 
Airbnb React/JSX Style Guide (https://github.com/airbnb/javascript/tree/master/react), 
Google TypeScript Style Guide (https://google.github.io/styleguide/tsguide.html) 

# How to Run Dev and Test Environment

## Dependencies
- Node.js v24 and npm 11.19.0
- Client: React 19.3.0, TypeScript 6.0.3, Vite 8.3.2
- Server: Express 5.2.1, Mongoose 9.10.4, cors 2.8.6, dotenv 18.0.5, TypeScript 5.9, tsx 4.23.15
- A MongoDB Atlas account
  
### Downloading Dependencies
- Node.js (includes npm): https://nodejs.org
- Git: https://git-scm.com
- MongoDB Atlas: https://www.mongodb.com/atlas
- Recommended editor: VS Code (https://code.visualstudio.com)

## Commands
Clone and set up:

```bash
git clone https://github.com/CSC-3380-Fall-2026/Team-7.git
cd Team-7
```

Run the server (terminal 1):

```bash
cd server
npm install
cp('copy' on windows) .env.example .env   # then fill in your values
npm run dev
```

Check it works at http://localhost:5000/api/health (should show `{"status":"ok"}`).

Run the client (terminal 2):

```bash
cd client
npm install
npm run dev
```

Open the local URL http://localhost:5173
