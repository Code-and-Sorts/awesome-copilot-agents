# az postgres

```bash
# Connect to a flexible server.
az postgres flexible-server connect

# Create a PostgreSQL flexible server.
az postgres flexible-server create

# Delete a flexible server.
az postgres flexible-server delete

# Connect to a flexible server.
az postgres flexible-server execute

# Geo-restore a flexible server from backup.
az postgres flexible-server geo-restore

# List available flexible servers.
az postgres flexible-server list

# Lists available sku's in the given region.
az postgres flexible-server list-skus

# Migrate the network mode of a flexible server.
az postgres flexible-server migrate-network

# Restart a flexible server.
az postgres flexible-server restart

# Restore a flexible server from backup.
az postgres flexible-server restore

# Revive a dropped flexible server from backup.
az postgres flexible-server revive-dropped

# Get the details of a flexible server.
az postgres flexible-server show

# Show the connection strings for a PostgreSQL flexible-server database.
az postgres flexible-server show-connection-string

# Start a flexible server.
az postgres flexible-server start

# Stop a flexible server.
az postgres flexible-server stop

# Update a flexible server.
az postgres flexible-server update

# Upgrade the major version of a flexible server.
az postgres flexible-server upgrade

# Wait for the flexible server to satisfy certain conditions.
az postgres flexible-server wait

# Get advanced threat protection settings for a PostgreSL flexible server.
az postgres flexible-server advanced-threat-protection-setting show

# Updates advanced threat protection setting state for a flexible server.
az postgres flexible-server advanced-threat-protection-setting update

# Get available autonomous tuning index recommendations associated with a PostgreSQL flexible server.
az postgres flexible-server autonomous-tuning list-index-recommendations

# Get autonomous tuning settings associated to a PostgreSQL flexible server.
az postgres flexible-server autonomous-tuning list-settings

# Get available autonomous tuning table recommendations associated with a PostgreSQL flexible server.
az postgres flexible-server autonomous-tuning list-table-recommendations

# Update an autonomous tuning setting for a PostgreSQL flexible server.
az postgres flexible-server autonomous-tuning set-settings

# Show state of autonomous tuning for a PostgreSQL flexible server.
az postgres flexible-server autonomous-tuning show

# Get an autonomous tuning setting for a PostgreSQL flexible server.
az postgres flexible-server autonomous-tuning show-settings

# Update autonomous tuning to be enabled/disabled for a PostgreSQL flexible server.
az postgres flexible-server autonomous-tuning update

# Create a new backup for a flexible server.
az postgres flexible-server backup create

# Delete a specific backup.
az postgres flexible-server backup delete

# List all the backups for a given server.
az postgres flexible-server backup list

# Show the details of a specific backup for a given server.
az postgres flexible-server backup show

# Create a PostgreSQL database on a flexible server.
az postgres flexible-server db create

# Delete a database on a flexible server.
az postgres flexible-server db delete

# List the databases for a flexible server.
az postgres flexible-server db list

# Show the details of a database.
az postgres flexible-server db show

# Run an existing workflow in your github repository.
az postgres flexible-server deploy run

# Create GitHub Actions workflow file for PostgreSQL server.
az postgres flexible-server deploy setup

# Enable bringing your PostgreSQL data into Microsoft Fabric.
az postgres flexible-server fabric-mirroring start

# Stop bringing your PostgreSQL data into Microsoft Fabric.
az postgres flexible-server fabric-mirroring stop

# Update allowed mirrored databases.
az postgres flexible-server fabric-mirroring update-databases

# Create a new firewall rule for a flexible server.
az postgres flexible-server firewall-rule create

# Delete a firewall rule.
az postgres flexible-server firewall-rule delete

# List all firewall rules for a flexible server.
az postgres flexible-server firewall-rule list

# Get the details of a firewall rule.
az postgres flexible-server firewall-rule show

# Update a firewall rule.
az postgres flexible-server firewall-rule update

# Add user assigned managed identities to the server.
az postgres flexible-server identity assign

# List all user assigned managed identities from the server.
az postgres flexible-server identity list

# Remove user assigned managed identites from the server.
az postgres flexible-server identity remove

# Get an user assigned managed identity from the server.
az postgres flexible-server identity show

# Update to enable or disable system assigned managed identity on the server.
az postgres flexible-server identity update

# Get available tuning index recommendations associated with a PostgreSQL flexible server.
az postgres flexible-server index-tuning list-recommendations

# Get tuning settings associated for a PostgreSQL flexible server.
az postgres flexible-server index-tuning list-settings

# Update a tuning setting for a PostgreSQL flexible server.
az postgres flexible-server index-tuning set-settings

# Show state of index tuning for a PostgreSQL flexible server.
az postgres flexible-server index-tuning show

# Get a tuning setting for a PostgreSQL flexible server.
az postgres flexible-server index-tuning show-settings

# Update index tuning to be enabled/disabled for a PostgreSQL flexible server.
az postgres flexible-server index-tuning update

# List all the long-term-retention backups for a given server.
az postgres flexible-server long-term-retention list

# Performs all the checks that are needed for the subsequent long-term-retention backup operation to succeed.
az postgres flexible-server long-term-retention pre-check

# Show the details of a specific long-term-retention backup for a given server.
az postgres flexible-server long-term-retention show

# Start long-term-retention backup for a flexible server. SAS URL parameter refers to the container SAS URL, inside the storage account, where the backups will be uploaded.
az postgres flexible-server long-term-retention start

# Create a Microsoft Entra administrator.
az postgres flexible-server microsoft-entra-admin create

# Delete a Microsoft Entra administrator.
az postgres flexible-server microsoft-entra-admin delete

# List all Microsoft Entra administrators.
az postgres flexible-server microsoft-entra-admin list

# Get a Microsoft Entra administrator.
az postgres flexible-server microsoft-entra-admin show

# Wait for a Microsoft Entra administrator to satisfy certain conditions.
az postgres flexible-server microsoft-entra-admin wait

# Checks if the provided migration-name can be used.
az postgres flexible-server migration check-name-availability

# Create a new migration workflow for a flexible server.
az postgres flexible-server migration create

# List the migrations of a flexible server.
az postgres flexible-server migration list

# Get the details of a specific migration.
az postgres flexible-server migration show

# Update a specific migration.
az postgres flexible-server migration update

# List the parameter values for a flexible server.
az postgres flexible-server parameter list

# Update the parameter of a flexible server.
az postgres flexible-server parameter set

# Get the parameter for a flexible server.".
az postgres flexible-server parameter show

# Approve the specified private endpoint connection associated with a PostgreSQL flexible server.
az postgres flexible-server private-endpoint-connection approve

# Delete the specified private endpoint connection associated with a PostgreSQL flexible server.
az postgres flexible-server private-endpoint-connection delete

# List all private endpoint connections associated with a PostgreSQL flexible server.
az postgres flexible-server private-endpoint-connection list

# Reject the specified private endpoint connection associated with a PostgreSQL flexible server.
az postgres flexible-server private-endpoint-connection reject

# Show details of a private endpoint connection associated with a PostgreSQL flexible server.
az postgres flexible-server private-endpoint-connection show

# List private link resources associated with a PostgreSQL flexible server.
az postgres flexible-server private-link-resource list

# Get private link  resource for a PostgreSQL flexible server.
az postgres flexible-server private-link-resource show

# Create a read replica for a server.
az postgres flexible-server replica create

# List all read replicas for a given server.
az postgres flexible-server replica list

# Stop replication of a read replica and promote it to an independent server or as a primary server.
az postgres flexible-server replica promote

# Download log files for a PostgreSQL flexible server.
az postgres flexible-server server-logs download

# List log files for a PostgreSQL flexible server.
az postgres flexible-server server-logs list

# Create a new virtual endpoint for a flexible server.
az postgres flexible-server virtual-endpoint create

# Delete a virtual endpoint.
az postgres flexible-server virtual-endpoint delete

# List all virtual endpoints for a flexible server.
az postgres flexible-server virtual-endpoint list

# Get the details of a virtual endpoint.
az postgres flexible-server virtual-endpoint show

# Update a virtual endpoint.
az postgres flexible-server virtual-endpoint update
```
