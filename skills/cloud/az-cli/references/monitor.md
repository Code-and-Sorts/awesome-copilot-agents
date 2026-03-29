# az monitor

```bash
# Clone metrics alert rules from one resource to another resource.
az monitor clone

# Create a workspace.
az monitor account create

# Delete a workspace.
az monitor account delete

# List all workspaces in the specified subscription.
az monitor account list

# Show the specific azure monitor workspace.
az monitor account show

# Update a workspace.
az monitor account update

# Place the CLI in a waiting state until a condition is met.
az monitor account wait

# Create a new action group.
az monitor action-group create

# Delete an action group.
az monitor action-group delete

# Enable a receiver in an action group.
az monitor action-group enable-receiver

# List action groups under a resource group or the current subscription.
az monitor action-group list

# Show the details of an action group.
az monitor action-group show

# Update an action group.
az monitor action-group update

# Place the CLI in a waiting state.
az monitor action-group wait

# Assign the user or system managed identities.
az monitor action-group identity assign

# Remove the user or system managed identities.
az monitor action-group identity remove

# Show the details of managed identities.
az monitor action-group identity show

# Create an action group test-notifications.
az monitor action-group test-notifications create

# List and query activity log events.
az monitor activity-log list

# List the list of available event categories supported in the Activity Logs Service.
az monitor activity-log list-categories

# Create a default activity log alert rule.
az monitor activity-log alert create

# Delete an activity log alert.
az monitor activity-log alert delete

# List activity log alert rules under a resource group or the current subscription.
az monitor activity-log alert list

# Get an activity log alert.
az monitor activity-log alert show

# Update a new activity log alert or update an existing one.
az monitor activity-log alert update

# Add action groups to this activity log alert rule. It can also be used to overwrite existing webhook properties of particular action groups.
az monitor activity-log alert action-group add

# Remove action groups from this activity log alert rule.
az monitor activity-log alert action-group remove

# Add scopes to this activity log alert rule.
az monitor activity-log alert scope add

# Removes scopes from this activity log alert rule.
az monitor activity-log alert scope remove

# Create an alert processing rule.
az monitor alert-processing-rule create

# Delete an alert processing rule.
az monitor alert-processing-rule delete

# List all alert processing rules in a subscription or resource group.
az monitor alert-processing-rule list

# Get an alert processing rule.
az monitor alert-processing-rule show

# Enable, disable, or update tags for an alert processing rule.
az monitor alert-processing-rule update

# Enterprise Agreement Customer opted to use new pricing model.
az monitor app-insights migrate-to-new-pricing-model

# Execute a query over data in your application.
az monitor app-insights query

# Create an API Key of an Application Insights component.
az monitor app-insights api-key create

# Delete an API key from an Application Insights resource.
az monitor app-insights api-key delete

# Get all keys or a specific API key associated with an Application Insights resource.
az monitor app-insights api-key show

# Connect AI to an Azure function.
az monitor app-insights component connect-function

# Connect AI to a web app.
az monitor app-insights component connect-webapp

# Create a new Application Insights resource.
az monitor app-insights component create

# Delete a new Application Insights resource.
az monitor app-insights component delete

# Get an Application Insights resource.
az monitor app-insights component show

# Update properties on an existing Application Insights resource. The primary value which can be updated is kind, which customizes the UI experience.
az monitor app-insights component update

# Update tags on an existing Application Insights resource.
az monitor app-insights component update-tags

# Show the billing features of an Application Insights resource.
az monitor app-insights component billing show

# Update the billing features of an Application Insights resource.
az monitor app-insights component billing update

# Create a Continuous Export configuration for an Application Insights component.
az monitor app-insights component continues-export create

# Delete a specific Continuous Export     configuration of an Application Insights component.
az monitor app-insights component continues-export delete

# List a list of Continuous Export configuration of an Application Insights component.
az monitor app-insights component continues-export list

# Get the Continuous Export configuration for this export id.
az monitor app-insights component continues-export show

# Update a Continuous Export configuration for an Application Insights component.
az monitor app-insights component continues-export update

# Create a new favorites to an Application Insights component.
az monitor app-insights component favorite create

# Delete a favorite that is associated to an Application Insights component.
az monitor app-insights component favorite delete

# List a list of favorites defined within an Application Insights component.
az monitor app-insights component favorite list

# Get a single favorite by its FavoriteId, defined within an Application Insights component.
az monitor app-insights component favorite show

# Update a new favorites to an Application Insights component.
az monitor app-insights component favorite update

# Link a storage account with an     Application Insights component.
az monitor app-insights component linked-storage link

# Get the current linked storage settings for an Application Insights component.
az monitor app-insights component linked-storage show

# Unlink a storage account with an Application Insights component.
az monitor app-insights component linked-storage unlink

# Update current linked storage account for an Application Insights component.
az monitor app-insights component linked-storage update

# Show daily data volume cap (quota) status for an Application Insights component.
az monitor app-insights component quotastatus show

# List events by type or view a single event from an application, specified by type and ID.
az monitor app-insights events show

# Get the metadata for metrics on a particular application.
az monitor app-insights metrics get-metadata

# View the value of a single metric.
az monitor app-insights metrics show

# List all private workbooks defined within a specified subscription and category.
az monitor app-insights my-workbook list

# Create an Application Insights web test definition.
az monitor app-insights web-test create

# Delete an Application Insights web test.
az monitor app-insights web-test delete

# Get all Application Insights web tests defined for the specified component. And Get all Application Insights web tests defined within a specified resource group. And Get all Application Insights web test alerts definitions within a subscription.
az monitor app-insights web-test list

# Get a specific Application Insights web test definition.
az monitor app-insights web-test show

# Update an Application Insights web test definition.
az monitor app-insights web-test update

# Create a workbook.
az monitor app-insights workbook create

# Delete a workbook.
az monitor app-insights workbook delete

# List all workbooks defined within a specified resource group and category.
az monitor app-insights workbook list

# Show a single workbook by its resource name.
az monitor app-insights workbook show

# Update a workbook.
az monitor app-insights workbook update

# Assign identities.
az monitor app-insights workbook identity assign

# Remove identities.
az monitor app-insights workbook identity remove

# List the revisions for the workbook.
az monitor app-insights workbook revision list

# Show workbook revision.
az monitor app-insights workbook revision show

# Create new autoscale settings.
az monitor autoscale create

# Delete an autoscale setting.
az monitor autoscale delete

# Lists the autoscale settings for a resource group.
az monitor autoscale list

# Get an autoscale setting.
az monitor autoscale show

# Show predictive autoscale metric future data.
az monitor autoscale show-predictive-metric

# Update an autoscale setting.
az monitor autoscale update

# Create a fixed or recurring autoscale profile.
az monitor autoscale profile create

# Delete an autoscale profile.
az monitor autoscale profile delete

# List autoscale profiles.
az monitor autoscale profile list

# Look up time zone information.
az monitor autoscale profile list-timezones

# Show details of an autoscale profile.
az monitor autoscale profile show

# Copy autoscale rules from one profile to another.
az monitor autoscale rule copy

# Add a new autoscale rule.
az monitor autoscale rule create

# Remove autoscale rules from a profile.
az monitor autoscale rule delete

# List autoscale rules for a profile.
az monitor autoscale rule list

# Create a Dashboard with Grafana resource. This API is idempotent, so user can either create a new dashboard or update an existing dashboard.
az monitor dashboard create

# Delete a Dashboard with Grafana resource.
az monitor dashboard delete

# List all Dashboard with Grafana resources under the specified resource group.
az monitor dashboard list

# Get the properties of a specific Dashboard with Grafana resource.
az monitor dashboard show

# Place the CLI in a waiting state until a condition is met.
az monitor dashboard wait

# Create a data collection endpoint.
az monitor data-collection endpoint create

# Delete a data collection endpoint.
az monitor data-collection endpoint delete

# List all data collection endpoints in the specified subscription.
az monitor data-collection endpoint list

# Get the specified data collection endpoint.
az monitor data-collection endpoint show

# Update a data collection endpoint.
az monitor data-collection endpoint update

# List associations for the specified data collection endpoint.
az monitor data-collection endpoint association list

# Create a data collection rule.
az monitor data-collection rule create

# Delete a data collection rule.
az monitor data-collection rule delete

# List all data collection rules in the specified resource group. And Lists all data collection rules in the specified subscription.
az monitor data-collection rule list

# Return the specified data collection rule.
az monitor data-collection rule show

# Update a data collection rule.
az monitor data-collection rule update

# Create an association.
az monitor data-collection rule association create

# Delete an association.
az monitor data-collection rule association delete

# Lists associations for the specified data collection rule. And Lists associations for the specified data collection endpoint. And Lists associations for the specified resource.
az monitor data-collection rule association list

# List associations for the specified resource.
az monitor data-collection rule association list-by-resource

# Get the specified association.
az monitor data-collection rule association show

# Update an association.
az monitor data-collection rule association update

# Add a data flow.
az monitor data-collection rule data-flow add

# List data flows.
az monitor data-collection rule data-flow list

# Add Log Analytics destinations of a data collection rule.
az monitor data-collection rule log-analytics add

# Delete a Log Analytics destinations of a data collection rule.
az monitor data-collection rule log-analytics delete

# List Log Analytics destinations of a data collection rule.
az monitor data-collection rule log-analytics list

# Show a Log Analytics destination of a data collection rule.
az monitor data-collection rule log-analytics show

# Update a Log Analytics destination of a data collection rule.
az monitor data-collection rule log-analytics update

# Add a Log performance counter data source.
az monitor data-collection rule performance-counter add

# Delete a Log performance counter data source.
az monitor data-collection rule performance-counter delete

# List Log performance counter data sources.
az monitor data-collection rule performance-counter list

# Show a Log performance counter data source.
az monitor data-collection rule performance-counter show

# Update a Log performance counter data source.
az monitor data-collection rule performance-counter update

# Add a Syslog data source.
az monitor data-collection rule syslog add

# Delete a Syslog data source.
az monitor data-collection rule syslog delete

# List Syslog data sources.
az monitor data-collection rule syslog list

# Show a Syslog data source.
az monitor data-collection rule syslog show

# Update a Syslog data source.
az monitor data-collection rule syslog update

# Add a Windows Event Log data source.
az monitor data-collection rule windows-event-log add

# Delete a Windows Event Log data source.
az monitor data-collection rule windows-event-log delete

# List Windows Event Log data sources.
az monitor data-collection rule windows-event-log list

# Show a Windows Event Log data source.
az monitor data-collection rule windows-event-log show

# Update a Windows Event Log data source.
az monitor data-collection rule windows-event-log update

# Create diagnostic settings for the specified resource. For more information, visit: https://learn.microsoft.com/rest/api/monitor/diagnosticsettings/createorupdate#metricsettings.
az monitor diagnostic-settings create

# Deletes existing diagnostic settings for the specified resource.
az monitor diagnostic-settings delete

# Gets the active diagnostic settings list for the specified resource.
az monitor diagnostic-settings list

# Gets the active diagnostic settings for the specified resource.
az monitor diagnostic-settings show

# Update diagnostic settings for the specified resource.
az monitor diagnostic-settings update

# List the diagnostic settings categories for the specified resource.
az monitor diagnostic-settings categories list

# Gets the diagnostic settings category for the specified resource.
az monitor diagnostic-settings categories show

# Create subscription diagnostic settings for the specified resource.
az monitor diagnostic-settings subscription create

# Deletes existing subscription diagnostic settings for the specified resource.
az monitor diagnostic-settings subscription delete

# Gets the active subscription diagnostic settings list for the specified subscriptionId. :keyword callable cls: A custom type or function that will be passed the direct response:return: SubscriptionDiagnosticSettingsResourceCollection or the result of cls(response):rtype:  ~$(python-base-namespace).v2017_05_01_preview.models.SubscriptionDiagnosticSettingsResourceCollection:raises ~azure.core.exceptions.HttpResponseError:.
az monitor diagnostic-settings subscription list

# Gets the active subscription diagnostic settings for the specified resource.
az monitor diagnostic-settings subscription show

# Update subscription diagnostic settings for the specified resource.
az monitor diagnostic-settings subscription update

# Query a Log Analytics workspace.
az monitor log-analytics query

# Create a cluster instance.
az monitor log-analytics cluster create

# Delete a cluster instance.
az monitor log-analytics cluster delete

# List all cluster instances in a resource group or in current subscription.
az monitor log-analytics cluster list

# Show the properties of a cluster instance.
az monitor log-analytics cluster show

# Update a cluster instance.
az monitor log-analytics cluster update

# Place the CLI in a waiting state until a condition is met.
az monitor log-analytics cluster wait

# Assign the user or system managed identities.
az monitor log-analytics cluster identity assign

# Remove the user or system managed identities.
az monitor log-analytics cluster identity remove

# Show the details of managed identities.
az monitor log-analytics cluster identity show

# Place the CLI in a waiting state until a condition is met.
az monitor log-analytics cluster identity wait

# Create a log analytics query pack.
az monitor log-analytics query-pack create

# Delete a log analytics query pack.
az monitor log-analytics query-pack delete

# List of all log analytics query packs.
az monitor log-analytics query-pack list

# Show a log analytics query pack.
az monitor log-analytics query-pack show

# Update a log analytics query pack.
az monitor log-analytics query-pack update

# Create a specific query within a log analytics query pack.
az monitor log-analytics query-pack query create

# Delete a specific query defined within a log analytics query pack.
az monitor log-analytics query-pack query delete

# List queries defined within a log analytics query pack.
az monitor log-analytics query-pack query list

# Search a list of queries defined within a log analytics query pack according to given search properties.
az monitor log-analytics query-pack query search

# Show a specific query defined within a log analytics query pack.
az monitor log-analytics query-pack query show

# Update a specific query within a log analytics query pack.
az monitor log-analytics query-pack query update

# Create the Solution.
az monitor log-analytics solution create

# Delete the solution in the subscription.
az monitor log-analytics solution delete

# List the solution list. It will retrieve both first party and third party solutions.
az monitor log-analytics solution list

# Get the user solution.
az monitor log-analytics solution show

# Update a Solution. Only updating tags supported.
az monitor log-analytics solution update

# Place the CLI in a waiting state until a condition is met.
az monitor log-analytics solution wait

# Create a workspace instance.
az monitor log-analytics workspace create

# Deletes a workspace resource.
az monitor log-analytics workspace delete

# Deactivates failover for the specified workspace.The failback operation is asynchronous and can take up to 30 minutes to complete.The status of the operation can be checked using the operationId returned in the response.
az monitor log-analytics workspace failback

# Activates failover for the specified workspace.The specified replication location must match the location of the enabled replication for this workspace.The failover operation is asynchronous and can take up to 30 minutes to complete.The status of the operation can be checked using the operationId returned in the response.
az monitor log-analytics workspace failover

# Get the schema for a given workspace.
az monitor log-analytics workspace get-schema

# Get the shared keys for a workspace.
az monitor log-analytics workspace get-shared-keys

# Get a list of workspaces under a resource group or a subscription.
az monitor log-analytics workspace list

# List the available service tiers for the workspace.
az monitor log-analytics workspace list-available-service-tier

# Get a list of deleted workspaces that can be recovered in a subscription or a resource group.
az monitor log-analytics workspace list-deleted-workspaces

# List a list of workspaces which the current user has administrator privileges and are not associated with an Azure Subscription.
az monitor log-analytics workspace list-link-target

# Get a list of management groups connected to a workspace.
az monitor log-analytics workspace list-management-groups

# Get a list of usage metrics for a workspace.
az monitor log-analytics workspace list-usages

# Recover a workspace in a soft-delete state within 14 days.
az monitor log-analytics workspace recover

# Show a workspace instance.
az monitor log-analytics workspace show

# Update a workspace instance.
az monitor log-analytics workspace update

# Place the CLI in a waiting state until a condition is met.
az monitor log-analytics workspace wait

# Create a data export rule for a given workspace.
az monitor log-analytics workspace data-export create

# Delete a data export rule for a given workspace.
az monitor log-analytics workspace data-export delete

# List all data export ruleses for a given workspace.
az monitor log-analytics workspace data-export list

# Show a data export rule for a given workspace.
az monitor log-analytics workspace data-export show

# Update a data export rule for a given workspace.
az monitor log-analytics workspace data-export update

# Assign the user or system managed identities.
az monitor log-analytics workspace identity assign

# Remove the user or system managed identities.
az monitor log-analytics workspace identity remove

# Show the details of managed identities.
az monitor log-analytics workspace identity show

# Place the CLI in a waiting state until a condition is met.
az monitor log-analytics workspace identity wait

# Create a linked service.
az monitor log-analytics workspace linked-service create

# Delete a linked service.
az monitor log-analytics workspace linked-service delete

# Get all the linked services in a workspace.
az monitor log-analytics workspace linked-service list

# Show the properties of a linked service.
az monitor log-analytics workspace linked-service show

# Update a linked service.
az monitor log-analytics workspace linked-service update

# Place the CLI in a waiting state until a condition is met.
az monitor log-analytics workspace linked-service wait

# Add some linked storage accounts with specific data source type for log analytics workspace.
az monitor log-analytics workspace linked-storage add

# Create some linked storage accounts for log analytics workspace.
az monitor log-analytics workspace linked-storage create

# Delete all linked storage accounts with specific data source type for log analytics workspace.
az monitor log-analytics workspace linked-storage delete

# List all linked storage accounts for a log analytics workspace.
az monitor log-analytics workspace linked-storage list

# Remove some linked storage accounts with specific data source type for log analytics workspace.
az monitor log-analytics workspace linked-storage remove

# Show all linked storage accounts with specific data source type for a log analytics workspace.
az monitor log-analytics workspace linked-storage show

# Disable an intelligence pack for a given workspace.
az monitor log-analytics workspace pack disable

# Enable an intelligence pack for a given workspace.
az monitor log-analytics workspace pack enable

# List all the intelligence packs possible and whether they are enabled or disabled for a given workspace.
az monitor log-analytics workspace pack list

# Create a saved search for a given workspace.
az monitor log-analytics workspace saved-search create

# Delete a saved search for a given workspace.
az monitor log-analytics workspace saved-search delete

# List all saved searches for a given workspace.
az monitor log-analytics workspace saved-search list

# Show a saved search for a given workspace.
az monitor log-analytics workspace saved-search show

# Update a saved search for a given workspace.
az monitor log-analytics workspace saved-search update

# Create a Log Analytics workspace microsoft/custom log table. The table name needs to end with '_CL'.
az monitor log-analytics workspace table create

# Delete a Log Analytics workspace table.
az monitor log-analytics workspace table delete

# List all the tables for the given Log Analytics workspace.
az monitor log-analytics workspace table list

# Migrate a Log Analytics table from support of the Data Collector API and Custom Fields features to support of Data Collection Rule-based Custom Logs.
az monitor log-analytics workspace table migrate

# Get a Log Analytics workspace table.
az monitor log-analytics workspace table show

# Update the properties of a Log Analytics workspace table.
az monitor log-analytics workspace table update

# Place the CLI in a waiting state until a condition is met.
az monitor log-analytics workspace table wait

# Create a Log Analytics workspace restore logs table. The table name needs to end with '_RST'.
az monitor log-analytics workspace table restore create

# Cancel a log analytics workspace search results table query run.
az monitor log-analytics workspace table search-job cancel

# Create a Log Analytics workspace search results table. The table name needs to end with '_SRCH'.
az monitor log-analytics workspace table search-job create

# Create a log profile in Azure Monitoring REST API.
az monitor log-profiles create

# Delete the log profile.
az monitor log-profiles delete

# List the log profiles.
az monitor log-profiles list

# Get the log profile.
az monitor log-profiles show

# Update a log profile in Azure Monitoring REST API.
az monitor log-profiles update

# List the metric values for a resource.
az monitor metrics list

# List the metric definitions for the resource.
az monitor metrics list-definitions

# List the metric namespaces for the resource.
az monitor metrics list-namespaces

# Lists the metric data for a subscription. Parameters can be specified on the body.
az monitor metrics list-sub

# List the metric definitions for the subscription.
az monitor metrics list-sub-definitions

# Create a metric-based alert rule.
az monitor metrics alert create

# Delete a metrics-based alert rule.
az monitor metrics alert delete

# List metric-based alert rules.
az monitor metrics alert list

# Show a metrics-based alert rule.
az monitor metrics alert show

# Update a metric-based alert rule.
az monitor metrics alert update

# Build a metric alert rule condition.
az monitor metrics alert condition create

# Build a metric alert rule dimension.
az monitor metrics alert dimension create

# Create a pipeline group instance.
az monitor pipeline-group create

# Delete a pipeline group instance.
az monitor pipeline-group delete

# List all workspaces in the specified subscription.
az monitor pipeline-group list

# Get the specific pipeline group instance.
az monitor pipeline-group show

# Update a pipeline group instance.
az monitor pipeline-group update

# Place the CLI in a waiting state until a condition is met.
az monitor pipeline-group wait

# Create a private link scope resource.
az monitor private-link-scope create

# Delete a monitor private link scope resource.
az monitor private-link-scope delete

# List all monitor private link scope resources.
az monitor private-link-scope list

# Show a monitor private link scope resource.
az monitor private-link-scope show

# Update a monitor private link scope resource.
az monitor private-link-scope update

# Place the CLI in a waiting state until a condition is met.
az monitor private-link-scope wait

# Approve a private endpoint connection of a private link scope resource.
az monitor private-link-scope private-endpoint-connection approve

# Delete a private endpoint connection of a private link scope resource.
az monitor private-link-scope private-endpoint-connection delete

# List all private endpoint connections on a private link scope.
az monitor private-link-scope private-endpoint-connection list

# Reject a private endpoint connection of a private link scope resource.
az monitor private-link-scope private-endpoint-connection reject

# Show a private endpoint connection of a private link scope resource.
az monitor private-link-scope private-endpoint-connection show

# Place the CLI in a waiting state until a condition is met.
az monitor private-link-scope private-endpoint-connection wait

# List all private link resources of a private link scope resource.
az monitor private-link-scope private-link-resource list

# Show a private link resource of a private link scope resource.
az monitor private-link-scope private-link-resource show

# Create a scoped resource for a private link scope resource.
az monitor private-link-scope scoped-resource create

# Delete a scoped resource of a private link scope resource.
az monitor private-link-scope scoped-resource delete

# List all scoped resource of a private link scope resource.
az monitor private-link-scope scoped-resource list

# Show a scoped resource of a private link scope resource.
az monitor private-link-scope scoped-resource show

# Place the CLI in a waiting state until a condition is met.
az monitor private-link-scope scoped-resource wait

# Create a scheduled query.
az monitor scheduled-query create

# Delete a scheduled query.
az monitor scheduled-query delete

# List all scheduled queries.
az monitor scheduled-query list

# Show detail of a scheduled query.
az monitor scheduled-query show

# Update a scheduled query.
az monitor scheduled-query update
```
