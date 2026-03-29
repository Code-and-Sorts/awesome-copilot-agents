---
name: az-cli
description: Use the Azure CLI (`az`) to manage Azure resources from the command line. Trigger this skill whenever the user asks to create, configure, manage, deploy, or interact with any Azure resource — even if they don't explicitly mention "az cli". Also trigger when the user asks about Azure CLI commands, syntax, or wants to know how to do something in Azure from the terminal.
compatibility: Requires az-cli installed (https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) and configured with `az login`.
metadata:
  author: Colby Timm
  version: "1.0"
---

# Az CLI

Help users accomplish Azure tasks by identifying the right `az` commands, gathering required parameters, and executing them.

## Workflow

When a user asks to do something with Azure:

1. **Identify the command** — find the right `az` subcommand from the reference docs below. If the task spans multiple commands, plan the sequence.
2. **Check for required parameters** — read the relevant reference file to understand what the command needs. If the user hasn't provided required values (resource group, name, SKU, location, etc.), ask them before running anything.
3. **Construct and execute** — build the command with the user's parameters and run it. If a command has optional flags that would be useful for the user's scenario, mention them.
4. **Verify the result** — after running a command, check the output for errors. If something fails, diagnose and suggest fixes (common issues: wrong resource group, missing provider registration, quota limits).

When a user asks about Azure CLI syntax or wants to know what commands are available for a service, read the relevant reference file and summarize what's available.

## Command Groups

### Compute

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az aks` | Azure Kubernetes Service. | GA | [ref](./references/aks.md) |
| `az aksarc` | Manage provisioned clusters. | GA (ext) | [ref](./references/aksarc.md) |
| `az appservice` | Manage Appservice. | GA | [ref](./references/appservice.md) |
| `az batch` | Manage Azure Batch. | GA | [ref](./references/batch.md) |
| `az capacity` | Manage capacity. | GA | [ref](./references/capacity.md) |
| `az cloud-service` | Manage cloud service. | Experimental (ext) | [ref](./references/cloud-service.md) |
| `az compute-fleet` | Manage for Azure Compute Fleet. | Preview | [ref](./references/compute-fleet.md) |
| `az compute-recommender` | Manage sku/zone/region recommender info for compute resources. | GA | [ref](./references/compute-recommender.md) |
| `az computeschedule` | Computeschedule batch virtual machine operations. | GA (ext) | [ref](./references/computeschedule.md) |
| `az container` | Manage Azure Container Instances. | GA | [ref](./references/container.md) |
| `az containerapp` | Manage Azure Container Apps. | GA | [ref](./references/containerapp.md) |
| `az disk` | Manage Azure Managed Disks. | GA | [ref](./references/disk.md) |
| `az disk-access` | Manage disk access resources. | GA | [ref](./references/disk-access.md) |
| `az disk-encryption-set` | Disk Encryption Set resource. | GA | [ref](./references/disk-encryption-set.md) |
| `az disk-pool` | Manage Azure disk pool. | GA (ext) | [ref](./references/disk-pool.md) |
| `az functionapp` | Manage function apps. To install the Azure Functions Core tools see https://github.com/Azure/azure-functions-core-tools. | GA | [ref](./references/functionapp.md) |
| `az image` | Manage custom virtual machine images. | GA | [ref](./references/image.md) |
| `az logicapp` | Manage logic apps. | GA | [ref](./references/logicapp.md) |
| `az ppg` | Manage Proximity Placement Groups. | GA | [ref](./references/ppg.md) |
| `az restore-point` | Manage restore point with res. | GA | [ref](./references/restore-point.md) |
| `az serial-console` | Connect to the Serial Console of a Linux/Windows Virtual Machine or VMSS Instance. | GA (ext) | [ref](./references/serial-console.md) |
| `az sf` | Manage and administer Azure Service Fabric clusters. | GA | [ref](./references/sf.md) |
| `az sig` | Manage shared image gallery. | GA | [ref](./references/sig.md) |
| `az snapshot` | Manage point-in-time copies of managed disks, native blobs, or other snapshots. | GA | [ref](./references/snapshot.md) |
| `az spring` | Commands to manage Azure Spring Apps. | Deprecated | [ref](./references/spring.md) |
| `az ssh` | SSH into resources (Azure VMs, Arc servers, etc) using AAD issued openssh certificates. | GA (ext) | [ref](./references/ssh.md) |
| `az sshkey` | Manage ssh public key with vm. | GA | [ref](./references/sshkey.md) |
| `az staticwebapp` | Manage static apps. | GA | [ref](./references/staticwebapp.md) |
| `az vm` | Manage Linux or Windows virtual machines. | GA | [ref](./references/vm.md) |
| `az vmss` | Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS). | GA | [ref](./references/vmss.md) |
| `az webapp` | Manage web apps. | GA | [ref](./references/webapp.md) |

### Networking

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az afd` | Manage Azure Front Door Standard/Premium. | GA | [ref](./references/afd.md) |
| `az cdn` | Manage Azure Content Delivery Networks (CDNs). | GA | [ref](./references/cdn.md) |
| `az dns-resolver` | Manage Dns Resolver. | GA (ext) | [ref](./references/dns-resolver.md) |
| `az internet-analyzer` | Commands to manage internet analyzer. | GA (ext) | [ref](./references/internet-analyzer.md) |
| `az network` | Manage Azure Network resources. | GA | [ref](./references/network.md) |
| `az network-analytics` | Network Analytics command group Azure Operator Insights resource manipulation. | GA (ext) | [ref](./references/network-analytics.md) |
| `az network-function` | Manage network function. | GA (ext) | [ref](./references/network-function.md) |
| `az networkcloud` | Manage Network Cloud resources. | GA (ext) | [ref](./references/networkcloud.md) |
| `az networkfabric` | Manage Azure Network Fabric Management Service API. | GA (ext) | [ref](./references/networkfabric.md) |
| `az private-link` | Private-link association CLI command group. | GA | [ref](./references/private-link.md) |
| `az relay` | Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules. | GA | [ref](./references/relay.md) |
| `az signalr` | Manage Azure SignalR Service. | GA | [ref](./references/signalr.md) |
| `az webpubsub` | Commands to manage Webpubsub. | GA (ext) | [ref](./references/webpubsub.md) |

