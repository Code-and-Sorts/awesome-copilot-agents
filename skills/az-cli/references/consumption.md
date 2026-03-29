# az consumption

```bash
# Create a budget for an Azure subscription.
az consumption budget create

# Create operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.
az consumption budget create-with-rg

# Delete a budget for an Azure subscription.
az consumption budget delete

# Delete operation to delete a budget.
az consumption budget delete-with-rg

# List budgets for an Azure subscription.
az consumption budget list

# Show budget for an Azure subscription.
az consumption budget show

# Get the budget for a resource group under a subscription by budget name.
az consumption budget show-with-rg

# Update operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.
az consumption budget update

# Update operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.
az consumption budget update-with-rg

# List the marketplace for an Azure subscription within a billing period.
az consumption marketplace list

# Show the price sheet for an Azure subscription within a billing period.
az consumption pricesheet show

# List the details of a reservation by order id or reservation id.
az consumption reservation detail list

# List reservation summaries for daily or monthly by order Id or reservation id.
az consumption reservation summary list

# List the details of Azure resource consumption, either as an invoice or within a billing period.
az consumption usage list
```
