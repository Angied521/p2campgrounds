CREATE DATABASE campgrounds_db;
USE campgrounds_db;

CREATE TABLE Camper
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(45) NOT NULL,
	password varchar(45) NOT NULL,
	PRIMARY KEY (id)
);


