# az prototype

```bash
# Generate infrastructure and application code in staged output.
az prototype build

# Deploy prototype to Azure with interactive staged deployments.
az prototype deploy

# Analyze requirements and generate architecture design.
az prototype design

# Initialize a new prototype project.
az prototype init

# Launch the interactive TUI dashboard.
az prototype launch

# Show current project status across all stages.
az prototype status

# Add a custom agent to the project.
az prototype agent add

# Export any agent (including built-in) as a YAML file.
az prototype agent export

# List all available agents (built-in and custom).
az prototype agent list

# Override a built-in agent with a custom definition.
az prototype agent override

# Remove a custom agent or override.
az prototype agent remove

# Show details of a specific agent.
az prototype agent show

# Send a test prompt to any agent and display the response.
az prototype agent test

# Update an existing custom agent's properties.
az prototype agent update

# Estimate Azure costs at Small/Medium/Large t-shirt sizes.
az prototype analyze costs

# Analyze an error and get a fix with redeployment instructions.
az prototype analyze error

# Get a single configuration value.
az prototype config get

# Interactive setup to create a prototype.yaml configuration file.
az prototype config init

# Set a configuration value.
az prototype config set

# Display current project configuration.
az prototype config show

# Generate a backlog and push work items to GitHub or Azure DevOps.
az prototype generate backlog

# Generate documentation from templates with AI population.
az prototype generate docs

# Generate the spec-kit documentation bundle with AI population.
az prototype generate speckit

# Submit a knowledge base contribution as a GitHub Issue.
az prototype knowledge contribute
```
