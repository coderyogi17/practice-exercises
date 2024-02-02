-- Your code here
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS relationships;
DROP TABLE IF EXISTS performance_reviews;
DROP TABLE IF EXISTS parties;

.print _____________PHASE 4 ________________________
.print
.print ____CREATING TABLES_____
CREATE TABLE employees(
id INTEGER PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
department VARCHAR(50) NOT NULL,
role VARCHAR(50) NOT NULL
);

CREATE TABLE relationships(
id INTEGER PRIMARY KEY,
partner_one INTEGER NOT NULL,
partner_two INTEGER NOT NULL CHECK(partner_one != partner_two),
FOREIGN KEY (partner_one) REFERENCES employees(id),
 FOREIGN KEY (partner_two) REFERENCES employees(id)
);

CREATE TABLE performance_reviews(
id INTEGER PRIMARY KEY,
review VARCHAR(250),
score NUMERIC(1,2) NOT NULL CHECK (score >= 0 AND score <= 10),
employee_id INTEGER NOT NULL,
FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE parties(
    id INTEGER PRIMARY KEY,
    budget NUMERIC(3,2) NOT NULL CHECK (budget >= 0),
    is_onsite BOOLEAN DEFAULT true
);
.print 
.print ________________________
.print 
.print ___________EVENTS________
.print

--1 Add michael scott into employees in Management as Regional Manager
.print 1:
INSERT INTO employees (first_name, last_name, department, role)
VALUES ("Michael", "Scott", "Management", "Regional Manager");
SELECT * FROM employees;
.print

--2 Add Dwight Schrute to employees in Sales as Assistant Regional Manager
.print 2:
INSERT INTO employees (first_name, last_name, department, role)
VALUES("Dwight", "Schrute", "Sales", "Assistant Regional Manager");
SELECT * FROM employees WHERE first_name = "Dwight";
.print

--3 Add Jim Halpert in Sales as Sales Representative
.print 3:
INSERT INTO employees (first_name, last_name, department, role)
VALUES("Jim", "Halpert", "Sales", "Sales Representative");
SELECT * FROM employees WHERE first_name = "Jim";
.print 

--4 Add Pam Beesley in Reception as Receptionist
.print 4:
INSERT INTO employees (first_name, last_name, department, role)
VALUES ("Pam", "Beesley", "Reception", "Receptionist");
SELECT * FROM employees WHERE first_name = "Pam";
.print 

--5 Add Kelly Kapoor to Product Oversight as Service Representative
.print 5:
INSERT INTO employees (first_name, last_name, department, role)
VALUES ("Kelly", "Kapoor", "Product Oversight", "Service Representative");
SELECT * FROM employees WHERE first_name = "Kelly";
.print 

--6 Add Angela Martin to Accounting as Head of Accounting
.print 6: 
INSERT INTO employees(first_name, last_name, department, role)
VALUES ("Angela", "Martin", "Accounting", "Head of Accounting");
SELECT * FROM employees WHERE first_name = "Angela";
.print

--7 Add Roy Anderson to Warehouse as Warehouse Staff
.print 7:
INSERT INTO employees(first_name, last_name, department, role)
VALUES ("Roy", "Anderson", "Warehouse", "Warehouse Staff");
SELECT * FROM employees WHERE first_name = "Roy";
.print 

--8 Romantic relationship between Roy Anderson and Pam Beesley
.print 8:
SELECT id, first_name, last_name FROM employees WHERE first_name = "Pam" OR first_name = "Roy";
INSERT INTO relationships (partner_one, partner_two)
VALUES ((SELECT id from employees where first_name = "Pam"), (SELECT id from employees where first_name = "Roy"));
.print Relationship
SELECT * FROM relationships;
.print

--9 Add Ryan Howard to Reception as Temp
.print 9:
INSERT INTO employees(first_name, last_name, department, role)
VALUES ("Ryan", "Howard", "Reception", "Temp");
SELECT * FROM employees WHERE first_name = "Ryan";
.print

--10 Add onsite office party. budget of 100
.print 10:
INSERT INTO parties (budget, is_onsite)
VALUES(100.00, true);
SELECT * FROM parties;
.print

--11 Give Dwight Schrute performance review with score of 3.3

.print 11:
INSERT INTO performance_reviews (score, employee_id)
VALUES (3.3, (SELECT id FROM employees WHERE first_name = "Dwight"));
SELECT * FROM employees WHERE first_name = "Dwight";
SELECT * FROM performance_reviews;
.print

--12 Give Jim Halpert performance review with score of 4.2

.print 12:
INSERT INTO performance_reviews (score, employee_id)
VALUES (4.2, (SELECT id from employees WHERE first_name = "Jim"));
SELECT * FROM employees WHERE first_name = "Jim";
SELECT * FROM performance_reviews;
.print

--13 Change Dwight Schrute reivew to 9
.print 13:
UPDATE performance_reviews
SET score = 9
WHERE employee_id= (SELECT id FROM employees WHERE first_name = "Dwight");
SELECT * FROM performance_reviews WHERE employee_id = (SELECT id from employees WHERE first_name = "Dwight");
.print

--14 Change jim's review to 9.3
.print 14:
UPDATE performance_reviews
SET score = 9.3
WHERE employee_id = (SELECT id from employees WHERE first_name = "Jim");
SELECT * FROM performance_reviews WHERE employee_id = (SELECT id from employees WHERE first_name = "Jim");
.print 

--15 Promote Jim to Assistant regional manager
.print 15
UPDATE employees 
SET role = "Assistant Regional Manager"
WHERE first_name = "Jim";
SELECT * FROM employees where first_name = "Jim";
.print

--16 Promote Ryan to Sales as Sales Rep
.print 16
UPDATE employees
SET role = "Sales Representative", department="Sales"
WHERE first_name = "Ryan" AND last_name = "Howard";

SELECT * from employees WHERE first_name = "Ryan" AND last_name = "Howard";
.print
--17 onsite office party with 200 dollar budget
.print 17

INSERT INTO parties (budget, is_onsite)
VALUES(200, true);
SELECT * FROM parties;
.print

--18 angela margin and dwight schrute get into relationship
.print 18
INSERT INTO relationships (partner_one, partner_two)
VALUES ((SELECT id FROM employees WHERE first_name = "Angela"), (SELECT id FROM employees WHERE first_name = "Dwight"));
SELECT * FROM relationships;
.print

--19 angela martin gets reivew of 6.2
.print 19
INSERT INTO performance_reviews (score, employee_id)
VALUES (6.2, (SELECT id FROM employees WHERE first_name = "Angela"));
SELECT * FROM performance_reviews WHERE employee_id = (SELECT id from employees WHERE first_name = "Angela");
.print

--20 Ryan Howard and Kelly Kapoor get into relaitonship
.print 20
INSERT INTO relationships (partner_one, partner_two)
VALUES((SELECT id FROM employees WHERE first_name = "Ryan"), (SELECT id from employees WHERE first_name = "Kelly"));
SELECT * FROM relationships;
.print

--21 onsite party with 50 dollar budget
.print 21
INSERT INTO parties (budget, is_onsite)
VALUES (50, true);

--22 Jim halpert moves to another office branch (remove relationships and reviews along with employee entry)
.print 22
DELETE FROM relationships WHERE partner_one = (SELECT id from employees WHERE first_name="Jim") OR partner_two= (SELECT id from employees WHERE first_name="Jim");
DELETE FROM performance_reviews WHERE employee_id = (SELECT id from employees WHERE first_name="Jim");
DELETE FROM employees WHERE first_name = "Jim";
SELECT * FROM employees;
SELECT * FROM performance_reviews;
SELECT * FROM relationships;
.print

--23 Roy Anderson and Pam Beesly break up
.print 23
DELETE FROM relationships WHERE (partner_one = (SELECT id FROM employees WHERE first_name = "Roy") AND partner_two = (SELECT id FROM employees WHERE first_name = "Pam")) 
OR (partner_two = (SELECT id FROM employees WHERE first_name = "Roy") AND partner_one = (SELECT id FROM employees WHERE first_name = "Pam"));
SELECT * FROM relationships;
.print

--24 Pam Beesly gets review score of 7.6
.print 24
INSERT INTO performance_reviews (score, employee_id)
VALUES (7.6, (SELECT id FROM employees WHERE first_name = "Pam"));
SELECT * FROM performance_reviews WHERE employee_id = (SELECT id FROM employees WHERE first_name = "Pam");
.print

--25 Dwight Schrute gets another review score of 8.7
.print 25
INSERT INTO performance_reviews (score, employee_id)
VALUES (8.7, (SELECT id FROM employees WHERE first_name = "Dwight"));
SELECT * FROM performance_reviews WHERE employee_id = (SELECT id FROM employees WHERE first_name = "Dwight");
.print


--26 Ryan Howard quits
.print 26
DELETE FROM relationships WHERE partner_one = (SELECT id FROM employees WHERE first_name = "Ryan") OR partner_two = (SELECT id FROM employees WHERE first_name = "Ryan");
DELETE FROM performance_reviews WHERE employee_id = (SELECT id FROM employees WHERE first_name = "Ryan");
DELETE FROM employees WHERE first_name = "Ryan";
SELECT * FROM employees;
.print

--27 Jim Halpert moves back to Sales as Sales Rep
.print 27
INSERT INTO employees (first_name, last_name, department, role) 
VALUES ("Jim", "Halpert", "Sales", "Sales Representative");
SELECT * FROM employees WHERE first_name = "Jim";
.print

--28 Karen Filippelli moves into Sales department as Sales Representative
.print 28
INSERT INTO employees (first_name, last_name, department, role)
VALUES ("Karen", "Filippelli", "Sales", "Sales Representative");
SELECT * FROM employees WHERE first_name = "Karen";
.print

--29 Karen and Jim get into relationship
.print 29
INSERT INTO relationships (partner_one, partner_two)
VALUES ((SELECT id from employees WHERE first_name = "Karen"), (SELECT id from employees WHERE first_name = "Jim"));
SELECT * FROM relationships;
.print

--30 office onsite party with 120 dollar budget
.print 30
INSERT INTO parties (budget, is_onsite)
VALUES (120, true);
SELECT * FROM parties;
.print

--31 office party scheduled right before this is canceled, and an office party is scheduled instead with budget of 300 dollars
.print 31
DELETE FROM parties WHERE (id = (SELECT id FROM parties ORDER BY id DESC LIMIT 1));
INSERT INTO parties (budget, is_onsite)
VALUES (300, true);
SELECT * FROM parties;
.print

--32 karen and Jim break up
.print 32
DELETE FROM relationships WHERE (partner_one = (SELECT id FROM employees WHERE first_name = "Jim") AND partner_two = (SELECT id from employees WHERE first_name = "Karen"))
OR (partner_one = (SELECT id FROM employees WHERE first_name = "Karen") AND partner_two = (SELECT id from employees WHERE first_name = "Jim"));
SELECT * FROM relationships;
.print

--33 Pam and Jim get into relationship
.print 33
INSERT into relationships (partner_one, partner_two)
VALUES ((SELECT id FROM employees WHERE first_name = "Pam"), (SELECT id FROM employees WHERE first_name = "Jim"));
SELECT * FROM relationships;