### Storage

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az amlfs` | Manage Azure Managed Lustre Filesystem. | GA (ext) | [ref](./references/amlfs.md) |
| `az dls` | Manage Data Lake Store accounts and filesystems. | Preview | [ref](./references/dls.md) |
| `az elastic-san` | Manage Elastic SAN. | GA (ext) | [ref](./references/elastic-san.md) |
| `az hpc-cache` | Commands to manage hpc cache. | GA (ext) | [ref](./references/hpc-cache.md) |
| `az import-export` | Manage Import Export. | Experimental (ext) | [ref](./references/import-export.md) |
| `az netappfiles` | Manage Azure NetApp Files (ANF) Resources. | GA | [ref](./references/netappfiles.md) |
| `az storage` | Manage Azure Cloud Storage resources. | GA | [ref](./references/storage.md) |
| `az storage-actions` | Manage StorageActions. | GA (ext) | [ref](./references/storage-actions.md) |
| `az storage-discovery` | Manage Storage Discovery. | GA (ext) | [ref](./references/storage-discovery.md) |
| `az storage-mover` | Manage top-level Storage Mover resource. | GA (ext) | [ref](./references/storage-mover.md) |
| `az storagesync` | Manage Azure File Sync. | GA (ext) | [ref](./references/storagesync.md) |

### Databases

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az cosmosdb` | Manage Azure Cosmos DB database accounts. | GA | [ref](./references/cosmosdb.md) |
| `az kusto` | Manage Kusto. | Experimental (ext) | [ref](./references/kusto.md) |
| `az managed-cassandra` | Azure Managed Cassandra. | GA | [ref](./references/managed-cassandra.md) |
| `az mariadb` | Manage Azure Database for MariaDB servers. | GA | [ref](./references/mariadb.md) |
| `az mongo-db` | Manage MongoDB. | GA (ext) | [ref](./references/mongo-db.md) |
| `az mysql` | Manage Azure Database for MySQL servers. | GA | [ref](./references/mysql.md) |
| `az postgres` | Manage Azure Database for PostgreSQL. | GA | [ref](./references/postgres.md) |
| `az redis` | Manage dedicated Redis caches for your Azure applications. | GA | [ref](./references/redis.md) |
| `az redisenterprise` | Manage the redisenterprise cache. | GA (ext) | [ref](./references/redisenterprise.md) |
| `az sql` | Manage Azure SQL Databases and Data Warehouses. | GA | [ref](./references/sql.md) |

