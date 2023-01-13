CREATE PROCEDURE UpdateEmployee
@Id INT,
@EmployeeName VARCHAR(255), 
@Age INT,
@AddressId INT,
@PositionId INT,
@DateOfSigning DATE, 
@DateOfLeaving DATE, 
@IsActive BIT
AS
UPDATE dbo.Employee
SET EmployeeName = @EmployeeName,
	Age = @Age,
	AddressId = @AddressId, 
	PositionId = @PositionId, 
	DateOfSigning = @DateOfSigning,
	DateOfLeaving = @DateOfLeaving,
	IsActive = @IsActive
WHERE Id = @Id
GO;
