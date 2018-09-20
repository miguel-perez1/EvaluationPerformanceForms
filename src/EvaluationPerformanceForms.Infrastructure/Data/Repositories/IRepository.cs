using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{    public interface IRepository<TModel>
    {
        Task<IEnumerable<TModel>> GetAsync(string query, object param);

        Task<TModel> FindAsync(string query, object param);

        Task<int> ExecuteAsync(string query, object param);

    }
}