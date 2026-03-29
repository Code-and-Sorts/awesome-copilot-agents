export interface AzurePriceItem {
    currencyCode: string;
    tierMinimumUnits: number;
    retailPrice: number;
    unitPrice: number;
    armRegionName: string;
    location: string;
    effectiveStartDate: string;
    meterId: string;
    meterName: string;
    productId: string;
    skuId: string;
    productName: string;
    skuName: string;
    serviceName: string;
    serviceId: string;
    serviceFamily: string;
    unitOfMeasure: string;
    type: string;
    isPrimaryMeterRegion: boolean;
    armSkuName: string;
}

export interface AzurePricesResponse {
    BillingCurrency: string;
    CustomerEntityId: string;
    CustomerEntityType: string;
    Items: AzurePriceItem[];
    NextPageLink: string | null;
}

export class AzurePrices {
    private static readonly BASE_URL = 'https://prices.azure.com/api/retail/prices';

    /**
     * Fetch prices from Azure Retail Prices API.
     */
    static async getPrices(serviceName?: string, region?: string): Promise<AzurePriceItem[]> {
        const url = new URL(this.BASE_URL);
        const filters: string[] = [];

        if (serviceName) {
            filters.push(`serviceName eq '${serviceName}'`);
        }
        if (region) {
            filters.push(`armRegionName eq '${region}'`);
        }

        if (filters.length > 0) {
            url.searchParams.append('$filter', filters.join(' and '));
        }

        try {
            let allItems: AzurePriceItem[] = [];
            let nextUrl: string | null = url.toString();

            while (nextUrl) {
                const response = await fetch(nextUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = (await response.json()) as AzurePricesResponse;
                allItems = allItems.concat(data.Items || []);
                nextUrl = data.NextPageLink;
            }

            return allItems;
        } catch (error) {
            console.error('Error fetching Azure prices:', error);
            return [];
        }
    }

    /**
     * Get unique service names from a sample of the API.
     */
    static async getServiceNames(): Promise<string[]> {
        const url = `${this.BASE_URL}?$top=100`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = (await response.json()) as AzurePricesResponse;
            const services = new Set(data.Items.map(item => item.serviceName).filter(Boolean));
            return Array.from(services).sort();
        } catch (error) {
            console.error('Error fetching service names:', error);
            return [];
        }
    }
}

