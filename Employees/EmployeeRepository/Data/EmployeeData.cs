using DataAccess.DbAccess;
using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Data
{
    public class EmployeeData : IEmployeeData
    {
        private readonly ISqlDataClass _db;
        public EmployeeData(ISqlDataClass db)
        {
            _db = db;
        }

        public Task<IEnumerable<EmployeeModel>> GetEmployees() =>
             _db.LoadData<EmployeeModel, dynamic>("GetAllEmployees", new { });

        public async Task<EmployeeModel?> GetEmployeeById(int id)
        {
            var results = await _db.LoadData<EmployeeModel, dynamic>(
                "GetEmployeeById",
                new { Id = id });
            return results.FirstOrDefault();
        }

        public Task AddEmployee(EmployeeModel employee) =>
            _db.SaveData("AddEmployee", employee);

        public Task UpdateEmployee(EmployeeModel employee) =>
            _db.SaveData("UpdateEmployeeProcedure", employee);

        public Task DeleteEmployee(int id) =>
            _db.SaveData("DeleteEmployeeById", new { Id = id });

    }
}
