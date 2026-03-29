# az security

```bash
# Adaptive Application Controls - List.
az security adaptive-application-controls list

# Adaptive Application Controls - Get.
az security adaptive-application-controls show

# Gets a list of Adaptive Network Hardenings resources in scope of an extended resource.
az security adaptive_network_hardenings list

# Gets a single Adaptive Network Hardening resource.
az security adaptive_network_hardenings show

# List security alerts.
az security alert list

# Shows a security alert.
az security alert show

# Updates a security alert status.
az security alert update

# Delete an alerts suppression rule.
az security alerts-suppression-rule delete

# Delete an alerts suppression rule scope.
az security alerts-suppression-rule delete_scope

# List all alerts suppression rule on a subscription scope.
az security alerts-suppression-rule list

# Shows an alerts suppression rule.
az security alerts-suppression-rule show

# Updates or create an alerts suppression rule.
az security alerts-suppression-rule update

# Update an alerts suppression rule with scope element.
az security alerts-suppression-rule upsert_scope

# List of all possible traffic between resources for the subscription.
az security allowed_connections list

# List all possible traffic between resources for the subscription and location, based on connection type.
az security allowed_connections show

# Gets a list of API collections that have been onboarded to Microsoft Defender for APIs.
az security api-collection apim list

# Offboard an Azure API Management API from Microsoft Defender for APIs. The system will stop monitoring the operations within the Azure API Management API for intrusive behaviors.
az security api-collection apim offboard

# Onboard an Azure API Management API to Microsoft Defender for APIs. The system will start monitoring the operations within the Azure Management API for intrusive behaviors and provide alerts for attacks that have been detected.
az security api-collection apim onboard

# Gets an Azure API Management API if it has been onboarded to Microsoft Defender for APIs. If an Azure API Management API is onboarded to Microsoft Defender for APIs, the system will monitor the operations within the Azure API Management API for intrusive behaviors and provide alerts for attacks that have been detected.
az security api-collection apim show

# Place the CLI in a waiting state until a condition is met.
az security api-collection apim wait

# Creates a customer managed security assessment type.
az security assessment-metadata create

# Deletes a security assessment type and all it's assessment results.
az security assessment-metadata delete

# List all security assessment results.
az security assessment-metadata list

# Shows a security assessment.
az security assessment-metadata show

# Creates a customer managed security assessment.
az security assessment create

# Deletes a security assessment.
az security assessment delete

# List all security assessment results.
az security assessment list

# Shows a security assessment.
az security assessment show

# Display Advanced Threat Protection settings for an Azure Cosmos DB account.
az security atp cosmosdb show

# Toggle status of Advanced Threat Protection for an Azure Cosmos DB account.
az security atp cosmosdb update

# Display Advanced Threat Protection settings for a storage account.
az security atp storage show

# Toggle status of Advanced Threat Protection for a storage account.
az security atp storage update

# List the auto provisioning settings.
az security auto-provisioning-setting list

# Shows an auto provisioning setting.
az security auto-provisioning-setting show

# Updates your automatic provisioning settings on the subscription.
az security auto-provisioning-setting update

# Creates security automation event hub action.
az security automation-action-event-hub create

# Creates security automation logic app action.
az security automation-action-logic-app create

# Creates security automation workspace action.
az security automation-action-workspace create

# Creates security automation rule set.
az security automation-rule-set create

# Creates security automation rule.
az security automation-rule create

# Creates security automation scope.
az security automation-scope create

# Creates security automation source.
az security automation-source create

# Creates or update a security automation.
az security automation create_or_update

# Deletes a security automation.
az security automation delete

# List all security automations under subscription/resource group.
az security automation list

# Shows a security automation.
az security automation show

# Validates a security automation model before create or update.
az security automation validate

# Creates a security contact.
az security contact create

# Delete security contact configurations for the subscription.
az security contact delete

# List all security contact configurations for the subscription.
az security contact list

# Get Default Security contact configurations for the subscription.
az security contact show

# Update security contact configurations for the subscription.
az security contact update

# List the discovered security solutions.
az security discovered-security-solution list

# Shows a discovered security solution.
az security discovered-security-solution show

# List the external security solutions.
az security external-security-solution list

# Shows an external security solution.
az security external-security-solution show

# Dismiss an aggregated IoT Security Alert.
az security iot-alerts delete

# List all yours IoT Security solution aggregated alerts.
az security iot-alerts list

# Shows a single aggregated alert of yours IoT Security solution.
az security iot-alerts show

# List all IoT security Analytics metrics.
az security iot-analytics list

# Shows IoT Security Analytics metrics.
az security iot-analytics show

# List all yours IoT Security solution aggregated recommendations.
az security iot-recommendations list

# Shows a single aggregated recommendation of yours IoT Security solution.
az security iot-recommendations show

# Create your IoT Security solution.
az security iot-solution create

# Delete your IoT Security solution.
az security iot-solution delete

# List all IoT Security solutions.
az security iot-solution list

# Shows a IoT Security solution.
az security iot-solution show

# Update your IoT Security solution.
az security iot-solution update

# List your Just in Time network access policies.
az security jit-policy list

# Shows a Just in Time network access policy.
az security jit-policy show

# Shows the Microsoft Defender for Cloud Home region location.
az security location list

# Shows the Microsoft Defender for Cloud Home region location.
az security location show

# Updates the Azure defender plan for the subscription.
az security pricing create

# Shows the Azure Defender plans for the subscription.
az security pricing list

# Shows the Azure Defender plan for the subscription.
az security pricing show

# Get details and state of assessments mapped to selected regulatory compliance control.
az security regulatory-compliance-assessments list

# Shows supported regulatory compliance details and state for selected assessment.
az security regulatory-compliance-assessments show

# List supported of regulatory compliance controls details and state for selected standard.
az security regulatory-compliance-controls list

# Shows a regulatory compliance details state for selected standard.
az security regulatory-compliance-controls show

# List supported regulatory compliance standards details and state results.
az security regulatory-compliance-standards list

# Shows a regulatory compliance details state for selected standard.
az security regulatory-compliance-standards show

# Get details of secure score control definitions.
az security secure-score-control-definitions list

# List supported of secure score controls details and state for scope.
az security secure-score-controls list

# List supported of secure score controls details and state for selected score.
az security secure-score-controls list_by_score

# List of secure-scores details and state results.
az security secure-scores list

# Shows a secure score details for selected initiative.
az security secure-scores show

# Create a security connector.
az security security-connector create

# Delete a security connector.
az security security-connector delete

# List all the security connectors in the specified subscription.
az security security-connector list

# Get details of a specific security connector.
az security security-connector show

# Update a security connector.
az security security-connector update

# Create a DevOps Configuration.
az security security-connector devops create

# Delete a DevOps Connector.
az security security-connector devops delete

# Returns a list of all Azure DevOps organizations accessible by the user token consumed by the connector. Returns 401 if connector was created by different user or identity.
az security security-connector devops list-available-azuredevopsorgs

# Returns a list of all GitHub owners accessible by the user token consumed by the connector. Returns 401 if connector was created by different user or identity.
az security security-connector devops list-available-githubowners

# Returns a list of all GitLab groups accessible by the user token consumed by the connector. Returns 401 if connector was created by different user or identity.
az security security-connector devops list-available-gitlabgroups

# Get a DevOps Configuration.
az security security-connector devops show

# Update a DevOps Configuration.
az security security-connector devops update

# Place the CLI in a waiting state until a condition is met.
az security security-connector devops wait

# Create monitored Azure DevOps organization details.
az security security-connector devops azuredevopsorg create

# List Azure DevOps organizations onboarded to the connector.
az security security-connector devops azuredevopsorg list

# Get a monitored Azure DevOps organization resource.
az security security-connector devops azuredevopsorg show

# Update monitored Azure DevOps organization details.
az security security-connector devops azuredevopsorg update

# Place the CLI in a waiting state until a condition is met.
az security security-connector devops azuredevopsorg wait

# Create a monitored Azure DevOps project resource.
az security security-connector devops azuredevopsorg project create

# List Azure DevOps projects onboarded to the connector.
az security security-connector devops azuredevopsorg project list

# Get a monitored Azure DevOps project resource.
az security security-connector devops azuredevopsorg project show

# Update a monitored Azure DevOps project resource.
az security security-connector devops azuredevopsorg project update

# Place the CLI in a waiting state until a condition is met.
az security security-connector devops azuredevopsorg project wait

# Create a monitored Azure DevOps repository resource.
az security security-connector devops azuredevopsorg project repo create

# List Azure DevOps repositories onboarded to the connector.
az security security-connector devops azuredevopsorg project repo list

# Get a monitored Azure DevOps repository resource.
az security security-connector devops azuredevopsorg project repo show

# Update a monitored Azure DevOps repository resource.
az security security-connector devops azuredevopsorg project repo update

# Place the CLI in a waiting state until a condition is met.
az security security-connector devops azuredevopsorg project repo wait

# List a list of GitHub owners onboarded to the connector.
az security security-connector devops githubowner list

# Get a monitored GitHub owner.
az security security-connector devops githubowner show

# List GitHub repositories onboarded to the connector.
az security security-connector devops githubowner repo list

# Get a monitored GitHub repository.
az security security-connector devops githubowner repo show

# List GitLab groups onboarded to the connector.
az security security-connector devops gitlabgroup list

# Gets nested subgroups of given GitLab Group which are onboarded to the connector.
az security security-connector devops gitlabgroup list-subgroups

# Get a monitored GitLab Group resource for a given fully-qualified name.
az security security-connector devops gitlabgroup show

# List GitLab projects that are directly owned by given group and onboarded to the connector.
az security security-connector devops gitlabgroup project list

# Get a monitored GitLab Project resource for a given fully-qualified group name and project name.
az security security-connector devops gitlabgroup project show

# Display all security solutions reference data at the subscription level.
az security security-solutions-reference-data list

# Display all security solutions at the subscription level.
az security security-solutions list

# Create settings about different configurations in Microsoft Defender for Cloud.
az security setting create

# List security settings.
az security setting list

# Get of different configurations in Microsoft Defender for Cloud.
az security setting show

# Update settings about different configurations in Microsoft Defender for Cloud.
az security setting update

# List all security sub assessment results.
az security sub-assessment list

# Shows a security sub assessment.
az security sub-assessment show

# List security tasks (recommendations).
az security task list

# Shows a security task (recommendation).
az security task show

# Shows the network topology in your subscription.
az security topology list

# Shows the network topology in your subscription.
az security topology show

# Delete Sql Vulnerability Assessment rule baseline.
az security va sql baseline delete

# View Sql Vulnerability Assessment baseline for all rules.
az security va sql baseline list

# Sets Sql Vulnerability Assessment baseline. Replaces the current baseline.
az security va sql baseline set

# View Sql Vulnerability Assessment rule baseline.
az security va sql baseline show

# Update Sql Vulnerability Assessment rule baseline. Replaces the current rule baseline.
az security va sql baseline update

# View all Sql Vulnerability Assessment scan results.
az security va sql results list

# View Sql Vulnerability Assessment scan results.
az security va sql results show

# List all Sql Vulnerability Assessment scan summaries.
az security va sql scans list

# View Sql Vulnerability Assessment scan summaries.
az security va sql scans show

# Creates a workspace settings in your subscription - these settings let you control which workspace will hold your security data.
az security workspace-setting create

# Deletes the workspace settings in your subscription - this will make the security events on the subscription be reported to the default workspace.
az security workspace-setting delete

# Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data.
az security workspace-setting list

# Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data.
az security workspace-setting show
```
