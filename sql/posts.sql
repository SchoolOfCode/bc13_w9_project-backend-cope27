CREATE TABLE posts (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    userName TEXT,
    projectGoal TEXT, 
    projectType TEXT, 
    projectTools TEXT, 
    collaborators INT
);

INSERT INTO posts
(userName, projectGoal, projectType, projectTools, collaborators)
VALUES
('Jimmy08','Lord of the Rings API', 'Build', 'React', 1),
('Lion_KingFan_1992', 'Understanding PostgresSQL', 'Study', 'SQL', 1),
('Rose Leslie','Twitter without the Ego', 'Build', 'React', 3),
('McLovin-0147','Dating app', 'Pair', 'JavaScript', 1),
('Sk8_Boy_2000','What is JavaScript?', 'Study', 'JavaScript', 2),
('AstonKutcher','Find my Car minigame app', 'Build', 'JavaScript', 1),
('Craig','All I want for my birthday is my voice back', 'Build', 'React', 1),
('Steph','Make awesome UI', 'Pair', 'CSS', 2);