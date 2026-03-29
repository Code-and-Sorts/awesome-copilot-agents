# az support

```bash
# List all chat transcripts for a support ticket under subscription.
az support in-subscription chat-transcript list

# Get chatTranscript details for a support ticket under a subscription.
az support in-subscription chat-transcript show

# Adds a new customer communication to an Azure support ticket.
az support in-subscription communication create

# List all communications (attachments not included) for a support ticket. <br/></br> You can also filter support ticket communications by _CreatedDate_ or _CommunicationType_ using the $filter parameter. The only type of communication supported today is _Web_. Output will be a paged result with _nextLink_, using which you can retrieve the next set of Communication results. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
az support in-subscription communication list

# Get communication details for a support ticket.
az support in-subscription communication show

# Create a new file workspace for the specified subscription.
az support in-subscription file-workspace create

# Get details for a specific file workspace in an Azure subscription.
az support in-subscription file-workspace show

# List all the Files information under a workspace for an Azure subscription.
az support in-subscription file list

# Get details of a specific file in a work space.
az support in-subscription file show

# Uploads a file to a workspace for the specified subscription.
az support in-subscription file upload

# Creates a new support ticket for Quota increase, Technical, Billing, and Subscription Management issues for the specified subscription.
az support in-subscription tickets create

# Lists all the support tickets for an Azure subscription. You can also filter the support tickets by _Status_, _CreatedDate_, _ServiceId_, and _ProblemClassificationId_ using the $filter parameter. Output will be a paged result with _nextLink_, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error. Default is CreatedDate >= one week.
az support in-subscription tickets list

# Get ticket details for an Azure subscription. Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
az support in-subscription tickets show

# Update API allows you to update the severity level, ticket status, advanced diagnostic consent, secondary consent, and your contact information in the support ticket.<br/><br/>Note: The severity levels cannot be changed if a support ticket is actively being worked upon by an Azure support engineer. In such a case, contact your support engineer to request severity update by adding a new communication using the Communications API.
az support in-subscription tickets update

# List all chat transcripts for a support ticket.
az support no-subscription chat-transcript list

# Get chatTranscript details for a no subscription support ticket.
az support no-subscription chat-transcript show

# Adds a new customer communication to an Azure support ticket.
az support no-subscription communication create

# List all communications (attachments not included) for a support ticket. <br/></br> You can also filter support ticket communications by _CreatedDate_ or _CommunicationType_ using the $filter parameter. The only type of communication supported today is _Web_. Output will be a paged result with _nextLink_, using which you can retrieve the next set of Communication results. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
az support no-subscription communication list

# Get communication details for a support ticket.
az support no-subscription communication show

# Creates a new file workspace.
az support no-subscription file-workspace create

# Gets details for a specific file workspace.
az support no-subscription file-workspace show

# List all the Files information under a workspace.
az support no-subscription file list

# Get details of a specific file in a work space.
az support no-subscription file show

# Uploads a file to a workspace.
az support no-subscription file upload

# Creates a new support ticket for Billing, Subscription Management, and Technical issues for no subscription.
az support no-subscription tickets create

# List all the support tickets. <br/><br/>You can also filter the support tickets by <i>Status</i>, <i>CreatedDate</i>, <i>ServiceId</i>, and <i>ProblemClassificationId</i> using the $filter parameter. Output will be a paged result with <i>nextLink</i>, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error. Default is CreatedDate >= one week.
az support no-subscription tickets list

# Get details for a specific support ticket. Support ticket data is available for 18 months after ticket creation. If a ticket was created more than 18 months ago, a request for data might cause an error.
az support no-subscription tickets show

# Update API allows you to update the severity level, ticket status, advanced diagnostic consent, secondary consent, and your contact information in the support ticket.<br/><br/>Note: The severity levels cannot be changed if a support ticket is actively being worked upon by an Azure support engineer. In such a case, contact your support engineer to request severity update by adding a new communication using the Communications API.
az support no-subscription tickets update

# List all the Azure services available for support ticket creation. Always use the service and problem classifications obtained programmatically. This practice ensures that you always have the most recent set of service and problem classification Ids.
az support services list

# Get a specific Azure service for support ticket creation.
az support services show

# List all the problem classifications (categories) available for a specific Azure service. Always use the service and problem classifications obtained programmatically. This practice ensures that you always have the most recent set of service and problem classification Ids.
az support services problem-classifications list

# Get problem classification details for a specific Azure service.
az support services problem-classifications show
```
