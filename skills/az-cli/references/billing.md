# az billing

```bash
# List the billing accounts that a user has access to.
az billing account list

# List the invoice sections for which the user has permission to create Azure subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing account list-invoice-section

# Get a billing account by its ID.
az billing account show

# Update the properties of a billing account. Currently, displayName and address can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing account update

# Place the CLI in a waiting state until a condition of the billing account is met.
az billing account wait

# List all invoice sections for which a user has access.
az billing account invoice-section list

# Get the InvoiceSection by id.
az billing account invoice-section show

# List the reservations for a billing account and the roll up counts of reservations group by provisioning states.
az billing account reservation list

# List the billed and unbilled transactions by billing account name for given start and end date. Transactions include purchases, refunds and Azure usage charges. Unbilled transactions are listed under pending invoice ID and do not include tax. Tax is added to the amount once an invoice is generated.
az billing account transaction list

# List the agreements for a billing account.
az billing agreement list

# Get an agreement by ID.
az billing agreement show

# The available credit balance for a billing profile. This is the balance that can be used for pay now to settle due or past due invoices. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing balance show

# List the customers that are billed to a billing account. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
az billing customer list

# Get a customer by its ID. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
az billing customer show

# Lists the enrollment accounts the caller has access to.
az billing enrollment-account list

# Gets a enrollment account by name.
az billing enrollment-account show

# List the billing permissions the caller has on an enrollment account.
az billing enrollment-account billing-permission list

# Create an instruction. These are custom billing instructions and are only applicable for certain customers.
az billing instruction create

# List the instructions by billing profile id.
az billing instruction list

# Show the instruction by name. These are custom billing instructions and are only applicable for certain customers.
az billing instruction show

# Update an instruction. These are custom billing instructions and are only applicable for certain customers.
az billing instruction update

# Get URL to download invoice.
az billing invoice download

# List the invoices for a subscription.
az billing invoice list

# Get an invoice. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
az billing invoice show

# Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing invoice section create

# Sends a request to a user in another billing account to transfer billing ownership of their subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing invoice section initiate-transfer

# List the invoice sections that a user has access to. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing invoice section list

# Get an invoice section by its ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing invoice section show

# Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing invoice section update

# Place the CLI in a waiting state until a condition of the billing invoice section is met.
az billing invoice section wait

# List the available billing periods for a subscription in reverse chronological order.
az billing period list

# Show a named billing period.
az billing period show

# List the billing permissions the caller has on a billing account.
az billing permission list

# Show the policies for a customer or for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.".
az billing policy show

# Update the policies for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing policy update

# List the products for a billing account. These don't include products billed based on usage. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
az billing product list

# Moves a product's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement.
az billing product move

# Get a product by ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing product show

# Update the properties of a Product. Currently, auto renew can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing product update

# Validate if a product's charges can be moved to a new invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement.
az billing product validate-move

# Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
az billing profile create

# List the billing profiles that a user has access to. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
az billing profile list

# Get a billing profile by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
az billing profile show

# Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
az billing profile update

# Place the CLI in a waiting state until a condition of the billing profile is met.
az billing profile wait

# List the reservations for a billing profile and the roll up counts of reservations group by provisioning state.
az billing profile reservation list

# Get the billing properties for a subscription. This operation is not supported for billing accounts with agreement type Enterprise Agreement.
az billing property show

# Update the billing property of a subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing property update

# Delete a role assignment for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
az billing role-assignment delete

# List the role assignments for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
az billing role-assignment list

# Show the role assignment detail for the caller within different scopes. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
az billing role-assignment show

# List the role definitions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
az billing role-definition list

# Show the role definition details.
az billing role-definition show

# List the subscriptions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
az billing subscription list

# Moves a subscription's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
az billing subscription move

# Get a subscription by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement.
az billing subscription show

# Update the properties of a billing subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
az billing subscription update

# Validate if a subscription's charges can be moved to a new invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
az billing subscription validate-move

# Place the CLI in a waiting state until a condition of the billing subscription is met.
az billing subscription wait

# List the transactions for an invoice. Transactions include purchases, refunds and Azure usage charges.
az billing transaction list

# Accepts a transfer request.
az billing transfer accept-transfer

# List the transfer requests received by the caller.
az billing transfer list

# Get a transfer request by ID. The caller must be the recipient of the transfer request.
az billing transfer show
```
