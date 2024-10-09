# My API Project

A TypeScript-based RESTful API built with Node.js, Express, Prisma, and MySQL. This project is configured with ESLint (Airbnb) for code quality and Jest for unit testing.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Database Configuration](#database-configuration)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features
- RESTful API for managing users and other resources.
- TypeScript for type safety and better code maintainability.
- Prisma as ORM for database management.
- ESLint (Airbnb) configuration for consistent code style.
- Jest for unit testing.
- Structured folder organization for scalability.

## Tech Stack
- **Backend**: Node.js, Express
- **Database**: MySQL
- **ORM**: Prisma
- **Language**: TypeScript
- **Linting**: ESLint with Airbnb configuration
- **Testing**: Jest

## Prerequisites
Before setting up the project, ensure that you have the following installed:
- [Node.js](https://nodejs.org/) >= 14.x
- [MySQL](https://www.mysql.com/) or access to a MySQL database (local or remote)
- [npm](https://www.npmjs.com/)

## Setup
1. **Clone the repository:**

    ```bash
    git clone https://github.com/FigoArbiansyah/api-ecommmerce.git
    cd api-ecommmerce
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Setup environment variables:**

    Create a `.env` file in the root directory and add your database connection string:

    ```
    DATABASE_URL="mysql://username:password@hostname:port/databasename"
    ```

    Example:

    ```
    DATABASE_URL="mysql://cpanel_user:yourpassword@mysql.yourdomain.com:3306/cpanel_db"
    ```

4. **Prisma Setup:**

    Generate the Prisma client and migrate the database:

    ```bash
    npx prisma generate
    npx prisma migrate deploy
    ```

5. **Start the development server:**

    ```bash
    npm run dev
    ```

    The API will be available at [http://localhost:3000](http://localhost:3000).

## Database Configuration
If you are using a remote database (e.g., a MySQL database in cPanel), make sure to:
1. Whitelist your IP address in cPanel under **Remote MySQL**.
2. Use the correct connection string in your `.env` file as described in the [Setup](#setup) section.

## Project Structure
The folder structure of the project is as follows:

