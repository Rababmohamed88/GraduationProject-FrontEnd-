﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarsApi.ViewModels
{
    public class ResetPasswordViewModel
    {
        [Required]
        public string Token { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [StringLength(50, MinimumLength =5)]
        public string Password { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 5)]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }
    }
}
