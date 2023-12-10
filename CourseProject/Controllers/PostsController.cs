﻿using CourseProject.Models;
using CourseProject.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CourseProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private IPostService _postService;
        public PostsController(IPostService postService) 
        {
            _postService = postService;
        }

        [HttpPost]
        public PostModel Create(PostModel model)
        {
            return _postService.Create(model);
        }

        [HttpPatch]
        public PostModel Update(PostModel model)
        {
            return _postService.Update(model);
        }

        [HttpGet("{id}")]
        public PostModel Get(int id)
        {
            return _postService.Get(id);
        }

        [HttpGet]
        public IEnumerable<PostModel> GetAll()
        {
            return _postService.GetAll();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postService.Delete(id);

            return Ok();
        }
    }
}
