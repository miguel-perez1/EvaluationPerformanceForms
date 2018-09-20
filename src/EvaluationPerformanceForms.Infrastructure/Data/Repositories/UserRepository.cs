using System;
using System.Threading.Tasks;
using Infrastructure.Data.Models;
using Infrastructure.Data.Sql;

namespace Infrastructure.Data.Repositories
{
    public class UserRepository : SqlRepository<User>, IUserRepository
    {
        public UserRepository(ISqlConnectionFactory connectionFactory) : base(connectionFactory)
        { }

        public Task<User> GetFirstUser()
        {
            var sqlQuery = $@"Select * from User";
            try
            {
                var result = FindAsync(sqlQuery, null);
                return result;
            } catch (Exception e)
            {
                throw;
            }
        }
    }
}
