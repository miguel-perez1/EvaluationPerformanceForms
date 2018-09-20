using System.Data;
using Infrastructure.Data.Sql;
using MySql.Data.MySqlClient;

namespace Infrastructure.Data.Sql
{
    public class MySqlConnectionFactory : ISqlConnectionFactory
    {
        private readonly string _connectionString;

        public MySqlConnectionFactory()
        {
            _connectionString = "server=easel1.fulgentcorp.com;port=3306;database=gramjam;uid=gramjamuser;pwd=z9u@8Yd!uTSVB4Qb6#m;SslMode=none";
        }

        public IDbConnection Connection
        {
            get
            {
                var connection = new MySqlConnection(_connectionString);
                connection.Open();
                return connection;
            }
        }
    }
}
