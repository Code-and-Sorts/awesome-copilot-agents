# az data-transfer

```bash
# Create the connection resource.
az data-transfer connection create

# Delete the connection resource.
az data-transfer connection delete

# Links the connection to its pending connection.
az data-transfer connection link

# List all the connections.
az data-transfer connection list

# Lists all pending remote connections that are linkable to this connection.
az data-transfer connection list-pending-connection

# List all pending flows for linking to a receive flow.
az data-transfer connection list-pending-flow

# Get connection resource.
az data-transfer connection show

# Update the connection resource.
az data-transfer connection update

# Place the CLI in a waiting state until a condition is met.
az data-transfer connection wait

# Create data flow for the approved connection.
az data-transfer connection flow create

# Delete data flow for the approved connection.
az data-transfer connection flow delete

# Disables the specified flow in the connection.
az data-transfer connection flow disable

# Enables the specified flow in the connection.
az data-transfer connection flow enable

# Links the specified flow in the connection.
az data-transfer connection flow link

# List all the flows in a connection.
az data-transfer connection flow list

# Show a specific flow in the connection.
az data-transfer connection flow show

# Update the flow resource.
az data-transfer connection flow update

# Place the CLI in a waiting state until a condition is met.
az data-transfer connection flow wait

# Approves the specified connection request in a pipeline.
az data-transfer pipeline approve-connection

# List all the pipelines.
az data-transfer pipeline list

# Rejects the specified connection request in a pipeline.
az data-transfer pipeline reject-connection

# Get pipeline resource.
az data-transfer pipeline show
```
