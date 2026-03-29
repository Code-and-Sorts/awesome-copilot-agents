# az sql

```bash
# Gets all subscription usage metrics in a given location.
az sql list-usages

# Gets a subscription usage metric.
az sql show-usage

# Create a copy of a database.
az sql db copy

# Create a database.
az sql db create

# Delete a database.
az sql db delete

# Export a database to a bacpac.
az sql db export

# Imports a bacpac into a new database, or an existing empty database.
az sql db import

# List databases on a server or elastic pool.
az sql db list

# Gets a list of restorable dropped databases.
az sql db list-deleted

# Show database editions available for the currently active subscription.
az sql db list-editions

# Gets database usages.
az sql db list-usages

# Rename a database.
az sql db rename

# Create a new database by restoring from a backup.
az sql db restore

# Get the details for a database.
az sql db show

# Generates a connection string to a database.
az sql db show-connection-string

# Get the details for a deleted database.
az sql db show-deleted

# Update a database.
az sql db update

# Gets an advanced threat protection setting.
az sql db advanced-threat-protection-setting show

# Update a database's advanced threat protection setting.
az sql db advanced-threat-protection-setting update

# Show database audit policy.
az sql db audit-policy show

# Update a database's auditing policy.
az sql db audit-policy update

# Place the CLI in a waiting state until a condition of the database's audit policy is met.
az sql db audit-policy wait

# Delete the sensitivity classification of a given column.
az sql db classification delete

# Get the sensitivity classifications of a given database.
az sql db classification list

# Get the sensitivity classification of a given column.
az sql db classification show

# Update a columns's sensitivity classification.
az sql db classification update

# Disable sensitivity recommendations for a given column (recommendations are enabled by default on all columns).
az sql db classification recommendation disable

# Enable sensitivity recommendations for a given column (recommendations are enabled by default on all columns).
az sql db classification recommendation enable

# List the recommended sensitivity classifications of a given database.
az sql db classification recommendation list

# Gets a list of recoverable databases.
az sql db geo-backup list

# Restore a geo-redundant backup to a new database.
az sql db geo-backup restore

# Gets a recoverable database, which is a resource representing a database's geo backup.
az sql db geo-backup show

# Disable uploading ledger digests.
az sql db ledger-digest-uploads disable

# Enable uploading ledger digests to an Azure Storage account or to Azure Confidential Ledger. If uploading ledger digests is already enabled, the cmdlet resets the digest storage endpoint to a new value.
az sql db ledger-digest-uploads enable

# Show the current ledger digest settings.
az sql db ledger-digest-uploads show

# Delete a long term retention backup.
az sql db ltr-backup delete

# List the long term retention backups for a location, server or database.
az sql db ltr-backup list

# Lock the time based immutability on a long term retention backup to prevent deletion.
az sql db ltr-backup lock-time-based-immutability

# Remove a legal hold on the long term retention backup database.
az sql db ltr-backup remove-legal-hold-immutability

# Disable the time based immutability on a long term retention backup.
az sql db ltr-backup remove-time-based-immutability

# Restore a long term retention backup to a new database.
az sql db ltr-backup restore

# Set a legal hold on the long term retention backup database.
az sql db ltr-backup set-legal-hold-immutability

# Get a long term retention backup for a database.
az sql db ltr-backup show

# Place the CLI in a waiting state until a condition of the database is met.
az sql db ltr-backup wait

# Update long term retention settings for a database.
az sql db ltr-policy set

# Show the long term retention policy for a database.
az sql db ltr-policy show

# Cancels the asynchronous operation on the database.
az sql db op cancel

# Gets a list of operations performed on the database.
az sql db op list

# Create a database as a readable secondary replica of an existing database.
az sql db replica create

# Permanently stop data replication between two database replicas.
az sql db replica delete-link

# List the replicas of a database and their replication status.
az sql db replica list-links

# Set the primary replica database by failing over from the current primary replica database.
az sql db replica set-primary

# Update short term retention settings for a live database.
az sql db str-policy set

# Show the short term retention policy for a live database.
az sql db str-policy show

# Place the CLI in a waiting state until the policy is set.
az sql db str-policy wait

# Sets a database's transparent data encryption configuration.
az sql db tde set

# Shows a Transparent Data Encryption.
az sql db tde show

# Revalidates a database's encryption protector key.
az sql db tde key revalidate

# Reverts a database's encryption protector key to server level.
az sql db tde key revert

# Create a data warehouse.
az sql dw create

# Delete a data warehouse.
az sql dw delete

# List data warehouses for a server.
az sql dw list

# Pauses a datawarehouse.
az sql dw pause

# Resumes a datawarehouse.
az sql dw resume

# Get the details for a data warehouse.
az sql dw show

# Update a data warehouse.
az sql dw update

# Create an elastic pool.
az sql elastic-pool create

# Deletes an elastic pool.
az sql elastic-pool delete

# Gets all elastic pools in a server.
az sql elastic-pool list

# Gets a list of databases in an elastic pool.
az sql elastic-pool list-dbs

# List elastic pool editions available for the active subscription.
az sql elastic-pool list-editions

# Gets an elastic pool.
az sql elastic-pool show

# Update an elastic pool.
az sql elastic-pool update

# Cancels the asynchronous operation on the elastic pool.
az sql elastic-pool op cancel

# Gets a list of operations performed on the elastic pool.
az sql elastic-pool op list

# Creates a failover group.
az sql failover-group create

# Deletes a failover group.
az sql failover-group delete

# Lists the failover groups in a server.
az sql failover-group list

# Set the primary of the failover group by failing over all databases from the current primary server.
az sql failover-group set-primary

# Gets a failover group.
az sql failover-group show

# Updates the failover group.
az sql failover-group update

# Creates an instance failover group between two connected managed instances.
az sql instance-failover-group create

# Deletes a failover group.
az sql instance-failover-group delete

# Set the primary of the instance failover group by failing over all databases from the current primary managed instance.
az sql instance-failover-group set-primary

# Gets a failover group.
az sql instance-failover-group show

# Updates the instance failover group.
az sql instance-failover-group update

# Create an instance pool.
az sql instance-pool create

# Delete an instance pool.
az sql instance-pool delete

# List available instance pools.
az sql instance-pool list

# Get the details for an instance pool.
az sql instance-pool show

# Update an instance pool.
az sql instance-pool update

# Wait for an instance pool to reach a desired state.
az sql instance-pool wait

# Create a SQL managed instance.
az sql mi-arc create

# Delete a SQL managed instance.
az sql mi-arc delete

# Edit the configuration of a SQL managed instance.
az sql mi-arc edit

# List SQL managed instances.
az sql mi-arc list

# Show the details of a SQL managed instance.
az sql mi-arc show

# Add a value for a json path in a config file.
az sql mi-arc config add

# Initializes the CRD and specification files for a SQL managed instance.
az sql mi-arc config init

# Patches a config file based on a json patch file.
az sql mi-arc config patch

# Remove a value for a json path in a config file.
az sql mi-arc config remove

# Replace a value for a json path in a config file.
az sql mi-arc config replace

# List the SQL endpoints.
az sql mi-arc endpoint list

# Create a managed instance.
az sql mi create

# Delete a managed instance.
az sql mi delete

# Failover a managed instance.
az sql mi failover

# List available managed instances.
az sql mi list

# Refresh external governance enablement status.
az sql mi refresh-external-governance-status

# Get the details for a managed instance.
az sql mi show

# Start the managed instance.
az sql mi start

# Stop the managed instance.
az sql mi stop

# Update a managed instance.
az sql mi update

# Creates a new managed instance Active Directory administrator.
az sql mi ad-admin create

# Deletes an existing managed instance Active Directory Administrator.
az sql mi ad-admin delete

# Returns a list of managed instance Active Directory Administrators.
az sql mi ad-admin list

# Updates an existing managed instance Active Directory administrator.
az sql mi ad-admin update

# Disable Azure Active Directory only Authentication for this Managed Instance.
az sql mi ad-only-auth disable

# Enable Azure Active Directory only Authentication for this Managed Instance.
az sql mi ad-only-auth enable

# Get a specific Azure Active Directory only Authentication property.
az sql mi ad-only-auth get

# Gets an advanced threat protection setting.
az sql mi advanced-threat-protection-setting show

# Update a SQL Managed Instance's advanced threat protection setting.
az sql mi advanced-threat-protection-setting update

# Get managed instance DTC settings.
az sql mi dtc show

# Update managed instance DTC settings.
az sql mi dtc update

# Place the CLI in a waiting state until a condition is met.
az sql mi dtc wait

# List certificates used on endpoints on the target instance.
az sql mi endpoint-cert list

# Get a certificate used on the endpoint with the given id.
az sql mi endpoint-cert show

# Creates a SQL Instance key.
az sql mi key create

# Deletes a SQL Instance key.
az sql mi key delete

# Gets a list of managed instance keys.
az sql mi key list

# Shows a SQL Instance key.
az sql mi key show

# Create a Managed Instance link between Sql On-Prem and Sql Managed Instance.
az sql mi link create

# Drop a Managed Instance link between Sql On-Prem and Sql Managed Instance.
az sql mi link delete

# Performs requested failover type in this Managed Instance link.
az sql mi link failover

# Get a list of Managed Instance links in instance.
az sql mi link list

# Get a Managed Instance link info.
az sql mi link show

# Update a Managed Instance link replication mode.
az sql mi link update

# Cancels the asynchronous operation on the managed instance.
az sql mi op cancel

# Gets a list of operations performed on the managed instance.
az sql mi op list

# Gets a management operation on a managed instance.
az sql mi op show

# Upload a server trust certificate from box to Sql Managed Instance.
az sql mi partner-cert create

# Delete a server trust certificate that was uploaded from box to Sql Managed Instance.
az sql mi partner-cert delete

# Get a list of server trust certificates that were uploaded from box to the given Sql Managed Instance.
az sql mi partner-cert list

# Get a server trust certificate that was uploaded from box to Sql Managed Instance.
az sql mi partner-cert show

# List a list of managed instance server configuration options.
az sql mi server-configuration-option list

# Set managed instance server configuration option.
az sql mi server-configuration-option set

# Get managed instance server configuration option.
az sql mi server-configuration-option show

# Place the CLI in a waiting state until a condition is met.
az sql mi server-configuration-option wait

# Create the managed instance's Start/Stop schedule.
az sql mi start-stop-schedule create

# Delete the managed instance's Start/Stop schedule.
az sql mi start-stop-schedule delete

# List the managed instance's Start/Stop schedules.
az sql mi start-stop-schedule list

# Get the managed instance's Start/Stop schedule.
az sql mi start-stop-schedule show

# Update the managed instance's Start/Stop schedule.
az sql mi start-stop-schedule update

# Sets the SQL Instance's encryption protector.
az sql mi tde-key set

# Shows a server encryption protector.
az sql mi tde-key show

# Create a managed database.
az sql midb create

# Delete a managed database.
az sql midb delete

# List managed databases on a managed instance.
az sql midb list

# List restorable deleted managed databases.
az sql midb list-deleted

# Recover a managed database using geo-pair instance backup.
az sql midb recover

# Restore a managed database.
az sql midb restore

# Get the details for a managed database.
az sql midb show

# Update a managed database.
az sql midb update

# Gets an advanced threat protection setting.
az sql midb advanced-threat-protection-setting show

# Update a SQL Managed Instance database's advanced threat protection setting.
az sql midb advanced-threat-protection-setting update

# Cancel managed database copy operation.
az sql midb copy cancel

# Complete managed database copy operation.
az sql midb copy complete

# List managed database copy operations.
az sql midb copy list

# Start managed database copy operation.
az sql midb copy start

# Disable uploading ledger digests.
az sql midb ledger-digest-uploads disable

# Enable uploading ledger digests to an Azure Storage account or to Azure Confidential Ledger. If uploading ledger digests is already enabled, the cmdlet resets the digest storage endpoint to a new value.
az sql midb ledger-digest-uploads enable

# Show the current ledger digest settings.
az sql midb ledger-digest-uploads show

# Complete Log Replay service on specified database.
az sql midb log-replay complete

# Get status of Log Replay service.
az sql midb log-replay show

# Start Log Replay service on specified database.
az sql midb log-replay start

# Stop Log Replay service.
az sql midb log-replay stop

# Place the CLI in a waiting state until a condition of the managed database is met.
az sql midb log-replay wait

# Delete a long term retention backup.
az sql midb ltr-backup delete

# List the long term retention backups for a location, instance or database.
az sql midb ltr-backup list

# Restore a long term retention backup to a new database.
az sql midb ltr-backup restore

# Get a long term retention backup for a managed database.
az sql midb ltr-backup show

# Place the CLI in a waiting state until a condition of the managed database is met.
az sql midb ltr-backup wait

# Update long term retention settings for a managed database.
az sql midb ltr-policy set

# Show the long term retention policy for a managed database.
az sql midb ltr-policy show

# Cancel managed database move operation.
az sql midb move cancel

# Complete managed database move operation.
az sql midb move complete

# List managed database move operations.
az sql midb move list

# Start managed database move operation.
az sql midb move start

# Update short term retention for automated backups on a single database.
az sql midb short-term-retention-policy set

# Show short term retention for automated backups on a single database.
az sql midb short-term-retention-policy show

# Get all recoverable managed databases for given instance name.
az sql recoverable-midb list

# Get recoverable managed database.
az sql recoverable-midb show

# Create a server.
az sql server create

# Deletes a server.
az sql server delete

# List available servers.
az sql server list

# Gets server usages.
az sql server list-usages

# Refreshes external governance status.
az sql server refresh-external-governance-status

# Restore a deleted SQL server.
az sql server restore

# Gets a server.
az sql server show

# Update a server.
az sql server update

# Place the CLI in a waiting state until a condition of the SQL server is met.
az sql server wait

# Create a new server Active Directory administrator.
az sql server ad-admin create

# Sets a server's AD admin.
az sql server ad-admin delete

# Gets a list of Azure Active Directory administrators in a server.
az sql server ad-admin list

# Update an existing server Active Directory administrator.
az sql server ad-admin update

# Disable Azure Active Directory only Authentication for this Server.
az sql server ad-only-auth disable

# Enable Azure Active Directory only Authentication for this Server.
az sql server ad-only-auth enable

# Get a specific Azure Active Directory only Authentication property.
az sql server ad-only-auth get

# Gets an advanced threat protection setting.
az sql server advanced-threat-protection-setting show

# Update a server's advanced threat protection setting.
az sql server advanced-threat-protection-setting update

# Show server audit policy.
az sql server audit-policy show

# Update a server's auditing policy.
az sql server audit-policy update

# Place the CLI in a waiting state until a condition of the server's audit policy is met.
az sql server audit-policy wait

# Gets a server's secure connection policy.
az sql server conn-policy show

# Updates a server's secure connection policy.
az sql server conn-policy update

# List all deleted SQL servers in a specific location.
az sql server deleted-server list

# Get the details of a deleted SQL server in a specific location.
az sql server deleted-server show

# Creates a server DNS alias.
az sql server dns-alias create

# Deletes the server DNS alias with the given name.
az sql server dns-alias delete

# Gets a list of server DNS aliases for a server.
az sql server dns-alias list

# Sets a server to which DNS alias should point.
az sql server dns-alias set

# Gets a server DNS alias.
az sql server dns-alias show

# Create a firewall rule.
az sql server firewall-rule create

# Deletes a firewall rule.
az sql server firewall-rule delete

# List a server's firewall rules.
az sql server firewall-rule list

# Shows the details for a firewall rule.
az sql server firewall-rule show

# Update a firewall rule.
az sql server firewall-rule update

# Create an ipv6 firewall rule.
az sql server ipv6-firewall-rule create

# Deletes an IPv6 firewall rule.
az sql server ipv6-firewall-rule delete

# List a server's ipv6 firewall rules.
az sql server ipv6-firewall-rule list

# Shows the details for an ipv6 firewall rule.
az sql server ipv6-firewall-rule show

# Update an ipv6 firewall rule.
az sql server ipv6-firewall-rule update

# Creates a server key.
az sql server key create

# Deletes a server key.
az sql server key delete

# Gets a list of server keys.
az sql server key list

# Shows a server key.
az sql server key show

# Show server Microsoft support operations audit policy.
az sql server ms-support audit-policy show

# Update a server's Microsoft support operations auditing policy.
az sql server ms-support audit-policy update

# Place the CLI in a waiting state until a condition of the server's Microsoft support operations audit policy is met.
az sql server ms-support audit-policy wait

# Create a new outbound firewall rule.
az sql server outbound-firewall-rule create

# Delete the outbound firewall rule.
az sql server outbound-firewall-rule delete

# List a server's outbound firewall rules.
az sql server outbound-firewall-rule list

# Show the details for an outbound firewall rule.
az sql server outbound-firewall-rule show

# Revalidate a server encryption protector.
az sql server tde-key revalidate

# Sets the server's encryption protector. Ensure to create the key first https://learn.microsoft.com/en-us/cli/azure/sql/server/key?view=azure-cli-latest#az-sql-server-key-create.
az sql server tde-key set

# Gets a server encryption protector.
az sql server tde-key show

# Create a virtual network rule to allows access to an Azure SQL Server.
az sql server vnet-rule create

# Deletes the virtual network rule with the given name.
az sql server vnet-rule delete

# Gets a list of virtual network rules in a server.
az sql server vnet-rule list

# Gets a virtual network rule.
az sql server vnet-rule show

# Update a virtual network rule.
az sql server vnet-rule update

# Create a Server Trust Group.
az sql stg create

# Delete a Server Trust Group.
az sql stg delete

# Retrieve a list of Server Trust Groups.
az sql stg list

# Retrieve a Server Trust Group.
az sql stg show

# Delete a virtual cluster.
az sql virtual-cluster delete

# List available virtual clusters.
az sql virtual-cluster list

# Get the details for a virtual cluster.
az sql virtual-cluster show

# Adds SQL virtual machine to a SQL virtual machine group.
az sql vm add-to-group

# Creates a SQL virtual machine.
az sql vm create

# Deletes a SQL virtual machine.
az sql vm delete

# Enable Azure AD authentication of a SQL virtual machine.
az sql vm enable-azure-ad-auth

# Lists all SQL virtual machines in a resource group or subscription.
az sql vm list

# Remove SQL virtual machine from its current SQL virtual machine group.
az sql vm remove-from-group

# Gets a SQL virtual machine.
az sql vm show

# Starts SQL best practice assessment on SQL virtual machine.
az sql vm start-assessment

# Updates the properties of a SQL virtual machine.
az sql vm update

# Validate Azure AD authentication of a SQL virtual machine at the client side without enabling it.
az sql vm validate-azure-ad-auth

# Creates a SQL virtual machine group.
az sql vm group create

# Deletes a SQL virtual machine group.
az sql vm group delete

# Lists all SQL virtual machine groups in a resource group or subscription.
az sql vm group list

# Gets a SQL virtual machine group.
az sql vm group show

# Updates a SQL virtual machine group if there are not SQL virtual machines attached to the group.
az sql vm group update

# Creates an availability group listener.
az sql vm group ag-listener create

# Deletes an availability group listener.
az sql vm group ag-listener delete

# Lists all availability group listeners in a SQL virtual machine group.
az sql vm group ag-listener list

# Gets an availability group listener.
az sql vm group ag-listener show

# Updates an availability group listener.
az sql vm group ag-listener update
```
