# az resource-mover

```bash
# Removes the set of move resources included in the request body from move collection. The orchestration is done by service. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true.
az resource-mover move-collection bulk-remove

# Commits the set of resources included in the request body. The commit operation is triggered on the moveResources in the moveState 'CommitPending' or 'CommitFailed', on a successful completion the moveResource moveState do a transition to Committed. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true.
az resource-mover move-collection commit

# Create a move collection.
az resource-mover move-collection create

# Delete a move collection.
az resource-mover move-collection delete

# Discards the set of resources included in the request body. The discard operation is triggered on the moveResources in the moveState 'CommitPending' or 'DiscardFailed', on a successful completion the moveResource moveState do a transition to MovePending. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true.
az resource-mover move-collection discard

# Moves the set of resources included in the request body. The move operation is triggered after the moveResources are in the moveState 'MovePending' or 'MoveFailed', on a successful completion the moveResource moveState do a transition to CommitPending. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true.
az resource-mover move-collection initiate-move

# List all the Move Collections in the subscription.
az resource-mover move-collection list

# List of the move resources for which an arm resource is required for.
az resource-mover move-collection list-required-for

# Lists a list of unresolved dependencies.
az resource-mover move-collection list-unresolved-dependency

# Initiates prepare for the set of resources included in the request body. The prepare operation is on the moveResources that are in the moveState 'PreparePending' or 'PrepareFailed', on a successful completion the moveResource moveState do a transition to MovePending. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true.
az resource-mover move-collection prepare

# Computes, resolves and validate the dependencies of the moveResources in the move collection.
az resource-mover move-collection resolve-dependency

# Get the move collection.
az resource-mover move-collection show

# Update a move collection.
az resource-mover move-collection update

# Place the CLI in a waiting state until a condition is met.
az resource-mover move-collection wait

# Create a Move Resource in the move collection.
az resource-mover move-resource add

# Delete a Move Resource from the move collection.
az resource-mover move-resource delete

# List the Move Resources in the move collection.
az resource-mover move-resource list

# Get the Move Resource.
az resource-mover move-resource show

# Place the CLI in a waiting state until a condition is met.
az resource-mover move-resource wait
```