### Containers & Registries

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az acr` | Manage private registries with Azure Container Registries. | GA | [ref](./references/acr.md) |
| `az connectedk8s` | Commands to manage connected kubernetes clusters. | GA (ext) | [ref](./references/connectedk8s.md) |
| `az k8s-configuration` | Commands to manage resources from Microsoft.KubernetesConfiguration. | GA (ext) | [ref](./references/k8s-configuration.md) |
| `az k8s-extension` | Commands to manage Kubernetes Extensions. | GA (ext) | [ref](./references/k8s-extension.md) |
| `az k8s-runtime` | Manage Arc Kubernetes Runtime resources. | GA (ext) | [ref](./references/k8s-runtime.md) |

### Identity & Security

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az ad` | Manage Microsoft Entra ID (formerly known as Azure Active Directory, Azure AD, AAD) entities needed for Azure role-based access control (Azure RBAC) through Microsoft Graph API. | GA | [ref](./references/ad.md) |
| `az attestation` | Manage Microsoft Azure Attestation (MAA). | Experimental (ext) | [ref](./references/attestation.md) |
| `az cloudhsm` | Manage Cloud Hsm Cluster. | GA (ext) | [ref](./references/cloudhsm.md) |
| `az confcom` | Commands to generate security policies for confidential containers in Azure. | GA (ext) | [ref](./references/confcom.md) |
| `az confidentialledger` | Manage Confidential Ledger. | GA (ext) | [ref](./references/confidentialledger.md) |
| `az dedicated-hsm` | Manage dedicated hsm with hardware security modules. | GA (ext) | [ref](./references/dedicated-hsm.md) |
| `az identity` | Manage Managed Identity. | GA | [ref](./references/identity.md) |
| `az keyvault` | Manage KeyVault keys, secrets, and certificates. | GA | [ref](./references/keyvault.md) |
| `az policy` | Manage resources defined and used by the Azure Policy service. | GA | [ref](./references/policy.md) |
| `az role` | Manage Azure role-based access control (Azure RBAC). | GA | [ref](./references/role.md) |
| `az security` | Manage your security posture with Microsoft Defender for Cloud. | GA | [ref](./references/security.md) |
| `az sentinel` | Manage Microsoft Sentinel. | GA (ext) | [ref](./references/sentinel.md) |
| `az trustedsigning` | Manage trusted signing account. | Preview (ext) | [ref](./references/trustedsigning.md) |

