using System;
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


        [HttpGet("search")]
        public async Task<ActionResult<List<Supplier>>> Search(string name)
        {
            try
            {
                IQueryable<Supplier> query = _context.Suppliers;

                if (!string.IsNullOrEmpty(name))
                {
                    query = query.Where(e => e.Name.Contains(name));
                }

                var suppliers = await query.ToListAsync();
                return Ok(suppliers);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpGet]
        public async Task<ActionResult<List<Supplier>>> GetSuppliers()
        {
            try
            {
                var suppliers = await _context.Suppliers.ToListAsync();

                return Ok(suppliers);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Supplier>> GetSupplier(int id)
        {
            try
            {
                return await _context.Suppliers.FindAsync(id);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpPost]
        public ActionResult CreateSupplier([FromBody] Supplier supplier)
        {
            try
            {
                if (supplier == null)
                {
                    return BadRequest("Supplier object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                _context.Add(supplier);
                _context.SaveChanges();

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

    }
}