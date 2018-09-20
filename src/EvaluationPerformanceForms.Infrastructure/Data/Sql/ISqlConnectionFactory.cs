using System.Data;

namespace Infrastructure.Data.Sql
{
    public interface ISqlConnectionFactory
    {
        IDbConnection Connection { get; }
    }
}
