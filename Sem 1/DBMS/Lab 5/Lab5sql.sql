	CREATE DATABASE emp_table;
	USE emp_table;
	CREATE TABLE emp_details (name VARCHAR(20), occupation VARCHAR(20), working_date DATE, working_hours INT);
		INSERT INTO emp_details VALUES
		('Harsh', 'Scientist', '2020-10-21', 12),
		('Raj', 'Engineer', '2020-08-11', 10),
		('Ravi', 'Actor', '2020-10-22', 10),
		('Rahul', 'Doctor', '2020-10-04', 11),
		('Vivek', 'Developer', 2023-10-21, -5); -- new value --
	SELECT distinct * FROM emp_details;	
drop table emp_details;
delete from emp_details where occupation = 'Developer';
set SQL_SAFE_UPDATES=0;
-- trigger 2 --
create table emp_audit(name varchar(20), audit_description varchar(100));
insert into emp_details values
('Vivek', 'CEO', '2023-10-21', -10);
select * from emp_audit;	
update emp_details set working_date = '2024-11-13'where name = 'Vivek';

Create table empChanges (name varchar (20), new_occupation varchar (100), old_occupation varchar (100) ,updated_at varchar (255));
update emp_details set occupation = 'Suport Staff' where name = 'harsh';
select distinct * from empChanges;


Create table Emp_archives (Name varchar(50),Occupation varchar(50),Working_date date, Working_Hours int, Deleted_at varchar(255));
drop table emp_archives;
delete from emp_details where occupation = 'CEO';
select distinct * from emp_archives;


create table Total_working_hours_table (total int); 
insert into Total_working_hours_table values (69);

delete from emp_details where occupation = 'Engineer'; 
select distinct * from total_working_hours_table;
