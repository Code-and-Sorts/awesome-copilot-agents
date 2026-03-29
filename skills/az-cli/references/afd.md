# az afd

```bash
# Create a new domain within the specified profile.
az afd custom-domain create

# Delete an existing AzureFrontDoor domain with the specified domain name under the specified subscription, resource group and profile.
az afd custom-domain delete

# List existing AzureFrontDoor domains.
az afd custom-domain list

# Updates the domain validation token.
az afd custom-domain regenerate-validation-token

# Get an existing AzureFrontDoor domain with the specified domain name under the specified subscription, resource group and profile.
az afd custom-domain show

# Update a new domain within the specified profile.
az afd custom-domain update

# Place the CLI in a waiting state until a condition is met.
az afd custom-domain wait

# Create a new AzureFrontDoor endpoint with the specified endpoint name under the specified subscription, resource group and profile.
az afd endpoint create

# Delete an existing AzureFrontDoor endpoint with the specified endpoint name under the specified subscription, resource group and profile.
az afd endpoint delete

# List existing AzureFrontDoor endpoints.
az afd endpoint list

# Removes a content from AzureFrontDoor.
az afd endpoint purge

# Get an existing AzureFrontDoor endpoint with the specified endpoint name under the specified subscription, resource group and profile.
az afd endpoint show

# Update a new AzureFrontDoor endpoint with the specified endpoint name under the specified subscription, resource group and profile.
az afd endpoint update

# Place the CLI in a waiting state until a condition is met.
az afd endpoint wait

# Get all available location names for AFD log analytics report.
az afd log-analytic location list

# Get log report for AFD profile.
az afd log-analytic metric list

# Get log analytics ranking report for AFD profile.
az afd log-analytic ranking list

# Get all endpoints and custom domains available for AFD log report.
az afd log-analytic resource list

# Create a new origin group within the specified profile.
az afd origin-group create

# Delete an existing origin group within a profile.
az afd origin-group delete

# List all of the existing origin groups within a profile.
az afd origin-group list

# Get an existing origin group within a profile.
az afd origin-group show

# Update a new origin group within the specified profile.
az afd origin-group update

# Place the CLI in a waiting state until a condition is met.
az afd origin-group wait

# Create a new origin within the specified origin group.
az afd origin create

# Delete an existing origin within an origin group.
az afd origin delete

# List all of the existing origins within an origin group.
az afd origin list

# Get an existing origin within an origin group.
az afd origin show

# Update a new origin within the specified origin group.
az afd origin update

# Place the CLI in a waiting state until a condition is met.
az afd origin wait

# Create a new Azure Front Door Standard or Azure Front Door Premium or CDN profile with a profile name under the specified subscription and resource group.
az afd profile create

# Delete an existing  Azure Front Door Standard or Azure Front Door Premium or CDN profile with the specified parameters. Deleting a profile will result in the deletion of all of the sub-resources including endpoints, origins and custom domains.
az afd profile delete

# List all of the Azure Front Door Standard, Azure Front Door Premium, and CDN profiles within an Azure subscription.
az afd profile list

# Get an Azure Front Door Standard or Azure Front Door Premium or CDN profile with the specified profile name under the specified subscription and resource group.
az afd profile show

# Update a new Azure Front Door Standard or Azure Front Door Premium or CDN profile with a profile name under the specified subscription and resource group.
az afd profile update

# Checks the quota and actual usage of endpoints under the given Azure Front Door profile.
az afd profile usage

# Place the CLI in a waiting state until a condition is met.
az afd profile wait

# Assign the user or system managed identities.
az afd profile identity assign

# Remove the user or system managed identities.
az afd profile identity remove

# Show the details of managed identities.
az afd profile identity show

# Place the CLI in a waiting state until a condition is met.
az afd profile identity wait

# Defines rules that scrub sensitive fields in the Azure Front Door profile logs.
az afd profile log-scrubbing show

# Create a new route with the specified route name under the specified subscription, resource group, profile, and AzureFrontDoor endpoint.
az afd route create

# Delete an existing route with the specified route name under the specified subscription, resource group, profile, and AzureFrontDoor endpoint.
az afd route delete

# List all of the existing origins within a profile.
az afd route list

# Get an existing route with the specified route name under the specified subscription, resource group, profile, and AzureFrontDoor endpoint.
az afd route show

# Update a new route with the specified route name under the specified subscription, resource group, profile, and AzureFrontDoor endpoint.
az afd route update

# Place the CLI in a waiting state until a condition is met.
az afd route wait

# Create a new rule set within the specified profile.
az afd rule-set create

# Delete an existing AzureFrontDoor rule set with the specified rule set name under the specified subscription, resource group and profile.
az afd rule-set delete

# List existing AzureFrontDoor rule sets within a profile.
az afd rule-set list

# Get an existing AzureFrontDoor rule set with the specified rule set name under the specified subscription, resource group and profile.
az afd rule-set show

# Checks the quota and actual usage of endpoints under the given Azure Front Door profile..
az afd rule-set usage

# Place the CLI in a waiting state until a condition is met.
az afd rule-set wait

# Create a new delivery rule within the specified rule set.
az afd rule create

# Delete an existing delivery rule within a rule set.
az afd rule delete

# List all of the existing delivery rules within a rule set.
az afd rule list

# Get an existing delivery rule within a rule set.
az afd rule show

# Update a new delivery rule within the specified rule set.
az afd rule update

# Place the CLI in a waiting state until a condition is met.
az afd rule wait

# Update a new delivery rule within the specified rule set.
az afd rule action add

# Get an existing delivery rule within a rule set.
az afd rule action list

# Update a new delivery rule within the specified rule set.
az afd rule action remove

# Update a new delivery rule within the specified rule set.
az afd rule condition add

# Get an existing delivery rule within a rule set.
az afd rule condition list

# Update a new delivery rule within the specified rule set.
az afd rule condition remove

# Create a new Secret within the specified profile.
az afd secret create

# Delete an existing Secret within profile.
az afd secret delete

# List existing AzureFrontDoor secrets.
az afd secret list

# Get an existing Secret within a profile.
az afd secret show

# Update a new Secret within the specified profile.
az afd secret update

# Place the CLI in a waiting state until a condition is met.
az afd secret wait

# Create a new security policy within the specified profile.
az afd security-policy create

# Delete an existing security policy within profile.
az afd security-policy delete

# List security policies associated with the profile.
az afd security-policy list

# Get an existing security policy within a profile.
az afd security-policy show

# Update a new security policy within the specified profile.
az afd security-policy update

# Place the CLI in a waiting state until a condition is met.
az afd security-policy wait

# Get Waf related log analytics report for AFD profile.
az afd waf-log-analytic metric list

# Get WAF log analytics charts for AFD profile.
az afd waf-log-analytic ranking list
```
