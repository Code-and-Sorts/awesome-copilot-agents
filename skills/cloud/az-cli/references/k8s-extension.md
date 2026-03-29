# az k8s-extension

```bash
# Create a Kubernetes Cluster Extension, including purchasing an extension Offer from Azure Marketplace (AKS only).       Please refer to the example at the end to see how to create an extension or purchase an extension offer.
az k8s-extension create

# Delete a Kubernetes Extension.
az k8s-extension delete

# List Kubernetes Extensions.
az k8s-extension list

# Show a Kubernetes Extension.
az k8s-extension show

# Perform diagnostic checks on a Kubernetes Extension.
az k8s-extension troubleshoot

# Update mutable properties of a Kubernetes Extension.
az k8s-extension update

# List available Cluster Extension Types for an existing cluster. The properties used for filtering include type of cluster (managed, connected, etc), kubernetes version, location of the cluster.
az k8s-extension extension-types list-by-cluster

# List available Cluster Extension Types in a region.
az k8s-extension extension-types list-by-location

# List available versions for a Cluster Extension Type for a given cluster. The properties used for filtering include type of cluster (managed, connected, etc), kubernetes version, location of the cluster.
az k8s-extension extension-types list-versions-by-cluster

# List available versions for a Cluster Extension Type versions in a region.
az k8s-extension extension-types list-versions-by-location

# Show properties for a Cluster Extension Type for an existing cluster. The properties used for filtering include type of cluster (managed, connected, etc), kubernetes version, location of the cluster.
az k8s-extension extension-types show-by-cluster

# Show properties for a Cluster Extension Type in a region.
az k8s-extension extension-types show-by-location

# Show properties associated with a Cluster Extension Type version for an existing cluster. The properties used for filtering include type of cluster (managed, connected, etc), kubernetes version, location of the cluster.
az k8s-extension extension-types show-version-by-cluster

# Show properties associated with a Cluster Extension Type version in a region.
az k8s-extension extension-types show-version-by-location
```
