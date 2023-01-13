using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class EmployeeModel
    {
        public int Id { get; set; }
        public string EmployeeName { get; set; }
        public int Age { get; set; }
        public int AddressId { get; set; }
        public int PositionId { get; set; }
        public DateTime DateOfSigning { get; set; }
        public DateTime DateOfLeaving { get; set; }
        public bool IsActive { get; set; }
    }
}
