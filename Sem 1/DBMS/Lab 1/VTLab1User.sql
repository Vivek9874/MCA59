use SPIT;
set SQL_SAFE_UPDATES=0;
update student set age = 25 where student_id = 4;
commit;
select * from student;