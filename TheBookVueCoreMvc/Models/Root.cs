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
    public class Root:BaseModel
    {
        [Required]
        [Column("CommodityChapterId")]
        public int ChapterId { get; set; }

        [JsonIgnore]

        public virtual Chapter Chapter { get; set; }

        /// <summary>
        /// props for vue front
        /// </summary>

        [XmlIgnore]
        public string Type { get; } = "Root";

    }
}
