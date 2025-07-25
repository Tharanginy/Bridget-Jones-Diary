# Bridget-Jones-Diary

## Overview
A Personal Diary app where the user can manage and keep track of diary entries, they can see, create, update and delete diary entries.

## Getting Started

### Prerequisites

- Node.js
- NPM
- A cloud-based database hosting platform, such as Supabase 
  
### Installation

1. Clone the repository

    - Run `git clone https://github.com/Tharanginy/Bridget-Jones-Diary.git` in the CLI of your choice

2. Navigate to the project directory

    - Navigate to the project with `cd Bridget-Jones-Diary`

3. Install dependencies

    - Run `npm install` to install all dependencies for the project

4. Setup your database

    - Create a database instance on [Supabase](https://supabase.com/) (or other cloud-based database hosting platforms)
    - Retrieve the database URL & copy it
    - Create a `.env` file in the root directory with the following:
    
      ```
      DB_URL=<your_database_url>
      ```
      
    - Replace `<your_database_url>` with the database URL you just copied
    - Run `npm run setup-db` to setup the database

5. Setup your port
  
    - Add A `PORT` key assigned to the port of your choice in your `.env` file. 3000 is recommended for this project.
    
        ```
        PORT=<port-of-your-choice>
        ```

6. Run the server

    - Run `npm run dev` to run the server in development mode
    - Run `npm start` to run the server in production mode

### Database Schema

`diary_entries Table`

```
id: Primary Key
date: Timestamp, not null
category: String 
content: String, not null 

```
### Base URL
`http://localhost:<port>/` 

## API Endpoints

All available API endpoints with their methods and descriptions.

| Method | Endpoint  | Description                     |
| ------ | --------- | ------------------------------- |
| GET    | `/`       | Get all diary entries           |
| GET    | `/search` | Search entries by date/category |
| GET    | `/:id`    | Get a specific entry by ID      |
| POST   | `/`       | Create a new diary entry        |
| PUT    | `/:id`    | Update a diary entry by ID      |
| DELETE | `/:id`    | Delete a diary entry by ID      |




### Bugs
Complete frontend, backend, and database setup but not fully integrated