### Management & Governance

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az account` | Manage Azure subscription information. | GA | [ref](./references/account.md) |
| `az advisor` | Manage Azure Advisor. | GA | [ref](./references/advisor.md) |
| `az bicep` | Bicep CLI command group. | GA | [ref](./references/bicep.md) |
| `az billing` | Manage Azure Billing. | GA | [ref](./references/billing.md) |
| `az billing-benefits` | Azure billing benefits commands. | GA (ext) | [ref](./references/billing-benefits.md) |
| `az blueprint` | Commands to manage blueprint. | Deprecated (ext) | [ref](./references/blueprint.md) |
| `az consumption` | Manage consumption of Azure resources. | Preview | [ref](./references/consumption.md) |
| `az costmanagement` | Costmanagement. | GA (ext) | [ref](./references/costmanagement.md) |
| `az data-boundary` | Data boundary operations. | GA | [ref](./references/data-boundary.md) |
| `az deployment` | Manage Azure Resource Manager template deployment at subscription scope. | GA | [ref](./references/deployment.md) |
| `az deployment-scripts` | Manage deployment scripts at subscription or resource group scope. | GA | [ref](./references/deployment-scripts.md) |
| `az feature` | Manage resource provider features. | GA | [ref](./references/feature.md) |
| `az group` | Manage resource groups and template deployments. | GA | [ref](./references/group.md) |
| `az lock` | Manage Azure locks. | GA | [ref](./references/lock.md) |
| `az managedapp` | Manage template solutions provided and maintained by Independent Software Vendors (ISVs). | GA | [ref](./references/managedapp.md) |
| `az managedservices` | Manage the registration assignments and definitions in Azure. | GA | [ref](./references/managedservices.md) |
| `az managementpartner` | Allows the partners to associate a Microsoft Partner Network(MPN) ID to a user or service principal in the customer's Azure directory. | GA (ext) | [ref](./references/managementpartner.md) |
| `az provider` | Manage resource providers. | GA | [ref](./references/provider.md) |
| `az providerhub` | Manage resources with ProviderHub. | GA (ext) | [ref](./references/providerhub.md) |
| `az quota` | Manag quota for Azure resource providers. | GA (ext) | [ref](./references/quota.md) |
| `az reservations` | Azure Reservations. | Preview (ext) | [ref](./references/reservations.md) |
| `az resource` | Manage Azure resources. | GA | [ref](./references/resource.md) |
| `az resourcemanagement` | Resourcemanagement CLI command group. | GA | [ref](./references/resourcemanagement.md) |
| `az self-help` | Azure SelfHelp will help you troubleshoot issues with Azure resources. | Preview (ext) | [ref](./references/self-help.md) |
| `az stack` | A deployment stack is a native Azure resource type that enables you to perform operations on a resource collection as an atomic unit. | GA | [ref](./references/stack.md) |
| `az support` | Manage Azure support resource. | GA (ext) | [ref](./references/support.md) |
| `az tag` | Tag Management on a resource. | GA | [ref](./references/tag.md) |
| `az ts` | Manage template specs at subscription or resource group scope. | GA | [ref](./references/ts.md) |

### Monitoring & Analytics

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az alerts-management` | Manage Azure Alerts Management Service Resource. | GA (ext) | [ref](./references/alerts-management.md) |
| `az carbon` | Manage Carbon. | GA (ext) | [ref](./references/carbon.md) |
| `az change-analysis` | List changes for resources. | GA (ext) | [ref](./references/change-analysis.md) |
| `az databricks` | Manage databricks workspaces. | GA (ext) | [ref](./references/databricks.md) |
| `az datafactory` | Manage Data Factory. | GA (ext) | [ref](./references/datafactory.md) |
| `az datashare` | Manage Data Share. | Experimental (ext) | [ref](./references/datashare.md) |
| `az grafana` | Commands to manage Azure Managed Grafana resources. | GA (ext) | [ref](./references/grafana.md) |
| `az hdinsight` | Manage HDInsight resources. | GA | [ref](./references/hdinsight.md) |
| `az monitor` | Manage the Azure Monitor Service. | GA | [ref](./references/monitor.md) |
| `az powerbi` | Manage PowerBI resources. | GA (ext) | [ref](./references/powerbi.md) |
| `az purview` | Manage Purview. | Preview (ext) | [ref](./references/purview.md) |
| `az stream-analytics` | Manage Stream Analytics. | GA (ext) | [ref](./references/stream-analytics.md) |
| `az synapse` | Manage and operate Synapse Workspace, Spark Pool, SQL Pool. | GA | [ref](./references/synapse.md) |
| `az tsi` | Manage Azure Time Series Insights. | GA (ext) | [ref](./references/tsi.md) |

