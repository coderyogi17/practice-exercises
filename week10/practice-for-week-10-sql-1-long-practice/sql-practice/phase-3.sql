-- Your code here
.print
.print ______________PHASE 3________________________
.print
--1
.print 1.
INSERT INTO customers (name, phone)
VALUES ("Rachel", 1111111111);
SELECT * FROM customers;

--2
.print 2.
UPDATE customers
SET points = (SELECT points FROM customers WHERE name = "Rachel" AND phone = 1111111111) + 1
WHERE name = "Rachel" AND phone = 1111111111;
SELECT * FROM customers WHERE name = "Rachel" AND phone = 1111111111;

INSERT INTO coffee_orders DEFAULT VALUES;
--3

.print 3.
INSERT INTO customers (name, email, phone)
VALUES ("Monica", "monica@friends.show", 2222222222),
("Phoebe", "phoebe@friends.show", 3333333333);
SELECT * FROM customers;
SELECT * FROM coffee_orders;
--4
.print 4.
INSERT INTO coffee_orders (is_redeemed) VALUES (false),(false),(false);
UPDATE customers 
SET points=(SELECT points FROM customers WHERE name="Phoebe" AND email="phoebe@friends.show" AND phone = 3333333333) + 3
WHERE name="Phoebe" AND email="phoebe@friends.show" AND phone = 3333333333;
SELECT * FROM customers WHERE name="Phoebe" AND email="phoebe@friends.show" AND phone = 3333333333;
SELECT * FROM coffee_orders;

--5
.print 5.
INSERT INTO coffee_orders (is_redeemed) VALUES (false),(false),(false),(false),(false),(false),(false),(false);

UPDATE customers 
SET points=(SELECT points FROM customers WHERE name="Monica" AND email="monica@friends.show" AND phone =2222222222) + 4
WHERE name="Monica" AND email="monica@friends.show"AND phone = 2222222222;

UPDATE customers 
SET points=(SELECT points FROM customers WHERE name="Rachel" AND phone =1111111111) + 4
WHERE name="Rachel" AND phone = 1111111111;
SELECT * FROM customers;

--6
.print 6.
SELECT points FROM customers WHERE name="Monica" AND email="monica@friends.show"AND phone = 2222222222;

--7
.print 7.
--insert coffee that is redeemed on conditional
INSERT INTO coffee_orders (is_redeemed)
VALUES (
    CASE 
        WHEN ((SELECT points FROM customers WHERE name="Rachel" AND phone =1111111111) >=10)
            THEN true
        ELSE
            false
        END
);
--update rachel's points
UPDATE customers 
SET points = (
    CASE 
        WHEN ((SELECT points FROM customers WHERE name="Rachel" AND phone =1111111111) >=10)
            THEN (SELECT points FROM customers WHERE name="Rachel" AND phone =1111111111 ) - 10
        ELSE
            (SELECT points FROM customers WHERE name="Rachel" AND phone =1111111111 )  + 1
        END
)
WHERE name="Rachel" AND phone =1111111111;


SELECT * FROM customers WHERE name="Rachel";
SELECT * FROM coffee_orders WHERE is_redeemed = true;

--8
.print 8.
INSERT INTO customers (name, email)
VALUES
("Joey", "joey@friends.show"),
("Chandler", "chandler@friends.show"),
("Ross", "ross@friends.show");
SELECT * FROM customers;

--9
.print 9.
INSERT INTO coffee_orders (is_redeemed)
VALUES (false),(false),(false),(false),(false),(false);

UPDATE customers
SET points = (SELECT points FROM customers WHERE name="Ross" AND email = "ross@friends.show") + 6
WHERE name="Ross" AND email = "ross@friends.show";
SELECT * FROM customers WHERE name="Ross" AND email = "ross@friends.show";

--10 
.print 10.
INSERT INTO coffee_orders (is_redeemed)
VALUES (false),(false),(false);
UPDATE customers
SET points = (SELECT points from customers WHERE name="Monica") + 3
WHERE name="Monica";

SELECT * FROM customers WHERE name="Monica";

--11
.print 11.
INSERT INTO coffee_orders (is_redeemed)
VALUES 
( CASE 
    WHEN (SELECT points FROM customers WHERE name="Phoebe") >=10
        THEN true
    ELSE 
        false
    END
);

UPDATE customers
SET points = (
    CASE 
    WHEN (SELECT points FROM customers WHERE name="Phoebe") >=10
        THEN (SELECT points FROM customers WHERE name="Phoebe") - 10
    ELSE 
        (SELECT points FROM customers WHERE name="Phoebe") + 1
    END
)
WHERE name="Phoebe";
SELECT * FROM customers WHERE name="Phoebe";

--12 
.print 12.


UPDATE customers
SET points = (SELECT points FROM customers WHERE name="Ross")-2
WHERE name = "Ross";
SELECT * FROM customers where name = "Ross";

SELECT * FROM coffee_orders;
DELETE FROM coffee_orders WHERE id = (SELECT id from coffee_orders ORDER BY id DESC LIMIT 1) -4 OR 
id = (SELECT id from coffee_orders ORDER BY id DESC LIMIT 1) -5;
.print 
SELECT * FROM coffee_orders;

--13
.print 13.
INSERT INTO coffee_orders (is_redeemed) VALUES (false), (false);
UPDATE customers
SET points = (SELECT points FROM customers WHERE name = "Joey") + 2
WHERE name = "Joey";

--14
.print 14.
INSERT INTO coffee_orders (is_redeemed)
VALUES (CASE 
    WHEN (SELECT points FROM customers WHERE name ="Monica") >= 10
        THEN true 
    ELSE 
        false
    END
);

UPDATE customers 
SET points = 
    CASE
    WHEN (SELECT points FROM customers WHERE name = "Monica") >= 10
        THEN (SELECT points FROM customers WHERE name = "Monica") -10 
    ELSE
        (SELECT points FROM customers WHERE name = "Monica") + 1
    END
WHERE name = "Monica";

SELECT * FROM customers WHERE name = "Monica";

--15
.print 15.
DELETE FROM customers WHERE name = "Chandler";
SELECT * FROM customers;

--16
.print 16.
INSERT INTO coffee_orders (is_redeemed)
VALUES (CASE 
    WHEN (SELECT points FROM customers WHERE name = "Ross") >= 10
        THEN true
    ELSE false
    END
);


UPDATE customers
SET points = (
    CASE 
        WHEN (SELECT points FROM customers WHERE name = "Ross") >= 10
            THEN (SELECT points FROM customers WHERE name = "Ross") - 10
        ELSE
            (SELECT points FROM customers WHERE name = "Ross") + 1
        END
)
WHERE name = "Ross";


SELECT * FROM customers WHERE name = "Ross";

--17
.print 17.
INSERT INTO coffee_orders (is_redeemed)
VALUES ( CASE
    WHEN (SELECT points FROM customers WHERE name = "Joey") >= 10
        THEN true
    ELSE 
        false
    END
);

UPDATE customers
SET points = (
    CASE
    WHEN (SELECT points From customers WHERE name = "Joey") >=10
        THEN (SELECT points FROM customers WHERe name = "Joey") - 10
    ELSE
        (SELECT POINTS FROM customers WHERE name = "Joey") + 1
    END
)
WHERE name = "Joey";


--18 
.print 18.

UPDATE customers
SET email = "p_as_in_phoebe@friends.show"
WHERE name = "Phoebe";
SELECT email FROM customers WHERE name = "Phoebe";
.print 
.print RESULT
SELECT * FROM customers;
.print
SELECT * FROM coffee_orders;