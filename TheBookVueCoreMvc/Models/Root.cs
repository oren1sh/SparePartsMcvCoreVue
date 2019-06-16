using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace TheBookVueCoreMvc.Models
{
    public class Part:BaseModel
    {
        [Required]
        [Column("CommodityCarId")]
        public int CarId { get; set; }

        [JsonIgnore]

        public virtual Car Car { get; set; }

        /// <summary>
        /// props for vue front
        /// </summary>

        [XmlIgnore]
        public string Type { get; } = "Part";

    }
}
