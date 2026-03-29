# az nginx

```bash
# Create an NGINX for Azure resource.
az nginx deployment create

# Delete an NGINX deployment.
az nginx deployment delete

# List of NGINX deployments.
az nginx deployment list

# Lists the default WAF policies for a deployment.
az nginx deployment list-default-waf-policy

# Get the properties of a specific NGINX Deployment.
az nginx deployment show

# Update an NGINX deployment.
az nginx deployment update

# Place the CLI in a waiting state until a condition is met.
az nginx deployment wait

# Create an API Key for the Nginx deployment in order to access the dataplane API endpoint.
az nginx deployment api-key create

# Delete API key for Nginx deployment.
az nginx deployment api-key delete

# List all API Keys of the given Nginx deployment.
az nginx deployment api-key list

# Get the specified API Key of the given Nginx deployment.
az nginx deployment api-key show

# Update an API Key for the Nginx deployment in order to access the dataplane API endpoint.
az nginx deployment api-key update

# Create a certificate for an NGINX deployment.
az nginx deployment certificate create

# Delete an NGINX deployment certificate.
az nginx deployment certificate delete

# List all certificates under the specified deployment and resource group.
az nginx deployment certificate list

# Get the properties of a specific NGINX certificate.
az nginx deployment certificate show

# Update an NGINX deployment certificate.
az nginx deployment certificate update

# Place the CLI in a waiting state until a condition is met.
az nginx deployment certificate wait

# Analyze an NGINX configuration without applying it to the NGINXaaS deployment.
az nginx deployment configuration analyze

# Create a configuration for an NGINX deployment.
az nginx deployment configuration create

# Delete an Nginx configuration.
az nginx deployment configuration delete

# List all configurations under the specified deployment and resource group.
az nginx deployment configuration list

# Get the properties of a specific NGINX configuration.
az nginx deployment configuration show

# Update an NGINX configuration.
az nginx deployment configuration update

# Place the CLI in a waiting state until a condition is met.
az nginx deployment configuration wait

# Analyze an Nginx Deployment WAF Policy.
az nginx deployment waf-policy analyze-waf-policy

# Create a WAF policy.
az nginx deployment waf-policy create

# Delete a specific WAF policy.
az nginx deployment waf-policy delete

# List all WAF policies in a deployment.
az nginx deployment waf-policy list

# Get a specific WAF policy.
az nginx deployment waf-policy show

# Update a WAF policy.
az nginx deployment waf-policy update

# Place the CLI in a waiting state until a condition is met.
az nginx deployment waf-policy wait
```
