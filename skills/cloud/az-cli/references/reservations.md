# az reservations

```bash
# Calculates price for exchanging `Reservations` if there are no policy errors.
az reservations calculate-exchange

# Returns one or more `Reservations` in exchange for one or more `Reservation` purchases.
az reservations exchange

# List the reservations that the user has access to in the current tenant.
az reservations list

# Get catalog of available reservation.
az reservations catalog show

# List applicable `Reservation`s that are applied to this subscription or a resource group under this subscription.
az reservations reservation-order-id list

# Calculate price for placing a `ReservationOrder`.
az reservations reservation-order calculate

# Calculate price for returning `Reservations` if there are no policy errors.
az reservations reservation-order calculate-refund

# Change directory (tenant) of `ReservationOrder` and all `Reservation` under it to specified tenant id.
az reservations reservation-order change-directory

# List of all the `ReservationOrder`s that the user has access to in the current tenant.
az reservations reservation-order list

# Create `ReservationOrder` and create resource under the specified URI.
az reservations reservation-order purchase

# Return a reservation.
az reservations reservation-order return

# Get the details of the `ReservationOrder`.
az reservations reservation-order show

# Place the CLI in a waiting state until a condition is met.
az reservations reservation-order wait

# Archiving a `Reservation` which is in cancelled/expired state and move it to `Archived` state.
az reservations reservation archive

# List Reservations within a single `ReservationOrder`.
az reservations reservation list

# List Available Scopes for `Reservation`.
az reservations reservation list-available-scope

# List of all the revisions for the `Reservation`.
az reservations reservation list-history

# Merge the specified `Reservation`s into a new `Reservation`. The two `Reservation`s being merged must have same properties.
az reservations reservation merge

# Get specific `Reservation` details.
az reservations reservation show

# Split a `Reservation` into two `Reservation`s with specified quantity distribution.
az reservations reservation split

# Unarchiving a `Reservation` moves it to the state it was before archiving.
az reservations reservation unarchive

# Update the applied scopes, renewal, name, instance-flexibility of the `Reservation`.
az reservations reservation update

# Place the CLI in a waiting state until a condition is met.
az reservations reservation wait
```
