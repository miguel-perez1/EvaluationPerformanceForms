using Infrastructure.Data.Models;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetFirstUser();
    }
}
