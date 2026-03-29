# az orbital

```bash
# List available ground stations.
az orbital available-ground-station list

# Get the specified available ground station.
az orbital available-ground-station show

# Create a contact profile.
az orbital contact-profile create

# Delete a specified contact profile resource.
az orbital contact-profile delete

# List contact profiles.
az orbital contact-profile list

# Get the specified contact Profile in a specified resource group.
az orbital contact-profile show

# Update contact profile.
az orbital contact-profile update

# Place the CLI in a waiting state until a condition is met.
az orbital contact-profile wait

# Return operation results.
az orbital operation-result show

# Create a spacecraft resource.
az orbital spacecraft create

# Delete a specified spacecraft resource.
az orbital spacecraft delete

# List spacecrafts.
az orbital spacecraft list

# List available contacts. A contact is available if the spacecraft is visible from the ground station for more than the minimum viable contact duration provided in the contact profile.
az orbital spacecraft list-available-contact

# Get the specified spacecraft in a specified resource group.
az orbital spacecraft show

# Update spacecraft.
az orbital spacecraft update

# Place the CLI in a waiting state until a condition is met.
az orbital spacecraft wait

# Create a contact.
az orbital spacecraft contact create

# Delete a specified contact.
az orbital spacecraft contact delete

# List contacts by spacecraft.
az orbital spacecraft contact list

# Get the specified contact in a specified resource group.
az orbital spacecraft contact show

# Place the CLI in a waiting state until a condition is met.
az orbital spacecraft contact wait
```
