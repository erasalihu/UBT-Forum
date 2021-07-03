using System.Threading.Tasks;
using  backend.Model.Sead;
using backend.Model.ViewModels;

namespace backend.Data
{
    public interface IAuthRepository
    {
        Task<ServiceResponse<string>> Register(UserRegisterDto user);
        Task<ServiceResponse<string>> Login(string username,string password);
        Task<bool> UserExists(string username,string email);
        Task<ServiceResponse<string>> changePassword(updatePasswordDto password,int id);
        Task<ServiceResponse<RegisterViewModel>> registerView();


    }
}