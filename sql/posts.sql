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

INSERT INTO posts
(username, projectgoal, projecttype, projecttools, collaborators)
VALUES
('Lion_KingFan_1992', 'Understanding PostgresSQL', 'Study', 'SQL', 1);

INSERT INTO posts
(username, projectgoal, projecttype, projecttools, collaborators)
VALUES
('Rose Leslie','Twitter without the Ego', 'Build', 'React', 3);

INSERT INTO posts
(username, projectgoal, projecttype, projecttools, collaborators)
VALUES
('McLovin-0147','Dating app', 'Pair', 'JavaScript', 1);

INSERT INTO posts
(username, projectgoal, projecttype, projecttools, collaborators)
VALUES
('Sk8_Boy_2000','What is JavaScript?', 'Study', 'JavaScript', 2);

INSERT INTO posts
(username, projectgoal, projecttype, projecttools, collaborators)
VALUES
('AstonKutcher','Find my Car minigame app', 'Build', 'JavaScript', 1);

INSERT INTO posts
(username, projectgoal, projecttype, projecttools, collaborators)
VALUES
('Craig','All I want for my birthday is my voice back', 'Build', 'React', 1);

INSERT INTO posts
(username, projectgoal, projecttype, projecttools, collaborators)
VALUES
('Steph','Make awesome UI', 'Pair', 'CSS', 2);