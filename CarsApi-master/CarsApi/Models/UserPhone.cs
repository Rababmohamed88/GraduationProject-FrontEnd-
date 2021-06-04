﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CarsApi.Models
{
    public class UserPhone
    {
        [Key]
        public int Id { get; set; }
        public string Number { get; set; }
        [ForeignKey("User")]
        public int? UserId { get; set; }

        public virtual User User { get; set; }
    }
}
