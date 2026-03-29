# az edgeorder

```bash
# This method provides the list of configurations for the given product family, product line and product under subscription.
az edgeorder list-config

# This method provides the list of product families for the given subscription.
az edgeorder list-family

# This method provides the list of product families metadata for the given subscription.
az edgeorder list-metadata

# Create a new address with the specified parameters. Existing address can be updated with this API.
az edgeorder address create

# Delete an address.
az edgeorder address delete

# List all the addresses available under the given resource group. And List all the addresses available under the subscription.
az edgeorder address list

# Get information about the specified address.
az edgeorder address show

# Update the properties of an existing address.
az edgeorder address update

# Place the CLI in a waiting state until a condition of the address is met.
az edgeorder address wait

# Cancel order item.
az edgeorder order-item cancel

# Create an order item. Existing order item cannot be updated with this api and should instead be updated with the Update order item API.
az edgeorder order-item create

# Delete an order item.
az edgeorder order-item delete

# List order item at resource group level. And List order item at subscription level.
az edgeorder order-item list

# Return order item.
az edgeorder order-item return

# Get an order item.
az edgeorder order-item show

# Update the properties of an existing order item.
az edgeorder order-item update

# Place the CLI in a waiting state until a condition of the order-item is met.
az edgeorder order-item wait

# List order at resource group level. And List order at subscription level.
az edgeorder order list

# Get an order.
az edgeorder order show
```
