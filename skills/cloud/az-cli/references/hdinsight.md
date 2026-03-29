# az hdinsight

```bash
# Create a new cluster.
az hdinsight create

# Deletes the specified HDInsight cluster.
az hdinsight delete

# List HDInsight clusters in a resource group or subscription.
az hdinsight list

# Lists the usages for the specified location.
az hdinsight list-usage

# Resize the specified HDInsight cluster to the specified size.
az hdinsight resize

# Rotate the disk encryption key of the specified HDInsight cluster.
az hdinsight rotate-disk-encryption-key

# Gets the specified cluster.
az hdinsight show

# Update the tags or identity of the specified HDInsight cluster. Setting the identity property will override the existing identity configuration of the cluster.
az hdinsight update

# Place the CLI in a waiting state until an operation is complete.
az hdinsight wait

# Create an application for a HDInsight cluster.
az hdinsight application create

# Deletes the specified application on the HDInsight cluster.
az hdinsight application delete

# Lists all of the applications for the HDInsight cluster.
az hdinsight application list

# Gets properties of the specified application.
az hdinsight application show

# Place the CLI in a waiting state until an operation is complete.
az hdinsight application wait

# Enable Autoscale for a running cluster.
az hdinsight autoscale create

# Disable Autoscale for a running cluster.
az hdinsight autoscale delete

# List the available timezone name when enabling Schedule-based Autoscale.
az hdinsight autoscale list-timezones

# Get the Autoscale configuration of a specified cluster.
az hdinsight autoscale show

# Update the Autoscale configuration.
az hdinsight autoscale update

# Place the CLI in a waiting state until an operation is complete.
az hdinsight autoscale wait

# Add a new schedule condition.
az hdinsight autoscale condition create

# Delete schedule condition.
az hdinsight autoscale condition delete

# List all schedule conditions.
az hdinsight autoscale condition list

# Update a schedule condition.
az hdinsight autoscale condition update

# Place the CLI in a waiting state until an operation is complete.
az hdinsight autoscale condition wait

# Disable the Azure Monitor Agent logs integration on an HDInsight cluster.
az hdinsight azure-monitor-agent disable

# Enable the Azure Monitor Agent logs integration on an HDInsight cluster.
az hdinsight azure-monitor-agent enable

# Get the status of Azure Monitor Agent logs integration on an HDInsight cluster.
az hdinsight azure-monitor-agent show

# Disable the Azure Monitor logs integration on an HDInsight cluster.
az hdinsight azure-monitor disable

# Enable the Azure Monitor logs integration on an HDInsight cluster.
az hdinsight azure-monitor enable

# Get the status of Azure Monitor logs integration on an HDInsight cluster.
az hdinsight azure-monitor show

# Show credential configuration of an existing HDInsight cluster, including HTTP username, password, and Entra ID user settings.
az hdinsight credentials show

# Update credentials for an existing HDInsight cluster, including Entra ID users and HTTP password.
az hdinsight credentials update

# Place the CLI in a waiting state until an operation is complete.
az hdinsight credentials wait

# List the hosts of the specified HDInsight cluster.
az hdinsight host list

# Restart the specific hosts of the specified HDInsight cluster.
az hdinsight host restart

# Disable the Classic Azure Monitor logs integration on an HDInsight cluster.
az hdinsight monitor disable

# Enable the Classic Azure Monitor logs integration on an HDInsight cluster.
az hdinsight monitor enable

# Get the status of Classic Azure Monitor logs integration on an HDInsight cluster.
az hdinsight monitor show

# Deletes a specified persisted script action of the cluster.
az hdinsight script-action delete

# Execute script actions on the specified HDInsight cluster.
az hdinsight script-action execute

# Lists all the persisted script actions for the specified cluster.
az hdinsight script-action list

# Lists all scripts' execution history for the specified cluster.
az hdinsight script-action list-execution-history

# Promotes the specified ad-hoc script execution to a persisted script.
az hdinsight script-action promote

# Gets the script execution detail for the given script execution ID.
az hdinsight script-action show-execution-details
```
