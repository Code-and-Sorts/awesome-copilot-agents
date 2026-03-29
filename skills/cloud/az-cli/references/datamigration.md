# az datamigration

```bash
# Start assessment on SQL Server instance(s).
az datamigration get-assessment

# Give SKU recommendations for Azure SQL offerings.
az datamigration get-sku-recommendation

# Migrate logins from the source Sql Servers to the target Azure Sql Servers.
az datamigration login-migration

# Collect performance data for given SQL Server instance(s).
az datamigration performance-data-collection

# Register Database Migration Service on Integration Runtime.
az datamigration register-integration-runtime

# Migrate schema from the source Sql Servers to the target Azure Sql Servers.
az datamigration sql-server-schema

# Migrate TDE certificate from source SQL Server to the target Azure SQL Server.
az datamigration tde-migration

# Stop in-progress database migration to SQL DB.
az datamigration sql-db cancel

# Create a new database migration to a given SQL Db. This command can migrate data from the selected source database tables to the target database tables. If the target database have no table existing, please use New-AzDataMigrationSqlServerSchema command to migrate schema objects from source database to target databse. The link of New-AzDataMigrationSqlServerSchema is https://learn.microsoft.com/cli/azure/datamigration?view=azure-cli-latest#az-datamigration-sql-server-schema.
az datamigration sql-db create

# Delete an in-progress or completed database migration to SQL DB.
az datamigration sql-db delete

# Retry on going migration for the database.
az datamigration sql-db retry

# Retrieve the specified database migration for a given SQL DB.
az datamigration sql-db show

# Place the CLI in a waiting state until a condition of the datamigration sql-db is met.
az datamigration sql-db wait

# Stop in-progress database migration to SQL Managed Instance.
az datamigration sql-managed-instance cancel

# Create a new database migration to a given SQL Managed Instance.
az datamigration sql-managed-instance create

# Initiate cutover for in-progress online database migration to SQL Managed Instance.
az datamigration sql-managed-instance cutover

# Delete Database Migration resource.
az datamigration sql-managed-instance delete

# Retrieve the specified database migration for a given SQL Managed Instance.
az datamigration sql-managed-instance show

# Place the CLI in a waiting state until a condition of the datamigration sql-managed-instance is met.
az datamigration sql-managed-instance wait

# Create Database Migration Service.
az datamigration sql-service create

# Delete Database Migration Service.
az datamigration sql-service delete

# Delete the integration runtime node.
az datamigration sql-service delete-node

# Retrieve all Database Migration Services in the resource group. And Retrieve all Database Migration Services in the subscription.
az datamigration sql-service list

# Retrieve the List of Authentication Keys for Self Hosted Integration Runtime.
az datamigration sql-service list-auth-key

# Retrieve the registered Integration Runtine nodes and their monitoring data for a given Database Migration Service.
az datamigration sql-service list-integration-runtime-metric

# Retrieve the List of database migrations attached to the service.
az datamigration sql-service list-migration

# Regenerate a new set of Authentication Keys for Self Hosted Integration Runtime.
az datamigration sql-service regenerate-auth-key

# Retrieve the Database Migration Service.
az datamigration sql-service show

# Update Database Migration Service.
az datamigration sql-service update

# Place the CLI in a waiting state until a condition of the datamigration sql-service is met.
az datamigration sql-service wait

# Stop in-progress database migration to SQL VM.
az datamigration sql-vm cancel

# Create a new database migration to a given SQL VM.
az datamigration sql-vm create

# Initiate cutover for in-progress online database migration to SQL VM.
az datamigration sql-vm cutover

# Delete Database Migration resource.
az datamigration sql-vm delete

# Retrieve the specified database migration for a given SQL VM.
az datamigration sql-vm show

# Place the CLI in a waiting state until a condition of the datamigration sql-vm is met.
az datamigration sql-vm wait
```
