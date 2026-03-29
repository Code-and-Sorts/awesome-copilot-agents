# az aks

```bash
# Run AI assistant to analyze and troubleshoot Azure Kubernetes Service (AKS) clusters.
az aks agent

# Cleanup and uninstall the AKS agent.
az aks agent-cleanup

# Initialize AKS agent helm deployment with LLM configuration and cluster role setup.
az aks agent-init

# Connect to a managed Kubernetes cluster using Azure Bastion.
az aks bastion

# Show the dashboard for a Kubernetes cluster in a web browser.
az aks browse

# Validate an ACR is accessible from an AKS cluster.
az aks check-acr

# Create a new managed Kubernetes cluster.
az aks create

# Delete a managed Kubernetes cluster.
az aks delete

# Disable Kubernetes addons.
az aks disable-addons

# Enable Kubernetes addons.
az aks enable-addons

# Get access credentials for a managed Kubernetes cluster.
az aks get-credentials

# Get the upgrade versions available for a managed Kubernetes cluster.
az aks get-upgrades

# Get the versions available for creating a managed Kubernetes cluster.
az aks get-versions

# Download and install kubectl, the Kubernetes command-line tool. Download and install kubelogin, a client-go credential (exec) plugin implementing azure authentication.
az aks install-cli

# Display diagnostic results for the Kubernetes cluster after kollect is done.
az aks kanalyze

# Collecting diagnostic information for the Kubernetes cluster.
az aks kollect

# List managed Kubernetes clusters.
az aks list

# Lists the VM SKUs accepted by AKS when creating node pools in a specified location.
az aks list-vm-skus

# Abort last running operation on managed cluster.
az aks operation-abort

# Remove Azure Dev Spaces from a managed Kubernetes cluster.
az aks remove-dev-spaces

# Rotate certificates and keys on a managed Kubernetes cluster.
az aks rotate-certs

# Scale the node pool in a managed Kubernetes cluster.
az aks scale

# Show the details for a managed Kubernetes cluster.
az aks show

# Starts a previously stopped Managed Cluster.
az aks start

# Stop a managed cluster.
az aks stop

# Update a managed Kubernetes cluster. When called with no optional arguments this attempts to move the cluster to its goal state without changing the current cluster configuration. This can be used to move out of a non succeeded state.
az aks update

# Update credentials for a managed Kubernetes cluster, like service principal.
az aks update-credentials

# Upgrade a managed Kubernetes cluster to a newer version.
az aks upgrade

# Use Azure Dev Spaces with a managed Kubernetes cluster.
az aks use-dev-spaces

# Wait for a managed Kubernetes cluster to reach a desired state.
az aks wait

# Disable an enabled Kubernetes addon in a cluster.
az aks addon disable

# Enable a Kubernetes addon.
az aks addon enable

# List status of all Kubernetes addons in given cluster.
az aks addon list

# List available Kubernetes addons.
az aks addon list-available

# Show status and configuration for an enabled Kubernetes addon in a given cluster.
az aks addon show

# Update an already enabled Kubernetes addon.
az aks addon update

# Deploy to AKS via GitHub actions.
az aks app up

# Disable Application Load Balancer (Application Gateway for Containers) addon.
az aks applicationloadbalancer disable

# Enable Application Load Balancer (Application Gateway for Containers) addon.
az aks applicationloadbalancer enable

# Update Application Load Balancer (Application Gateway for Containers) addon.
az aks applicationloadbalancer update

# Disable App Routing addon.
az aks approuting disable

# Enable App Routing.
az aks approuting enable

# Update App Routing addon.
az aks approuting update

# Show the Default Domain configuration for App Routing.
az aks approuting defaultdomain show

# Disable Gateway API based ingress on App Routing via Istio.
az aks approuting gateway istio disable

# Enable Gateway API based ingress on App Routing via Istio without service mesh functionality.
az aks approuting gateway istio enable

# Add DNS Zone(s) to App Routing.
az aks approuting zone add

# Delete DNS Zone(s) from App Routing.
az aks approuting zone delete

# List DNS Zone IDs in App Routing.
az aks approuting zone list

# Replace DNS Zone(s) in App Routing.
az aks approuting zone update

# Perform outbound network connectivity check for a node in a managed Kubernetes cluster.
az aks check-network outbound

# Run a shell command (with kubectl, helm) on your aks cluster, support attaching files as well.
az aks command invoke

# Fetch result from previously triggered 'aks command invoke'.
az aks command result

# Delete a aks connection.
az aks connection delete

# List connections of a aks.
az aks connection list

# List source configurations of a aks connection.
az aks connection list-configuration

# List client types and auth types supported by aks connections.
az aks connection list-support-types

# Get the details of a aks connection.
az aks connection show

# Validate a aks connection.
az aks connection validate

# Place the CLI in a waiting state until a condition of the connection is met.
az aks connection wait

# Create a aks connection to app-insights.
az aks connection create app-insights

# Create a aks connection to appconfig.
az aks connection create appconfig

# Create a aks connection to cognitiveservices.
az aks connection create cognitiveservices

# Create a aks connection to confluent-cloud.
az aks connection create confluent-cloud

# Create a aks connection to cosmos-cassandra.
az aks connection create cosmos-cassandra

# Create a aks connection to cosmos-gremlin.
az aks connection create cosmos-gremlin

# Create a aks connection to cosmos-mongo.
az aks connection create cosmos-mongo

# Create a aks connection to cosmos-sql.
az aks connection create cosmos-sql

# Create a aks connection to cosmos-table.
az aks connection create cosmos-table

# Create a aks connection to eventhub.
az aks connection create eventhub

# Create a aks connection to keyvault.
az aks connection create keyvault

# Create a aks connection to mongodb-atlas.
az aks connection create mongodb-atlas

# Create a aks connection to mysql.
az aks connection create mysql

# Create a aks connection to mysql-flexible.
az aks connection create mysql-flexible

# Create a aks connection to neon-postgres.
az aks connection create neon-postgres

# Create a aks connection to postgres.
az aks connection create postgres

# Create a aks connection to postgres-flexible.
az aks connection create postgres-flexible

# Create a aks connection to redis.
az aks connection create redis

# Create a aks connection to redis-enterprise.
az aks connection create redis-enterprise

# Create a aks connection to servicebus.
az aks connection create servicebus

# Create a aks connection to signalr.
az aks connection create signalr

# Create a aks connection to sql.
az aks connection create sql

# Create a aks connection to storage-blob.
az aks connection create storage-blob

# Create a aks connection to storage-file.
az aks connection create storage-file

# Create a aks connection to storage-queue.
az aks connection create storage-queue

# Create a aks connection to storage-table.
az aks connection create storage-table

# Create a aks connection to webpubsub.
az aks connection create webpubsub

# Update a aks to app-insights connection.
az aks connection update app-insights

# Update a aks to appconfig connection.
az aks connection update appconfig

# Update a aks to cognitiveservices connection.
az aks connection update cognitiveservices

# Update a aks to confluent-cloud connection.
az aks connection update confluent-cloud

# Update a aks to cosmos-cassandra connection.
az aks connection update cosmos-cassandra

# Update a aks to cosmos-gremlin connection.
az aks connection update cosmos-gremlin

# Update a aks to cosmos-mongo connection.
az aks connection update cosmos-mongo

# Update a aks to cosmos-sql connection.
az aks connection update cosmos-sql

# Update a aks to cosmos-table connection.
az aks connection update cosmos-table

# Update a aks to eventhub connection.
az aks connection update eventhub

# Update a aks to keyvault connection.
az aks connection update keyvault

# Update a aks to mongodb-atlas connection.
az aks connection update mongodb-atlas

# Update a aks to mysql connection.
az aks connection update mysql

# Update a aks to mysql-flexible connection.
az aks connection update mysql-flexible

# Update a aks to neon-postgres connection.
az aks connection update neon-postgres

# Update a aks to postgres connection.
az aks connection update postgres

# Update a aks to postgres-flexible connection.
az aks connection update postgres-flexible

# Update a aks to redis connection.
az aks connection update redis

# Update a aks to redis-enterprise connection.
az aks connection update redis-enterprise

# Update a aks to servicebus connection.
az aks connection update servicebus

# Update a aks to signalr connection.
az aks connection update signalr

# Update a aks to sql connection.
az aks connection update sql

# Update a aks to storage-blob connection.
az aks connection update storage-blob

# Update a aks to storage-file connection.
az aks connection update storage-file

# Update a aks to storage-queue connection.
az aks connection update storage-queue

# Update a aks to storage-table connection.
az aks connection update storage-table

# Update a aks to webpubsub connection.
az aks connection update webpubsub

# Generate a Dockerfile and the minimum required Kubernetes deployment files (helm, kustomize, manifests) for your project directory.
az aks draft create

# Generate a GitHub workflow for automatic build and deploy to AKS.
az aks draft generate-workflow

# Set up GitHub OIDC for your application.
az aks draft setup-gh

# Run `az aks draft setup-gh` then `az aks draft generate-workflow`.
az aks draft up

# Update your application to be internet accessible.
az aks draft update

# List egress endpoints that are required or recommended to be whitelisted for a cluster.
az aks egress-endpoints list

# Creates the Cluster extension instance on the managed cluster. Please refer to the example at the end to see how to create a cluster extension.
az aks extension create

# Delete a Cluster Extension.
az aks extension delete

# List Cluster Extensions.
az aks extension list

# Show a Cluster Extension.
az aks extension show

# Update mutable properties of a Cluster Extension.
az aks extension update

# List available Cluster Extension Types. The properties used for filtering include kubernetes version, location of the cluster.
az aks extension type list

# Show properties for a Cluster Extension Type. The properties used for filtering include kubernetes version, location of the cluster.
az aks extension type show

# List available Cluster Extension Type versions. The properties used for filtering include kubernetes version, location of the cluster.
az aks extension type version list

# Show properties associated with a Cluster Extension Type version. The properties used for filtering include kubernetes version, location of the cluster.
az aks extension type version show

# Create a new identity binding in a managed Kubernetes cluster.
az aks identity-binding create

# Delete a specific identity binding in a managed Kubernetes cluster.
az aks identity-binding delete

# List all identity bindings under a managed Kubernetes cluster.
az aks identity-binding list

# Show details of a specific identity binding in a managed Kubernetes cluster.
az aks identity-binding show

# Add a JWT authenticator to a managed cluster.
az aks jwtauthenticator add

# Delete a JWT authenticator from a managed cluster.
az aks jwtauthenticator delete

# List all JWT authenticators in a managed cluster.
az aks jwtauthenticator list

# Show details of a JWT authenticator in a managed cluster.
az aks jwtauthenticator show

# Update a JWT authenticator in a managed cluster.
az aks jwtauthenticator update

# Add a load balancer configuration to a managed Kubernetes cluster.
az aks loadbalancer add

# Delete a load balancer configuration from a managed Kubernetes cluster.
az aks loadbalancer delete

# List all load balancer configurations in a managed Kubernetes cluster.
az aks loadbalancer list

# Rebalance nodes across specific load balancers.
az aks loadbalancer rebalance-nodes

# Show details of a specific load balancer configuration in a managed Kubernetes cluster.
az aks loadbalancer show

# Update a load balancer configuration in a managed Kubernetes cluster.
az aks loadbalancer update

# Add a machine to the specified node pool.
az aks machine add

# Get information about IP Addresses, Hostname for all machines in an agentpool.
az aks machine list

# Show IP Addresses, Hostname for a specific machine in an agentpool for a managedcluster.
az aks machine show

# Update the specified machine in an agentpool.
az aks machine update

# Add a maintenance configuration in managed Kubernetes cluster.
az aks maintenanceconfiguration add

# Delete a maintenance configuration in managed Kubernetes cluster.
az aks maintenanceconfiguration delete

# List maintenance configurations in managed Kubernetes cluster.
az aks maintenanceconfiguration list

# Show the details of a maintenance configuration in managed Kubernetes cluster.
az aks maintenanceconfiguration show

# Update a maintenance configuration of a managed Kubernetes cluster.
az aks maintenanceconfiguration update

# Disable Azure Service Mesh.
az aks mesh disable

# Disable an Azure Service Mesh egress gateway.
az aks mesh disable-egress-gateway

# Disable an Azure Service Mesh ingress gateway.
az aks mesh disable-ingress-gateway

# Disable Istio CNI chaining for Azure Service Mesh proxy redirection mechanism.
az aks mesh disable-istio-cni

# Enable Azure Service Mesh.
az aks mesh enable

# Enable an Azure Service Mesh egress gateway.
az aks mesh enable-egress-gateway

# Enable an Azure Service Mesh ingress gateway.
az aks mesh enable-ingress-gateway

# Enable Istio CNI chaining for Azure Service Mesh proxy redirection mechanism.
az aks mesh enable-istio-cni

# Discover available Azure Service Mesh revisions and their compatibility.
az aks mesh get-revisions

# Discover available Azure Service Mesh upgrades.
az aks mesh get-upgrades

# Complete Azure Service Mesh upgrade.
az aks mesh upgrade complete

# Rollback Azure Service Mesh upgrade.
az aks mesh upgrade rollback

# Initiate Azure Service Mesh upgrade.
az aks mesh upgrade start

# Add namespace to the managed Kubernetes cluster.
az aks namespace add

# Delete a managed namespace in managed Kubernetes cluster.
az aks namespace delete

# Get access credentials for a managed namespace.
az aks namespace get-credentials

# List managed namespaces in managed Kubernetes cluster.
az aks namespace list

# Show the details of a managed namespace in managed Kubernetes cluster.
az aks namespace show

# Update namespace on the managed Kubernetes cluster.
az aks namespace update

# Add a node pool to the managed Kubernetes cluster.
az aks nodepool add

# Delete the agent pool in the managed Kubernetes cluster.
az aks nodepool delete

# Delete specific machines in an agentpool for a managed cluster.
az aks nodepool delete-machines

# Get the available rollback versions for an agent pool of the managed Kubernetes cluster.
az aks nodepool get-rollback-versions

# Get the available upgrade versions for an agent pool of the managed Kubernetes cluster.
az aks nodepool get-upgrades

# List node pools in the managed Kubernetes cluster. To get list of nodes in the cluster run `kubectl get nodes` command.
az aks nodepool list

# Abort last running operation on nodepool.
az aks nodepool operation-abort

# Rollback an agent pool to the most recently used configuration (N-1).
az aks nodepool rollback

# Scale the node pool in a managed Kubernetes cluster.
az aks nodepool scale

# Show the details for a node pool in the managed Kubernetes cluster.
az aks nodepool show

# Start stopped agent pool in the managed Kubernetes cluster.
az aks nodepool start

# Stop running agent pool in the managed Kubernetes cluster.
az aks nodepool stop

# Update a node pool properties.
az aks nodepool update

# Upgrade the node pool in a managed Kubernetes cluster.
az aks nodepool upgrade

# Wait for a node pool to reach a desired state.
az aks nodepool wait

# Add a new manual to a VirtualMachines agentpool in the managed Kubernetes cluster.
az aks nodepool manual-scale add

# Delete an existing manual to a VirtualMachines agentpool in the managed Kubernetes cluster.
az aks nodepool manual-scale delete

# Update an existing manual of a VirtualMachines agentpool in the managed Kubernetes cluster.
az aks nodepool manual-scale update

# Create a nodepool snapshot.
az aks nodepool snapshot create

# Delete a nodepool snapshot.
az aks nodepool snapshot delete

# List nodepool snapshots.
az aks nodepool snapshot list

# Show the details of a nodepool snapshot.
az aks nodepool snapshot show

# Update tags on a snapshot of a nodepool.
az aks nodepool snapshot update

# Wait for a nodepool snapshot to reach a desired state.
az aks nodepool snapshot wait

# Rotate oidc issuer service account signing keys.
az aks oidc-issuer rotate-signing-keys

# Show the details for a specific operation on managed Kubernetes cluster.
az aks operation show

# Show the details for the latest operation on managed Kubernetes cluster.
az aks operation show-latest

# Add a pod identity to a managed Kubernetes cluster.
az aks pod-identity add

# Remove a pod identity from a managed Kubernetes cluster.
az aks pod-identity delete

# List pod identities in a managed Kubernetes cluster.
az aks pod-identity list

# Add a pod identity exception to a managed Kubernetes cluster.
az aks pod-identity exception add

# Remove a pod identity exception from a managed Kubernetes cluster.
az aks pod-identity exception delete

# List pod identity exceptions in a managed Kubernetes cluster.
az aks pod-identity exception list

# Update a pod identity exception in a managed Kubernetes cluster.
az aks pod-identity exception update

# Enable Deployment Safeguards for a Managed Cluster.
az aks safeguards create

# Disable Deployment Safeguards for a Managed Cluster.
az aks safeguards delete

# List DeploymentSafeguards by parent resource.
az aks safeguards list

# Show Deployment Safeguards Configuration for a Managed Cluster.
az aks safeguards show

# Update Deployment Safeguards configuration for a Managed Cluster.
az aks safeguards update

# Place the CLI in a waiting state until a condition is met.
az aks safeguards wait

# Create a snapshot of a cluster.
az aks snapshot create

# Delete a cluster snapshot.
az aks snapshot delete

# List cluster snapshots.
az aks snapshot list

# Show the details of a cluster snapshot.
az aks snapshot show

# List trusted access roles.
az aks trustedaccess role list

# Create a new trusted access role binding.
az aks trustedaccess rolebinding create

# Delete a trusted access role binding according to name.
az aks trustedaccess rolebinding delete

# List all the trusted access role bindings.
az aks trustedaccess rolebinding list

# Get the specific trusted access role binding according to binding name.
az aks trustedaccess rolebinding show

# Update a trusted access role binding.
az aks trustedaccess rolebinding update
```
