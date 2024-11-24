﻿using System.ComponentModel.DataAnnotations;

namespace react_group_project.Server.Models
{
    public class Permission
    {
        [Key]
        public required int Id { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        public List<UserGroup> UserGroups { get; set; } = new List<UserGroup>();
    }
}