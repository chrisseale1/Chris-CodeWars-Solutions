#1      SQL Basics: Simple MIN / MAX
/*For this challenge you need to create a simple MIN / MAX statement that will return the Minimum and Maximum ages out of all the people.

people table schema

id
name
age
select table schema

age_min (minimum of ages)
age_max (maximum of ages)*/
SELECT MAX(age) AS "age_max", MIN(age) AS "age_min" FROM people;


#2     SQL Grasshopper: Select Columns
/*Using only SQL, write a query that returns all rows in the custid, custname, and custstate columns from the customers table.

Table Description for customers:

Column	Data Type	Size	Sample
custid	integer	8	4
custname	string	50	Anakin Skywalker
custstate	string	50	Tatooine
custard	string	50	R2-D2
Your solution should contain only SQL.   */
SELECT custid, custname, custstate FROM customers;


#3   SQL Basics: Simple DISTINCT
/*For this challenge you need to create a simple DISTINCT statement, you want to find all the unique ages.

people table schema

id
name
age
select table schema

age (distinct)
NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.   */
SELECT DISTINCT(age) FROM people;



#4  SQL Basics: Simple SUM
/*For this challenge you need to create a simple SUM statement that will sum all the ages.

people table schema

id
name
age
select table schema

age_sum (sum of ages)  */
SELECT SUM(age) AS "age_sum" FROM people;




#5      Find all active students
/*Create a simple SELECT query to display student information of all ACTIVE students.

TABLE STRUCTURE:

students
Id	FirstName	LastName	IsActive    */
SELECT * FROM students WHERE IsActive IS 1;




#6    SQL Basics: Simple WHERE and ORDER BY
/*For this challenge you need to create a simple SELECT statement that will return all columns from the people table WHERE their age is over 50

people table schema

id
name
age
You should return all people fields where their age is over 50 and order by the age decending*/
SELECT * FROM people WHERE age > 50 ORDER BY age DESC;



#7     Hello SQL World!
/*
Return a table with a single column named Greeting with the phrase 'hello world!'*/
SELECT 'hello world!' as "Greeting";


#8     SQL Basics: Simple GROUP BY
/*For this challenge you need to create a simple GROUP BY statement, you want to group all the people by their age and count the people who have the same age.

people table schema

id
name
age
select table schema

age [group by]
people_count (people count)  */
SELECT age, Count(*) AS "people_count" FROM people GROUP BY age;



#9  SQL Basics: Create a FUNCTION
/*For this challenge you need to create a basic Increment function which Increments on the age field of the peoples table.

The function should be called increment, it needs to take 1 integer and increment 
that number by 1.
You may query the people table while testing but the query must only contain the function 
on your final submit.

important: you must remove all comments when submitting the kata.

people table schema

id
name
age     */
CREATE FUNCTION increment (IN age integer, OUT integer) 
AS 'SELECT age + 1'
LANGUAGE SQL;



#10     SQL Basics: Simple JOIN with COUNT
/*For this challenge you need to create a simple SELECT statement that will return all columns from the people table, and join to the toys table so that you can return the COUNT of the toys

people table schema

id
name
toys table schema

id
name
people_id
You should return all people fields as well as the toy count as "toy_count".  */
SELECT people.*, COUNT(toys.id) AS "toy_count" FROM people LEFT JOIN toys  ON toys.people_id = people.id
GROUP BY people.id;


#11  SQL Basics: Simple JOIN
/*For this challenge you need to create a simple SELECT statement that will return all columns from the products table, and join to the companies table so that you can return the company name.

products table schema

id
name
isbn
company_id
price
companies table schema

id
name
You should return all product fields as well as the company name as "company_name".*/
SELECT p.*, c.name AS "company_name" FROM products AS p LEFT JOIN companies AS c ON p.company_id = c.id;




#12 SQL Basics: Simple UNION ALL
/*For this challenge you need to create a UNION statement, there are two tables 
ussales and eusales the parent company tracks each sale at its respective location 
in each table, you must all filter the sale price so it only returns rows with a sale 
greater than 50.00. You have been tasked with combining that data for future analysis. 
Order by US then EU sales.

(us/eu)sales table schema

id
name
price
card_name
card_number
transaction_date
resultant table schema

location (EU for eusales and US for ussales)
id
name
price (greater than 50.00)
card_name
card_number
transaction_date  */

SELECT 'US' AS location, * 
  FROM ussales 
  WHERE price > 50.00 
UNION ALL 
SELECT 'EU' AS location, * 
  FROM eusales 
  WHERE price > 50.00;


#13    SQL Basics: Simple table totaling.
/*For this challenge you need to create a simple query to display each unique clan with 
their total points and ranked by their total points.

people table schema

name
points
clan
You should then return a table that resembles below

select on

rank
clan
total_points
total_people
The query must rank each clan by their total_points, you must return each unqiue clan 
and if there is no clan name you must replace it with [no clan specified], you must 
sum the total_points for each clan and the total_people within that clan.*/

SELECT
  ROW_NUMBER() over(ORDER BY SUM(points) DESC) rank,
  CASE WHEN clan = ''
    THEN '[no clan specified]'
    ELSE clan
  END as clan,
  SUM(points) as total_points,
  COUNT(*) as total_people
FROM people
GROUP BY clan
ORDER BY total_points DESC