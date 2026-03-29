# az network manager

```bash
# Create a Network Manager.
az network manager create

# Delete a network manager.
az network manager delete

# List all network managers in a subscription.
az network manager list

# Lists active connectivity configurations in a network manager.
az network manager list-active-connectivity-config

# Lists active security admin rules in a network manager.
az network manager list-active-security-admin-rule

# Post List of Network Manager Deployment Status.
az network manager list-deploy-status

# List all effective connectivity configurations applied on a virtual network.
az network manager list-effective-connectivity-config

# List all effective security admin rules applied on a virtual network.
az network manager list-effective-security-admin-rule

# Post a Network Manager Commit.
az network manager post-commit

# Get the specified Network Manager.
az network manager show

# Update a Network Manager.
az network manager update

# Place the CLI in a waiting state until a condition is met.
az network manager wait

# Create a new network manager connectivity configuration.
az network manager connect-config create

# Delete a network manager connectivity configuration, specified by the resource group, network manager name, and connectivity configuration name.
az network manager connect-config delete

# List all the network manager connectivity configuration in a specified network manager.
az network manager connect-config list

# Get a Network Connectivity Configuration, specified by the resource group, network manager name, and connectivity Configuration name.
az network manager connect-config show

# Update a new network manager connectivity configuration.
az network manager connect-config update

# Place the CLI in a waiting state until a condition is met.
az network manager connect-config wait

# Create a network manager connection on this management group.
az network manager connection management-group create

# Delete specified pending connection created by this management group.
az network manager connection management-group delete

# List all network manager connections created by this management group.
az network manager connection management-group list

# Get a specified connection created by this management group.
az network manager connection management-group show

# Update a network manager connection on this management group.
az network manager connection management-group update

# Create a network manager connection on this subscription.
az network manager connection subscription create

# Delete specified connection created by this subscription.
az network manager connection subscription delete

# List all network manager connections created by this subscription.
az network manager connection subscription list

# Get a specified connection created by this subscription.
az network manager connection subscription show

# Update a network manager connection on this subscription.
az network manager connection subscription update

# Create a network group.
az network manager group create

# Delete a network group.
az network manager group delete

# List the specified network group.
az network manager group list

# Get the specified network group.
az network manager group show

# Update a network group.
az network manager group update

# Place the CLI in a waiting state until a condition is met.
az network manager group wait

# Create a static member.
az network manager group static-member create

# Delete a static member.
az network manager group static-member delete

# List the static members within a specific network group.
az network manager group static-member list

# Get the specified static member.
az network manager group static-member show

# Create the Pool resource.
az network manager ipam-pool create

# Delete the Pool resource.
az network manager ipam-pool delete

# Get the Pool Usage.
az network manager ipam-pool get-pool-usage

# List list of Pool resources at Network Manager level.
az network manager ipam-pool list

# List Associated Resource in the Pool.
az network manager ipam-pool list-associated-resource

# Get the specific Pool resource.
az network manager ipam-pool show

# Update the Pool resource.
az network manager ipam-pool update

# Place the CLI in a waiting state until a condition is met.
az network manager ipam-pool wait

# Create the Static CIDR resource.
az network manager ipam-pool static-cidr create

# Delete the Static CIDR resource.
az network manager ipam-pool static-cidr delete

# List list of Static CIDR resources at Network Manager level.
az network manager ipam-pool static-cidr list

# Get the specific Static CIDR resource.
az network manager ipam-pool static-cidr show

# Update the Static CIDR resource.
az network manager ipam-pool static-cidr update

# Place the CLI in a waiting state until a condition is met.
az network manager ipam-pool static-cidr wait

# Create a network manager routing configuration.
az network manager routing-config create

# Delete a network manager routing configuration.
az network manager routing-config delete

# List all the network manager routing configurations in a network manager, in a paginated format.
az network manager routing-config list

# Get a network manager routing configuration.
az network manager routing-config show

# Update a network manager routing configuration.
az network manager routing-config update

# Place the CLI in a waiting state until a condition is met.
az network manager routing-config wait

# Create a routing rule collection.
az network manager routing-config rule-collection create

# Delete an routing rule collection.
az network manager routing-config rule-collection delete

# List all the rule collections in a routing configuration, in a paginated format.
az network manager routing-config rule-collection list

# Get a network manager routing configuration rule collection.
az network manager routing-config rule-collection show

# Update a routing rule collection.
az network manager routing-config rule-collection update

# Place the CLI in a waiting state until a condition is met.
az network manager routing-config rule-collection wait

# Create an routing rule.
az network manager routing-config rule-collection rule create

# Delete a routing rule.
az network manager routing-config rule-collection rule delete

# List all network manager routing configuration routing rules.
az network manager routing-config rule-collection rule list

# Get a network manager routing configuration routing rule.
az network manager routing-config rule-collection rule show

# Update an routing rule.
az network manager routing-config rule-collection rule update

# Place the CLI in a waiting state until a condition is met.
az network manager routing-config rule-collection rule wait

# Create scope connection from Network Manager.
az network manager scope-connection create

# Delete the pending scope connection created by this network manager.
az network manager scope-connection delete

# List all scope connections created by this network manager.
az network manager scope-connection list

# Get specified scope connection created by this Network Manager.
az network manager scope-connection show

# Update scope connection from Network Manager.
az network manager scope-connection update

# Create a network manager security admin configuration.
az network manager security-admin-config create

# Delete a network manager security admin configuration.
az network manager security-admin-config delete

# List all the network manager security admin configurations in a network manager, in a paginated format.
az network manager security-admin-config list

# Get a network manager security admin configuration.
az network manager security-admin-config show

# Update a network manager security admin configuration.
az network manager security-admin-config update

# Place the CLI in a waiting state until a condition is met.
az network manager security-admin-config wait

# Create a network manager security configuration admin rule collection.
az network manager security-admin-config rule-collection create

# Delete an admin rule collection.
az network manager security-admin-config rule-collection delete

# List all the rule collections in a security admin configuration, in a paginated format.
az network manager security-admin-config rule-collection list

# Get a network manager security admin configuration rule collection.
az network manager security-admin-config rule-collection show

# Update a network manager security configuration admin rule collection in a subscription.
az network manager security-admin-config rule-collection update

# Place the CLI in a waiting state until a condition is met.
az network manager security-admin-config rule-collection wait

# Create a network manager security configuration admin rule.
az network manager security-admin-config rule-collection rule create

# Delete an admin rule.
az network manager security-admin-config rule-collection rule delete

# List all network manager security configuration admin rules.
az network manager security-admin-config rule-collection rule list

# Get a network manager security configuration admin rule.
az network manager security-admin-config rule-collection rule show

# Update a network manager security configuration admin rule in a subscription.
az network manager security-admin-config rule-collection rule update

# Create Verifier Workspace.
az network manager verifier-workspace create

# Delete Verifier Workspace.
az network manager verifier-workspace delete

# List list of Verifier Workspaces.
az network manager verifier-workspace list

# Get Verifier Workspace.
az network manager verifier-workspace show

# Update Verifier Workspace.
az network manager verifier-workspace update

# Place the CLI in a waiting state until a condition is met.
az network manager verifier-workspace wait

# Create Reachability Analysis Intent.
az network manager verifier-workspace reachability-analysis-intent create

# Delete Reachability Analysis Intent.
az network manager verifier-workspace reachability-analysis-intent delete

# List list of Reachability Analysis Intents .
az network manager verifier-workspace reachability-analysis-intent list

# Get the Reachability Analysis Intent.
az network manager verifier-workspace reachability-analysis-intent show

# Create Reachability Analysis Runs.
az network manager verifier-workspace reachability-analysis-run create

# Delete Reachability Analysis Run.
az network manager verifier-workspace reachability-analysis-run delete

# List list of Reachability Analysis Runs.
az network manager verifier-workspace reachability-analysis-run list

# Get Reachability Analysis Run.
az network manager verifier-workspace reachability-analysis-run show

# Place the CLI in a waiting state until a condition is met.
az network manager verifier-workspace reachability-analysis-run wait
```
