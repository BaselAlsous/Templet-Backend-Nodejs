Drop Database if exists testAbd;
Create Database testAbd;
use testAbd;



create table person(
    id int primary key auto_increment ,
    name varchar(255) NOT NULL
);
