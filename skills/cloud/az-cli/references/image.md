# az image

```bash
# Copy a managed image (or vm) to other regions. It requires the source disk to be available.
az image copy

# Create a custom Virtual Machine Image from managed disks or snapshots.
az image create

# Delete an Image.
az image delete

# List the list of images under a resource group.
az image list

# Get an image.
az image show

# Update custom VM images.
az image update

# Place the CLI in a waiting state until a condition is met.
az image wait

# Cancel the long running image build based on the image template.
az image builder cancel

# Create an image builder template.
az image builder create

# Delete image builder template.
az image builder delete

# List image builder templates.
az image builder list

# Build an image builder template.
az image builder run

# Show an image builder template.
az image builder show

# Show an image builder template's run outputs.
az image builder show-runs

# Update an image builder template.
az image builder update

# Place the CLI in a waiting state until a condition of the template is met.
az image builder wait

# Add an image builder customizer to an image builder template.
az image builder customizer add

# Remove all image builder customizers from an image builder template.
az image builder customizer clear

# Remove an image builder customizer from an image builder template.
az image builder customizer remove

# Add error handler to an existing image builder template.
az image builder error-handler add

# Remove error handler from an existing image builder template.
az image builder error-handler remove

# Show error handler of an existing image builder template.
az image builder error-handler show

# Add managed identities to an existing image builder template. Currently, only one user identity is supported.
az image builder identity assign

# Remove managed identities from an existing image builder template.
az image builder identity remove

# Display managed identities of a image builder template.
az image builder identity show

# Add optimizer to an existing image builder template.
az image builder optimizer add

# Remove optimizer from an existing image builder template.
az image builder optimizer remove

# Show optimizer of an existing image builder template.
az image builder optimizer show

# Update an optimizer from an existing image builder template.
az image builder optimizer update

# Add an image builder output distributor to an image builder template.
az image builder output add

# Remove all image builder output distributors from an image builder template.
az image builder output clear

# Remove an image builder output distributor from an image builder template.
az image builder output remove

# Remove all versioning options on specified outputs.
az image builder output versioning remove

# Set the image builder output versioner of an image builder template.
az image builder output versioning set

# Show versioning options on specified outputs.
az image builder output versioning show

# Create a trigger for the specified virtual machine image template.
az image builder trigger create

# Delete a trigger for the specified virtual machine image template.
az image builder trigger delete

# List all triggers for the specified Image Template resource.
az image builder trigger list

# Get the specified trigger for the specified image template resource.
az image builder trigger show

# Place the CLI in a waiting state until a condition is met.
az image builder trigger wait

# Add validate to an existing image builder template.
az image builder validator add

# Remove validate from an existing image builder template.
az image builder validator remove

# Show validate of an existing image builder template.
az image builder validator show
```
