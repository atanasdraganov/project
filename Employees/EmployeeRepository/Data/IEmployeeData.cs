using DataAccess.Models;

namespace DataAccess.Data
{
    public interface IEmployeeData
    {
        Task AddEmployee(EmployeeModel employee);
        Task DeleteEmployee(int id);
        Task<EmployeeModel?> GetEmployeeById(int id);
        Task<IEnumerable<EmployeeModel>> GetEmployees();
        Task UpdateEmployee(EmployeeModel employee);
    }
}