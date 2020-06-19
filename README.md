# KTP book list sample project

## Running the application

Make sure you have Node.js (NPM) installed on your machine. If not, you can download at here: https://nodejs.org/en/

```bash
# first install npm packages
npm install 
npm start
```

## Running tests 

Make sure you have installed all packages.

```bash
npm test
```

## Folder structure

- src
  - components
    - HeaderSection
      - Search
    - NewBook
    - MainSection
      - Booklist
        - Book
    - UI
      - Backdrop
      - Button
      - Modal
      - Spinner
      - Input
  - styles
    - _shared.scss (for globall css variables)
  - store
    - actions
    - reducers
    - sagas
  - utils

## Libraries used:
- React
- Redux
- Redux Saga
- SCSS & BEM
- Jest for testing
- Enzyme (for testing React components)
- font-awesome (for svg icon)
