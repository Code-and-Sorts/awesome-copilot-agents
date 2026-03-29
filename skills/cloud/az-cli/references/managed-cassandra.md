# az managed-cassandra

```bash
# Create a Managed Cassandra Cluster.
az managed-cassandra cluster create

# Deallocate the Managed Cassandra Cluster and Associated Data Centers. Deallocation will deallocate the host virtual machine of this cluster, and reserved the data disk. This won't do anything on an already deallocated cluster. Use Start to restart the cluster.
az managed-cassandra cluster deallocate

# Deletes a Managed Cassandra Cluster.
az managed-cassandra cluster delete

# Invoke a command like nodetool for cassandra maintenance.
az managed-cassandra cluster invoke-command

# List the Managed Cassandra Clusters in a ResourceGroup and Subscription. If the ResourceGroup is not specified all the clusters in this Subscription are returned.
az managed-cassandra cluster list

# Get a Managed Cassandra Cluster Resource.
az managed-cassandra cluster show

# Start the Managed Cassandra Cluster and Associated Data Centers. Start will start the host virtual machine of this cluster with reserved data disk. This won't do anything on an already running cluster. Use Deallocate to deallocate the cluster.
az managed-cassandra cluster start

# Gets the CPU, memory, and disk usage statistics for each Cassandra node in a cluster.
az managed-cassandra cluster status

# Update a Managed Cassandra Cluster.
az managed-cassandra cluster update

# List the backups of this cluster that are available to restore.
az managed-cassandra cluster backup list

# Get a managed cassandra backup resource of this cluster.
az managed-cassandra cluster backup show

# Create a Datacenter in an Azure Managed Cassandra Cluster.
az managed-cassandra datacenter create

# Deletes a Managed Cassandra Datacenter.
az managed-cassandra datacenter delete

# List the Managed Cassandra Datacenters in a given Cluster.
az managed-cassandra datacenter list

# Get a Managed Cassandra DataCenter Resource.
az managed-cassandra datacenter show

# Update a Datacenter in an Azure Managed Cassandra Cluster.
az managed-cassandra datacenter update
```
