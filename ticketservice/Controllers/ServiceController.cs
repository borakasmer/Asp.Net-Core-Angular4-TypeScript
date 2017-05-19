using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ticketservice.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    public class ServiceController : Controller
    {
        // GET api/values
        [HttpGet]
        public JsonResult Get()
        {
            return Json(new List<SeatInfo>(){
                new SeatInfo(){ID=1,Name="Açık"},
                new SeatInfo(){ID=2,Name="Satış"},
                new SeatInfo(){ID=3,Name="VIP"},
                new SeatInfo(){ID=4,Name="Pasif"},
            });
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]List<Seat> data)
        {
            List<Seat> result = data;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
