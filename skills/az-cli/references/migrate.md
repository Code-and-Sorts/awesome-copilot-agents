# az migrate

```bash
# Retrieve discovered servers from an Azure Migrate project.
az migrate get-discovered-server

# Start migration for a replicating server to Azure Local.
az migrate local start-migration

# Get detailed information about a specific replicating server.
az migrate local replication get

# Retrieve the status of an Azure Migrate job.
az migrate local replication get-job

# Initialize Azure Migrate local replication infrastructure.
az migrate local replication init

# List all protected items (replicating servers) in a project.
az migrate local replication list

# Create a new replication for an Azure Local server.
az migrate local replication new

# Stop replication for a migrated server.
az migrate local replication remove
```
