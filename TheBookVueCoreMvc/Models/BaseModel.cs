using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace TheBookVueCoreMvc.Models
{
    public class BaseModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(1000)]
        public string Name { get; set; }
        [MaxLength(2000)]
        public string Description { get; set; }
        [Required]
        [MaxLength(30)]
        public string Code { get; set; }
        [Required]
        public bool Active { get; set; }

        [XmlIgnore]
        public string TypeId;

    }
}
