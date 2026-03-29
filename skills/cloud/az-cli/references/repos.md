# az repos

```bash
# Create a Git repository in a team project.
az repos create

# Delete a Git repository in a team project.
az repos delete

# List Git repositories of a team project.
az repos list

# Get the details of a Git repository.
az repos show

# Update the Git repository.
az repos update

# Create a git import request.
az repos import create

# Create a policy using a configuration file.
az repos policy create

# Delete a policy.
az repos policy delete

# List all policies in a project.
az repos policy list

# Show policy details.
az repos policy show

# Update a policy using a configuration file.
az repos policy update

# Create approver count policy.
az repos policy approver-count create

# Update approver count policy.
az repos policy approver-count update

# Create build policy.
az repos policy build create

# Update build policy.
az repos policy build update

# Create case enforcement policy.
az repos policy case-enforcement create

# Update case enforcement policy.
az repos policy case-enforcement update

# Create comment resolution required policy.
az repos policy comment-required create

# Update comment resolution required policy.
az repos policy comment-required update

# Create file size policy.
az repos policy file-size create

# Update file size policy.
az repos policy file-size update

# Create merge strategy policy.
az repos policy merge-strategy create

# Update merge strategy policy.
az repos policy merge-strategy update

# Create required reviewer policy.
az repos policy required-reviewer create

# Update required reviewer policy.
az repos policy required-reviewer update

# Create work item linking policy.
az repos policy work-item-linking create

# Update work item linking policy.
az repos policy work-item-linking update

# Checkout the PR source branch locally, if no local changes are present.
az repos pr checkout

# Create a pull request.
az repos pr create

# List pull requests.
az repos pr list

# Vote on a pull request.
az repos pr set-vote

# Get the details of a pull request.
az repos pr show

# Update a pull request.
az repos pr update

# List policies of a pull request.
az repos pr policy list

# Queue an evaluation of a policy for a pull request.
az repos pr policy queue

# Add one or more reviewers to a pull request.
az repos pr reviewer add

# List reviewers of a pull request.
az repos pr reviewer list

# Remove one or more reviewers from a pull request.
az repos pr reviewer remove

# Link one or more work items to a pull request.
az repos pr work-item add

# List linked work items for a pull request.
az repos pr work-item list

# Unlink one or more work items from a pull request.
az repos pr work-item remove

# Create a reference.
az repos ref create

# Delete a reference.
az repos ref delete

# List the references.
az repos ref list

# Lock a reference.
az repos ref lock

# Unlock a reference.
az repos ref unlock
```
