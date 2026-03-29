# az communication

```bash
# Create a new CommunicationService or update an existing CommunicationService.
az communication create

# Delete to delete a CommunicationService.
az communication delete

# Links an Azure Notification Hub to this communication service.
az communication link-notification-hub

# List requests to list all resources in a resource group.
az communication list

# Get the access keys of the CommunicationService resource.
az communication list-key

# Regenerate CommunicationService access key. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
az communication regenerate-key

# Get the CommunicationService and its properties.
az communication show

# Update a new CommunicationService or update an existing CommunicationService.
az communication update

# Place the CLI in a waiting state until a condition is met.
az communication wait

# Deletes a message from a chat thread by id.
az communication chat message delete

# Gets a message from a chat thread by id.
az communication chat message get

# Gets list of messages from a chat thread.
az communication chat message list

# Sends a message to a chat thread.
az communication chat message send

# Updates a message.
az communication chat message update

# Gets read receipts of a chat thread.
az communication chat message receipt list

# Posts a read receipt event to a chat thread, on behalf of a user.
az communication chat message receipt send

# Adds a participant to a chat thread.
az communication chat participant add

# Gets the participants of a chat thread.
az communication chat participant list

# Removes a participant from a chat thread.
az communication chat participant remove

# Creates a chat thread.
az communication chat thread create

# Deletes a chat thread.
az communication chat thread delete

# Gets the list of chat threads of a user.
az communication chat thread list

# Updates the topic of a chat thread.
az communication chat thread update-topic

# Create a new EmailService or update an existing EmailService.
az communication email create

# Delete to delete a EmailService.
az communication email delete

# List requests to list all resources in a subscription.
az communication email list

# Send an email and get final status.
az communication email send

# Get the EmailService and its properties.
az communication email show

# Update a new EmailService or update an existing EmailService.
az communication email update

# Place the CLI in a waiting state until a condition is met.
az communication email wait

# Cancel verification of DNS record.
az communication email domain cancel-verification

# Create a new Domains resource under the parent EmailService resource or update an existing Domains resource.
az communication email domain create

# Delete to delete a Domains resource.
az communication email domain delete

# Initiate verification of DNS record.
az communication email domain initiate-verification

# List requests to list all Domains resources under the parent EmailServices resource.
az communication email domain list

# Get the Domains resource and its properties.
az communication email domain show

# Update a new Domains resource under the parent EmailService resource or update an existing Domains resource.
az communication email domain update

# Place the CLI in a waiting state until a condition is met.
az communication email domain wait

# Create a new SenderUsername resource under the parent Domains resource or update an existing SenderUsername resource.
az communication email domain sender-username create

# Delete to delete a SenderUsernames resource.
az communication email domain sender-username delete

# List all valid sender usernames for a domains resource.
az communication email domain sender-username list

# Get a valid sender username for a domains resource.
az communication email domain sender-username show

# Update a new SenderUsername resource under the parent Domains resource or update an existing SenderUsername resource.
az communication email domain sender-username update

# Get status of an email previously sent.
az communication email status get

# Assign a managed identity to the Communication Resource.
az communication identity assign

# Remove a managed identity from the communication resource.
az communication identity remove

# Show the Communication Resource's managed identities.
az communication identity show

# Place the CLI in a waiting state until a condition is met.
az communication identity wait

# Exchanges an Azure Active Directory (Azure AD) access token of a Teams user for a new ACS Identity access token with a matching expiration time.
az communication identity token get-for-teams-user

# Issues a new access token with the specified scopes for a given User Identity. If no User Identity is specified, creates a new User Identity as well.
az communication identity token issue

# Revokes all access tokens for the specific ACS Identity.
az communication identity token revoke

# Creates a new ACS Identity.
az communication identity user create

# Deletes an existing ACS Identity, revokes all tokens for that ACS Identity and deletes all associated data.
az communication identity user delete

# Lists all phone numbers associated with the Communication Service resource.
az communication phonenumber list

# Shows the details for a phone number associated with the Communication Service resource.
az communication phonenumber show

# Create a new room.
az communication rooms create

# Delete an existing room.
az communication rooms delete

# Return attributes of an existing room.
az communication rooms get

# List all active rooms belonging to a current Communication Service resource.
az communication rooms list

# Update attributes of an existing room.
az communication rooms update

# Add or update participants in a room.
az communication rooms participant add-or-update

# Get participants of a room.
az communication rooms participant get

# Remove participants from a room.
az communication rooms participant remove

# Sends an SMS from the sender phone number to the recipient(s) phone number(s).
az communication sms send

# Create an SmtpUsernameResource.
az communication smtp-username create

# Delete to delete a single SmtpUsername resource.
az communication smtp-username delete

# List all SmtpUsernameResources for a Communication resource.
az communication smtp-username list

# Get a SmtpUsernameResource.
az communication smtp-username show

# Update an SmtpUsernameResource.
az communication smtp-username update

# Exchanges an Azure Active Directory (Azure AD) access token of a Teams user for a new ACS Identity access token with a matching expiration time.
az communication user-identity token get-for-teams-user

# Issues a new access token with the specified scopes for a given User Identity. If no User Identity is specified, creates a new User Identity as well.
az communication user-identity token issue

# Revokes all access tokens for the specific ACS Identity.
az communication user-identity token revoke

# Creates a new ACS Identity.
az communication user-identity user create

# Deletes an existing ACS Identity, revokes all tokens for that ACS Identity and deletes all associated data.
az communication user-identity user delete
```
