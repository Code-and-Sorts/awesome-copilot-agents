# az confluent

```bash
# List Confluent marketplace agreements in the subscription.
az confluent agreement list

# Create Confluent Marketplace agreement in the subscription.
az confluent agreement default create

# Get the offer details for available offers.
az confluent offer-detail show

# Create Organization resource.
az confluent organization create

# Assign roles to users or groups within a Confluent organization.
az confluent organization create-role-binding

# Invite a new user to join the Confluent organization.
az confluent organization create-user

# Delete Organization resource.
az confluent organization delete

# List all Organizations under the specified resource group. And List all organizations under the specified subscription.
az confluent organization list

# List all the supported regions within a Confluent organization.
az confluent organization list-region

# List all the role bindings within a Confluent organization.
az confluent organization list-role-binding

# List all the details of service accounts within a Confluent organization.
az confluent organization list-service-accounts

# List all the details of users within a Confluent organization.
az confluent organization list-users

# Get the properties of a specific Organization resource.
az confluent organization show

# Update Organization resource.
az confluent organization update

# Place the CLI in a waiting state until a condition of the confluent organization is met.
az confluent organization wait

# List all Confluent cluster within an environment in an organization.
az confluent organization access default list-cluster

# List all Confluent environment in an organization.
az confluent organization access default list-environment

# List all Confluent invitation in an organization.
az confluent organization access default list-invitation

# List all Confluent role bindings names in an organization.
az confluent organization access default list-role-binding-name-list

# Remove an API key from a Kafka or Schema Registry cluster in Confluent.
az confluent organization api-key delete

# Show a API key from a Kafka or Schema Registry cluster in Confluent.
az confluent organization api-key show

# Create confluent environment.
az confluent organization environment create

# Delete confluent environment by id.
az confluent organization environment delete

# List all Confluent environments within a specific organization.
az confluent organization environment list

# Display details of a specific Confluent environment within an organization.
az confluent organization environment show

# Update confluent environment.
az confluent organization environment update

# Create confluent clusters.
az confluent organization environment cluster create

# Create API keys for Schema Registry or Kafka clusters within an environment.
az confluent organization environment cluster create-api-key

# Delete confluent cluster by id.
az confluent organization environment cluster delete

# List all clusters within a specific Confluent environment.
az confluent organization environment cluster list

# Retrieve details of a specific Confluent cluster by its ID.
az confluent organization environment cluster show

# Update confluent clusters.
az confluent organization environment cluster update

# Create confluent connector by Name.
az confluent organization environment cluster connector create

# Delete confluent connector by name.
az confluent organization environment cluster connector delete

# List all the connectors in a cluster.
az confluent organization environment cluster connector list

# Get confluent connector by Name.
az confluent organization environment cluster connector show

# Update confluent connector by Name.
az confluent organization environment cluster connector update

# Create confluent topics by Name.
az confluent organization environment cluster topic create

# Delete confluent topic by name.
az confluent organization environment cluster topic delete

# List of all the topics in a clusters.
az confluent organization environment cluster topic list

# Get confluent topic by Name.
az confluent organization environment cluster topic show

# Update confluent topics by Name.
az confluent organization environment cluster topic update

# List all Schema Registry clusters within a Confluent environment.
az confluent organization environment schema-registry-cluster list

# Retrieve details of a specific Schema Registry cluster by its ID.
az confluent organization environment schema-registry-cluster show

# Delete role bindings within a Confluent organization.
az confluent organization role-binding delete

# Organization Validate proxy resource.
az confluent validation orgvalidate

# Validate Confluent organization resource.
az confluent validation orgvalidate-v2
```
