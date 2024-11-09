# Articles Backend API

This project is a backend API for managing articles. Users can create, view, and comment on articles. Built using **TypeScript**, **Node.js**, and **Express**.

## Feature

- View all articles
- View a single article by ID
- Create a new article
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
 
 2. Generate Seeder:
   ```sh
   npx sequelize-cli seed:generate --name name-of-your-seeder
   ```
3. Generate Migrations:
   ```sh
   npx sequelize-cli migration:generate --name name-of-your-migration
   ```
4. Define Migration:
   Edit the generated migration file to include the tables you want to create.
5. Define Seeder Data:
   Edit the generated seeder file to include the data you want to insert.
6. Run the Seeder:
   ```sh
   npm run createAllSeeders
   ```
7. Run the Migration:
   ```sh
   npm run createAllTables
   ```