### DevOps & Integration

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az apic` | Manage Azure API Center services. | GA (ext) | [ref](./references/apic.md) |
| `az apim` | Manage Azure API Management services. | GA | [ref](./references/apim.md) |
| `az artifacts` | Manage Azure Artifacts. | GA (ext) | [ref](./references/artifacts.md) |
| `az boards` | Manage Azure Boards. | GA (ext) | [ref](./references/boards.md) |
| `az communication` | Manage communication service with communication. | GA (ext) | [ref](./references/communication.md) |
| `az connection` | Commands to manage Service Connector local connections which allow local environment to connect Azure Resource. If you want to manage connection for compute service, please run 'az webapp/containerapp/spring connection'. | GA | [ref](./references/connection.md) |
| `az devops` | Manage Azure DevOps organization level operations. | GA (ext) | [ref](./references/devops.md) |
| `az eventgrid` | Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions. | GA | [ref](./references/eventgrid.md) |
| `az eventhubs` | Eventhubs. | GA | [ref](./references/eventhubs.md) |
| `az logic` | Manage logic. | GA (ext) | [ref](./references/logic.md) |
| `az notification-hub` | Manage notification hubs. | GA (ext) | [ref](./references/notification-hub.md) |
| `az pipelines` | Manage Azure Pipelines. | GA (ext) | [ref](./references/pipelines.md) |
| `az repos` | Manage Azure Repos. | GA (ext) | [ref](./references/repos.md) |
| `az servicebus` | Servicebus. | GA | [ref](./references/servicebus.md) |

### AI & ML

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az bot` | Manage Microsoft Azure Bot Service. | GA | [ref](./references/bot.md) |
| `az cognitiveservices` | Manage Azure Cognitive Services accounts. | GA | [ref](./references/cognitiveservices.md) |
| `az maps` | Manage Azure Maps. | GA | [ref](./references/maps.md) |
| `az ml` | Manage Azure Machine Learning resources with the Azure CLI ML extension v2. | GA (ext) | [ref](./references/ml.md) |
| `az ml` | Manage Azure Machine Learning resources with the Azure CLI ML extension v1. | GA (ext) | [ref](./references/ml.md) |
| `az search` | Manage Search. | GA | [ref](./references/search.md) |

### IoT & Edge

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az dt` | Manage Azure Digital Twins solutions & infrastructure. | GA (ext) | [ref](./references/dt.md) |
| `az edge-action` | Manage Edge Action. | GA (ext) | [ref](./references/edge-action.md) |
| `az edge-zones` | Manage Edge Zone resources. | Preview (ext) | [ref](./references/edge-zones.md) |
| `az edgeorder` | Manage Edge Order. | GA (ext) | [ref](./references/edgeorder.md) |
| `az iot` | Manage Internet of Things (IoT) assets. | GA | [ref](./references/iot.md) |
| `az sphere` | Manage Azure Sphere resources. | GA (ext) | [ref](./references/sphere.md) |

### Migration & Hybrid

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az arc-multicloud` | Commands for arc-multicloud. | GA (ext) | [ref](./references/arc-multicloud.md) |
| `az arcappliance` | Commands to manage Arc resource bridge. | GA (ext) | [ref](./references/arcappliance.md) |
| `az arcgateway` | Manage gateway connection on Arc machine. | GA (ext) | [ref](./references/arcgateway.md) |
| `az backup` | Manage Azure Backups. | GA | [ref](./references/backup.md) |
| `az connectedmachine` | Manage Azure Arc-Enabled Server. | GA (ext) | [ref](./references/connectedmachine.md) |
| `az connectedvmware` | Commands to manage Connected VMware. | GA (ext) | [ref](./references/connectedvmware.md) |
| `az data-transfer` | Commands for cross domain Service that enables customers to transfer data across security domains. | Preview (ext) | [ref](./references/data-transfer.md) |
| `az datamigration` | Manage Datamigration. | GA (ext) | [ref](./references/datamigration.md) |
| `az dataprotection` | Manage dataprotection. | GA (ext) | [ref](./references/dataprotection.md) |
| `az dms` | Manage Azure Data Migration Service (classic) instances. | GA | [ref](./references/dms.md) |
| `az migrate` | Manage Azure Migrate resources and operations. | Preview (ext) | [ref](./references/migrate.md) |
| `az offazure` | Manage on-premise resources for migrate. | Experimental (ext) | [ref](./references/offazure.md) |
| `az resource-mover` | Manage Resource Mover Service API. | GA (ext) | [ref](./references/resource-mover.md) |
| `az scvmm` | Commands for managing Arc for SCVMM resources. | GA (ext) | [ref](./references/scvmm.md) |
| `az site-recovery` | Manage Site Recovery Service. | GA (ext) | [ref](./references/site-recovery.md) |

