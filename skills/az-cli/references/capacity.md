# az capacity

```bash
# Create operation to create or update a capacity reservation. Please note some properties can be set only during capacity reservation creation. Please refer to https://aka.ms/CapacityReservation for more details.
az capacity reservation create

# Delete operation to delete a capacity reservation. This operation is allowed only when all the associated resources are disassociated from the capacity reservation. Please refer to https://aka.ms/CapacityReservation for more details.
az capacity reservation delete

# List all of the capacity reservations in the specified capacity reservation group. Use the nextLink property in the response to get the next page of capacity reservations.
az capacity reservation list

# Retrieve information about the capacity reservation.
az capacity reservation show

# Update operation to update a capacity reservation.
az capacity reservation update

# Place the CLI in a waiting state until a condition is met.
az capacity reservation wait

# Create capacity reservation group.
az capacity reservation group create

# Delete operation to delete a capacity reservation group. This operation is allowed only if all the associated resources are disassociated from the reservation group and all capacity reservations under the reservation group have also been deleted. Please refer to https://aka.ms/CapacityReservation for more details.
az capacity reservation group delete

# List the capacity reservation groups.
az capacity reservation group list

# Show capacity reservation group.
az capacity reservation group show

# Update capacity reservation group.
az capacity reservation group update
```
