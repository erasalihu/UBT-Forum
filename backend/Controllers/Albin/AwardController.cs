using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data;
using backend.Model;
using backend.Model.Sead;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers.Albin
{
    [ApiController]
    [Route("api/award")]
    public class AwardController : ControllerBase
    {
        private readonly DataContext _db;
        public AwardController(DataContext db)
        {
            _db = db;

        }
        [HttpGet]
        public async Task<IActionResult> getAwards()
        {
            ServiceResponse<List<Award>> awards = new ServiceResponse<List<Award>>();
            try
            {
                awards.Data = await _db.Awards.ToListAsync();
                // _db.awards.firstordefaultasync(x->x.id==1);
                awards.Message = "These are all the awards";
            }
            catch (Exception e)
            {
                awards.Success = false;
                awards.Message = e.Message;
                return BadRequest(awards);
            }
            return Ok(awards);
        }
        [HttpPost]
        public async Task<IActionResult> addAwards(Award newaward)
        {
            ServiceResponse<List<Award>> awards = new ServiceResponse<List<Award>>();
            try
            {
                await _db.Awards.AddAsync(newaward);
                await _db.SaveChangesAsync();
                awards.Message = "award has been added";
            }
            catch (Exception e)
            {
                awards.Success = false;
                awards.Message = e.Message;
                return BadRequest(awards);

            }
            return Ok(awards);
        }
        [HttpPut]
        public async Task<IActionResult> updateAwards(Award newaward)
        {
            ServiceResponse<List<Award>> awards = new ServiceResponse<List<Award>>();
            try
            {
                Award oldaward = await _db.Awards.FirstOrDefaultAsync(x => x.Id == newaward.Id);
                oldaward.AwardText = newaward.AwardText;
                _db.Awards.Update(oldaward);
                await _db.SaveChangesAsync();

            }
            catch (Exception e)
            {
                awards.Success = false;
                awards.Message = e.Message;
                return BadRequest(awards);

            }
            return Ok(awards);

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteAwards(int id)
        {
            ServiceResponse<List<Award>> awards = new ServiceResponse<List<Award>>();
            try
            {
                Award delAward = await _db.Awards.FirstOrDefaultAsync(x => x.Id == id);
                _db.Awards.Remove(delAward);
                await _db.SaveChangesAsync();
            }
            catch (Exception e)
            {
                awards.Success = false;
                awards.Message = e.Message;
                return BadRequest(awards);

            }
            return Ok(awards);
        }
    }
}