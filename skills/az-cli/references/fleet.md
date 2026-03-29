# az fleet

```bash
# Creates or updates a fleet.
az fleet create

# Deletes a fleet.
az fleet delete

# For hubful fleets, gets the kubeconfig for the fleet's hub cluster. For fleet members, gets kubeconfig from the member's managed cluster.
az fleet get-credentials

# Lists all fleets.
az fleet list

# Reconciles a fleet.
az fleet reconcile

# Gets a fleet.
az fleet show

# Patches a fleet resource.
az fleet update

# Wait for a fleet resource to reach a desired state.
az fleet wait

# Creates or updates an auto upgrade profile.
az fleet autoupgradeprofile create

# Deletes an auto upgrade profile.
az fleet autoupgradeprofile delete

# Generates an update run for a given auto upgrade profile.
az fleet autoupgradeprofile generate-update-run

# Lists all auto upgrade profiles for a given fleet.
az fleet autoupgradeprofile list

# Shows an auto upgrade profile.
az fleet autoupgradeprofile show

# Wait for an auto upgrade resource to reach a desired state.
az fleet autoupgradeprofile wait

# Approves a gate, and sets the gate state to Completed. This modifies the gate state in the same way as the general-purpose update command, however it's simpler to use.
az fleet gate approve

# Lists all gates under a fleet.
az fleet gate list

# Shows a specific gate.
az fleet gate show

# Updates a gate. Currently only the gate state can be updated. Valid values are ('Completed').
az fleet gate update

# Creates or updates a member.
az fleet member create

# Deletes a fleet member.
az fleet member delete

# Lists a fleet's members.
az fleet member list

# Reconciles a member.
az fleet member reconcile

# Gets a fleet member.
az fleet member show

# Update a member.
az fleet member update

# Wait for a member resource to reach a desired state.
az fleet member wait

# Creates a fleet managed namespace.
az fleet namespace create

# Deletes a fleet managed namespace.
az fleet namespace delete

# Get kubeconfig for a fleet namespace, with the namespace context pre-configured.
az fleet namespace get-credentials

# Lists a fleet's managed namespaces.
az fleet namespace list

# Gets a fleet managed namespace.
az fleet namespace show

# Updates a fleet managed namespace.
az fleet namespace update

# Wait for a fleet managed namespace to reach a desired state.
az fleet namespace wait

# Creates or updates an update run.
az fleet updaterun create

# Deletes an update run.
az fleet updaterun delete

# Lists a fleet's update runs.
az fleet updaterun list

# Shows an update run.
az fleet updaterun show

# Sets targets to be skipped within an UpdateRun.
az fleet updaterun skip

# Starts an update run.
az fleet updaterun start

# Stops an update run.
az fleet updaterun stop

# Wait for an update run resource to reach a desired state.
az fleet updaterun wait

# Creates or updates an update strategy.
az fleet updatestrategy create

# Deletes a update strategy.
az fleet updatestrategy delete

# Lists the fleet's update strategies.
az fleet updatestrategy list

# Shows an update strategy.
az fleet updatestrategy show

# Wait for a update strategy resource to reach a desired state.
az fleet updatestrategy wait
```
