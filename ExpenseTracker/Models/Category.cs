﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExpenseTracker.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        [Column(TypeName ="nvarchar(50)")]
        public string Title { get; set; }

        [Column(TypeName ="nvarchar(10)")]
        public string Icon { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string Name { get; set; }
    }
}
