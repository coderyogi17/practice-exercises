-- Find the first and last names of the owner whose cats are born after the year 2015
-- Your code here
SELECT first_name, last_name FROM owners 
JOIN cat_owners ON cat_owners.owner_id = owners.id 
JOIN cats ON cat_owners.cat_id = cats.id
WHERE cats.birth_year > 2015;