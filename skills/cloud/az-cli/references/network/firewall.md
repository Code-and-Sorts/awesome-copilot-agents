# az network firewall

```bash
# Create an Azure Firewall.
az network firewall create

# Delete an Azure Firewall.
az network firewall delete

# Retrieves a list of all IP prefixes that azure firewall has learned to not SNAT.
az network firewall learned-ip-prefix

# List Azure Firewalls.
az network firewall list

# Gets all the Azure Firewall FQDN Tags in a subscription.
az network firewall list-fqdn-tags

# Runs a packet capture operation on AzureFirewall.
az network firewall packet-capture-operation

# Get the details of an Azure Firewall.
az network firewall show

# Update an Azure Firewall.
az network firewall update

# Place the CLI in a waiting state until a condition is met.
az network firewall wait

# Create an Azure Firewall application rule.
az network firewall application-rule create

# Delete an Azure Firewall application rule.
az network firewall application-rule delete

# List Azure Firewall application rules.
az network firewall application-rule list

# Get the details of an Azure Firewall application rule.
az network firewall application-rule show

# Delete an Azure Firewall application rule collection.
az network firewall application-rule collection delete

# List Azure Firewall application rule collections.
az network firewall application-rule collection list

# Get the details of an Azure Firewall application rule collection.
az network firewall application-rule collection show

# Create an Azure Firewall IP configuration.
az network firewall ip-config create

# Delete an Azure Firewall IP configuration.
az network firewall ip-config delete

# List Azure Firewall IP configurations.
az network firewall ip-config list

# Get the details of an Azure Firewall IP configuration.
az network firewall ip-config show

# Get the details of an Azure Firewall Management IP configuration.
az network firewall management-ip-config show

# Update an Azure Firewall Management IP configuration.
az network firewall management-ip-config update

# Create an Azure Firewall NAT rule.
az network firewall nat-rule create

# Delete an Azure Firewall NAT rule.
az network firewall nat-rule delete

# List Azure Firewall NAT rules.
az network firewall nat-rule list

# Get the details of an Azure Firewall NAT rule.
az network firewall nat-rule show

# Delete an Azure Firewall NAT rule collection.
az network firewall nat-rule collection delete

# List Azure Firewall NAT rule collections.
az network firewall nat-rule collection list

# Get the details of an Azure Firewall NAT rule collection.
az network firewall nat-rule collection show

# Create an Azure Firewall network rule.
az network firewall network-rule create

# Delete an Azure Firewall network rule. If you want to delete the last rule in a collection, please delete the collection instead.
az network firewall network-rule delete

# List Azure Firewall network rules.
az network firewall network-rule list

# Get the details of an Azure Firewall network rule.
az network firewall network-rule show

# Delete an Azure Firewall network rule collection.
az network firewall network-rule collection delete

# List Azure Firewall network rule collections.
az network firewall network-rule collection list

# Get the details of an Azure Firewall network rule collection.
az network firewall network-rule collection show

# Create an Azure firewall policy.
az network firewall policy create

# Delete an Azure firewall policy.
az network firewall policy delete

# Deploys the firewall policy draft and child rule collection group drafts.
az network firewall policy deploy

# List all Azure firewall policies.
az network firewall policy list

# Show an Azure firewall policy.
az network firewall policy show

# Update an Azure firewall policy.
az network firewall policy update

# Place the CLI in a waiting state until a condition is met.
az network firewall policy wait

# Create a draft Firewall Policy.
az network firewall policy draft create

# Delete a draft policy.
az network firewall policy draft delete

# Get a draft Firewall Policy.
az network firewall policy draft show

# Update a draft Firewall Policy.
az network firewall policy draft update

# Place the CLI in a waiting state until a condition is met.
az network firewall policy draft wait

# Update a draft Firewall Policy.
az network firewall policy draft intrusion-detection add

# List all intrusion detection configuration.
az network firewall policy draft intrusion-detection list

# Update a draft Firewall Policy.
az network firewall policy draft intrusion-detection remove

# Place the CLI in a waiting state until a condition is met.
az network firewall policy draft rule-collection-group wait

# Update an Azure firewall policy.
az network firewall policy intrusion-detection add

# List all intrusion detection configuration.
az network firewall policy intrusion-detection list

# Update an Azure firewall policy.
az network firewall policy intrusion-detection remove

# Create an Azure firewall policy rule collection group.
az network firewall policy rule-collection-group create

# Delete an Azure Firewall policy rule collection group.
az network firewall policy rule-collection-group delete

# List all Azure firewall policy rule collection groups.
az network firewall policy rule-collection-group list

# Show an Azure firewall policy rule collection group.
az network firewall policy rule-collection-group show

# Update an Azure firewall policy rule collection group.
az network firewall policy rule-collection-group update

# Place the CLI in a waiting state until a condition is met.
az network firewall policy rule-collection-group wait

# Add a filter collection into an Azure firewall policy rule collection group.
az network firewall policy rule-collection-group collection add-filter-collection

# Add a NAT collection into an Azure firewall policy rule collection group.
az network firewall policy rule-collection-group collection add-nat-collection

# List all rule collections of an Azure firewall policy rule collection group.
az network firewall policy rule-collection-group collection list

# Remove a rule collection from an Azure firewall policy rule collection group.
az network firewall policy rule-collection-group collection remove

# Add a rule into an Azure firewall policy rule collection.
az network firewall policy rule-collection-group collection rule add

# Remove a rule from an Azure firewall policy rule collection.
az network firewall policy rule-collection-group collection rule remove

# Update a rule of an Azure firewall policy rule collection.
az network firewall policy rule-collection-group collection rule update

# Create an Azure firewall policy rule collection group draft.
az network firewall policy rule-collection-group draft create

# Delete Rule Collection Group Draft.
az network firewall policy rule-collection-group draft delete

# Get Rule Collection Group Draft.
az network firewall policy rule-collection-group draft show

# Update an Azure firewall policy rule collection group.
az network firewall policy rule-collection-group draft update

# Add a filter collection into an Azure firewall policy rule collection group draft.
az network firewall policy rule-collection-group draft collection add-filter-collection

# Add a NAT collection into an Azure firewall policy rule collection group draft.
az network firewall policy rule-collection-group draft collection add-nat-collection

# List all rule collections of an Azure firewall policy rule collection group draft.
az network firewall policy rule-collection-group draft collection list

# Remove a rule collection from an Azure firewall policy rule collection group draft.
az network firewall policy rule-collection-group draft collection remove

# Add a rule into an Azure firewall policy draft rule collection.
az network firewall policy rule-collection-group draft collection rule add

# Remove a rule from an Azure firewall policy rule collection draft.
az network firewall policy rule-collection-group draft collection rule remove

# Update a rule of an Azure firewall policy rule collection.
az network firewall policy rule-collection-group draft collection rule update

# Create an Azure Firewall Threat Intelligence Allow List.
az network firewall threat-intel-allowlist create

# Delete an Azure Firewall Threat Intelligence Allow List.
az network firewall threat-intel-allowlist delete

# Get the details of an Azure Firewall Threat Intelligence Allow List.
az network firewall threat-intel-allowlist show

# Update Azure Firewall Threat Intelligence Allow List.
az network firewall threat-intel-allowlist update
```
