# az network dns

```bash
# Returns the DNS records specified by the referencing targetResourceIds.
az network dns list-references

# Create the DNSSEC configuration on a DNS zone.
az network dns dnssec-config create

# Delete the DNSSEC configuration on a DNS zone. This operation cannot be undone.
az network dns dnssec-config delete

# Get the DNSSEC configuration.
az network dns dnssec-config show

# Place the CLI in a waiting state until a condition is met.
az network dns dnssec-config wait

# List all record sets within a DNS zone.
az network dns record-set list

# Add an A record.
az network dns record-set a add-record

# Create an A record set.
az network dns record-set a create

# Delete an A record set.
az network dns record-set a delete

# List A record sets in a zone.
az network dns record-set a list

# Remove an A record from its record set.
az network dns record-set a remove-record

# Get an A record set.
az network dns record-set a show

# Update an A record set.
az network dns record-set a update

# Add an AAAA record.
az network dns record-set aaaa add-record

# Create an AAAA record set.
az network dns record-set aaaa create

# Delete an AAAA record set.
az network dns record-set aaaa delete

# List AAAA record sets in a zone.
az network dns record-set aaaa list

# Remove AAAA record from its record set.
az network dns record-set aaaa remove-record

# Get an AAAA record set.
az network dns record-set aaaa show

# Update an AAAA record set.
az network dns record-set aaaa update

# Add a CAA record.
az network dns record-set caa add-record

# Create a CAA record set.
az network dns record-set caa create

# Delete a CAA record set.
az network dns record-set caa delete

# List CAA record sets in a zone.
az network dns record-set caa list

# Remove a CAA record from its record set.
az network dns record-set caa remove-record

# Get a CAA record set.
az network dns record-set caa show

# Update a CAA record set.
az network dns record-set caa update

# Create a CNAME record set.
az network dns record-set cname create

# Delete a CNAME record set.
az network dns record-set cname delete

# List CNAME record sets in a zone.
az network dns record-set cname list

# Remove a CNAME record from its record set.
az network dns record-set cname remove-record

# Set the value of a CNAME record.
az network dns record-set cname set-record

# Get a CNAME record set.
az network dns record-set cname show

# Update a CNAME record set.
az network dns record-set cname update

# Add a DS record.
az network dns record-set ds add-record

# Create an DS record set.
az network dns record-set ds create

# Delete an DS record set.
az network dns record-set ds delete

# List DS record sets in a zone.
az network dns record-set ds list

# Remove a DS record from its record set.
az network dns record-set ds remove-record

# Get an DS record set.
az network dns record-set ds show

# Update an DS record set.
az network dns record-set ds update

# Add an MX record.
az network dns record-set mx add-record

# Create an MX record set.
az network dns record-set mx create

# Delete an MX record set.
az network dns record-set mx delete

# List MX record sets in a zone.
az network dns record-set mx list

# Remove an MX record from its record set.
az network dns record-set mx remove-record

# Get an MX record set.
az network dns record-set mx show

# Update an MX record set.
az network dns record-set mx update

# Add a NAPTR record.
az network dns record-set naptr add-record

# Create an NAPTR record set.
az network dns record-set naptr create

# Delete an NAPTR record set.
az network dns record-set naptr delete

# List NAPTR record sets in a zone.
az network dns record-set naptr list

# Remove a NAPTR record from its record set.
az network dns record-set naptr remove-record

# Get an NAPTR record set.
az network dns record-set naptr show

# Update an NAPTR record set.
az network dns record-set naptr update

# Add an NS record.
az network dns record-set ns add-record

# Create an NS record set.
az network dns record-set ns create

# Delete an NS record set.
az network dns record-set ns delete

# List NS record sets in a zone.
az network dns record-set ns list

# Remove an NS record from its record set.
az network dns record-set ns remove-record

# Get an NS record set.
az network dns record-set ns show

# Update an NS record set.
az network dns record-set ns update

# Add a PTR record.
az network dns record-set ptr add-record

# Create a PTR record set.
az network dns record-set ptr create

# Delete a PTR record set.
az network dns record-set ptr delete

# List PTR record sets in a zone.
az network dns record-set ptr list

# Remove a PTR record from its record set.
az network dns record-set ptr remove-record

# Get a PTR record set.
az network dns record-set ptr show

# Update a PTR record set.
az network dns record-set ptr update

# Get a SOA record set.
az network dns record-set soa show

# Update properties of an SOA record.
az network dns record-set soa update

# Add an SRV record.
az network dns record-set srv add-record

# Create an SRV record set.
az network dns record-set srv create

# Delete an SRV record set.
az network dns record-set srv delete

# List SRV record sets in a zone.
az network dns record-set srv list

# Remove an SRV record from its record set.
az network dns record-set srv remove-record

# Get an SRV record set.
az network dns record-set srv show

# Update an SRV record set.
az network dns record-set srv update

# Add a TLSA record.
az network dns record-set tlsa add-record

# Create a TLSA record set.
az network dns record-set tlsa create

# Delete a TLSA record set.
az network dns record-set tlsa delete

# List TLSA record sets in a zone.
az network dns record-set tlsa list

# Remove a TLSA record from its record set.
az network dns record-set tlsa remove-record

# Get a TLSA record set.
az network dns record-set tlsa show

# Update a TLSA record set.
az network dns record-set tlsa update

# Add a TXT record.
az network dns record-set txt add-record

# Create a TXT record set.
az network dns record-set txt create

# Delete a TXT record set.
az network dns record-set txt delete

# List TXT record sets in a zone.
az network dns record-set txt list

# Remove a TXT record from its record set.
az network dns record-set txt remove-record

# Get a TXT record set.
az network dns record-set txt show

# Update a TXT record set.
az network dns record-set txt update

# Create a DNS zone.
az network dns zone create

# Delete a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone.
az network dns zone delete

# Export a DNS zone as a DNS zone file.
az network dns zone export

# Create a DNS zone using a DNS zone file.
az network dns zone import

# List the DNS zones.
az network dns zone list

# Get a DNS zone. Retrieves the zone properties, but not the record sets within the zone.
az network dns zone show

# Update a DNS zone. Does not modify DNS records within the zone.
az network dns zone update
```
