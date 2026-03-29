import { AzurePrices } from './azure-prices.js';
import process from 'node:process';

const args = process.argv.slice(2);

async function main() {
    if (args.length === 0) {
        console.log("Fetching sample service names...");
        const services = await AzurePrices.getServiceNames();
        console.log(`Available services: ${services.slice(0, 10).join(', ')}...`);
        return;
    }

    const serviceName = args[0];
    const region = args[1] || 'eastus';

    console.log(`Fetching prices for "${serviceName}" in region "${region}"...`);

    try {
        const prices = await AzurePrices.getPrices(serviceName, region);
        if (prices.length === 0) {
            console.log("No prices found for the specified criteria.");
            return;
        }

        prices.forEach(item => {
            console.log(`- ${item.productName} (${item.skuName}): ${item.retailPrice} ${item.currencyCode} per ${item.unitOfMeasure}`);
        });

        console.log(`\nTotal: ${prices.length} items.`);
    } catch (error) {
        console.error(error instanceof Error ? error.message : String(error));
        process.exit(1);
    }
}

main();

