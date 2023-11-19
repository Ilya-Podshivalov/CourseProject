namespace CourseProject.Models
{
    public class PostModel
    {
        public int Id { get; set; }
        public string Header { get; set; }
        public string Text { get; set; }

        public DateTime Date { get; set; }

        public string Progress { get; set; }
    }
}
