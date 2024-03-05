# Reading Room UI

**[Deployed Site](https://reading-room-ui.vercel.app/)**

<br />

This is the home of the Reading Room UI, a personal project still in development. 

Repository for the project's Java/Spring Boot back-end service [can be found here](https://github.com/sam-rice/reading-room-api).

#### Front End

<p align="left">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

#### [Back End](https://github.com/sam-rice/reading-room-api)

<p align="left">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/JUnit-ED8B00?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
</p>

### Abstract

Reading Room is a full-stack web application that allows users to browse and catalogue a virtual library of books. New users can be registered, authenticated, and create custom "shelves"—individual collections of books. Books with corresponding user notes can then be edited or added/removed from each shelf. Within the "browse" section of the app, users can search for new books by title or author name.

The app's target users are modern book-lovers who need an instant, mobile way to search for new books and keep track of thier book collections.

All data is served up via a Java/Spring Boot [back-end service](https://github.com/sam-rice/reading-room-api), which leverages the [Open Library API](https://openlibrary.org/developers/api) for book and author data.

### Demo User Credentials

<code>email: `jimmy@mail.com`
password: `guitar`</code>

### Future Sprints

- Integration Testing (Cypress.io)
- Aesthetic Enhancements (loading placeholder ("progress") components, various design and UX enhancements)
- Functional Enhancements (back-end pagination, security enhancements, etc.)

### Local Installation Instructions

Note: Running this project locally requires installations of [Node and npm](https://nodejs.org/en).

1. Clone this repository to your machine.
2. `cd` into the top level of the project repository from the command line and install project dependencies by running `npm i`.
3. To run the app in <ins>development mode</ins>, run `npm run dev` to launch the application's server.
   - Alternatively, to run in <ins>production mode</ins>, first run `npm run build`, then `npm run start`. 
5. Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the live page.
6. When prompted, log in with [demo user credentials](#demo-user-credentials) to begin using the app:

