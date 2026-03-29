# az mysql

```bash
# Create a MySQL database.
az mysql db create

# Delete a database.
az mysql db delete

# List the databases for a server.
az mysql db list

# Show the details of a database.
az mysql db show

# Connect to a flexible server.
az mysql flexible-server connect

# Create a MySQL flexible server.
az mysql flexible-server create

# Delete a flexible server.
az mysql flexible-server delete

# Detach vnet for a flexible server.
az mysql flexible-server detach-vnet

# Connect to a flexible server.
az mysql flexible-server execute

# Geo-restore a flexible server from backup.
az mysql flexible-server geo-restore

# List available flexible servers.
az mysql flexible-server list

# Lists available sku's in the given region.
az mysql flexible-server list-skus

# Restart a flexible server.
az mysql flexible-server restart

# Restore a flexible server from backup.
az mysql flexible-server restore

# Get the details of a flexible server.
az mysql flexible-server show

# Show the connection strings for a MySQL flexible-server database.
az mysql flexible-server show-connection-string

# Start a flexible server.
az mysql flexible-server start

# Stop a flexible server.
az mysql flexible-server stop

# Update a flexible server.
az mysql flexible-server update

# Upgrade the major version of a flexible server.
az mysql flexible-server upgrade

# Wait for the flexible server to satisfy certain conditions.
az mysql flexible-server wait

# Create an Active Directory administrator.
az mysql flexible-server ad-admin create

# Delete an Active Directory administrator.
az mysql flexible-server ad-admin delete

# List all Active Directory administrators.
az mysql flexible-server ad-admin list

# Get an Active Directory administrator.
az mysql flexible-server ad-admin show

# Wait for the Active Directory administrator to satisfy certain conditions.
az mysql flexible-server ad-admin wait

# Get the server's advanced threat protection setting.
az mysql flexible-server advanced-threat-protection-setting show

# Update the server's advanced threat protection setting.
az mysql flexible-server advanced-threat-protection-setting update

# Create a backup for a given server with specified backup name.
az mysql flexible-server backup create

# Delete a backup for a given server with specified backup name.
az mysql flexible-server backup delete

# List all the backups for a given server.
az mysql flexible-server backup list

# Show the details of a specific backup for a given server.
az mysql flexible-server backup show

# Create a MySQL database on a flexible server.
az mysql flexible-server db create

# Delete a database on a flexible server.
az mysql flexible-server db delete

# List the databases for a flexible server.
az mysql flexible-server db list

# Show the details of a database.
az mysql flexible-server db show

# Run an existing workflow in your github repository.
az mysql flexible-server deploy run

# Create GitHub Actions workflow file for MySQL server.
az mysql flexible-server deploy setup

# Create a new firewall rule for a flexible server.
az mysql flexible-server firewall-rule create

# Delete a firewall rule.
az mysql flexible-server firewall-rule delete

# List all firewall rules for a flexible server.
az mysql flexible-server firewall-rule list

# Get the details of a firewall rule.
az mysql flexible-server firewall-rule show

# Update a firewall rule.
az mysql flexible-server firewall-rule update

# Resets GTID on a server.
az mysql flexible-server gtid reset

# Add user asigned managed identities to the server.
az mysql flexible-server identity assign

# List all user assigned managed identities from the server.
az mysql flexible-server identity list

# Remove user asigned managed identites from the server.
az mysql flexible-server identity remove

# Get an user assigned managed identity from the server.
az mysql flexible-server identity show

# Create a new import workflow for flexible server.
az mysql flexible-server import create

# To stop replication between the source single server and target flexible server.
az mysql flexible-server import stop-replication

# List all of the maintenances of a flexible server.
az mysql flexible-server maintenance list

# Reschedule the ongoing planned maintenance of a flexible server.
az mysql flexible-server maintenance reschedule

# Get the specific maintenance of a flexible server by maintenance name.
az mysql flexible-server maintenance show

# List the parameter values for a flexible server.
az mysql flexible-server parameter list

# Update the parameter of a flexible server.
az mysql flexible-server parameter set

# Batch update parameters of a flexible server.
az mysql flexible-server parameter set-batch

# Get the parameter for a flexible server.".
az mysql flexible-server parameter show

# Create a read replica for a server.
az mysql flexible-server replica create

# List all read replicas for a given server.
az mysql flexible-server replica list

# Stop replication to a read replica and make it a read/write server.
az mysql flexible-server replica stop-replication

# Download log files.
az mysql flexible-server server-logs download

# List log files for a server.
az mysql flexible-server server-logs list

# Download log files.
az mysql server-logs download

# List log files for a server.
az mysql server-logs list

# Create a server.
az mysql server create

# Delete a server.
az mysql server delete

# Geo-restore a server from backup.
az mysql server georestore

# List available servers.
az mysql server list

# List available sku's in the given region.
az mysql server list-skus

# Restart a server.
az mysql server restart

# Restore a server from backup.
az mysql server restore

# Get the details of a server.
az mysql server show

# Show the connection strings for a MySQL server database.
az mysql server show-connection-string

# Start a stopped server.
az mysql server start

# Stop a running server.
az mysql server stop

# Update a server.
az mysql server update

# Upgrade mysql server to a higher version, like 5.6 to 5.7.
az mysql server upgrade

# Wait for server to satisfy certain conditions.
az mysql server wait

# Create an Active Directory administrator for MySQL server.
az mysql server ad-admin create

# Delete an Active Directory Administrator for MySQL server.
az mysql server ad-admin delete

# List all Active Directory Administrators for MySQL server.
az mysql server ad-admin list

# Get Active Directory Administrator information for a MySQL server.
az mysql server ad-admin show

# Place the CLI in a waiting state until a condition of the MySQL server Active Directory Administrator is met.
az mysql server ad-admin wait

# List the configuration values for a server.
az mysql server configuration list

# Update the configuration of a server.
az mysql server configuration set

# Get the configuration for a server.".
az mysql server configuration show

# Create a new firewall rule for a server.
az mysql server firewall-rule create

# Delete a firewall rule.
az mysql server firewall-rule delete

# List all firewall rules for a server.
az mysql server firewall-rule list

# Get the details of a firewall rule.
az mysql server firewall-rule show

# Update a firewall rule.
az mysql server firewall-rule update

# Create server key.
az mysql server key create

# Delete server key.
az mysql server key delete

# Gets a list of  Server keys.
az mysql server key list

# Show server key.
az mysql server key show

# Approve the specified private endpoint connection associated with a MySQL server.
az mysql server private-endpoint-connection approve

# Delete the specified private endpoint connection associated with a MySQL server.
az mysql server private-endpoint-connection delete

# Reject the specified private endpoint connection associated with a MySQL server.
az mysql server private-endpoint-connection reject

# Show details of a private endpoint connection associated with a MySQL server.
az mysql server private-endpoint-connection show

# List the private link resources supported for a MySQL server.
az mysql server private-link-resource list

# Create a read replica for a server.
az mysql server replica create

# List all read replicas for a given server.
az mysql server replica list

# Stop replication to a read replica and make it a read/write server.
az mysql server replica stop

# Create a virtual network rule to allows access to a MySQL server.
az mysql server vnet-rule create

# Deletes the virtual network rule with the given name.
az mysql server vnet-rule delete

# Gets a list of virtual network rules in a server.
az mysql server vnet-rule list

# Gets a virtual network rule.
az mysql server vnet-rule show

# Update a virtual network rule.
az mysql server vnet-rule update
```
