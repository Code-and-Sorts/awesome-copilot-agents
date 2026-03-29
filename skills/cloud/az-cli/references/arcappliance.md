# az arcappliance

```bash
# Command to get the on-premises infrastructure credentials used by Arc resource bridge to manage on-premises resources.
az arcappliance get-credentials

# Command to fetch the available upgrades for an Appliance.
az arcappliance get-upgrades

# Command to list Arc resource bridge resources.
az arcappliance list

# Command to display the EULA & Notice File link for Arc resource bridge.
az arcappliance notice

# Command to provide information about an Arc resource bridge Azure resource. This is useful to monitor the status of the resource bridge.
az arcappliance show

# Command to update the proxy configuration for Arc resource bridge on Azure Stack HCI.
az arcappliance configuration proxy update hci

# Command to update the proxy configuration for Arc resource bridge on VMware.
az arcappliance configuration proxy update vmware

# Command to show the current configuration of an HCI Arc resource bridge.
az arcappliance configuration show hci

# Command to show the current configuration of a VMware Arc resource bridge.
az arcappliance configuration show vmware

# Command to create the connection between the on-premises appliance VM and Azure resource for Arc resource bridge (Azure Stack HCI).
az arcappliance create hci

# Command to create the connection between the on-premises appliance VM and Azure resource for Arc resource bridge on SCVMM.
az arcappliance create scvmm

# Command to create the connection between the on-premises appliance VM and Azure resource for Arc resource bridge (Arc-enabled VMware).
az arcappliance create vmware

# Command to create configuration files for Arc Resource Bridge on HCI.
az arcappliance createconfig hci

# Command to create Arc resource bridge configuration files for Arc-enabled SCVMM.
az arcappliance createconfig scvmm

# Command to create Arc resource bridge configuration files for Arc-enabled VMware.
az arcappliance createconfig vmware

# Command to delete the on-premises appliance VM on Azure Stack HCI and Arc resource bridge Azure resource.
az arcappliance delete hci

# Command to delete the on-premises appliance VM on SCVMM and Azure resource.
az arcappliance delete scvmm

# Command to delete the on-premises appliance VM and Azure resource for Arc resource bridge (Arc-enabled VMware).
az arcappliance delete vmware

# Command to deploy the Arc resource bridge's on-premises appliance VM on Azure Stack HCI and its corresponding Azure resource.
az arcappliance deploy hci

# Command to deploy the Arc resource bridge's on-premises appliance VM and its Azure resource for Arc-enabled SCVMM.
az arcappliance deploy scvmm

# Command to deploy the Arc resource bridge's on-premises appliance VM on VMWare and its corresponding Azure resource.
az arcappliance deploy vmware

# Command to collect logs for an Appliance on Azure Stack HCI.
az arcappliance logs hci

# Command to collect logs for Arc resource bridge on SCVMM (Arc-enabled SCVMM).
az arcappliance logs scvmm

# Command to collect logs for Appliance on VMware.
az arcappliance logs vmware

# Command to prepare the on-premises Azure Stack HCI environment for an Arc resource bridge deployment. This downloads the necessary images to build the on-premises appliance VM and uploads it to the private cloud gallery.
az arcappliance prepare hci

# Command to prepare for an Arc resource bridge deployment on SCVMM for Arc-enabled SCVMM. This downloads the necessary images to build the on-premises appliance VM and uploads it to the private cloud gallery.
az arcappliance prepare scvmm

# Command to prepare for an Arc resource bridge deployment on VMware for Arc-enabled VMware. This downloads the necessary images to build the on-premises appliance VM and uploads it to the private cloud gallery.
az arcappliance prepare vmware

# Command to consecutively run the Arc resource bridge commands required for deployment on Azure Stack HCI. This command is idempotent.
az arcappliance run hci

# Command to consecutively run the Arc resource bridge commands required for deployment on SCVMM. This command is idempotent.
az arcappliance run scvmm

# Command to consecutively run the Arc resource bridge commands required for deployment on VMware (Arc-enabled VMware). This command is idempotent.
az arcappliance run vmware

# Command to execute a shell command on an HCI cluster for troubleshooting. Either --ip or --kubeconfig must be provided. If both are passed in, --ip will be used.
az arcappliance troubleshoot command hci

# Command to execute a shell command on an SCVMM cluster for troubleshooting. Either --ip or --kubeconfig must be provided. If both are passed in, --ip will be used.
az arcappliance troubleshoot command scvmm

# Command to execute a shell command on an VMWare cluster for troubleshooting. Either --ip or --kubeconfig must be provided. If both are passed in, --ip will be used.
az arcappliance troubleshoot command vmware

# Command to update the on-premises infrastructure credentials for Azure Stack HCI used by Arc resource bridge.
az arcappliance update-infracredentials hci

# Command to update the SCVMM credentials used by Arc resource bridge.
az arcappliance update-infracredentials scvmm

# Command to update the VMware credentials used by Arc resource bridge.
az arcappliance update-infracredentials vmware

# Command to upgrade an Appliance on Azure Stack HCI.
az arcappliance upgrade hci

# Command to upgrade an Appliance on SCVMM.
az arcappliance upgrade scvmm

# Command to upgrade an Appliance on VMware.
az arcappliance upgrade vmware

# Command to validate Arc resource bridge configuration files and network settings on Azure Stack HCI - should be done before 'prepare' command.
az arcappliance validate hci

# Command to validate Arc resource bridge configuration files and network settings for Arc-enabled SCVMM  - should be done before 'prepare' command.
az arcappliance validate scvmm

# Command to validate Arc resource bridge configuration files and network settings for Arc-enabled VMware - should be done before 'prepare' command.
az arcappliance validate vmware
```
