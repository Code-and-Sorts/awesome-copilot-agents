# az redis

```bash
# Create new Redis Cache instance.
az redis create

# Deletes a Redis cache.
az redis delete

# Export data stored in a Redis cache.
az redis export

# Delete all of the keys in a cache.
az redis flush

# Reboot specified Redis node(s).
az redis force-reboot

# Import data into a Redis cache.
az redis import

# List Redis Caches.
az redis list

# Retrieve a Redis cache's access keys.
az redis list-keys

# Regenerate Redis cache's access keys.
az redis regenerate-keys

# Gets a Redis cache (resource description).
az redis show

# Update a Redis cache.
az redis update

# Add an Access Policy Assignment (Redis User) to the Redis Cache.
az redis access-policy-assignment create

# Delete the Access Policy Assignment (Redis User).
az redis access-policy-assignment delete

# Get the list of Access Policy Assignments (Redis Users) associated with the Redis Cache.
az redis access-policy-assignment list

# Get the detailed information about an Access Policy Assignment (Redis User) of the Redis Cache.
az redis access-policy-assignment show

# Update an Access Policy Assignment (Redis User) of the Redis Cache.
az redis access-policy-assignment update

# Add an Access Policy to the Redis Cache.
az redis access-policy create

# Delete the Access Policy.
az redis access-policy delete

# Get the list of Access Policies associated with the Redis Cache.
az redis access-policy list

# Get the detailed information about an Access Policy of the Redis Cache.
az redis access-policy show

# Update an Access Policy of the Redis Cache.
az redis access-policy update

# Create a redis cache firewall rule.
az redis firewall-rules create

# Deletes a single firewall rule in a specified redis cache.
az redis firewall-rules delete

# Gets all firewall rules in the specified redis cache.
az redis firewall-rules list

# Gets a single firewall rule in a specified redis cache.
az redis firewall-rules show

# Update a redis cache firewall rule.
az redis firewall-rules update

# Assign identity for Azure cache for Redis.
az redis identity assign

# Remove the identity already assigned for Azure cache for Redis.
az redis identity remove

# Show the identity assigned for Azure cache for Redis.
az redis identity show

# Create patching schedule for Redis cache.
az redis patch-schedule create

# Deletes the patching schedule of a redis cache.
az redis patch-schedule delete

# Gets the patching schedule of a redis cache.
az redis patch-schedule show

# Update the patching schedule for Redis cache.
az redis patch-schedule update

# Adds a server link to the Redis cache (requires Premium SKU).
az redis server-link create

# Deletes the linked server from a redis cache (requires Premium SKU).
az redis server-link delete

# Gets the list of linked servers associated with this redis cache (requires Premium SKU).
az redis server-link list

# Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
az redis server-link show
```
