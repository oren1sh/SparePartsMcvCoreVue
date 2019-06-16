using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace TheBookVueCoreMvc.Models
{
    public class Chapter:BaseModel
    {
        public List<Root> Roots { get; set; }

       
        /// <summary>
        /// props for vue front
        /// </summary>

        [XmlIgnore]
        public string Type { get; } = "Chapter";

    }
}
