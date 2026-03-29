export interface CommandGroup {
    name: string;
    description: string;
    type: 'Core' | 'Extension' | 'Core and Extension';
    status: string;
    url: string;
}

export interface Command {
    name: string;
    description: string;
}

export interface GenerateOptions {
    coreOnly: boolean;
    singleGroup?: string;
    dryRun: boolean;
    refsDir: string;
}

export const LARGE_GROUP_THRESHOLD = 300;

export const CATEGORY_MAP: Record<string, string[]> = {
    'Compute': [
        'vm', 'vmss', 'aks', 'aksarc', 'container', 'containerapp', 'functionapp',
        'webapp', 'appservice', 'logicapp', 'batch', 'cloud-service', 'sf',
        'spring', 'staticwebapp', 'compute-fleet', 'compute-recommender',
        'computeschedule', 'ppg', 'image', 'sig', 'snapshot', 'disk',
        'disk-access', 'disk-encryption-set', 'disk-pool', 'restore-point',
        'capacity', 'sshkey', 'ssh', 'serial-console'
    ],
    'Networking': [
        'network', 'cdn', 'afd', 'dns-resolver', 'relay', 'signalr',
        'webpubsub', 'private-link', 'internet-analyzer', 'network-analytics',
        'network-function', 'networkcloud', 'networkfabric'
    ],
    'Storage': [
        'storage', 'storage-actions', 'storage-discovery', 'storage-mover',
        'storagesync', 'netappfiles', 'elastic-san', 'hpc-cache', 'amlfs',
        'dls', 'import-export'
    ],
    'Databases': [
        'sql', 'cosmosdb', 'mysql', 'postgres', 'mariadb', 'redis',
        'redisenterprise', 'managed-cassandra', 'mongo-db', 'kusto'
    ],
    'Identity & Security': [
        'ad', 'role', 'identity', 'keyvault', 'policy', 'security',
        'sentinel', 'attestation', 'confidentialledger', 'confcom',
        'trustedsigning', 'dedicated-hsm', 'cloudhsm'
    ],
    'Management & Governance': [
        'account', 'group', 'resource', 'resourcemanagement', 'deployment',
        'deployment-scripts', 'lock', 'tag', 'provider', 'providerhub',
        'feature', 'managedapp', 'managedservices', 'managementpartner',
        'consumption', 'costmanagement', 'billing', 'billing-benefits',
        'reservations', 'quota', 'stack', 'ts', 'bicep', 'blueprint',
        'data-boundary', 'support', 'self-help', 'advisor'
    ],
    'Monitoring & Analytics': [
        'monitor', 'alerts-management', 'change-analysis', 'grafana',
        'log-analytics', 'synapse', 'stream-analytics', 'hdinsight',
        'databricks', 'datafactory', 'datashare', 'purview', 'powerbi',
        'tsi', 'carbon'
    ],
    'DevOps & Integration': [
        'devops', 'pipelines', 'boards', 'repos', 'artifacts',
        'servicebus', 'eventhubs', 'eventgrid', 'notification-hub',
        'communication', 'logic', 'apim', 'apic', 'connection'
    ],
    'AI & ML': [
        'cognitiveservices', 'ml', 'search', 'maps', 'bot'
    ],
    'IoT & Edge': [
        'iot', 'dt', 'sphere', 'edge-zones', 'edge-action', 'edgeorder'
    ],
    'Containers & Registries': [
        'acr', 'connectedk8s', 'k8s-configuration', 'k8s-extension',
        'k8s-runtime'
    ],
    'Migration & Hybrid': [
        'migrate', 'offazure', 'arc-multicloud', 'arcappliance',
        'arcgateway', 'connectedmachine', 'connectedvmware', 'scvmm',
        'site-recovery', 'dms', 'datamigration', 'dataprotection',
        'backup', 'resource-mover', 'data-transfer'
    ],
    'Compliance & Automation': [
        'acat', 'automanage', 'automation', 'guestconfig', 'maintenance',
        'app-compliance-automation-tool'
    ],
    'Partner & Marketplace': [
        'astronomer', 'confluent', 'datadog', 'dynatrace', 'elastic',
        'grafana', 'informatica', 'new-relic', 'nginx', 'palo-alto',
        'qumulo', 'dell', 'arize-ai', 'lambda-test'
    ],
    'CLI Tools': [
        'config', 'configure', 'extension', 'find', 'feedback', 'survey',
        'login', 'logout', 'version', 'upgrade', 'interactive', 'alias',
        'cloud', 'rest', 'next', 'init', 'hack', 'cli-translator',
        'command-change', 'ai-examples', 'fzf', 'scenario', 'term',
        'prototype'
    ],
    'Other': [
        'ams', 'aosm', 'aro', 'artifact-signing', 'baremetalinstance',
        'baremetalstorageinstance', 'cache', 'custom-providers', 'customlocation',
        'databox', 'databoxedge', 'devcenter', 'desktopvirtualization', 'dnc',
        'durabletask', 'fabric', 'firmwareanalysis', 'fleet', 'fluid-relay',
        'footprint', 'gallery', 'graph', 'graph-services', 'healthbot',
        'healthcareapis', 'lab', 'large-instance', 'large-storage-instance',
        'load', 'managedcleanroom', 'mcc', 'mdp', 'mesh', 'nexusidentity',
        'oracle-database', 'orbital', 'partnercenter', 'peering', 'portal',
        'pscloud', 'quantum', 'remote-rendering-account', 'sftp',
        'site', 'stack-hci', 'stack-hci-vm', 'standby-container-group-pool',
        'standby-vm-pool', 'terraform', 'vi', 'vme', 'vmware',
        'workload-orchestration', 'workloads', 'zones', 'dependency-map',
        'appnet'
    ]
};
