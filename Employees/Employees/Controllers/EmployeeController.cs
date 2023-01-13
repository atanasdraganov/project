using Microsoft.AspNetCore.Mvc;
using DataAccess.Data;
using DataAccess.DbAccess;
using DataAccess.Models;

namespace Employees.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeData _data;
        public EmployeeController(IEmployeeData data)
        {
            _data = data;
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployeesAsync()
        {
            try
            {
                return Ok(await _data.GetEmployees());
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployeeById([FromRoute] int id)
        {
            try
            {
                return Ok(await _data.GetEmployeeById(id));
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] EmployeeModel employee)
        {
            try
            {
                await _data.AddEmployee(employee);
                return Ok();
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployeeAsync([FromBody]EmployeeModel employee)
        {
            try
            {

                await _data.UpdateEmployee(employee);
                return Ok();
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeById([FromRoute] int id)
        {
            try
            {
                await _data.DeleteEmployee(id);
                return Ok();
            }
            catch(Exception ex)
            {
                return Problem(ex.Message);
            }
        }
    }
}
