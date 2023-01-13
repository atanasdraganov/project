CREATE PROCEDURE DeleteEmployeeById
@Id int
AS
DELETE FROM Employee
WHERE Id=@Id
GO;
