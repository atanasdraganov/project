CREATE PROCEDURE AddEmployee
@EmployeeName VARCHAR(255), 
@Age INT,
@AddressId INT,
@PositionId INT,
@DateOfSigning DATE, 
@DateOfLeaving DATE, 
@IsActive BIT
AS
INSERT INTO dbo.Employee(EmployeeName, Age, AddressId, PositionId, DateOfSigning, DateOfLeaving, IsActive)
VALUES(@EmployeeName, @Age, @AddressId, @PositionId, @DateOfSigning, @DateOfLeaving, @IsActive)
GO;
