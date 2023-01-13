CREATE TABLE Employee(
	Id INT NOT NULL, 
	EmployeeName VARCHAR(255), 
	Age INT, 
	AddressId INT, 
	PositionId INT,
	DateOfSigning DATE, 
	DateOfLeaving DATE, 
	IsActive BIT
	PRIMARY KEY(Id),
	FOREIGN KEY(AddressId) REFERENCES Address(Id),
	FOREIGN KEY(PositionId) REFERENCES Position(Id)
);