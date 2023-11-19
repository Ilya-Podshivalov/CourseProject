namespace CourseProject.Models
{
    public class Status
    {
        public bool completed;
        public bool inProcess;
        public bool overdue;
        public string CheckStatus(DateTime date)
        {
            if (completed) return "Completed";
            else if(date < DateTime.Now)
            {
                SetOverdue(true);
                return "Overdue";
            }
            else
            {
                SetInProcess(true);
                return "In process";
            }
        }

        public void SetCompleted(bool value) => completed = value;
        public void SetInProcess(bool value) => inProcess = value;
        public void SetOverdue(bool value) => overdue = value;

    }
}
