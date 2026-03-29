# az attestation

```bash
# Creates a new Attestation Provider instance.
az attestation create

# Delete Attestation Service.
az attestation delete

# Get the default provider by location.
az attestation get-default-by-location

# Returns a list of attestation providers in a subscription.
az attestation list

# Get the default provider.
az attestation list-default

# Get the status of Attestation Provider.
az attestation show

# Updates the Attestation Provider.
az attestation update

# Resets the attestation policy for the specified tenant and reverts     to the default policy.
az attestation policy reset

# Sets the policy for a given kind of attestation type.
az attestation policy set

# Retrieves the current policy for a given kind of attestation type.
az attestation policy show

# Adds a new attestation policy certificate to the set of policy     management certificates.
az attestation signer add

# Retrieves the set of certificates used to express policy for the     current tenant.
az attestation signer list

# Removes the specified policy management certificate.
az attestation signer remove
```
