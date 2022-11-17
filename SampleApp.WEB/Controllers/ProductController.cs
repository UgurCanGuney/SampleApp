using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SampleApp.WEB.Controllers
{
    public class ProductController : Controller
    {
        public ActionResult ProductIndex()
        {       
            return View();
        }

    }
}