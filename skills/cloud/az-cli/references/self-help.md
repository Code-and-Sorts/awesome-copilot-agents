# az self-help

```bash
# This API is used to check the uniqueness of a resource name used for a diagnostic, troubleshooter or solution.
az self-help check-name-availability

# Creates a diagnostics that will help you troubleshoot an issue with your azure resource.
az self-help diagnostic create

# Get the diagnostics using the 'diagnosticsResourceName' you chose while creating the diagnostic.
az self-help diagnostic show

# Place the CLI in a waiting state until a condition is met.
az self-help diagnostic wait

# List the relevant Azure diagnostics and solutions using problemClassificationId API.
az self-help discovery-solution list

# List the relevant Azure diagnostics and solutions using issue summary.
az self-help discovery-solution list-nlp

# List the relevant Azure diagnostics and solutions using issue summary.
az self-help discovery-solution list-nlp-subscription

# Create a simplified solution for the specific Azure resource or subscription using solutionId from discovery solutions.
az self-help simplified-solution create

# Get the solution using the applicable solutionResourceName while creating the solution.
az self-help simplified-solution show

# Place the CLI in a waiting state until a condition is met.
az self-help simplified-solution wait

# Get the self help solution using the applicable solutionId while creating the solution.
az self-help solution-self-help show

# Create a solution for the specific Azure resource or subscription using the triggering criteria from discovery solutions.
az self-help solution create

# Get the solution using the applicable solutionResourceName while creating the solution.
az self-help solution show

# Update a solution for the specific Azure resource or subscription using the triggering criteria from discovery solutions.
az self-help solution update

# Place the CLI in a waiting state until a condition is met.
az self-help solution wait

# Warmup a solution for the specific Azure resource or subscription using the parameters needed to run the diagnostics in the solution.
az self-help solution warmup

# Uses stepId and responses as the trigger to continue the troubleshooting steps for the respective troubleshooter resource name.
az self-help troubleshooter continue

# Create the specific troubleshooter action under a resource or subscription.
az self-help troubleshooter create

# Ends the troubleshooter action.
az self-help troubleshooter end

# Restarts the troubleshooter API using applicable troubleshooter resource name as the input.
az self-help troubleshooter restart

# Get troubleshooter instance result which includes the step status/result of the troubleshooter resource name that is being executed.
az self-help troubleshooter show
```
