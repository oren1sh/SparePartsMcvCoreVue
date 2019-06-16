using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace TheBookVueCoreMvc.Models
{
    public class Car:BaseModel
    {
        public List<Part> Parts { get; set; }

       
        /// <summary>
        /// props for vue front
        /// </summary>

        [XmlIgnore]
        public string Type { get; } = "Car";

    }
}
