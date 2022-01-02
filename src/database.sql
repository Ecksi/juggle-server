CREATE DATABASE juggleDB;

-- Pulled from Java server code
-- CREATE TABLE juggler(
-- firstName VARCHAR(30) NOT NULL,
-- lastName VARCHAR(30) NOT NULL,
-- userID INT NOT NULL PRIMARY KEY,
-- email VARCHAR(30) NOT NULL,
-- phone VARCHAR(30));

-- GRANT ALL PRIVILEGES ON juggler TO juggle;

CREATE TABLE tricks(
  trick_id SERIAL PRIMARY KEY,
  trick_name VARCHAR(30) NOT NULL,
  balls INT,
  animation VARCHAR(255)
)