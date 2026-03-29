# az keyvault

```bash
# Check that the given name is valid and is not already in use.
az keyvault check-name

# Create a Vault or HSM.
az keyvault create

# Delete a Vault or HSM.
az keyvault delete

# Delete security policy settings for a Key Vault.
az keyvault delete-policy

# List Vaults and/or HSMs.
az keyvault list

# Get information about the deleted Vaults or HSMs in a subscription.
az keyvault list-deleted

# Permanently delete the specified Vault or HSM. Aka Purges the deleted Vault or HSM.
az keyvault purge

# Recover a Vault or HSM.
az keyvault recover

# Update security policy settings for a Key Vault.
az keyvault set-policy

# Show details of a Vault or HSM.
az keyvault show

# Show details of a deleted Vault or HSM.
az keyvault show-deleted

# Update the properties of a Vault.
az keyvault update

# Update the properties of a HSM.
az keyvault update-hsm

# Place the CLI in a waiting state until a condition of the Vault is met.
az keyvault wait

# Place the CLI in a waiting state until a condition of the HSM is met.
az keyvault wait-hsm

# Begin a full backup of the HSM.
az keyvault backup start

# Backs up the specified certificate.
az keyvault certificate backup

# Create a Key Vault certificate.
az keyvault certificate create

# Deletes a certificate from a specified key vault.
az keyvault certificate delete

# Download the public portion of a Key Vault certificate.
az keyvault certificate download

# Get the default policy for self-signed certificates.
az keyvault certificate get-default-policy

# Import a certificate into KeyVault.
az keyvault certificate import

# List certificates in a specified key vault.
az keyvault certificate list

# Lists the currently-recoverable deleted certificates.
az keyvault certificate list-deleted

# List the versions of a certificate.
az keyvault certificate list-versions

# Permanently deletes the specified deleted certificate.
az keyvault certificate purge

# Recover a deleted certificate to its latest version.
az keyvault certificate recover

# Restores a backed up certificate to a vault.
az keyvault certificate restore

# Updates the specified attributes associated with the given certificate.
az keyvault certificate set-attributes

# Gets information about a certificate.
az keyvault certificate show

# Get a deleted certificate.
az keyvault certificate show-deleted

# Add a contact to the specified vault to receive notifications of certificate operations.
az keyvault certificate contact add

# Remove a certificate contact from the specified vault.
az keyvault certificate contact delete

# Lists the certificate contacts for a specified key vault.
az keyvault certificate contact list

# Create a certificate issuer record.
az keyvault certificate issuer create

# Deletes the specified certificate issuer.
az keyvault certificate issuer delete

# Lists properties of the certificate issuers for the key vault.
az keyvault certificate issuer list

# Gets the specified certificate issuer.
az keyvault certificate issuer show

# Update a certificate issuer record.
az keyvault certificate issuer update

# Add admin details for a specified certificate issuer.
az keyvault certificate issuer admin add

# Remove admin details for the specified certificate issuer.
az keyvault certificate issuer admin delete

# List admins for a specified certificate issuer.
az keyvault certificate issuer admin list

# Deletes the creation operation for a specific certificate.
az keyvault certificate pending delete

# Merges a certificate or a certificate chain with a key pair existing on the server.
az keyvault certificate pending merge

# Gets the creation operation of a certificate.
az keyvault certificate pending show

# Request that a backup of the specified key be downloaded to the client.
az keyvault key backup

# Create a new key, stores it, then returns key parameters and attributes to the client.
az keyvault key create

# Decrypt a single block of encrypted data.
az keyvault key decrypt

# Delete a key of any type from storage in Vault or HSM.
az keyvault key delete

# Download the public part of a stored key.
az keyvault key download

# Encrypt an arbitrary sequence of bytes using an encryption key that is stored in a Vault or HSM.
az keyvault key encrypt

# Get a key's attestation blob.
az keyvault key get-attestation

# Return policy template as JSON encoded policy definition.
az keyvault key get-policy-template

# Import a private key.
az keyvault key import

# List keys in the specified Vault or HSM.
az keyvault key list

# List the deleted keys in the specified Vault or HSM.
az keyvault key list-deleted

# List the identifiers and properties of a key's versions.
az keyvault key list-versions

# Permanently delete the specified key.
az keyvault key purge

# Get the requested number of random bytes from a managed HSM.
az keyvault key random

# Recover the deleted key to its latest version.
az keyvault key recover

# Restore a backed up key to a Vault or HSM.
az keyvault key restore

# Rotate the key based on the key policy by generating a new version of the key.
az keyvault key rotate

# The update key operation changes specified attributes of a stored key and can be applied to any key type and key version stored in Vault or HSM.
az keyvault key set-attributes

# Get a key's attributes and, if it's an asymmetric key, its public material.
az keyvault key show

# Get the public part of a deleted key.
az keyvault key show-deleted

# Create a signature from a digest using a key that is stored in a Vault or HSM.
az keyvault key sign

# Verify a signature using the key that is stored in a Vault or HSM.
az keyvault key verify

# Get the rotation policy of a Key Vault key.
az keyvault key rotation-policy show

# Update the rotation policy of a Key Vault key.
az keyvault key rotation-policy update

# Add a network rule to the network ACLs for a Key Vault or a Managed HSM.
az keyvault network-rule add

# List the network rules from the network ACLs for a Key Vault or a Managed HSM.
az keyvault network-rule list

# Remove a network rule from the network ACLs for a Key Vault or a Managed HSM.
az keyvault network-rule remove

# Place the CLI in a waiting state until a condition of the vault or managed hsm is met.
az keyvault network-rule wait

# Approve a private endpoint connection request for a Key Vault/HSM.
az keyvault private-endpoint-connection approve

# Delete the specified private endpoint connection associated with a Key Vault/HSM.
az keyvault private-endpoint-connection delete

# List all private endpoint connections associated with a HSM.
az keyvault private-endpoint-connection list

# Reject a private endpoint connection request for a Key Vault/HSM.
az keyvault private-endpoint-connection reject

# Show details of a private endpoint connection associated with a Key Vault/HSM.
az keyvault private-endpoint-connection show

# Place the CLI in a waiting state until a condition of the private endpoint connection is met.
az keyvault private-endpoint-connection wait

# List the private link resources supported for a Key Vault/HSM.
az keyvault private-link-resource list

# Add regions for the managed HSM Pool.
az keyvault region add

# Get regions information associated with the managed HSM Pool.
az keyvault region list

# Remove regions for the managed HSM Pool.
az keyvault region remove

# Place the CLI in a waiting state until a condition of the HSM is met.
az keyvault region wait

# Restore a full backup of a HSM.
az keyvault restore start

# Create a new role assignment for a user, group, or service principal.
az keyvault role assignment create

# Delete a role assignment.
az keyvault role assignment delete

# List role assignments.
az keyvault role assignment list

# Create a custom role definition.
az keyvault role definition create

# Delete a role definition.
az keyvault role definition delete

# List role definitions.
az keyvault role definition list

# Show the details of a role definition.
az keyvault role definition show

# Update a role definition.
az keyvault role definition update

# Backs up the specified secret.
az keyvault secret backup

# Delete all versions of a secret.
az keyvault secret delete

# Download a secret from a KeyVault.
az keyvault secret download

# List secrets in a specified key vault.
az keyvault secret list

# Lists deleted secrets for the specified vault.
az keyvault secret list-deleted

# List all versions of the specified secret.
az keyvault secret list-versions

# Permanently deletes the specified secret.
az keyvault secret purge

# Recovers the deleted secret to the latest version.
az keyvault secret recover

# Restores a backed up secret to a vault.
az keyvault secret restore

# Create a secret (if one doesn't exist) or update a secret in a KeyVault.
az keyvault secret set

# Updates the attributes associated with a specified secret in a given key vault.
az keyvault secret set-attributes

# Get a specified secret from a given key vault.
az keyvault secret show

# Gets the specified deleted secret.
az keyvault secret show-deleted

# Download the security domain file from the HSM.
az keyvault security-domain download

# Retrieve the exchange key of the HSM.
az keyvault security-domain init-recovery

# Enable to decrypt and encrypt security domain file as blob. Can be run in offline environment, before file is uploaded to HSM using security-domain upload.
az keyvault security-domain restore-blob

# Start to restore the HSM.
az keyvault security-domain upload

# Place the CLI in a waiting state until HSM security domain operation is finished.
az keyvault security-domain wait

# Get all settings associated with the managed HSM.
az keyvault setting list

# Get specific setting associated with the managed HSM.
az keyvault setting show

# Update specific setting associated with the managed HSM.
az keyvault setting update
```
