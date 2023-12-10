namespace CourseProject.Models
{
    public class Status
    {
        public bool Completed { get; set; }
        public bool InProcess { get; set; }
        public bool Overdue { get; set; }
        public string GetStatus()
        {
            if (Completed) return "Выполнено";
            else if (InProcess) return "В процессе";
            else return "Просрочено";
        }
        public void SetStatus(DateTime date)
        {
            if (!Completed)
            {
                if (date > DateTime.Now) SetInProcess(true);
                else SetOverdue(true);
            }
        }

        public void SetCompleted(bool value)
        {
            ReturnStatus();
            Completed = value;

        }
        private void SetInProcess(bool value) => InProcess = value;
        private void SetOverdue(bool value) => Overdue = value;

        private void ReturnStatus()
        {
            SetInProcess(false);
            SetOverdue(false);
        }

    }
}
