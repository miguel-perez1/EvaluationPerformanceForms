using Dapper;
using Infrastructure.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.Data.Sql
{
    public class SqlRepository<TModel> : IRepository<TModel>
    {
        protected readonly ISqlConnectionFactory _connectionFactory;

        public SqlRepository(ISqlConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }

        public async Task<int> ExecuteAsync(string sqlCommand, object param)
        {
            using (var connection = _connectionFactory.Connection)
            {
                try
                {
                    var rowsAffected = await connection.ExecuteAsync(sqlCommand, param);
                    connection.Close();
                    return rowsAffected;
                }
                catch (Exception e)
                {

                    throw;
                }
            }
        }

        public async Task<TModel> FindAsync(string query, object param)
        {
            using (var connection = _connectionFactory.Connection)
            {
                var result = await connection.QueryFirstOrDefaultAsync<TModel>(query, param);
                connection.Close();
                return result;
            }
        }

        public async Task<IEnumerable<TModel>> GetAsync(string query, object param)
        {
            using (var connection = _connectionFactory.Connection)
            {
                var results = await connection.QueryAsync<TModel>(query, param);
                connection.Close();
                return results;
            }
        }
    }
}