### Compliance & Automation

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az acat` | Manage App Compliance Automation Tool reports. | GA (ext) | [ref](./references/acat.md) |
| `az automanage` | Manage Automanage. | GA (ext) | [ref](./references/automanage.md) |
| `az automation` | Manage Automation Account. | GA (ext) | [ref](./references/automation.md) |
| `az guestconfig` | Manage Guest Configuration. | GA (ext) | [ref](./references/guestconfig.md) |
| `az maintenance` | Manage Maintenance. | GA (ext) | [ref](./references/maintenance.md) |

### Partner & Marketplace

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az arize-ai` | Manage Arize Ai. | GA (ext) | [ref](./references/arize-ai.md) |
| `az astronomer` | Manage Azure Astronomer resources. | GA (ext) | [ref](./references/astronomer.md) |
| `az confluent` | Manage confluent organization. | GA (ext) | [ref](./references/confluent.md) |
| `az datadog` | Manage Datadog. | GA (ext) | [ref](./references/datadog.md) |
| `az dell` | Manage Dell storage resources in Azure. | GA (ext) | [ref](./references/dell.md) |
| `az dynatrace` | Manage dynatrace. | GA (ext) | [ref](./references/dynatrace.md) |
| `az elastic` | Manage Microsoft Elastic. | GA (ext) | [ref](./references/elastic.md) |
| `az informatica` | Manage all resources related to Informatica within the Azure CLI. | GA (ext) | [ref](./references/informatica.md) |
| `az lambda-test` | Manage Lambda Test. | GA (ext) | [ref](./references/lambda-test.md) |
| `az new-relic` | Manage Azure New Relic resources. | GA (ext) | [ref](./references/new-relic.md) |
| `az nginx` | Manage NGINX deployment resources. | GA (ext) | [ref](./references/nginx.md) |
| `az palo-alto` | Manage Palo Alto Networks resources within the Azure CLI. | GA (ext) | [ref](./references/palo-alto.md) |
| `az qumulo` | Manage Qumulo file system storage resources with the Azure CLI. | GA (ext) | [ref](./references/qumulo.md) |

