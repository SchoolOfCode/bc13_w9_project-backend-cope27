# Sjardin

Sjardin is a collaborative platform we have designed to respond to three main problems boot campers on the School of Code programme experience.

Pairs are valuable but also random- opportunities to connect and work together outside of the programme can be missed or hidden away in isolated channels or sub-groups.

People may have ideas for projects they’d wish to work on with someone- but can’t find the right person to pair with easily.

Different boot campers have different levels of confidence, technical ability, or experience which can make it hard to advertise openly about wanting to connect, or be able to find the right person to connect with.

**Created 11.2022**

Front-end repository here: https://github.com/SchoolOfCode/bc13_w9_project-frontend-cope27

Back-end repository here: https://github.com/SchoolOfCode/bc13_w9_project-backend-cope27

## Authors

@Craig G https://github.com/CregCodes

@Colin F https://github.com/dubhais

@Stephanie Njeri https://github.com/stephaniezai

@Fenton Hutson https://github.com/FentonPlusPlus

## Features

Current features available in the app:

- Post a Project

- Search for a Project by filters

- View All Projects

## Documentation

- To install run:

```bash
npm i
```

Include a .env file which you can add environment variables (see environment variables section for more information).

Structure of Database for "posts":

Sample Database table can be found in posts.sql (filename).
A fragment example can be seen below.

```bash
CREATE TABLE posts (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username TEXT,
    projectgoal TEXT,
    projecttype TEXT,
    projecttools TEXT,
    collaborators INT
);

INSERT INTO posts
(username, projectgoal, projecttype, projecttools, collaborators)
VALUES
('Jimmy08','Lord of the Rings API', 'Build', 'React', 1);
```

Database will automatically generate a unique user ID so this will not need to be created.

Structure of a Data object for POST requests:

```bash
{
    "username": "Steph",
    "projectgoal": "Build an API for helping people",
    "projecttype": "Build",
    "projecttools": "Express",
    "collaborators": "4"
}
```

## Running Tests

To run tests, run the following command

```bash
  npm test
```

There are two test suites:

- One for GET requests
- One for POST requests

Tests cover status code and payload objects.

Ensure you have a .env file set up before running tests

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` (change this Port number to be different from front end port number)

`POSTGRES_CONNECTION_URL` (recommend having a back up database- especially if using elephantSQL)
