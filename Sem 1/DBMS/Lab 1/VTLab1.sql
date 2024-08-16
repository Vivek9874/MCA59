create database SPIT;
drop database SPIT;
use SPIT;
set SQL_SAFE_UPDATES=0;
create table student (student_id int, student_name varchar(20));
alter table student add column (age int, phone_no int);
alter table student rename column student_name to sname;
alter table student add column class varchar(20) after sname;
alter table student modify sname varchar(30);
insert into student values
(1, 'Sanjay', 'symca', 23, 234567),
(2,'Vaidehi', 'fymca', 24, 765432),
(3,'Akshata', 'symca', 21, 237645),
(4,'Vidula', 'fymca', 22, 456732),
(5,'Pratik', 'symca', 23, 756431);
update student set age = 22 where student_id = 3;
delete from student where student_id = 5;

