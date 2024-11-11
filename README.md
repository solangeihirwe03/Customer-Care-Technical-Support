# Articles Backend API

This project is a backend API for managing articles. Users can create, view, and comment on articles. Built using **TypeScript**, **Node.js**, and **Express**.

## HOSTED SERVER URL

https://customer-care-technical-support.onrender.com/

#### HOSTED SWAGGER DOCUMENTATION

https://customer-care-technical-support.onrender.com/api-docs


#### GITHUB REPOSITORY FOR CUSTOMER-CARE-TECHNICAL-SUPPORT

https://github.com/solangeihirwe03/Customer-Care-Technical-Support.git


## Feature

- Register user
- Login user
- Create a new article
- View all articles
- View a single article by ID
- Update article by ID
- Delete article by ID
- Add comments to an article

## Getting started

### Prerequisites

- **Node.js**
- **npm**

### Installation

1. **Clone the repository**:

  ```bash
  git clone https://github.com/solangeihirwe03/Customer-Care-Technical-Support.git
  ```

2. Install dependencies

    ```sh
    npm install
    ```

3. Copy `.env.example` to `.env` and add values to all variables

4. Start the server:
    ```sh
    npm run dev
    ```

## FOLDER STRUCTURE

- `.env` : Secure environment variables.
- `src/` : Source code directory.
    - `database/`: Database related files.
        - `config/`: Database connectivity configuration.
        - `migrations`: Sequelize migrations.
        - `models/`: Sequelize models.
    - `helpers/`: Utility functions.
    - `middlewares/`: Middleware functions
    - `modules/`: Modules like User, Articles, etc.
        - `user/` : user module.
            - `controller/`: user controllers
            - `repository/`: user repositories
        - `articles/` : aricle module
            - `controller/`: article controllers
            - `repository/`: article repositories
    - `routes/`: API routes.
    - `index.ts`: Startup file for all requests.

## INITIALIZE SEQUELIZE CLI

1. Initialize Sequelize CLI:
    ```sh
    npx sequelize-cli init
    ```
 
2. Generate Migrations:
   ```sh
   npx sequelize-cli migration:generate --name name-of-your-migration
   ```
3. Define Migration:
   Edit the generated migration file to include the tables you want to create.

4. Run the Migration:
   ```sh
   npm run createAllTables
   ```
5. Delete the Migration:
   ```sh
   npm run deleteAllTables
   ```