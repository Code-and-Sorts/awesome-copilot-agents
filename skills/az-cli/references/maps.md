# az maps

```bash
# Create a Maps Account. A Maps Account holds the keys which allow access to the Maps REST APIs.
az maps account create

# Delete a Maps Account.
az maps account delete

# Show all maps accounts in a subscription or in a resource group.
az maps account list

# Show the details of a maps account.
az maps account show

# Updates a Maps Account. Only a subset of the parameters may be updated after creation, such as Sku, Tags, Properties.
az maps account update

# Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration.
az maps account keys list

# Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop working immediately.
az maps account keys renew

# List operations available for the Maps Resource Provider.
az maps map list-operation
```
