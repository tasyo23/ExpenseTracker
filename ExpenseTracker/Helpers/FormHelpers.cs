using Microsoft.AspNetCore.Html;

namespace ExpenseTracker.Helpers
{
    public static class FormHelpers
    {
        public static HtmlString Icons()
        {
            string[] AllFiles = Directory.GetFiles("wwwroot\\icons");
            string result = "";
            foreach (string file in AllFiles)
            {
                result += $"<img src='{file}'/>";
            }
            return new HtmlString(result);
        }
    }
}
