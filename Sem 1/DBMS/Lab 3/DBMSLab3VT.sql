create database prac3_59;
use prac3_59;
drop database prac3_59;
set SQL_SAFE_UPDATES =0;
create table branch_59(bname varchar(18) primary key, city varchar(18));
Insert into branch_59 values
('vrce', 'nagpur'),
('ajni','nagpur'),
('karolbagh','delhi'),
('chandni','delhi'),
('dharmapeth','nagpur'),
('m.g.road','bangalore'),
('andheri','mumbai'),
('virar','mumbai'),
('nehru place','delhi'),
('powai','mumbai');
select city from branch_59;

create table customer_59(cname varchar(18) primary key, city varchar(18));
insert into customer_59 values
('anil','kolkata'),		
('sunil','delhi'),
('mehul','baroda'),
('mandar','patna'),
('madhuri','nagpur'),
('pramod','nagpur'),
('sandip','surat'),
('shivani','mumbai'),
('kranti','mumbai'),
('naren','mumbai');
drop table customer_59;
select * from customer_59;

create table deposit_59(actno varchar(5) primary key, cname varchar(18), bname varchar(18), amount decimal(8,2), adate date,
 foreign key(bname) references branch_59(bname), foreign key(cname) references customer_59(cname) on delete cascade);
insert into deposit_59 values 
(100 ,'anil', 'vrce', 1001,  '1995-03-01'),
(101 ,'sunil', 'ajni', 5000, '1996-01-04'),
(102 ,'mehul', 'karolbagh', 3500, '1995-11-15'),
(104 ,'madhuri', 'chandni', 1200, '1995-12-17'),
(105 ,'pramod', 'm.g.road', 3000, '1996-03-27'),
(106,'sandip', 'andheri', 2000, '1996-03-31'),
(107 ,'shivani', 'virar', 1001, '1995-09-05'),
(108 ,'kranti', 'nehru place', 5000, '1995-07-02'),
(109 ,'naren', 'powai', 7000, '1995-08-10');
select * from deposit_59;

drop table deposit_59; 

create 	table borrow_59
(loan_no varchar(5) primary key, cname varchar(18), bname varchar(18), amount decimal(8,2),
foreign key(cname) references customer_59(cname), foreign key(bname) references branch_59(bname));
insert into borrow_59 values
(201, 'anil', 'vrce', 1000),
(206, 'mehul', 'ajni', 5000),
(311, 'sunil', 'chandni', 3000),
(321, 'madhuri', 'andheri', 2000),
(375, 'pramod', 'virar', 8000),
(481, 'kranti', 'nehru place', 	3000);
select * from borrow_59;
drop table borrow_59;

-- basic queries --
-- 1. list all deposit table --
select * from deposit_59;

-- 2. List all from borrow table --
select * from borrow_59;

-- 3. list names of customers from nagpur --
select * from customer_59 where city = 'nagpur';

-- 4. List names of borrowers having loan number 206 --
select * from borrow_59 where loan_no = 206;

-- 5. List names of depositer having loan amount greater than 6000 --
select * from deposit_59 where amount > 6000;

-- 6. List names of customers who opened account after date 1/12/95. --
select * from deposit_59 where adate > 1995-12-01;

-- 7. List the name of the city where karolbagh is located --
	select * from branch_59 where bname ='karolbagh';

-- 8. List total Loan --
select sum(amount) from borrow_59;

-- 9. List total number of customer cities. --
select count(distinct city) as total_cities from customer_59;

-- 10. count total number of customers --
select count(cname) from customer_59; 

-- 11. List maximum loan fro VRCE branch -- 
select max(amount) from borrow_59 where bname = 'vrce';

-- 12. Add 10% interest to all depositors --
update deposit_59 set amount = amount * 0.1;
select * from deposit_59;

-- 13. Add 10% interest to all depositors having VRCE branch --
update deposit_59 set amount = amount * 0.1 where bname = 'vrce';
select * from deposit_59 where bname =  'vrce';

-- 14. Delete depositor if the branch is virar and depositor name is Shivani
delete from deposit_59 where bname = 'virar'  and cname = 'shivani';
set FOREIGN_KEY_CHECKS = 0;

-- 15. Delete customers from Mumbai --
delete from customer_59 where city = 'mumbai';

-- 16.  Delete depositor having deposit less than 5000 --
delete from deposit_59 where amount < D5000;


-- JOINS--
-- 1. List names of depositors having same branch as the branch of SUNIL ---
select a.cname from deposit_59 a, deposit_59 b where a.bname = b.bname and b.cname = 'sunil';

-- 2. List LoanNo and LoanAmount of borrowers having the samebranch as the of depositor SUNIL --
select a.loan_no, a.amount from borrow_59 a
inner join 	
deposit_59 b using (bname)
where a.bname = b.bname and b.cname = 'sunil';

-- 3. List all depositors living in Nagpur -- 
select cname from deposit_59 
inner join
customer_59  using
(cname) where city = 'nagpur';

-- 4. list all the depositors having deposit in all the branches where SUNIL is having an account --
select a.cname, a.bname from deposit_59 a, deposit_59 b where
a.bname=b.bname	 and b.cname='sunil';


