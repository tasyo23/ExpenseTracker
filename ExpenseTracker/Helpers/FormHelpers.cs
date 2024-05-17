using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ExpenseTracker.Helpers
{
    public static class FormHelpers
    {
        public static IEnumerable<string> Icons()
        {
            string[] AllFiles =Directory.GetFileSystemEntries("wwwroot\\icons");
            List<string> result=new List<string>();
            foreach (string file in AllFiles)
            {
                result.Add($"/icons/{Path.GetFileName(file)}");
              Console.WriteLine(file);
            }       
            Console.WriteLine(result.Count);
            return result ;

        }
    }
}
