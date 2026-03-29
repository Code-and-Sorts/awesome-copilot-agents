# az networkcloud

```bash
# Cordon the provided bare metal machine's Kubernetes node.
az networkcloud baremetalmachine cordon

# List bare metal machines in the provided resource group or subscription.
az networkcloud baremetalmachine list

# Power off the provided bare metal machine.
az networkcloud baremetalmachine power-off

# Reimage the provided bare metal machine.
az networkcloud baremetalmachine reimage

# Replace the provided bare metal machine.
az networkcloud baremetalmachine replace

# Restart the provided bare metal machine.
az networkcloud baremetalmachine restart

# Run the command or the script on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available.
az networkcloud baremetalmachine run-command

# Run one or more data extractions on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available.
az networkcloud baremetalmachine run-data-extract

# Run one or more restricted data extractions on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available.
az networkcloud baremetalmachine run-data-extracts-restricted

# Run one or more read-only commands on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available.
az networkcloud baremetalmachine run-read-command

# Get properties of the provided bare metal machine.
az networkcloud baremetalmachine show

# Start the provided bare metal machine.
az networkcloud baremetalmachine start

# Uncordon the provided bare metal machine's Kubernetes node.
az networkcloud baremetalmachine uncordon

# Update properties of the provided bare metal machine, or update tags associated with the bare metal machine. Properties and tag updates can be done independently.
az networkcloud baremetalmachine update

# Place the CLI in a waiting state until a condition is met.
az networkcloud baremetalmachine wait

# Create a new cloud services network or update the properties of the existing cloud services network.
az networkcloud cloudservicesnetwork create

# Delete the provided cloud services network.
az networkcloud cloudservicesnetwork delete

# List cloud services networks in the provided resource group or subscription.
az networkcloud cloudservicesnetwork list

# Get properties of the provided cloud services network.
az networkcloud cloudservicesnetwork show

# Update properties of the provided cloud services network, or update the tags associated with it. Properties and tag updates can be done independently.
az networkcloud cloudservicesnetwork update

# Place the CLI in a waiting state until a condition is met.
az networkcloud cloudservicesnetwork wait

# Trigger the continuation of an update for a cluster with a matching update strategy that has paused after completing a segment of the update.
az networkcloud cluster continue-update-version

# Create a new cluster or update the properties of the cluster if it exists.
az networkcloud cluster create

# Delete the provided cluster.
az networkcloud cluster delete

# Deploy the cluster.
az networkcloud cluster deploy

# Trigger an inspection of the cluster to perform validation and optional corrective actions based on the supplied additional actions and filters.
az networkcloud cluster inspect

# List clusters in the provided resource group or subscription.
az networkcloud cluster list

# Trigger the execution of a runtime protection scan to detect and remediate detected issues, in accordance with the cluster configuration.
az networkcloud cluster scan-runtime

# Get properties of the provided cluster.
az networkcloud cluster show

# Update the properties of the provided cluster, or update the tags associated with the cluster. Properties and tag updates can be done independently.
az networkcloud cluster update

# Update the version of the provided cluster to one of the available supported versions.
az networkcloud cluster update-version

# Place the CLI in a waiting state until a condition is met.
az networkcloud cluster wait

# Create a new bare metal machine key set or update the existing one for the provided cluster.
az networkcloud cluster baremetalmachinekeyset create

# Delete the bare metal machine key set of the provided cluster.
az networkcloud cluster baremetalmachinekeyset delete

# List bare metal machine key sets of the cluster.
az networkcloud cluster baremetalmachinekeyset list

# Get bare metal machine key set of the provided cluster.
az networkcloud cluster baremetalmachinekeyset show

# Update properties of bare metal machine key set for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
az networkcloud cluster baremetalmachinekeyset update

# Place the CLI in a waiting state until a condition is met.
az networkcloud cluster baremetalmachinekeyset wait

# Create a new baseboard management controller key set or update the existing one for the provided cluster.
az networkcloud cluster bmckeyset create

# Delete the baseboard management controller key set of the provided cluster.
az networkcloud cluster bmckeyset delete

# List baseboard management controller key sets of the cluster.
az networkcloud cluster bmckeyset list

# Get baseboard management controller key set of the provided cluster.
az networkcloud cluster bmckeyset show

# Update properties of baseboard management controller key set for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
az networkcloud cluster bmckeyset update

# Place the CLI in a waiting state until a condition is met.
az networkcloud cluster bmckeyset wait

# Create the metrics configuration of the provided cluster.
az networkcloud cluster metricsconfiguration create

# Delete the metrics configuration of the provided cluster.
az networkcloud cluster metricsconfiguration delete

# List metrics configurations of the cluster.
az networkcloud cluster metricsconfiguration list

# Get metrics configuration of the provided cluster.
az networkcloud cluster metricsconfiguration show

# Update properties of metrics configuration for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
az networkcloud cluster metricsconfiguration update

# Place the CLI in a waiting state until a condition is met.
az networkcloud cluster metricsconfiguration wait

# Create a new cluster manager or update properties of the cluster manager if it exists.
az networkcloud clustermanager create

# Delete the provided cluster manager.
az networkcloud clustermanager delete

# List cluster managers in the provided resource group or subscription.
az networkcloud clustermanager list

# Get the properties of the provided cluster manager.
az networkcloud clustermanager show

# Update properties of the provided cluster manager, or update the tags assigned to the cluster manager. Properties and tag updates can be done independently.
az networkcloud clustermanager update

# Update the private endpoint connection for the Azure Relay namespace managed by the specified cluster manager. Use this operation to approve or reject a pending private endpoint connection request for the relay namespace managed by the cluster manager.
az networkcloud clustermanager update-relay-private-endpoint-connection

# Place the CLI in a waiting state until a condition is met.
az networkcloud clustermanager wait

# Assign the user or system managed identities.
az networkcloud clustermanager identity assign

# Remove the user or system managed identities.
az networkcloud clustermanager identity remove

# Show the details of managed identities.
az networkcloud clustermanager identity show

# Place the CLI in a waiting state until a condition is met.
az networkcloud clustermanager identity wait

# Create a new Kubernetes cluster or update the properties of the existing one.
az networkcloud kubernetescluster create

# Delete the provided Kubernetes cluster.
az networkcloud kubernetescluster delete

# List Kubernetes clusters in the provided subscription.
az networkcloud kubernetescluster list

# Restart a targeted node of a Kubernetes cluster.
az networkcloud kubernetescluster restart-node

# Get properties of the provided the Kubernetes cluster.
az networkcloud kubernetescluster show

# Update the properties of the provided Kubernetes cluster, or update the tags associated with the Kubernetes cluster. Properties and tag updates can be done independently.
az networkcloud kubernetescluster update

# Place the CLI in a waiting state until a condition is met.
az networkcloud kubernetescluster wait

# Create a new Kubernetes cluster agent pool or update the properties of the existing one.
az networkcloud kubernetescluster agentpool create

# Delete the provided Kubernetes cluster agent pool.
az networkcloud kubernetescluster agentpool delete

# List agent pools for the provided Kubernetes cluster.
az networkcloud kubernetescluster agentpool list

# Get properties of the provided Kubernetes cluster agent pool.
az networkcloud kubernetescluster agentpool show

# Update the properties of the provided Kubernetes cluster agent pool, or update the tags associated with the Kubernetes cluster agent pool. Properties and tag updates can be done independently.
az networkcloud kubernetescluster agentpool update

# Place the CLI in a waiting state until a condition is met.
az networkcloud kubernetescluster agentpool wait

# Create a new Kubernetes cluster feature or update properties of the Kubernetes cluster feature if it exists.
az networkcloud kubernetescluster feature create

# Delete the provided Kubernetes cluster feature.
az networkcloud kubernetescluster feature delete

# List a list of features for the provided Kubernetes cluster.
az networkcloud kubernetescluster feature list

# Get properties of the provided the Kubernetes cluster feature.
az networkcloud kubernetescluster feature show

# Update properties of the provided Kubernetes cluster feature.
az networkcloud kubernetescluster feature update

# Place the CLI in a waiting state until a condition is met.
az networkcloud kubernetescluster feature wait

# Create the Kubernetes version resource or update its tags. This resource is system managed and should only be created with the name "default".
az networkcloud kubernetesversion create

# Delete the specified Kubernetes version resource.
az networkcloud kubernetesversion delete

# List a list of Kubernetes version resources in the provided subscription.
az networkcloud kubernetesversion list

# Get the Kubernetes version resource that describes the available Kubernetes versions for deployment.
az networkcloud kubernetesversion show

# Update tags associated with the Kubernetes version resource. No other properties are supported for update.
az networkcloud kubernetesversion update

# Place the CLI in a waiting state until a condition is met.
az networkcloud kubernetesversion wait

# Create a new layer 2 (L2) network or update the properties of the existing network.
az networkcloud l2network create

# Delete the provided layer 2 (L2) network.
az networkcloud l2network delete

# List layer 2 (L2) networks in the provided resource group or subscription.
az networkcloud l2network list

# Get properties of the provided layer 2 (L2) network.
az networkcloud l2network show

# Update tags associated with the provided layer 2 (L2) network.
az networkcloud l2network update

# Place the CLI in a waiting state until a condition is met.
az networkcloud l2network wait

# Create a new layer 3 (L3) network or update the properties of the existing network.
az networkcloud l3network create

# Delete the provided layer 3 (L3) network.
az networkcloud l3network delete

# List layer 3 (L3) networks in the provided resource group or subscription.
az networkcloud l3network list

# Get properties of the provided layer 3 (L3) network.
az networkcloud l3network show

# Update tags associated with the provided layer 3 (L3) network.
az networkcloud l3network update

# Place the CLI in a waiting state until a condition is met.
az networkcloud l3network wait

# List racks in the provided resource group or subscription.
az networkcloud rack list

# Get properties of the provided rack.
az networkcloud rack show

# Update properties of the provided rack, or update the tags associated with the rack. Properties and tag updates can be done independently.
az networkcloud rack update

# Place the CLI in a waiting state until a condition is met.
az networkcloud rack wait

# List rack SKUs in the provided subscription.
az networkcloud racksku list

# Get the properties of the provided rack SKU.
az networkcloud racksku show

# Disable remote vendor management of the provided storage appliance.
az networkcloud storageappliance disable-remote-vendor-management

# Enable remote vendor management of the provided storage appliance.
az networkcloud storageappliance enable-remote-vendor-management

# List storage appliances in the provided resource group or subscription.
az networkcloud storageappliance list

# Run and retrieve output from read only commands on the provided storage appliance.
az networkcloud storageappliance run-read-command

# Get properties of the provided storage appliance.
az networkcloud storageappliance show

# Update properties of the provided storage appliance, or update tags associated with the storage appliance Properties and tag updates can be done independently.
az networkcloud storageappliance update

# Place the CLI in a waiting state until a condition is met.
az networkcloud storageappliance wait

# Create a new trunked network or update the properties of the existing trunked network.
az networkcloud trunkednetwork create

# Delete the provided trunked network.
az networkcloud trunkednetwork delete

# List trunked networks in the provided resource group or subscription.
az networkcloud trunkednetwork list

# Get properties of the provided trunked network.
az networkcloud trunkednetwork show

# Update tags associated with the provided trunked network.
az networkcloud trunkednetwork update

# Place the CLI in a waiting state until a condition is met.
az networkcloud trunkednetwork wait

# Assigns a relay to the specified Microsoft.HybridCompute machine associated with the provided virtual machine.
az networkcloud virtualmachine assign-relay

# Create a new virtual machine or update the properties of the existing virtual machine.
az networkcloud virtualmachine create

# Delete the provided virtual machine.
az networkcloud virtualmachine delete

# List virtual machines in the provided resource group or subscription.
az networkcloud virtualmachine list

# Power off the provided virtual machine.
az networkcloud virtualmachine power-off

# Reimage the provided virtual machine.
az networkcloud virtualmachine reimage

# Restart the provided virtual machine.
az networkcloud virtualmachine restart

# Get properties of the provided virtual machine.
az networkcloud virtualmachine show

# Start the provided virtual machine.
az networkcloud virtualmachine start

# Update the properties of the provided virtual machine, or update the tags associated with the virtual machine. Properties and tag updates can be done independently.
az networkcloud virtualmachine update

# Place the CLI in a waiting state until a condition is met.
az networkcloud virtualmachine wait

# Create a new virtual machine console or update the properties of the existing virtual machine console.
az networkcloud virtualmachine console create

# Delete the provided virtual machine console.
az networkcloud virtualmachine console delete

# List consoles of the virtual machine.
az networkcloud virtualmachine console list

# Get properties of the provided virtual machine console.
az networkcloud virtualmachine console show

# Update the properties of the provided virtual machine console, or update the tags associated with the virtual machine console. Properties and tag updates can be done independently.
az networkcloud virtualmachine console update

# Place the CLI in a waiting state until a condition is met.
az networkcloud virtualmachine console wait

# Create a new volume or update the properties of the existing one.
az networkcloud volume create

# Delete the provided volume.
az networkcloud volume delete

# List volumes in the provided resource group or subscription.
az networkcloud volume list

# Get properties of the provided volume.
az networkcloud volume show

# Update tags associated with the provided volume.
az networkcloud volume update

# Place the CLI in a waiting state until a condition is met.
az networkcloud volume wait
```
