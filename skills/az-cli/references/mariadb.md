# az mariadb

```bash
# Create a MariaDB database.
az mariadb db create

# Delete a database.
az mariadb db delete

# List the databases for a server.
az mariadb db list

# Show the details of a database.
az mariadb db show

# Download log files.
az mariadb server-logs download

# List log files for a server.
az mariadb server-logs list

# Create a server.
az mariadb server create

# Delete a server.
az mariadb server delete

# Geo-restore a server from backup.
az mariadb server georestore

# List available servers.
az mariadb server list

# List available sku's in the given region.
az mariadb server list-skus

# Restart a server.
az mariadb server restart

# Restore a server from backup.
az mariadb server restore

# Get the details of a server.
az mariadb server show

# Show the connection strings for a MariaDB server database.
az mariadb server show-connection-string

# Start a stopped server.
az mariadb server start

# Stop a running server.
az mariadb server stop

# Update a server.
az mariadb server update

# Wait for server to satisfy certain conditions.
az mariadb server wait

# List the configuration values for a server.
az mariadb server configuration list

# Update the configuration of a server.
az mariadb server configuration set

# Get the configuration for a server.".
az mariadb server configuration show

# Create a new firewall rule for a server.
az mariadb server firewall-rule create

# Delete a firewall rule.
az mariadb server firewall-rule delete

# List all firewall rules for a server.
az mariadb server firewall-rule list

# Get the details of a firewall rule.
az mariadb server firewall-rule show

# Update a firewall rule.
az mariadb server firewall-rule update

# Approve the specified private endpoint connection associated with a MariaDB server.
az mariadb server private-endpoint-connection approve

# Delete the specified private endpoint connection associated with a MariaDB server.
az mariadb server private-endpoint-connection delete

# Reject the specified private endpoint connection associated with a MariaDB server.
az mariadb server private-endpoint-connection reject

# Show details of a private endpoint connection associated with a MariaDB server.
az mariadb server private-endpoint-connection show

# List the private link resources supported for a MariaDB server.
az mariadb server private-link-resource list

# Create a read replica for a server.
az mariadb server replica create

# List all read replicas for a given server.
az mariadb server replica list

# Stop replication to a read replica and make it a read/write server.
az mariadb server replica stop

# Create a virtual network rule to allows access to a MariaDB server.
az mariadb server vnet-rule create

# Deletes the virtual network rule with the given name.
az mariadb server vnet-rule delete

# Gets a list of virtual network rules in a server.
az mariadb server vnet-rule list

# Gets a virtual network rule.
az mariadb server vnet-rule show

# Update a virtual network rule.
az mariadb server vnet-rule update
```