### CLI Tools

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az ai-examples` | Add AI powered examples to help content. | Preview (ext) | [ref](./references/ai-examples.md) |
| `az alias` | Manage Azure CLI Aliases. | GA (ext) | [ref](./references/alias.md) |
| `az cli-translator` | Translate ARM template or REST API to CLI scripts. | Experimental (ext) | [ref](./references/cli-translator.md) |
| `az cloud` | Manage registered Azure clouds. | GA | [ref](./references/cloud.md) |
| `az command-change` | Commands for CLI modules metadata management. | GA (ext) | [ref](./references/command-change.md) |
| `az config` | Manage Azure CLI configuration. | Experimental | [ref](./references/config.md) |
| `az configure` | Manage Azure CLI configuration. This command is interactive. | GA | [ref](./references/configure.md) |
| `az extension` | Manage and update CLI extensions. | GA | [ref](./references/extension.md) |
| `az feedback` | Send feedback to the Azure CLI Team. | GA | [ref](./references/feedback.md) |
| `az find` | I'm an AI robot, my advice is based on our Azure documentation as well as the usage patterns of Azure CLI and Azure ARM users. Using me improves Azure products and documentation. | GA | [ref](./references/find.md) |
| `az fzf` | Commands to select active or default objects via fzf. | GA (ext) | [ref](./references/fzf.md) |
| `az hack` | Commands to manage resources commonly used for student hacks. | GA (ext) | [ref](./references/hack.md) |
| `az init` | It's an effortless setting up tool for configs. | Experimental (ext) | [ref](./references/init.md) |
| `az interactive` | Start interactive mode. Installs the Interactive extension if not installed already. | Preview | [ref](./references/interactive.md) |
| `az login` | Log in to Azure. | GA | [ref](./references/login.md) |
| `az logout` | Log out to remove access to Azure subscriptions. | GA | [ref](./references/logout.md) |
| `az next` | Recommend the possible next set of commands to take. | Experimental (ext) | [ref](./references/next.md) |
| `az prototype` | Rapidly create Azure prototypes using AI-driven agent teams. | Preview (ext) | [ref](./references/prototype.md) |
| `az rest` | Invoke a custom request. | GA | [ref](./references/rest.md) |
| `az scenario` | E2E Scenario Usage Guidance. | GA (ext) | [ref](./references/scenario.md) |
| `az survey` | Take Azure CLI survey. | GA | [ref](./references/survey.md) |
| `az term` | Manage marketplace agreement with marketplaceordering. | Experimental | [ref](./references/term.md) |
| `az upgrade` | Upgrade Azure CLI and extensions. | Preview | [ref](./references/upgrade.md) |
| `az version` | Show the versions of Azure CLI modules and extensions in JSON format by default or format configured by --output. | GA | [ref](./references/version.md) |

### Other

| Command | Description | Status | Reference |
|---------|-------------|--------|-----------|
| `az ams` | Manage Azure Media Services resources. | GA | [ref](./references/ams.md) |
| `az aosm` | Manage Azure Operator Service Manager resources. | Preview (ext) | [ref](./references/aosm.md) |
| `az appconfig` | Manage App Configurations. | GA | [ref](./references/appconfig.md) |
| `az appnet` | Azure Kubernetes Application Network. | Preview (ext) | [ref](./references/appnet.md) |
| `az aro` | Manage Azure Red Hat OpenShift clusters. | GA | [ref](./references/aro.md) |
| `az artifact-signing` | Manage artifact signing account. | Preview (ext) | [ref](./references/artifact-signing.md) |
| `az baremetalinstance` | Handle Operations for Compute Azure Bare Instances. | GA (ext) | [ref](./references/baremetalinstance.md) |
| `az baremetalstorageinstance` | Handle Operations for Storage Azure Bare Metal Instances. | GA (ext) | [ref](./references/baremetalstorageinstance.md) |
| `az cache` | Commands to manage CLI objects cached using the `--defer` argument. | GA | [ref](./references/cache.md) |
| `az custom-providers` | Commands to manage custom providers. | GA (ext) | [ref](./references/custom-providers.md) |
| `az customlocation` | Commands to Create, Get, List and Delete CustomLocations. | GA (ext) | [ref](./references/customlocation.md) |
| `az databox` | Manage data box. | GA (ext) | [ref](./references/databox.md) |
| `az databoxedge` | Manage device with databoxedge. | GA | [ref](./references/databoxedge.md) |
| `az dependency-map` | Manage Dependency Map. | GA (ext) | [ref](./references/dependency-map.md) |
| `az desktopvirtualization` | Manage desktop virtualization. | GA (ext) | [ref](./references/desktopvirtualization.md) |
| `az devcenter` | Manage resources with devcenter. | GA (ext) | [ref](./references/devcenter.md) |
| `az dnc` | Manage Delegated Network. | Preview (ext) | [ref](./references/dnc.md) |
| `az durabletask` | Commands to manage Durabletask schedulers and taskhubs. | GA (ext) | [ref](./references/durabletask.md) |
| `az fabric` | Manage Microsoft Fabric resources. | GA (ext) | [ref](./references/fabric.md) |
| `az firmwareanalysis` | Commands to manage firmware analysis. | GA (ext) | [ref](./references/firmwareanalysis.md) |
| `az fleet` | Commands to manage fleet. | GA (ext) | [ref](./references/fleet.md) |
| `az fluid-relay` | Manage Fluid Relay. | GA (ext) | [ref](./references/fluid-relay.md) |
| `az footprint` | Manage Footprint. | GA (ext) | [ref](./references/footprint.md) |
| `az gallery` | Azure Compute Gallery. | GA (ext) | [ref](./references/gallery.md) |
| `az graph` | Query the resources managed by Azure Resource Manager. | GA (ext) | [ref](./references/graph.md) |
| `az graph-services` | Make operations on Microsoft.GraphServices resource types. | GA (ext) | [ref](./references/graph-services.md) |
| `az healthbot` | Manage bot with healthbot. | Experimental (ext) | [ref](./references/healthbot.md) |
| `az healthcareapis` | Azure Healthcare APIs is a secure cloud platform for managing health data, supporting analytics, machine learning, and scalable solutions. | GA (ext) | [ref](./references/healthcareapis.md) |
| `az lab` | Manage azure devtest labs. | Preview | [ref](./references/lab.md) |
| `az large-instance` | Handle Operations for Compute Azure Large Instances. | GA (ext) | [ref](./references/large-instance.md) |
| `az large-storage-instance` | Handle Operations for Storage Azure Large Instances. | GA (ext) | [ref](./references/large-storage-instance.md) |
| `az load` | Manage Azure Load Testing resources. | GA (ext) | [ref](./references/load.md) |
| `az managedcleanroom` | Manage Azure Confidential Clean Room. | GA (ext) | [ref](./references/managedcleanroom.md) |
| `az mcc` | Microsoft Connected Cache CLI Commands. | GA (ext) | [ref](./references/mcc.md) |
| `az mdp` | Manage resources of Managed DevOps pools. | GA (ext) | [ref](./references/mdp.md) |
| `az mesh` | (PREVIEW) Manage Azure Service Fabric Mesh Resources. | Preview (ext) | [ref](./references/mesh.md) |
| `az nexusidentity` | Command to manage Nexusidentity keys. | GA (ext) | [ref](./references/nexusidentity.md) |
| `az oracle-database` | Command Modules for RP Oracle.Database. | GA (ext) | [ref](./references/oracle-database.md) |
| `az orbital` | Azure Orbital Ground Station as-a-Service (GSaaS). | GA (ext) | [ref](./references/orbital.md) |
| `az partnercenter` | Partner Center management. | GA (ext) | [ref](./references/partnercenter.md) |
| `az peering` | Manage peering. | GA (ext) | [ref](./references/peering.md) |
| `az portal` | Manage Portal. | GA (ext) | [ref](./references/portal.md) |
| `az pscloud` | Manage Pure Storage Block resources. | GA (ext) | [ref](./references/pscloud.md) |
| `az quantum` | Manage Azure Quantum Workspaces and submit jobs to Azure Quantum Providers. | Preview (ext) | [ref](./references/quantum.md) |
| `az remote-rendering-account` | Manage remote rendering account with mixed reality. | GA (ext) | [ref](./references/remote-rendering-account.md) |
| `az sftp` | Generate SSH certificates and access Azure Storage blob data via SFTP. | GA (ext) | [ref](./references/sftp.md) |
| `az site` | Manage Site. | GA (ext) | [ref](./references/site.md) |
| `az stack-hci` | Manage Azure Stack HCI. | GA (ext) | [ref](./references/stack-hci.md) |
| `az stack-hci-vm` | Manage virtualmachine with stack-hci-vm. | GA (ext) | [ref](./references/stack-hci-vm.md) |
| `az standby-container-group-pool` | Manage Standby Container Group Pool. | GA (ext) | [ref](./references/standby-container-group-pool.md) |
| `az standby-vm-pool` | Manage Standby Virtual Machine Pool. | GA (ext) | [ref](./references/standby-vm-pool.md) |
| `az terraform` | Azure Terraform experience. | Preview (ext) | [ref](./references/terraform.md) |
| `az vi` | Commands to manage Video Indexer for Cloud and Edge. | GA (ext) | [ref](./references/vi.md) |
| `az vme` | Commands to manage version managed extensions on connected kubernetes clusters. | GA (ext) | [ref](./references/vme.md) |
| `az vmware` | Commands to manage Azure VMware Solution. | GA (ext) | [ref](./references/vmware.md) |
| `az workload-orchestration` | Manage workload orchestration resources. | GA (ext) | [ref](./references/workload-orchestration.md) |
| `az workloads` | Manage workloads. | GA (ext) | [ref](./references/workloads.md) |
| `az zones` | Commands to validate Availability Zone Configuration. Use one of the options below. | Preview (ext) | [ref](./references/zones.md) |

## When a command isn't covered

If the user asks about an `az` subcommand that doesn't have a reference file here, use the Azure Docs MCP tools (`microsoft_docs_search`, `microsoft_code_sample_search`) to look up the command syntax and required parameters. The reference files above cover the most common command groups, but the Azure CLI has hundreds more — don't let a missing reference file stop you from helping.
