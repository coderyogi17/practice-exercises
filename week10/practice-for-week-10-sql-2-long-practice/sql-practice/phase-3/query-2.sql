-- Find All the Toys for Hermione's cats
-- Your code here

SELECT toys.name FROM toys
JOIN cat_owners ON toys.cat_id = cat_owners.cat_id 
JOIN owners ON cat_owners.owner_id = owners.id
WHERE owners.first_name = "Hermione";