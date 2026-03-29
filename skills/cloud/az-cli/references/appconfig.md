# az appconfig

```bash
# Create an App Configuration.
az appconfig create

# Delete an App Configuration store.
az appconfig delete

# Lists all App Configuration stores under the current subscription.
az appconfig list

# List all deleted, but not yet purged App Configuration stores.
az appconfig list-deleted

# Permanently delete an App Configuration store. Aka 'purge' the deleted App Configuration store.
az appconfig purge

# Recover a previously deleted, but not yet purged App Configuration store.
az appconfig recover

# Show properties of an App Configuration store.
az appconfig show

# Show properties of a deleted, but not yet purged App Configuration store.
az appconfig show-deleted

# Update an App Configuration store.
az appconfig update

# List access keys of an App Configuration store.
az appconfig credential list

# Regenerate an access key for an App Configuration store.
az appconfig credential regenerate

# Delete feature flag.
az appconfig feature delete

# Disable a feature flag to turn it OFF for use.
az appconfig feature disable

# Enable a feature flag to turn it ON for use.
az appconfig feature enable

# List feature flags.
az appconfig feature list

# Lock a feature flag to prohibit write operations.
az appconfig feature lock

# Set a feature flag.
az appconfig feature set

# Show all attributes of a feature flag.
az appconfig feature show

# Unlock a feature to gain write operations.
az appconfig feature unlock

# Add a filter to a feature flag.
az appconfig feature filter add

# Delete a filter from a feature flag.
az appconfig feature filter delete

# List all filters for a feature flag.
az appconfig feature filter list

# Show filters of a feature flag.
az appconfig feature filter show

# Update a filter in a feature flag.
az appconfig feature filter update

# Update managed identities for an App Configuration store.
az appconfig identity assign

# Remove managed identities for an App Configuration store.
az appconfig identity remove

# Display managed identities for an App Configuration store.
az appconfig identity show

# Delete key-values.
az appconfig kv delete

# Export configurations to another place from your App Configuration store.
az appconfig kv export

# Import configurations into your App Configuration store from another place.
az appconfig kv import

# List key-values.
az appconfig kv list

# Lock a key-value to prohibit write operations.
az appconfig kv lock

# Restore key-values.
az appconfig kv restore

# Set a key-value.
az appconfig kv set

# Set a keyvault reference.
az appconfig kv set-keyvault

# Show all attributes of a key-value.
az appconfig kv show

# Unlock a key-value to gain write operations.
az appconfig kv unlock

# Create a new replica of an App Configuration store.
az appconfig replica create

# Delete a replica of an App Configuration store.
az appconfig replica delete

# List replicas of an App Configuration store.
az appconfig replica list

# Show details of a replica of an App Configuration store.
az appconfig replica show

# Lists revision history of key-values.
az appconfig revision list

# Archive a snapshot.
az appconfig snapshot archive

# Create an app configuration snapshot.
az appconfig snapshot create

# List snapshots.
az appconfig snapshot list

# Recover an archived snapshot.
az appconfig snapshot recover

# Show all attributes of an app configuration snapshot.
az appconfig snapshot show
```
