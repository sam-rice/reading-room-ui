# Reading Room UI

API Repository: [Reading Room API](https://github.com/sam-rice/reading-room-api)

<br />

This is the home of the Reading Room UI, which is still being built. The current version of the UI can be ran locally for demoing purposes. See installation instructions below.

The project's Java/Spring Boot API is currently deployed and can be demoed via Postman. Instructions and repository can be found [here](https://github.com/sam-rice/reading-room-api?tab=readme-ov-file#local-setup-instructions).

### Future Sprints

- Form Validation
- Client-Side Error Handling
- Integration Testing (Cypress.io)
- Deployment
- Aesthetic Enhancements (loading placeholder ("progress") components, various design and UX enghancements)

#### Front End
<p align="left">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
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

Reading Room is a full-stack web application that allows users to browse and catalogue a virtual library of books. New users can be registered, authenticated, and create custom "shelves"—individual collections of books. Books with corresponding user notes can then be added or removed from each shelf. Within the "browse" section of the app, users can search for new books by title or author name. 

All data is served up via a Java Spring Boot [back end service](https://github.com/sam-rice/reading-room-api), which leverages the [Open Library API](https://openlibrary.org/developers/api) for book and author data. 

The app's target users are modern book-lovers who need an instant, mobile way to search for new books and keep track of thier book collections.

### Installation Instructions

Notes: 
- Running this project locally requires local installations of [Node and npm](https://nodejs.org/en).
- Since the project is actively being developed, the UI is currently configured to connect to a locally-hosted instance of the project's Java API. You can either follow the [installation instructions](https://github.com/sam-rice/reading-room-api?tab=readme-ov-file#local-setup-instructions) to install and run the API locally, or switch the `API_BASE_URL` variable in `/utilities/constants.ts` to connect to the deployed version of the API.

1. Clone this repository to your machine.
2. `cd` into the top level of the project repository from the command line and install project dependencies by running `npm i`.
3. Run `npm run dev` to launch the application's server.
4. Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the live page.
