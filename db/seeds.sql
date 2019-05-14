USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES ('Black Bean Burger', false), ('Impossible Burger', false), ('Veggie Burger', true);

--INSERT INTO burgers (burger_name) VALUES ('Seafood Burger')
SELECT * FROM burgers;