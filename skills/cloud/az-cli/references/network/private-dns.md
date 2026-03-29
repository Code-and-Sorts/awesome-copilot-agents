# az network private-dns

```bash
# Create a virtual network link to the specified Private DNS zone.
az network private-dns link vnet create

# Delete a virtual network link to the specified private DNS zone.
az network private-dns link vnet delete

# List the virtual network links to the specified private DNS zone.
az network private-dns link vnet list

# Get a virtual network link to the specified private DNS zone.
az network private-dns link vnet show

# Update a virtual network link's properties. Does not modify virtual network within the link.
az network private-dns link vnet update

# Place the CLI in a waiting state until a condition is met.
az network private-dns link vnet wait

# List all record sets within a Private DNS zone.
az network private-dns record-set list

# Add an A record.
az network private-dns record-set a add-record

# Create an empty A record set.
az network private-dns record-set a create

# Delete an A record set and all associated records.
az network private-dns record-set a delete

# List all A record sets in a zone.
az network private-dns record-set a list

# Remove an A record from its record set.
az network private-dns record-set a remove-record

# Get the details of an A record set.
az network private-dns record-set a show

# Update an A record set.
az network private-dns record-set a update

# Add an AAAA record.
az network private-dns record-set aaaa add-record

# Create an empty AAAA record set.
az network private-dns record-set aaaa create

# Delete an AAAA record set and all associated records.
az network private-dns record-set aaaa delete

# List all AAAA record sets in a zone.
az network private-dns record-set aaaa list

# Remove AAAA record from its record set.
az network private-dns record-set aaaa remove-record

# Get the details of an AAAA record set.
az network private-dns record-set aaaa show

# Update an AAAA record set.
az network private-dns record-set aaaa update

# Create an empty CNAME record set.
az network private-dns record-set cname create

# Delete a CNAME record set and its associated record.
az network private-dns record-set cname delete

# List the CNAME record set in a zone.
az network private-dns record-set cname list

# Remove a CNAME record from its record set.
az network private-dns record-set cname remove-record

# Set the value of a CNAME record.
az network private-dns record-set cname set-record

# Get the details of a CNAME record set.
az network private-dns record-set cname show

# Update a CNAME record set.
az network private-dns record-set cname update

# Add an MX record.
az network private-dns record-set mx add-record

# Create an empty MX record set.
az network private-dns record-set mx create

# Delete an MX record set and all associated records.
az network private-dns record-set mx delete

# List all MX record sets in a zone.
az network private-dns record-set mx list

# Remove an MX record from its record set.
az network private-dns record-set mx remove-record

# Get the details of an MX record set.
az network private-dns record-set mx show

# Update an MX record set.
az network private-dns record-set mx update

# Add a PTR record.
az network private-dns record-set ptr add-record

# Create an empty PTR record set.
az network private-dns record-set ptr create

# Delete a PTR record set and all associated records.
az network private-dns record-set ptr delete

# List all PTR record sets in a zone.
az network private-dns record-set ptr list

# Remove a PTR record from its record set.
az network private-dns record-set ptr remove-record

# Get the details of a PTR record set.
az network private-dns record-set ptr show

# Update a PTR record set.
az network private-dns record-set ptr update

# Get the details of an SOA record.
az network private-dns record-set soa show

# Update properties of an SOA record.
az network private-dns record-set soa update

# Add an SRV record.
az network private-dns record-set srv add-record

# Create an empty SRV record set.
az network private-dns record-set srv create

# Delete an SRV record set and all associated records.
az network private-dns record-set srv delete

# List all SRV record sets in a zone.
az network private-dns record-set srv list

# Remove an SRV record from its record set.
az network private-dns record-set srv remove-record

# Get the details of an SRV record set.
az network private-dns record-set srv show

# Update an SRV record set.
az network private-dns record-set srv update

# Add a TXT record.
az network private-dns record-set txt add-record

# Create an empty TXT record set.
az network private-dns record-set txt create

# Delete a TXT record set and all associated records.
az network private-dns record-set txt delete

# List all TXT record sets in a zone.
az network private-dns record-set txt list

# Remove a TXT record from its record set.
az network private-dns record-set txt remove-record

# Get the details of a TXT record set.
az network private-dns record-set txt show

# Update a TXT record set.
az network private-dns record-set txt update

# Create a Private DNS zone.
az network private-dns zone create

# Delete a Private DNS zone.
az network private-dns zone delete

# Export a Private DNS zone as a DNS zone file.
az network private-dns zone export

# Create a Private DNS zone using a DNS zone file.
az network private-dns zone import

# List Private DNS zones.
az network private-dns zone list

# Get a Private DNS zone.
az network private-dns zone show

# Update a Private DNS zone's properties. Does not modify Private DNS records or virtual network links within the zone.
az network private-dns zone update

# Place the CLI in a waiting state until a condition is met.
az network private-dns zone wait
```
