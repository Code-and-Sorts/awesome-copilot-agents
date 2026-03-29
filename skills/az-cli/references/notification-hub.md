# az notification-hub

```bash
# Checks the availability of the given notification hub in a namespace.
az notification-hub check-availability

# Create a notification hub in a namespace.
az notification-hub create

# Delete a notification hub associated with a namespace.
az notification-hub delete

# List the notification hubs associated with a namespace.
az notification-hub list

# Show the notification hub information.
az notification-hub show

# Update a notification hub in a namespace.
az notification-hub update

# Create an authorization rule for a notification hub.
az notification-hub authorization-rule create

# Delete a notificationHub authorization rule.
az notification-hub authorization-rule delete

# List the authorization rules for a notification hub.
az notification-hub authorization-rule list

# List the primary and secondary connection strings to the notification hub.
az notification-hub authorization-rule list-keys

# Regenerates the primary/secondary keys to the notification hub authorization rule.
az notification-hub authorization-rule regenerate-keys

# Show an authorization rule for a notification hub by name.
az notification-hub authorization-rule show

# Lists the PNS credentials associated with a notification hub.
az notification-hub credential list

# Update credential for Amazon(ADM).
az notification-hub credential adm update

# Update credential for Apple(APNS).
az notification-hub credential apns update

# Update credential for Baidu(Andrioid China).
az notification-hub credential baidu update

# Update the Google GCM/FCM API key.
az notification-hub credential gcm update

# Update credential for Windows Phone(MPNS).
az notification-hub credential mpns update

# Update credential for Windows(WNS).
az notification-hub credential wns update

# Checks the availability of the given service namespace across all Azure subscriptions. This is useful because the domain name is created based on the service namespace name.
az notification-hub namespace check-availability

# Create a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
az notification-hub namespace create

# Delete an existing namespace. This operation also removes all associated notificationHubs under the namespace.
az notification-hub namespace delete

# List available namespaces.
az notification-hub namespace list

# Return the description for the specified namespace.
az notification-hub namespace show

# Update a service namespace. The namespace's resource manifest is immutable and cannot be modified.
az notification-hub namespace update

# Place the CLI in a waiting state until a condition is met.
az notification-hub namespace wait

# Create an authorization rule for a namespace.
az notification-hub namespace authorization-rule create

# Delete a namespace authorization rule.
az notification-hub namespace authorization-rule delete

# List the authorization rules for a namespace.
az notification-hub namespace authorization-rule list

# List the primary and secondary connection strings to the namespace.
az notification-hub namespace authorization-rule list-keys

# Regenerate the primary/secondary keys to the namespace authorization rule.
az notification-hub namespace authorization-rule regenerate-keys

# Get an authorization rule for a namespace by name.
az notification-hub namespace authorization-rule show
```
