create database college_59;
use college_59;
create table student( roll_no int, name varchar(30));
insert into student values(1,'Vivek'),(2,'Jash'),(3,'Suyash'),(4,'Vaibhav');
select * from student;

call selectTestTable();
call selectTestTableAsExit();


create database flipkart; 
use flipkart;
create table SupplierProducts(SupplierID int, ProductID int, PRIMARY KEY(SupplierID, ProductID));
insert into SupplierProducts values
(1,10),
(2,20),
(3,30),
(4,40);
select * from SupplierProducts;
drop table SupplierProducts;

Call InsertID(5,50);
Call InsertID_Exit(5,50);