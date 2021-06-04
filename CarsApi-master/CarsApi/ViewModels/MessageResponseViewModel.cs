﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarsApi.ViewModels
{
    public class MessageResponseViewModel
    {
        public string Message { get; set; }
        public string Token { get; set; }
        public bool IsSuccess { get; set; }
        public IEnumerable<string> Errors { get; set; }
        public DateTime? ExpireDate { get; set; }
    }
}
