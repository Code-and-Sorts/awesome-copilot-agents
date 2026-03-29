import { AzurePrices } from './azure-prices.js';
import { jest } from '@jest/globals';

describe('AzurePrices', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    describe('getPrices', () => {
        it('should fetch prices with service name and region filters', async () => {
            const mockResponse = {
                Items: [
                    {
                        productName: 'Virtual Machines DSv2 Series',
                        skuName: 'D2 v2',
                        retailPrice: 0.1,
                        currencyCode: 'USD',
                        unitOfMeasure: '1 Hour'
                    }
                ]
            };

            const mockFetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockResponse)
                } as Response)
            );
            global.fetch = mockFetch as any;

            const prices = await AzurePrices.getPrices('Virtual Machines', 'eastus');

            expect(mockFetch).toHaveBeenCalledWith(
                expect.stringContaining('serviceName+eq+%27Virtual+Machines%27')
            );
            expect(mockFetch).toHaveBeenCalledWith(
                expect.stringContaining('armRegionName+eq+%27eastus%27')
            );
            expect(prices).toHaveLength(1);
            expect(prices[0].productName).toBe('Virtual Machines DSv2 Series');
        });

        it('should return empty array if fetch fails', async () => {
            const mockFetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    ok: false,
                    status: 500
                } as Response)
            );
            global.fetch = mockFetch as any;

            const prices = await AzurePrices.getPrices('Virtual Machines');
            expect(prices).toEqual([]);
        });

        it('should handle network errors', async () => {
            global.fetch = (jest.fn() as any).mockRejectedValue(new Error('Network error'));

            const prices = await AzurePrices.getPrices();
            expect(prices).toEqual([]);
        });
    });

    describe('getServiceNames', () => {
        it('should extract unique service names', async () => {
            const mockResponse = {
                Items: [
                    { serviceName: 'Compute' },
                    { serviceName: 'Storage' },
                    { serviceName: 'Compute' },
                    { serviceName: '' }
                ]
            };

            global.fetch = (jest.fn() as any).mockImplementation(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockResponse)
                } as Response)
            );

            const services = await AzurePrices.getServiceNames();

            expect(services).toEqual(['Compute', 'Storage']);
        });

        it('should return empty array on failure', async () => {
            global.fetch = (jest.fn() as any).mockRejectedValue(new Error('Fail'));

            const services = await AzurePrices.getServiceNames();
            expect(services).toEqual([]);
        });
    });
});
