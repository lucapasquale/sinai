# Carbon footprint - Luca Pasquale

This is a fullstack application for calculating emissions for everyday activities. It includes modules for `Cars` and `Housing` emissions calculations.

This project uses `yarn workspaces`, with a package for the backend, and one for the frontend. Here are the tecnologies used in each one:

### Backend

 - NestJS
 - Apollo Server

### Frontend

 - React
 - Ant Design
 - Apollo Client

## Running the project

First, install all dependencies with `yarn install`. It will install for both packages.

Start the backend by running `yarn start:backend`. It will build and start the NestJS application, running on port 3100.

Then, on a different terminal, start the frontend with `yarn start:frontend`, and it will automatically open a tab on your browser at `http://localhost:3000`
