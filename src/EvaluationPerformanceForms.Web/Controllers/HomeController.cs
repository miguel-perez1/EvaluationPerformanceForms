using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace EvaluationPerformanceForms.Controllers
{
    public class HomeController : Controller
    {
        //private readonly IUserRepository _userRepository;

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }

        //public IActionResult GetUsers() 
        //{
        //    var users = _userRepository.GetFirstUser();
        //    return View(users);
        //}
    }
}
