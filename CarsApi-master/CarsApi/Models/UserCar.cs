﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CarsApi.Models
{
    public class UserCar
    {
        [Key]
        public int Id { get; set; }
        public string CarLicenseNo { get; set; }

        [ForeignKey("User")]
        public int? UserId { get; set; }
        [ForeignKey("CarDetails")]
        public int? CarDetailsId { get; set; }

        public virtual CarDetails CarDetails { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<SellingData> SellingData { get; set; }
    }
}
