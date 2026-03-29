# az-cli reference generator

This script fetches Azure CLI command documentation from the [MicrosoftDocs/azure-docs-cli](https://github.com/MicrosoftDocs/azure-docs-cli) GitHub repo and generates the reference files in `../references/`.

It is only used to re-generate the reference files when Azure CLI commands change. It is not used at runtime by the skill itself.

## Usage

```bash
npm install
npm run build
npm run generate            # generate all 266 command groups
npm run generate -- --core-only   # generate only Core/Both groups
npm run generate -- --group vm    # generate a single group
npm run generate -- --dry-run     # preview without writing files
```
