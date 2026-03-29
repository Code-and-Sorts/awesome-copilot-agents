# az containerapp (direct commands)

```bash
# Open a containerapp in the browser, if possible.
az containerapp browse

# Create a container app.
az containerapp create

# Open an SSH-like interactive shell within a container app debug console or execute a command inside the container and exit.
az containerapp debug

# Delete a container app.
az containerapp delete

# Open an SSH-like interactive shell within a container app replica.
az containerapp exec

# List container apps.
az containerapp list

# List usages of subscription level quotas in specific region.
az containerapp list-usages

# Show details of a container app.
az containerapp show

# Show the verification id for binding app or environment custom domains.
az containerapp show-custom-domain-verification-id

# Create or update a container app as well as any associated resources (ACR, resource group, container apps environment, GitHub Actions, etc.).
az containerapp up

# Update a container app. In multiple revisions mode, create a new revision based on the latest revision.
az containerapp update
```
