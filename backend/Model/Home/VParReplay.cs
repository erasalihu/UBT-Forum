using System.Text.Json.Serialization;
using backend.Model.Sead;

namespace backend.Model.Home
{
    public class VParReplay
    {
        public int  Id { get; set; }
        public string Text { get; set; }
        public int Likes { get; set; }=0;
        public string Date { get; set; } 
        public int ThreadId { get; set; }
        public   VitiPar Thread { get; set; }
        public int? UserId { get; set; }
        public   UserInfo User { get; set; }   

    }
}