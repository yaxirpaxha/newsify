# NEWSIFY

**Your Daily News Haven**

## Project Description

NEWSIFY is a React application that displays news articles in a grid format on the homepage. Users can click on an article to view its details. The application is styled using Tailwind CSS for a modern and responsive design. 

## Features

- Home page with a grid of news articles
- News detail page for individual articles
- Carousel slider on the home page for top news
- Full-screen loading overlay
- Beautiful "No Data" component for when no news is available

## Prerequisites

Make sure you have the following software installed:

- Node.js (v14.x or later)
- npm (v6.x or later)

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/yaxirpaxha/newsify.git
cd newsify
```
### Install Dependencies
```bash
npm install
```

### Before running project
Replace Api key for mytime in variable 'API_KEY' in 'App.js' otherwise no data will be displayed.

### Running the Project
To start the development server, run:
```bash
npm start
```
Open your browser and navigate to http://localhost:3000 to see the application in action.

### Building for Production

To create a production build of the project, run:
```bash
npm run build
```
The production-ready files will be generated in the build directory.

### Running Tests

To run the unit tests for the project, use:
```bash
npm test
```

### Generate Coverage Report

To generate a coverage report, run:
```bash
npm run coverage
```