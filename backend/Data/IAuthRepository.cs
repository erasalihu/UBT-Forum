using System.Threading.Tasks;
using backend.Model;
using backend.Model.Dto;

namespace backend.Data
{
    public interface IAuthRepository
    {
        Task<ServiceResponse<UserInfo>> Register(UserRegisterDto user);
        Task<ServiceResponse<string>> Login(string username,string password);
        Task<bool> UserExists(string username,string email);

    }
}