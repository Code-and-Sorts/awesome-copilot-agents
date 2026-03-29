# az stream-analytics

```bash
# Create a Stream Analytics Cluster or replaces an already existing cluster.
az stream-analytics cluster create

# Delete the specified cluster.
az stream-analytics cluster delete

# List all of the clusters in the given resource group. And Lists all of the clusters in the given subscription.
az stream-analytics cluster list

# List all of the streaming jobs in the given cluster.
az stream-analytics cluster list-streaming-job

# Get information about the specified cluster.
az stream-analytics cluster show

# Update an existing cluster. This can be used to partially update (ie. update one or two properties) a cluster without affecting the rest of the cluster definition.
az stream-analytics cluster update

# Place the CLI in a waiting state until a condition of the stream-analytics cluster is met.
az stream-analytics cluster wait

# Create a function or replaces an already existing function under an existing streaming job.
az stream-analytics function create

# Delete a function from the streaming job.
az stream-analytics function delete

# Retrieve the default definition of a function based on the parameters specified.
az stream-analytics function inspect

# List all of the functions under the specified streaming job.
az stream-analytics function list

# Get details about the specified function.
az stream-analytics function show

# Test if the information provided for a function is valid. This can range from testing the connection to the underlying web service behind the function or making sure the function code provided is syntactically correct.
az stream-analytics function test

# Update an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition.
az stream-analytics function update

# Place the CLI in a waiting state until a condition of the stream-analytics function is met.
az stream-analytics function wait

# Create an input or replaces an already existing input under an existing streaming job.
az stream-analytics input create

# Delete an input from the streaming job.
az stream-analytics input delete

# List all of the inputs under the specified streaming job.
az stream-analytics input list

# Get details about the specified input.
az stream-analytics input show

# Test whether an input’s datasource is reachable and usable by the Azure Stream Analytics service.
az stream-analytics input test

# Update an existing input under an existing streaming job. This can be used to partially update (ie. update one or two properties) an input without affecting the rest the job or input definition.
az stream-analytics input update

# Place the CLI in a waiting state until a condition of the stream-analytics input is met.
az stream-analytics input wait

# Create a streaming job or replaces an already existing streaming job.
az stream-analytics job create

# Delete a streaming job.
az stream-analytics job delete

# List all of the streaming jobs in the specified resource group. And Lists all of the streaming jobs in the given subscription.
az stream-analytics job list

# Scale a streaming job when the job is running.
az stream-analytics job scale

# Get details about the specified streaming job.
az stream-analytics job show

# Start a streaming job. Once a job is started it will start processing input events and produce output.
az stream-analytics job start

# Stop a running streaming job. This will cause a running streaming job to stop processing input events and producing output.
az stream-analytics job stop

# Update an existing streaming job. This can be used to partially update (ie. update one or two properties) a streaming job without affecting the rest the job definition.
az stream-analytics job update

# Place the CLI in a waiting state until a condition of the stream-analytics job is met.
az stream-analytics job wait

# Create an output or replaces an already existing output under an existing streaming job.
az stream-analytics output create

# Delete an output from the streaming job.
az stream-analytics output delete

# List all of the outputs under the specified streaming job.
az stream-analytics output list

# Get details about the specified output.
az stream-analytics output show

# Test whether an output’s datasource is reachable and usable by the Azure Stream Analytics service.
az stream-analytics output test

# Update an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
az stream-analytics output update

# Place the CLI in a waiting state until a condition of the stream-analytics output is met.
az stream-analytics output wait

# Create a Stream Analytics Private Endpoint or replaces an already existing Private Endpoint.
az stream-analytics private-endpoint create

# Delete the specified private endpoint.
az stream-analytics private-endpoint delete

# List the private endpoints in the cluster.
az stream-analytics private-endpoint list

# Get information about the specified Private Endpoint.
az stream-analytics private-endpoint show

# Place the CLI in a waiting state until a condition of the stream-analytics private-endpoint is met.
az stream-analytics private-endpoint wait

# Retrieve the subscription's current quota information in a particular region.
az stream-analytics subscription inspect

# Create a transformation or replaces an already existing transformation under an existing streaming job.
az stream-analytics transformation create

# Get details about the specified transformation.
az stream-analytics transformation show

# Update an existing transformation under an existing streaming job. This can be used to partially update (ie. update one or two properties) a transformation without affecting the rest the job or transformation definition.
az stream-analytics transformation update
```
