# az network application-gateway

```bash
# Create an application gateway.
az network application-gateway create

# Delete an application gateway.
az network application-gateway delete

# List application gateways.
az network application-gateway list

# Get the details of an application gateway.
az network application-gateway show

# Get information on the backend health of an application gateway.
az network application-gateway show-backend-health

# Start an application gateway.
az network application-gateway start

# Stop an application gateway.
az network application-gateway stop

# Update an application gateway.
az network application-gateway update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway wait

# Create an address pool.
az network application-gateway address-pool create

# Delete an address pool.
az network application-gateway address-pool delete

# List address pools.
az network application-gateway address-pool list

# Get the details of an address pool.
az network application-gateway address-pool show

# Update an address pool.
az network application-gateway address-pool update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway address-pool wait

# Create an authorization certificate.
az network application-gateway auth-cert create

# Delete an authorization certificate.
az network application-gateway auth-cert delete

# List authorization certificates.
az network application-gateway auth-cert list

# Show an authorization certificate.
az network application-gateway auth-cert show

# Update an authorization certificate.
az network application-gateway auth-cert update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway auth-cert wait

# Add trusted client certificate of the application gateway.
az network application-gateway client-cert add

# List the existing trusted client certificates of the application gateway.
az network application-gateway client-cert list

# Remove an existing trusted client certificate of the application gateway.
az network application-gateway client-cert remove

# Show an existing trusted client certificate of the application gateway.
az network application-gateway client-cert show

# Update trusted client certificate of the application gateway.
az network application-gateway client-cert update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway client-cert wait

# Create a frontend IP address.
az network application-gateway frontend-ip create

# Delete a frontend IP address.
az network application-gateway frontend-ip delete

# List frontend IP addresses.
az network application-gateway frontend-ip list

# Get the details of a frontend IP address.
az network application-gateway frontend-ip show

# Update a frontend IP address.
az network application-gateway frontend-ip update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway frontend-ip wait

# Create a frontend port.
az network application-gateway frontend-port create

# Delete a frontend port.
az network application-gateway frontend-port delete

# List frontend ports.
az network application-gateway frontend-port list

# Get the details of a frontend port.
az network application-gateway frontend-port show

# Update a frontend port.
az network application-gateway frontend-port update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway frontend-port wait

# Create an HTTP listener.
az network application-gateway http-listener create

# Delete an HTTP listener.
az network application-gateway http-listener delete

# List HTTP listeners.
az network application-gateway http-listener list

# Get the details of an HTTP listener.
az network application-gateway http-listener show

# Update an HTTP listener.
az network application-gateway http-listener update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway http-listener wait

# Create HTTP settings.
az network application-gateway http-settings create

# Delete HTTP settings.
az network application-gateway http-settings delete

# List HTTP settings.
az network application-gateway http-settings list

# Get the details of HTTP settings.
az network application-gateway http-settings show

# Update HTTP settings.
az network application-gateway http-settings update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway http-settings wait

# Assign a managed service identity to an application gateway.
az network application-gateway identity assign

# Remove the managed service identity of an application-gateway.
az network application-gateway identity remove

# Show the managed service identity of an application gateway.
az network application-gateway identity show

# Place the CLI in a waiting state until a condition is met.
az network application-gateway identity wait

# Create a listener.
az network application-gateway listener create

# Delete a listener.
az network application-gateway listener delete

# List listeners.
az network application-gateway listener list

# Get the details of a listener.
az network application-gateway listener show

# Update a listener.
az network application-gateway listener update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway listener wait

# Add a new private link with a default IP configuration and associate it with an existing frontend IP.
az network application-gateway private-link add

# List all the private links.
az network application-gateway private-link list

# Remove a private link and clear association with Frontend IP. The subnet associate with a private link might need to clear manually.
az network application-gateway private-link remove

# Show a private link.
az network application-gateway private-link show

# Place the CLI in a waiting state until a condition is met.
az network application-gateway private-link wait

# Add an IP configuration to a private link to scale up its capability.
az network application-gateway private-link ip-config add

# List all the IP configurations of a private link.
az network application-gateway private-link ip-config list

# Remove an IP configuration from a private link to scale down its capability.
az network application-gateway private-link ip-config remove

# Show an IP configuration of a private link.
az network application-gateway private-link ip-config show

# Place the CLI in a waiting state until a condition is met.
az network application-gateway private-link ip-config wait

# Create a probe.
az network application-gateway probe create

# Delete a probe.
az network application-gateway probe delete

# List probes.
az network application-gateway probe list

# Get the details of a probe.
az network application-gateway probe show

# Update a probe.
az network application-gateway probe update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway probe wait

# Create a redirect configuration.
az network application-gateway redirect-config create

# Delete a redirect configuration.
az network application-gateway redirect-config delete

# List redirect configurations.
az network application-gateway redirect-config list

# Get the details of a redirect configuration.
az network application-gateway redirect-config show

# Update a redirect configuration.
az network application-gateway redirect-config update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway redirect-config wait

# Create a rewrite rule.
az network application-gateway rewrite-rule create

# Delete a rewrite rule.
az network application-gateway rewrite-rule delete

# List rewrite rules.
az network application-gateway rewrite-rule list

# List all available request headers.
az network application-gateway rewrite-rule list-request-headers

# List all available response headers.
az network application-gateway rewrite-rule list-response-headers

# Get the details of a rewrite rule.
az network application-gateway rewrite-rule show

# Update a rewrite rule.
az network application-gateway rewrite-rule update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway rewrite-rule wait

# Create a rewrite rule condition.
az network application-gateway rewrite-rule condition create

# Delete a rewrite rule condition.
az network application-gateway rewrite-rule condition delete

# List rewrite rule conditions.
az network application-gateway rewrite-rule condition list

# List all available server variables.
az network application-gateway rewrite-rule condition list-server-variables

# Get the details of a rewrite rule condition.
az network application-gateway rewrite-rule condition show

# Update a rewrite rule condition.
az network application-gateway rewrite-rule condition update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway rewrite-rule condition wait

# Create a rewrite rule set.
az network application-gateway rewrite-rule set create

# Delete a rewrite rule set.
az network application-gateway rewrite-rule set delete

# List rewrite rule sets.
az network application-gateway rewrite-rule set list

# Get the details of a rewrite rule set.
az network application-gateway rewrite-rule set show

# Update a rewrite rule set.
az network application-gateway rewrite-rule set update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway rewrite-rule set wait

# Upload a trusted root certificate.
az network application-gateway root-cert create

# Delete a trusted root certificate.
az network application-gateway root-cert delete

# List trusted root certificates.
az network application-gateway root-cert list

# Get the details of a trusted root certificate.
az network application-gateway root-cert show

# Update a trusted root certificate.
az network application-gateway root-cert update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway root-cert wait

# Create a rule.
az network application-gateway routing-rule create

# Delete a rule.
az network application-gateway routing-rule delete

# List rules.
az network application-gateway routing-rule list

# Get the details of a rule.
az network application-gateway routing-rule show

# Update a rule.
az network application-gateway routing-rule update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway routing-rule wait

# Create a rule.
az network application-gateway rule create

# Delete a rule.
az network application-gateway rule delete

# List rules.
az network application-gateway rule list

# Get the details of a rule.
az network application-gateway rule show

# Update a rule.
az network application-gateway rule update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway rule wait

# Create settings.
az network application-gateway settings create

# Delete settings.
az network application-gateway settings delete

# List settings.
az network application-gateway settings list

# Get the details of settings.
az network application-gateway settings show

# Update settings.
az network application-gateway settings update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway settings wait

# Upload an SSL certificate.
az network application-gateway ssl-cert create

# Delete an SSL certificate.
az network application-gateway ssl-cert delete

# List SSL certificates.
az network application-gateway ssl-cert list

# Get the details of an SSL certificate.
az network application-gateway ssl-cert show

# Update an SSL certificate.
az network application-gateway ssl-cert update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway ssl-cert wait

# List available SSL options for configuring SSL policy.
az network application-gateway ssl-policy list-options

# Update an SSL policy settings.
az network application-gateway ssl-policy set

# Get the details of an SSL policy settings.
az network application-gateway ssl-policy show

# Place the CLI in a waiting state until a condition is met.
az network application-gateway ssl-policy wait

# List all SSL predefined policies for configuring SSL policy.
az network application-gateway ssl-policy predefined list

# Get SSL predefined policy with the specified policy name.
az network application-gateway ssl-policy predefined show

# Add an SSL profile of the application gateway.
az network application-gateway ssl-profile add

# List the existing SSL profiles of the application gateway.
az network application-gateway ssl-profile list

# Remove an existing SSL profile of the application gateway.
az network application-gateway ssl-profile remove

# Show an existing SSL profile of the application gateway.
az network application-gateway ssl-profile show

# Update SSL profile of the application gateway.
az network application-gateway ssl-profile update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway ssl-profile wait

# Create a URL path map.
az network application-gateway url-path-map create

# Delete a URL path map.
az network application-gateway url-path-map delete

# List URL path maps.
az network application-gateway url-path-map list

# Get the details of a URL path map.
az network application-gateway url-path-map show

# Update a URL path map.
az network application-gateway url-path-map update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway url-path-map wait

# Create a rule for a URL path map.
az network application-gateway url-path-map rule create

# Delete a rule for a URL path map.
az network application-gateway url-path-map rule delete

# Place the CLI in a waiting state until a condition is met.
az network application-gateway url-path-map rule wait

# List the regional application gateway waf manifest.
az network application-gateway waf-config list-dynamic-rule-sets

# Get information on available WAF rule sets, rule groups, and rule IDs.
az network application-gateway waf-config list-rule-sets

# Update the firewall configuration of a web application.
az network application-gateway waf-config set

# Get the firewall configuration of a web application.
az network application-gateway waf-config show

# Create an application gateway WAF policy.
az network application-gateway waf-policy create

# Delete an application gateway WAF policy.
az network application-gateway waf-policy delete

# List application gateway WAF policies.
az network application-gateway waf-policy list

# Get the details of an application gateway WAF policy.
az network application-gateway waf-policy show

# Update an application gateway WAF policy.
az network application-gateway waf-policy update

# Place the CLI in a waiting state until a condition is met.
az network application-gateway waf-policy wait

# Create an application gateway WAF policy custom rule.
az network application-gateway waf-policy custom-rule create

# Delete an application gateway WAF policy custom rule.
az network application-gateway waf-policy custom-rule delete

# List application gateway WAF policy custom rules.
az network application-gateway waf-policy custom-rule list

# Get the details of an application gateway WAF policy custom rule.
az network application-gateway waf-policy custom-rule show

# Update an application gateway WAF policy custom rule.
az network application-gateway waf-policy custom-rule update

# Add a match condition to an application gateway WAF policy custom rule.
az network application-gateway waf-policy custom-rule match-condition add

# List application gateway WAF policy custom rule match conditions.
az network application-gateway waf-policy custom-rule match-condition list

# Remove a match condition from an application gateway WAF policy custom rule.
az network application-gateway waf-policy custom-rule match-condition remove

# Allows traffic that met configured criteria to skip the configured managed rules.
az network application-gateway waf-policy managed-rule exception add

# List all managed rule exceptions that are applied on a WAF policy managed rules.
az network application-gateway waf-policy managed-rule exception list

# Remove all managed rule exceptions that are applied on a WAF policy managed rules.
az network application-gateway waf-policy managed-rule exception remove

# Add an OWASP CRS exclusion rule to the WAF policy managed rules.
az network application-gateway waf-policy managed-rule exclusion add

# List all OWASP CRS exclusion rules that are applied on a WAF policy managed rules.
az network application-gateway waf-policy managed-rule exclusion list

# Remove all OWASP CRS exclusion rules that are applied on a WAF policy managed rules.
az network application-gateway waf-policy managed-rule exclusion remove

# Add a managed rule set to an exclusion.
az network application-gateway waf-policy managed-rule exclusion rule-set add

# List all managed rule sets of an exclusion.
az network application-gateway waf-policy managed-rule exclusion rule-set list

# Remove managed rule set within an exclusion.
az network application-gateway waf-policy managed-rule exclusion rule-set remove

# Add managed rule set to the WAF policy managed rules. For rule set and rules, please visit: https://learn.microsoft.com/azure/web-application-firewall/ag/application-gateway-crs-rulegroups-rules.
az network application-gateway waf-policy managed-rule rule-set add

# List all managed rule set.
az network application-gateway waf-policy managed-rule rule-set list

# Remove a managed rule set by rule set group name if rule_group_name is specified. Otherwise, remove all rule set.
az network application-gateway waf-policy managed-rule rule-set remove

# Manage rules of a WAF policy. If --group-name and --rules are provided, override existing rules. If --group-name is provided, clear all rules under a certain rule group. If neither of them are provided, update rule set and clear all rules under itself. For rule set and rules, please visit: https://learn.microsoft.com/azure/web-application-firewall/ag/application-gateway-crs-rulegroups-rules.
az network application-gateway waf-policy managed-rule rule-set update

# List properties of a web application firewall global configuration.
az network application-gateway waf-policy policy-setting list

# Update properties of a web application firewall global configuration.
az network application-gateway waf-policy policy-setting update
```
