# az ams

```bash
# Create an account filter.
az ams account-filter create

# Delete an account filter.
az ams account-filter delete

# List all the account filters of an Azure Media Services account.
az ams account-filter list

# Show the details of an account filter.
az ams account-filter show

# Update the details of an account filter.
az ams account-filter update

# Checks whether the Media Service resource name is available.
az ams account check-name

# Create an Azure Media Services account.
az ams account create

# Delete an Azure Media Services account.
az ams account delete

# List Azure Media Services accounts for the entire subscription.
az ams account list

# Show the details of an Azure Media Services account.
az ams account show

# Update the details of an Azure Media Services account.
az ams account update

# Set the encryption settings for an Azure Media Services account.
az ams account encryption set

# Show the details of encryption settings for an Azure Media Services account.
az ams account encryption show

# Assign a managed identity to an Azure Media Services account.
az ams account identity assign

# Remove a managed identity to an Azure Media Services account.
az ams account identity remove

# Show the details of managed identity settings for an Azure Media Services account.
az ams account identity show

# Set the type and number of media reserved units for an Azure Media Services account. This doesn't work with accounts created with 2020-05-01 version of the Media Services API or later. Accounts created this way no longer need to set media reserved units as the system will automaticaly scale up and down based on load.
az ams account mru set

# Show the details of media reserved units for an Azure Media Services account. This doesn't work with accounts created with 2020-05-01 version of the Media Services API or later. Accounts created this way no longer need to set media reserved units as the system will automaticaly scale up and down based on load.
az ams account mru show

# Create or update a service principal and configure its access to an Azure Media Services account.
az ams account sp create

# Generate a new client secret for a service principal configured for an Azure Media Services account.
az ams account sp reset-credentials

# Attach a secondary storage to an Azure Media Services account.
az ams account storage add

# Detach a secondary storage from an Azure Media Services account.
az ams account storage remove

# Set the authentication of a storage account attached to an Azure Media Services account.
az ams account storage set-authentication

# Synchronize storage account keys for a storage account associated with an Azure Media Services account.
az ams account storage sync-storage-keys

# Create an asset filter.
az ams asset-filter create

# Delete an asset filter.
az ams asset-filter delete

# List all the asset filters of an Azure Media Services account.
az ams asset-filter list

# Show the details of an asset filter.
az ams asset-filter show

# Update the details of an asset filter.
az ams asset-filter update

# Create a track for an Azure Media Services asset.
az ams asset-track create

# Delete a Track.
az ams asset-track delete

# List Tracks in the Asset.
az ams asset-track list

# Show the details of a track.
az ams asset-track show

# Update the parameters of a track.
az ams asset-track update

# Update a track if the file in the storage container was recently modified.
az ams asset-track update-data

# Create an asset.
az ams asset create

# Delete an asset.
az ams asset delete

# Get the asset storage encryption keys used to decrypt content created by version 2 of the Media Services API.
az ams asset get-encryption-key

# Lists storage container URLs with shared access signatures (SAS) for uploading and downloading Asset content. The signatures are derived from the storage account keys.
az ams asset get-sas-urls

# List all the assets of an Azure Media Services account.
az ams asset list

# List streaming locators which are associated with this asset.
az ams asset list-streaming-locators

# Show the details of an asset.
az ams asset show

# Update the details of an asset.
az ams asset update

# Create a new content key policy.
az ams content-key-policy create

# Delete a content key policy.
az ams content-key-policy delete

# List all the content key policies within an Azure Media Services account.
az ams content-key-policy list

# Show an existing content key policy.
az ams content-key-policy show

# Update an existing content key policy.
az ams content-key-policy update

# Add a new option to an existing content key policy.
az ams content-key-policy option add

# Remove an option from an existing content key policy.
az ams content-key-policy option remove

# Update an option from an existing content key policy.
az ams content-key-policy option update

# Cancel a job.
az ams job cancel

# Delete a job.
az ams job delete

# List all the jobs of a transform within an Azure Media Services account.
az ams job list

# Show the details of a job.
az ams job show

# Start a job.
az ams job start

# Update an existing job.
az ams job update

# Create a live event.
az ams live-event create

# Delete a live event.
az ams live-event delete

# List all the live events of an Azure Media Services account.
az ams live-event list

# Reset a live event.
az ams live-event reset

# Show the details of a live event.
az ams live-event show

# Allocate a live event to be started later.
az ams live-event standby

# Start a live event.
az ams live-event start

# Stop a live event.
az ams live-event stop

# Update the details of a live event.
az ams live-event update

# Place the CLI in a waiting state until a condition of the live event is met.
az ams live-event wait

# Create a live output.
az ams live-output create

# Delete a live output.
az ams live-output delete

# List all the live outputs in a live event.
az ams live-output list

# Show the details of a live output.
az ams live-output show

# Create a streaming endpoint.
az ams streaming-endpoint create

# Delete a streaming endpoint.
az ams streaming-endpoint delete

# Get the sku details for a streaming endpoint.
az ams streaming-endpoint get-skus

# List all the streaming endpoints within an Azure Media Services account.
az ams streaming-endpoint list

# Set the scale of a streaming endpoint.
az ams streaming-endpoint scale

# Show the details of a streaming endpoint.
az ams streaming-endpoint show

# Start a streaming endpoint.
az ams streaming-endpoint start

# Stop a streaming endpoint.
az ams streaming-endpoint stop

# Update the details of a streaming endpoint.
az ams streaming-endpoint update

# Place the CLI in a waiting state until a condition of the streaming endpoint is met.
az ams streaming-endpoint wait

# Add an AkamaiAccessControl to an existing streaming endpoint.
az ams streaming-endpoint akamai add

# Remove an AkamaiAccessControl from an existing streaming endpoint.
az ams streaming-endpoint akamai remove

# Create a streaming locator.
az ams streaming-locator create

# Delete a Streaming Locator.
az ams streaming-locator delete

# List paths supported by a streaming locator.
az ams streaming-locator get-paths

# List all the streaming locators within an Azure Media Services account.
az ams streaming-locator list

# List content keys used by a streaming locator.
az ams streaming-locator list-content-keys

# Show the details of a streaming locator.
az ams streaming-locator show

# Create a streaming policy.
az ams streaming-policy create

# Delete a Streaming Policy.
az ams streaming-policy delete

# List all the streaming policies within an Azure Media Services account.
az ams streaming-policy list

# Show the details of a streaming policy.
az ams streaming-policy show

# Create a transform.
az ams transform create

# Delete a transform.
az ams transform delete

# List all the transforms of an Azure Media Services account.
az ams transform list

# Show the details of a transform.
az ams transform show

# Update the details of a transform.
az ams transform update

# Add an output to an existing transform.
az ams transform output add

# Remove an output from an existing transform.
az ams transform output remove
```
