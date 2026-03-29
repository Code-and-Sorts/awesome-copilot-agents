# az network watcher

```bash
# Configure the Network Watcher service for different regions.
az network watcher configure

# List Network Watchers.
az network watcher list

# Run a configuration diagnostic on a target resource.
az network watcher run-configuration-diagnostic

# Get information on the `next hop` of a VM.
az network watcher show-next-hop

# Get detailed security information on a VM for the currently configured network security group.
az network watcher show-security-group-view

# Get the network topology of a resource group, virtual network or subnet.
az network watcher show-topology

# Test if a connection can be established between a Virtual Machine and a given endpoint.
az network watcher test-connectivity

# Test IP flow to/from a VM given the currently configured network security group rules.
az network watcher test-ip-flow

# Create a connection monitor.
az network watcher connection-monitor create

# Delete a connection monitor for the given region.
az network watcher connection-monitor delete

# List connection monitors for the given region.
az network watcher connection-monitor list

# Query a snapshot of the most recent connection state of a connection monitor.
az network watcher connection-monitor query

# Shows a connection monitor by name.
az network watcher connection-monitor show

# Start the specified connection monitor.
az network watcher connection-monitor start

# Stop the specified connection monitor.
az network watcher connection-monitor stop

# Place the CLI in a waiting state until a condition is met.
az network watcher connection-monitor wait

# Add an endpoint to a connection monitor.
az network watcher connection-monitor endpoint add

# List all endpoints from a connection monitor.
az network watcher connection-monitor endpoint list

# Remove an endpoint from a connection monitor.
az network watcher connection-monitor endpoint remove

# Show an endpoint from a connection monitor.
az network watcher connection-monitor endpoint show

# Place the CLI in a waiting state until a condition is met.
az network watcher connection-monitor endpoint wait

# Add an output to a connection monitor.
az network watcher connection-monitor output add

# List all output from a connection monitor.
az network watcher connection-monitor output list

# Remove all outputs from a connection monitor.
az network watcher connection-monitor output remove

# Place the CLI in a waiting state until a condition is met.
az network watcher connection-monitor output wait

# Add a test configuration to a connection monitor.
az network watcher connection-monitor test-configuration add

# List all test configurations of a connection monitor.
az network watcher connection-monitor test-configuration list

# Remove a test configuration from a connection monitor.
az network watcher connection-monitor test-configuration remove

# Show a test configuration from a connection monitor.
az network watcher connection-monitor test-configuration show

# Place the CLI in a waiting state until a condition is met.
az network watcher connection-monitor test-configuration wait

# Add a test group along with new-added/existing endpoint and test configuration to a connection monitor.
az network watcher connection-monitor test-group add

# List all test groups of a connection     monitor.
az network watcher connection-monitor test-group list

# Remove test group from a connection monitor.
az network watcher connection-monitor test-group remove

# Show a test group of a connection monitor.
az network watcher connection-monitor test-group show

# Place the CLI in a waiting state until a condition is met.
az network watcher connection-monitor test-group wait

# Create a flow log on a network security group.
az network watcher flow-log create

# Delete the specified flow log resource.
az network watcher flow-log delete

# List all flow log resources for the specified Network Watcher.
az network watcher flow-log list

# Get the flow log configuration of a network security group.
az network watcher flow-log show

# Update the flow log configuration of a network security group.
az network watcher flow-log update

# Place the CLI in a waiting state until a condition is met.
az network watcher flow-log wait

# Create and start a packet capture session.
az network watcher packet-capture create

# Delete a packet capture session.
az network watcher packet-capture delete

# List all packet capture sessions within a region.
az network watcher packet-capture list

# Show details of a packet capture session.
az network watcher packet-capture show

# Show the status of a packet capture session.
az network watcher packet-capture show-status

# Stop a running packet capture session.
az network watcher packet-capture stop

# Place the CLI in a waiting state until a condition is met.
az network watcher packet-capture wait

# Get the results of the last troubleshooting operation.
az network watcher troubleshooting show

# Troubleshoot issues with VPN connections or gateway connectivity.
az network watcher troubleshooting start
```
