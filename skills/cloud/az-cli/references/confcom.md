# az confcom

```bash
# Create a Confidential Container Policy Fragment for ACI.
az confcom acifragmentgen

# Create a Confidential Container Security Policy for ACI.
az confcom acipolicygen

# Create a Confidential Container Security Policy for AKS.
az confcom katapolicygen

# Create a Security Policy Container Definition based on an image reference.
az confcom containers from_image

# Create Security Policy Container Definitions based on a VN2 template.
az confcom containers from_vn2

# Attach a Confidential Container Policy Fragment to an image in an ORAS registry.
az confcom fragment attach

# Push a Confidential Container Policy Fragment to an ORAS registry.
az confcom fragment push
```
