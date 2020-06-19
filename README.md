# KTP book list sample project

## Running the application

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