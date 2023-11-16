using CourseProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace CourseProject.Services.Interfaces
{
    public interface IPostService
    {
        PostModel Create(PostModel model);
        PostModel Update(PostModel model);
        PostModel Get(int id);
        IEnumerable<PostModel> GetAll();
        void Delete(int id);
    }
}
