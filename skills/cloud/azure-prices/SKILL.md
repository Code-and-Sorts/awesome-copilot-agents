---
name: azure-prices
description: Look up and compare Azure service pricing using the Azure Retail Prices API. Use this skill whenever the user asks about Azure costs, pricing, rates, or wants to compare prices across regions or services — even if they don't say "pricing" explicitly. Trigger for questions like "how much does a D2 v2 VM cost?", "cheapest region for Azure SQL", or "compare storage prices between eastus and westeurope".
compatibility: Requires Node.js installed. No Azure credentials needed — uses the public Azure Retail Prices API.
metadata:
  author: Colby Timm
  version: "1.0"
---

# Azure Prices

Fetch and compare live Azure service pricing using the bundled scripts that call the [Azure Retail Prices API](https://prices.azure.com/api/retail/prices).

## Scripts

All scripts live in `@skills/azure-prices/scripts/` and run via npm:

```bash
# List sample service names (discover what's available)
npm run --prefix @skills/azure-prices/scripts get-prices

# Get prices for a service in a region (default region: eastus)
npm run --prefix @skills/azure-prices/scripts get-prices -- "Virtual Machines" eastus
```

The script accepts two positional arguments:
1. **Service name** (required for price lookup) — e.g. `"Virtual Machines"`, `"SQL Database"`, `"Storage"`, `"Azure Cosmos DB"`
2. **Region** (optional, defaults to `eastus`) — e.g. `eastus`, `westus2`, `westeurope`, `southeastasia`

When called with no arguments, it prints a sample of available service names.

## How to Use

### Single region lookup

Run the script with the service name and region. Present results in a readable table.

### Cross-region comparison

To compare prices across regions, run the script multiple times — once per region — then combine the results into a comparison table. For example, to compare Virtual Machines prices across three regions:

```bash
npm run --prefix @skills/azure-prices/scripts get-prices -- "Virtual Machines" eastus
npm run --prefix @skills/azure-prices/scripts get-prices -- "Virtual Machines" westus2
npm run --prefix @skills/azure-prices/scripts get-prices -- "Virtual Machines" westeurope
```

Then join the results by SKU name to show a side-by-side comparison table with columns for each region.

### Finding the cheapest region

Run prices for the target service across several common regions and sort by price. Common Azure regions to compare:

- `eastus`, `eastus2`, `westus2`, `centralus` (US)
- `westeurope`, `northeurope`, `uksouth` (Europe)
- `southeastasia`, `eastasia`, `japaneast` (Asia-Pacific)

### Service discovery

If the user isn't sure of the exact service name, run the script with no arguments first to get a sample of available names, then use the closest match.

## Output Format

Present pricing results as markdown tables. For comparisons, use a format like:

| SKU | East US | West US 2 | West Europe |
|-----|---------|-----------|-------------|
| D2 v2 | $0.10/hr | $0.11/hr | $0.12/hr |
| D4 v2 | $0.20/hr | $0.22/hr | $0.24/hr |

Highlight the cheapest option per row when doing comparisons. Include the currency and unit of measure.