-- 5. List names of customers having maximum deposit --
select a.cname, a.amount from deposit_59 a 
inner join (select max(amount) as
max_amount from deposit_59) b on a.amount=b.max_amount ;

select cname from deposit_59
where amount =(select max(amount) from deposit_59);

-- 6. List names of customers having maximum deposit in the customers living in Nagpur --
select cname, amount from deposit_59
inner join
customer_59 using (cname) where city = 'nagpur'
order by deposit_59.amount desc
limit 1;

-- 7.  List the names of branches having highest number of depositors --
select a.bname from deposit_59 a group by a.bname having
count(a.cname)>=all (select count(b.cname) from deposit_59 b group by b.bname);

-- 8. List the highest deposit of the city where branch of sunil is located -- 
select max(amount) from deposit_59
inner join 
customer_59 using (cname) where city = 'delhi';
 
-- 9. List the names of customers having more deposit than the average deposit in their respective branches --
select cname from deposit_59
where amount > (select avg(amount) from deposit_59);

-- 10. List the names of branches where number of depositors less than 2 --
select b.bname from branch_59 as b
inner join deposit_59 as d
using(bname)
group by d.bname having count(cname)<2; 	

-- 11. Count the number of customers living in the city where the branch is located. --
select count(distinct cname) from customer_59
inner join branch_59
using(city);
SELECT * FROM CUSTOMER_59;
SELECT * FROM BRANCH_59;

-- 12. Change the living city of the VRCE branch borrowers to Nagpur --
update customer_59 as a
inner join borrow_59 as b
on a.cname=b.cname
set a.city='nagpur'
where b.bname='vrce';
select * from customer_59;

-- 13. Update deposit of Anil, give him maximum deposit from depositors living in city Nagpur. --
update deposit_59 as a
inner join (
select a1.cname, MAX(amount) AS max_amt
from deposit_57 as a1
inner join customer_59 as b using(cname)
where city = 'nagpur'
group by a1.cname)
as subq on a.cname=subq.cname
set a.amount=subq.max_amt
where a.cname='anil';
select * from deposit_59 where cname='anil';

update deposit_59 d
set d.amount = (select maxamt from (select max(de.amount) as maxamt from deposit_59 de where de.cname in (select c.cname from customer_59 c where c.city = 'Nagpur')) as res)
where d.cname = 'anil';
select * from deposit_59 where cname = 'anil';

-- 14. Transfer Rs. 100 from account Anil to account Sunil if both are having the same branch. --
update deposit_59 as a
join deposit_59 as b
set a.amount=a.amount-100,
b.amount=b.amount+100
where a.cname='anil' and b.cname='sunil' and a.bname=b.bname;
SELECT* FROM DEPOSIT_59;

-- 15. Add Rs. 100 to the account of all those depositors who are having the highest deposit amount in their respective branches.
update deposit_59 as a
inner join (select max(a1.amount)as max_amt,a1.bname from deposit_59 as a1 group by a1.bname)as subq
on(a.bname=subq.bname)
set amount=amount+100
where a.amount=subq.max_amt;
select * from deposit_59;

-- 16. Delete branches having deposit from nagpur --
delete a from branch_59 a inner join deposit_59 b using(bname) where
a.city='nagpur';
select * from branch_59;

-- 17. Delete deposit of Anil and Sunil if both are living in the same city. --
delete a from deposit_59 a inner join customer_59 b using (cname) 
inner join
customer_59 c using(city) where b.cname='anil' and c.cname='sunil';

-- 18. Delete borrower of branches having minimum number of customers. --

-- 19. List names of customers who are depositors as well as borrowers. --
select a.cname from deposit_59 a inner join
borrow_59 b on a.cname=b.cname;

-- 20. List all the customers who are depositors but not borrowers. --
select cname from customer_59 inner join deposit_59 
using(cname) left outer join borrow_59 c using (cname) where c.cname is null;


-- 21. List the depositors having the same living city as Sunil and the same branch city as Anil. --

-- 22. List the depositors having amount less than 5000 and living in the city as Shivani --
select a.cname from deposit_59 a inner join customer_59 b using (cname)
where b.city =(select city from customer_59 where cname='shivani') and
a.amount<5000;	
 
-- 23. List the customers who are borrowers or depositors and havingliving city Mumbai and the branch city same as that of Sandip --

-- 24. List the branch name and branch wise deposit. --
select a.bname, sum(b.amount) as deposit from branch_59 a inner join
deposit_59 b using(bname) group by b.bname;

-- 25. Add 100 to the amount of all depositors having deposit higherthan the average deposit of their branch. --

-- 26. List names of depositors who has third highest amount. --

-- 27. List details of depositors according to ascending order of customer names.
select * from deposit_59 a inner join customer_59 b using (cname) order by
b.cname asc;

-- subquery --
-- 1. --
select cname from deposit_59 where bname = (select bname from deposit_59 where cname='sunil');

-- 2. --
select loan_no, amount from borrow_59 where bname = (select bname from borrow_59 where cname='sunil' );	
 
 -- 12. --
 update customer_59 set city='nagpur' where cname = (select cname from
borrow_59 where bname='vrce');
select * from customer_59;
