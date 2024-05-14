using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ExpenseTracker.Helpers
{
    public static class FormHelpers
    {
        public static IHtmlContent Icons()
        {
            string[] AllFiles =Directory.GetFileSystemEntries("wwwroot\\icons");
            var result = ;
            foreach (string file in AllFiles)
            {
                var img = new TagBuilder("img");
                img.MergeAttribute("src",$"/icons/{Path.GetFileName(file)}");
                result.InnerHtml.AppendHtml(img);
               ;
            }
            return result;
        }
    }
}
