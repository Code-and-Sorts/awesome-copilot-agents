# az sentinel

```bash
# Create the alert rule.
az sentinel alert-rule create

# Delete the alert rule.
az sentinel alert-rule delete

# Get all alert rules.
az sentinel alert-rule list

# Get the alert rule.
az sentinel alert-rule show

# Update the alert rule.
az sentinel alert-rule update

# Create the action of alert rule.
az sentinel alert-rule action create

# Delete the action of alert rule.
az sentinel alert-rule action delete

# Get all actions of alert rule.
az sentinel alert-rule action list

# Get the action of alert rule.
az sentinel alert-rule action show

# Update the action of alert rule.
az sentinel alert-rule action update

# Get all alert rule templates.
az sentinel alert-rule template list

# Get the alert rule template.
az sentinel alert-rule template show

# Create the Security ML Analytics Settings.
az sentinel analytics-setting create

# Delete the Security ML Analytics Settings.
az sentinel analytics-setting delete

# Get all Security ML Analytics Settings.
az sentinel analytics-setting list

# Get the Security ML Analytics Settings.
az sentinel analytics-setting show

# Update the Security ML Analytics Settings.
az sentinel analytics-setting update

# Create the automation rule.
az sentinel automation-rule create

# Delete the automation rule.
az sentinel automation-rule delete

# Get all automation rules.
az sentinel automation-rule list

# Get the automation rule.
az sentinel automation-rule show

# Update the automation rule.
az sentinel automation-rule update

# Create the bookmark.
az sentinel bookmark create

# Delete the bookmark.
az sentinel bookmark delete

# Expand an bookmark.
az sentinel bookmark expand

# Get all bookmarks.
az sentinel bookmark list

# Get a bookmark.
az sentinel bookmark show

# Update the bookmark.
az sentinel bookmark update

# Create the bookmark relation.
az sentinel bookmark relation create

# Delete the bookmark relation.
az sentinel bookmark relation delete

# Get all bookmark relations.
az sentinel bookmark relation list

# Get a bookmark relation.
az sentinel bookmark relation show

# Update the bookmark relation.
az sentinel bookmark relation update

# Connect a data connector.
az sentinel data-connector connect

# Create the data connector.
az sentinel data-connector create

# Delete the data connector.
az sentinel data-connector delete

# Disconnect a data connector.
az sentinel data-connector disconnect

# Get all data connectors.
az sentinel data-connector list

# Get a data connector.
az sentinel data-connector show

# Update the data connector.
az sentinel data-connector update

# Get whois information for a single domain name.
az sentinel enrichment domain-whois show

# Get geodata for a single IP address.
az sentinel enrichment ip-geodata show

# Create the entity query.
az sentinel entity-query create

# Delete the entity query.
az sentinel entity-query delete

# Get all entity queries.
az sentinel entity-query list

# Get an entity query.
az sentinel entity-query show

# Update the entity query.
az sentinel entity-query update

# Get all entity query templates.
az sentinel entity-query template list

# Get an entity query.
az sentinel entity-query template show

# Create the incident.
az sentinel incident create

# Create a Microsoft team to investigate the incident by sharing information and insights between participants.
az sentinel incident create-team

# Delete the incident.
az sentinel incident delete

# Get all incidents.
az sentinel incident list

# Get all incident alerts.
az sentinel incident list-alert

# Get all incident bookmarks.
az sentinel incident list-bookmark

# Get all incident related entities.
az sentinel incident list-entity

# Trigger playbook on a specific incident.
az sentinel incident run-playbook

# Get an incident.
az sentinel incident show

# Update the incident.
az sentinel incident update

# Create the incident comment.
az sentinel incident comment create

# Delete the incident comment.
az sentinel incident comment delete

# Get all incident comments.
az sentinel incident comment list

# Get an incident comment.
az sentinel incident comment show

# Update the incident comment.
az sentinel incident comment update

# Create the incident relation.
az sentinel incident relation create

# Delete the incident relation.
az sentinel incident relation delete

# Get all incident relations.
az sentinel incident relation list

# Get an incident relation.
az sentinel incident relation show

# Update the incident relation.
az sentinel incident relation update

# Create a Metadata.
az sentinel metadata create

# Delete a Metadata.
az sentinel metadata delete

# List of all metadata.
az sentinel metadata list

# Get a Metadata.
az sentinel metadata show

# Update a Metadata.
az sentinel metadata update

# Delete the office365 consent.
az sentinel office-consent delete

# Get all office365 consents.
az sentinel office-consent list

# Get an office365 consent.
az sentinel office-consent show

# Create Sentinel onboarding state.
az sentinel onboarding-state create

# Delete Sentinel onboarding state.
az sentinel onboarding-state delete

# Get all Sentinel onboarding states.
az sentinel onboarding-state list

# Get Sentinel onboarding state.
az sentinel onboarding-state show

# Update Sentinel onboarding state.
az sentinel onboarding-state update

# Create setting.
az sentinel setting create

# Delete setting of the product.
az sentinel setting delete

# List of all the settings.
az sentinel setting list

# Get a setting.
az sentinel setting show

# Update setting.
az sentinel setting update

# Create a source control.
az sentinel source-control create

# Delete a source control.
az sentinel source-control delete

# Get all source controls, without source control items.
az sentinel source-control list

# Get a list of repositories metadata.
az sentinel source-control list-repository

# Get a source control by its identifier.
az sentinel source-control show

# Create a source control.
az sentinel source-control update

# Append tags to a threat intelligence indicator.
az sentinel threat-indicator append-tag

# Create a new threat intelligence indicator.
az sentinel threat-indicator create

# Delete a threat intelligence indicator.
az sentinel threat-indicator delete

# Get all threat intelligence indicators.
az sentinel threat-indicator list

# Query threat intelligence indicators as per filtering criteria.
az sentinel threat-indicator query

# Replace tags added to a threat intelligence indicator.
az sentinel threat-indicator replace-tag

# View a threat intelligence indicator by name.
az sentinel threat-indicator show

# Update a threat Intelligence indicator.
az sentinel threat-indicator update

# Get threat intelligence indicators metrics (Indicators counts by Type, Threat Type, Source).
az sentinel threat-indicator metric list

# Create a Watchlist and its Watchlist Items (bulk creation, e.g. through text/csv content type). To create a Watchlist and its Items, we should call this endpoint with either rawContent or a valid SAR URI and contentType properties. The rawContent is mainly used for small watchlist (content size below 3.8 MB). The SAS URI enables the creation of large watchlist, where the content size can go up to 500 MB. The status of processing such large file can be polled through the URL returned in Azure-AsyncOperation header.
az sentinel watchlist create

# Delete a watchlist.
az sentinel watchlist delete

# Get all watchlists, without watchlist items.
az sentinel watchlist list

# Get a watchlist, without its watchlist items.
az sentinel watchlist show

# Update a Watchlist and its Watchlist Items (bulk creation, e.g. through text/csv content type). To create a Watchlist and its Items, we should call this endpoint with either rawContent or a valid SAR URI and contentType properties. The rawContent is mainly used for small watchlist (content size below 3.8 MB). The SAS URI enables the creation of large watchlist, where the content size can go up to 500 MB. The status of processing such large file can be polled through the URL returned in Azure-AsyncOperation header.
az sentinel watchlist update
```
