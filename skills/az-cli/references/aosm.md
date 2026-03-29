# az aosm

```bash
# Build an AOSM Network Function Definition.
az aosm nfd build

# Generate configuration file for building an AOSM publisher Network Function Definition.
az aosm nfd generate-config

# Publish a pre-built AOSM Network Function definition.
az aosm nfd publish

# Build an AOSM Network Service Design.
az aosm nsd build

# Generate configuration file for building an AOSM publisher Network Service Design.
az aosm nsd generate-config

# Publish a pre-built AOSM Network Service Design.
az aosm nsd publish

# List information about the artifact manifest.
az aosm publisher artifact-manifest list

# List credential for publishing artifacts defined in artifact manifest.
az aosm publisher artifact-manifest list-credential

# Get information about a artifact manifest resource.
az aosm publisher artifact-manifest show

# Update state for artifact manifest.
az aosm publisher artifact-manifest update-state

# List all the available artifacts in the parent Artifact Store.
az aosm publisher artifact-store artifact list

# List a Artifact overview information.
az aosm publisher artifact-store artifact version list

# Update artifact state defined in artifact store.
az aosm publisher artifact-store artifact version update-state

# List information of the configuration group schemas under a publisher.
az aosm publisher configuration-group-schema list

# Get information about the specified configuration group schema.
az aosm publisher configuration-group-schema show

# Update configuration group schema state.
az aosm publisher configuration-group-schema update-state

# List information about the network function definition versions available in the specified network function definition group.
az aosm publisher network-function-definition version list

# Get information about a network function definition version.
az aosm publisher network-function-definition version show

# Update network function definition version state.
az aosm publisher network-function-definition version update-state

# List information about the network service design versions available under the specified network service design group.
az aosm publisher network-service-design version list

# Get information about a network service design version.
az aosm publisher network-service-design version show

# Update network service design version state.
az aosm publisher network-service-design version update-state

# Build the Site Network Service.
az aosm sns build

# Deploy the SNS definition.
az aosm sns deploy

# Generate configuration file for building an AOSM SNS.
az aosm sns generate-config
```
