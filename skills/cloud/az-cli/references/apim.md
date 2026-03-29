# az apim

```bash
# Update the API Management resource running in the virtual network to pick the updated network settings.
az apim apply-network-updates

# Creates a backup of the API Management service to the given Azure Storage Account. This is long running operation and could take several minutes to complete.
az apim backup

# Checks to see if a service name is available to use.
az apim check-name

# Create an API Management service instance.
az apim create

# Deletes an API Management service.
az apim delete

# List API Management service instances.
az apim list

# Restores a backup of an API Management service created using the ApiManagementService_Backup operation on the current service. This is a long running operation and could take several minutes to complete.
az apim restore

# Show details of an API Management service instance.
az apim show

# Update an API Management service instance.
az apim update

# Place the CLI in a waiting state until a condition of an apim is met.
az apim wait

# Create an API Management API.
az apim api create

# Delete an API Management API.
az apim api delete

# Export an API Management API.
az apim api export

# Import an API Management API.
az apim api import

# List API Management API's.
az apim api list

# Show details of an API Management API.
az apim api show

# Update an API Management API.
az apim api update

# Place the CLI in a waiting state until a condition of an apim api is met.
az apim api wait

# Creates a new operation in the API.
az apim api operation create

# Deletes the specified operation in the API.
az apim api operation delete

# List a collection of the operations for the specified API.
az apim api operation list

# Gets the details of the API Operation specified by its identifier.
az apim api operation show

# Updates the details of the operation in the API specified by its identifier.
az apim api operation update

# Creates a new Release for the API.
az apim api release create

# Deletes the specified release in the API.
az apim api release delete

# Lists all releases of an API.
az apim api release list

# Returns the details of an API release.
az apim api release show

# Updates the details of the release of the API specified by its identifier.
az apim api release update

# Create API revision.
az apim api revision create

# Lists all revisions of an API.
az apim api revision list

# Create an API Management API Schema.
az apim api schema create

# Delete an API Management API Schema.
az apim api schema delete

# Get etag of an API Management API schema.
az apim api schema get-etag

# List API Management API schema's.
az apim api schema list

# Show details of an API Management API Schema.
az apim api schema show

# Place the CLI in a waiting state until a condition of an apim api schema is met.
az apim api schema wait

# Creates a Api Version Set.
az apim api versionset create

# Deletes specific Api Version Set.
az apim api versionset delete

# Lists a collection of API Version Sets in the specified service instance.
az apim api versionset list

# Gets the details of the Api Version Set specified by its identifier.
az apim api versionset show

# Updates the details of the Api VersionSet specified by its identifier.
az apim api versionset update

# List all soft-deleted Api Management services instances available for undelete for the given subscription.
az apim deletedservice list

# Purge soft-deleted Api Management service instance (deletes it with no option to undelete).
az apim deletedservice purge

# Get soft-deleted Api Management service instances available for undelete by name.
az apim deletedservice show

# Create a new resolver in the GraphQL API or updates an existing one.
az apim graphql resolver create

# Delete the specified resolver in the GraphQL API.
az apim graphql resolver delete

# List a collection of the resolvers for the specified GraphQL API.
az apim graphql resolver list

# Get the details of the GraphQL API Resolver specified by its identifier.
az apim graphql resolver show

# Create or updates policy configuration for the GraphQL API Resolver level.
az apim graphql resolver policy create

# Delete the policy configuration at the GraphQL Api Resolver.
az apim graphql resolver policy delete

# Get the list of policy configuration at the GraphQL API Resolver level.
az apim graphql resolver policy list

# Get the policy configuration at the GraphQL API Resolver level.
az apim graphql resolver policy show

# Create an API Management Named Value.
az apim nv create

# Delete an API Management Named Value.
az apim nv delete

# List API Management Named Values.
az apim nv list

# Show details of an API Management Named Value.
az apim nv show

# Gets the secret of an API Management Named Value.
az apim nv show-secret

# Update an API Management Named Value.
az apim nv update

# Place the CLI in a waiting state until a condition of an apim named value is met.
az apim nv wait

# Creates a product.
az apim product create

# Delete product.
az apim product delete

# Lists a collection of products in the specified service instance.
az apim product list

# Gets the details of the product specified by its identifier.
az apim product show

# Update existing product details.
az apim product update

# Place the CLI in a waiting state until a condition of an apim product is met.
az apim product wait

# Add an API to the specified product.
az apim product api add

# Checks that API entity specified by identifier is associated with the Product entity.
az apim product api check

# Deletes the specified API from the specified product.
az apim product api delete

# Lists a collection of the APIs associated with a product.
az apim product api list
```
