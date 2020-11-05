using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SuppliersController : ControllerBase
    {
        private readonly SupplierContext _context;
        public SuppliersController(SupplierContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Supplier>>> GetSuppliers()
        {
            var suppliers = await _context.Suppliers.ToListAsync();

            return Ok(suppliers);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Supplier>> GetSupplier(int id)
        {
            return await _context.Suppliers.FindAsync(id);
        }

    }
}