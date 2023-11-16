using CourseProject.Data;
using CourseProject.Models;
using CourseProject.Services.Interfaces;

namespace CourseProject.Services
{
    public class PostService : IPostService
    {
        private PostContext _dataContext;
        public PostService(PostContext dataContext)
        {
            _dataContext = dataContext;
        }
        public PostModel Create(PostModel model)
        {
            _dataContext.Posts.Add(model);
            _dataContext.SaveChanges();

            return model;
        }


        public PostModel Update(PostModel model)
        {
            _dataContext.Posts.Update(model);
            _dataContext.SaveChanges();

            return model;
        }

        public void Delete(int id)
        {
            var modelToDelete = _dataContext.Posts.Where(p => p.Id == id).FirstOrDefault(x => x.Id == id);
            _dataContext.Posts.Remove(modelToDelete);
            _dataContext.SaveChanges();
        }

        public PostModel Get(int id)
        {
            return _dataContext.Posts.Where(p => p.Id == id).FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<PostModel> GetAll()
        {
            return _dataContext.Posts.ToList();
        }

    }
}
