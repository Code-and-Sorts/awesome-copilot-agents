# az network front-door

```bash
# Validates the custom domain mapping to ensure it maps to the correct Front Door endpoint in DNS.
az network front-door check-custom-domain

# Check the availability of a Front Door resource name.
az network front-door check-name-availability

# Create a Front Door.
az network front-door create

# Delete a Front Door.
az network front-door delete

# List Front Doors.
az network front-door list

# Removes a content from Front Door.
az network front-door purge-endpoint

# Get the details of a Front Door.
az network front-door show

# Update settings of a Front Door.
az network front-door update

# Place the CLI in a waiting state until a condition of the Front Door is met.
az network front-door wait

# Create a Front Door backend pool.
az network front-door backend-pool create

# Delete a Front Door backend pool.
az network front-door backend-pool delete

# List Front Door backend pools.
az network front-door backend-pool list

# Get the details of a Front Door backend pool.
az network front-door backend-pool show

# Add a backend to a Front Door backend pool.
az network front-door backend-pool backend add

# List backends of a Front Door backend pool.
az network front-door backend-pool backend list

# Remove a backend from a Front Door backend pool.
az network front-door backend-pool backend remove

# Update a backend to a Front Door backend pool.
az network front-door backend-pool backend update

# Create a Front Door frontend endpoint.
az network front-door frontend-endpoint create

# Delete a Front Door frontend endpoint.
az network front-door frontend-endpoint delete

# Disable HTTPS protocol for a custom domain.
az network front-door frontend-endpoint disable-https

# Enable HTTPS protocol for a custom domain.
az network front-door frontend-endpoint enable-https

# List Front Door frontend endpoints.
az network front-door frontend-endpoint list

# Get the details of a Front Door frontend endpoint.
az network front-door frontend-endpoint show

# Place the CLI in a waiting state until a condition of the Front Door frontend endpoint is met.
az network front-door frontend-endpoint wait

# Create Front Door load-balancing settings.
az network front-door load-balancing create

# Delete Front Door load-balancing settings.
az network front-door load-balancing delete

# List Front Door load-balancing settingss.
az network front-door load-balancing list

# Get the details of a Front Door load-balancing settings bundle.
az network front-door load-balancing show

# Update Front Door load-balancing settings.
az network front-door load-balancing update

# Create Front Door health probe settings.
az network front-door probe create

# Delete Front Door health probe settings.
az network front-door probe delete

# List Front Door health probe settings.
az network front-door probe list

# Get the details of a Front Door health probe settings.
az network front-door probe show

# Update Front Door health probe settings.
az network front-door probe update

# Create a Front Door routing rule.
az network front-door routing-rule create

# Delete a Front Door routing rule.
az network front-door routing-rule delete

# List Front Door routing rules.
az network front-door routing-rule list

# Get the details of a Front Door routing rule.
az network front-door routing-rule show

# Update a Front Door routing rule.
az network front-door routing-rule update

# Deletes an existing Rules Engine Configuration with the specified parameters.
az network front-door rules-engine delete

# Lists all of the Rules Engine Configurations within a Front Door.
az network front-door rules-engine list

# Gets a Rules Engine Configuration with the specified name within the specified Front Door.
az network front-door rules-engine show

# Create a Rules Engine rule for a Front Door.
az network front-door rules-engine rule create

# Delete a Rules Engine rule.
az network front-door rules-engine rule delete

# List rules of a Rules Engine configuration.
az network front-door rules-engine rule list

# Get the details of a Rules Engine rule.
az network front-door rules-engine rule show

# Update Rules Engine configuration of a rule.
az network front-door rules-engine rule update

# Add an action to a Rules Engine rule.
az network front-door rules-engine rule action add

# Show all actions that apply for a Rules Engine rule.
az network front-door rules-engine rule action list

# Remove an action from a Rules Engine rule.
az network front-door rules-engine rule action remove

# Add a match condition to a Rules Engine rule.
az network front-door rules-engine rule condition add

# Show all match conditions associated with a Rules Engine rule.
az network front-door rules-engine rule condition list

# Remove a match condition from a Rules Engine rule.
az network front-door rules-engine rule condition remove

# Create policy with specified rule set name within a resource group.
az network front-door waf-policy create

# Delete Policy.
az network front-door waf-policy delete

# List all of the protection policies within a resource group.
az network front-door waf-policy list

# Get protection policy with specified name within a resource group.
az network front-door waf-policy show

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy update

# Place the CLI in a waiting state until a condition is met.
az network front-door waf-policy wait

# List all available managed rule sets.
az network front-door waf-policy managed-rule-definition list

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy managed-rules add

# Get protection policy with specified name within a resource group.
az network front-door waf-policy managed-rules list

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy managed-rules remove

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy managed-rules exclusion add

# Get protection policy with specified name within a resource group.
az network front-door waf-policy managed-rules exclusion list

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy managed-rules exclusion remove

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy managed-rules override add

# Get protection policy with specified name within a resource group.
az network front-door waf-policy managed-rules override list

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy managed-rules override remove

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy rule create

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy rule delete

# Get protection policy with specified name within a resource group.
az network front-door waf-policy rule list

# Get protection policy with specified name within a resource group.
az network front-door waf-policy rule show

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy rule update

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy rule match-condition add

# Get protection policy with specified name within a resource group.
az network front-door waf-policy rule match-condition list

# Update policy with specified rule set name within a resource group.
az network front-door waf-policy rule match-condition remove
```
