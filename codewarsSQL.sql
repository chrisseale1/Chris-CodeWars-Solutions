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



#14    simple IN statement
/*For this challenge you need to create a SELECT statement, this SELECT statement 
will use an IN to check whether a department has had a sale with a price over 
98.00 dollars.

departments table schema

id
name
sales table schema

id
department_id (department foreign key)
name
price
card_name
card_number
transaction_date
resultant table schema

id
name*/

SELECT *
  FROM departments AS d
  WHERE d.id IN (
      SELECT s.department_id
        FROM sales AS s
          WHERE s.price > 98.00
  )


#15  SIMPLE  RANK and JOIN
SELECT
  p.*,
  COUNT(s) as sale_count, 
  RANK() OVER (ORDER BY sum(s.price) DESC) as sale_rank
FROM people p
JOIN sales s ON s.people_id = p.id
  GROUP BY p.id



#16     SQL SIMPLE HAVING
/*For this challenge you need to create a simple HAVING statement, you want to count how many people have the same age and return the groups with 10 or more people who have that age.

people table schema

id
name
age
return table schema

age
total_people  */
SELECT age, COUNT(*) AS "total_people"
  FROM people
  GROUP BY age HAVING COUNT(age) >= 10;


#17    Conditional Count
/*Given a payment table, which is a part of DVD Rental Sample Database, with the following schema

Column       | Type                        | Modifiers
-------------+-----------------------------+----------
payment_id   | integer                     | not null 
customer_id  | smallint                    | not null
staff_id     | smallint                    | not null
rental_id    | integer                     | not null
amount       | numeric(5,2)                | not null
payment_date | timestamp without time zone | not null
produce a result set for the report that shows a side-by-side comparison of the number and total amounts of payments made in Mike's and Jon's stores broken down by months.

The resulting data set should be ordered by month using natural order (Jan, Feb, Mar, etc.).

Note: You don't need to worry about the year component. Months are never repeated because the sample data set contains payment information only for one year.

The desired output for the report

month | total_count | total_amount | mike_count | mike_amount | jon_count | jon_amount
------+-------------+--------------+------------+-------------+-----------+-----------
2     |             |              |            |             |           |           
5     |             |              |            |             |           |           
...
month - number of the month (1 - January, 2 - February, etc.)
total_count - total number of payments
total_amount - total payment amount
mike_count - total number of payments accepted by Mike (staff_id = 1)
mike_amount - total amount of payments accepted by Mike (staff_id = 1)
jon_count - total number of payments accepted by Jon (staff_id = 2)
jon_amount - total amount of payments accepted by Jon (staff_id = 2)*/
SELECT
  EXTRACT(MONTH FROM payment_date) AS "month",
  COUNT(*) AS "total_count",
  SUM(amount) AS "total_amount",
  COUNT(*) FILTER (WHERE staff_id = 1) AS "mike_count",
  SUM(amount) FILTER (WHERE staff_id = 1) AS "mike_amount",
  COUNT(*) FILTER (WHERE staff_id = 2) AS "jon_count",
  SUM(amount) FILTER (WHERE staff_id = 2) AS "jon_amount"
FROM payment
GROUP BY month
ORDER BY month;




#16        SQL Basics: Top 10 customers by total payments amount
/*Your are working for a company that wants to reward its top 10 customers with a free gift. You have been asked to generate a simple report that returns the top 10 customers by total amount spent. Total number of payments has also been requested.

The query should output the following columns:

customer_id [int4]
email [varchar]
payments_count [int]
total_amount [float]
and has the following requirements:

only returns the 10 top customers, ordered by total amount spent*/




SELECT c.customer_id, c.email, p.payments_count, p.total_amount
FROM customer AS c
INNER JOIN (select customer_id, CAST( sum(amount) AS float) AS "total_amount", COUNT(payment_id) AS "payments_count"
            FROM payment GROUP BY customer_id) AS p ON p.customer_id = c.customer_id
ORDER BY p.total_amount DESC
LIMIT 10;