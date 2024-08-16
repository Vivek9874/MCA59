create database lms_group_06;
USE lms_group_06;

CREATE TABLE Course (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(255),
    CourseDescription VARCHAR(255),
    StartDate DATE,
    EndDate DATE,
    InstructorID INT
);	
select * from course;
select current_user();