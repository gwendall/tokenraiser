![tokenraiser](https://github.com/gwendall/tokenraiser/blob/main/public/banner.png?raw=true)
# TokenRaiser

TokenRaiser is an open-source project designed to create a fundraising page through tokens. This encompasses direct token donations and NFT mints. The project is an opensource & modular version of the website [savenovo.com](https://savenovo.com).

You can view a live demo on [tokenraiser.xyz](https://tokenraiser.xyz).

## How it works

TokenRaiser is a page allowing you to track the ETH balance of various wallets & contracts and compare them to a target funding goal, to show the funding progress relative to a given deadline. It allows to gather multiple parallel initiatives towards a common goal, and to create a sense of unity & emergency towards a cause.

## How to use it
1. 🍴 **Fork it**: Begin by forking this repository to create your rendition.

2. 🔧 **Tweak it**: Modify the parameters in the `src/data.ts` file to suit your fundraiser's specifics.

3. 🚀 **Deploy it**: Conclusively, launch your tailored fundraising page using Vercel.

## Configuration Parameters
Here's an overview of the parameters in the `src/data.ts` file:

| Parameter            | Description                                                         |
|----------------------|---------------------------------------------------------------------|
| `activeChain`        | Designates the blockchain network.                                  |
| `title`              | Title of your fundraising campaign.                                 |
| `description`        | Brief description of the fundraiser.                                |
| `tagline`            | Short catchy phrase for your campaign.                              |
| `image`              | Image/banner representing your campaign.                            |
| `story`              | The background or narrative of your fundraiser.                     |
| `fundraiseGoal`      | Goal amount you aim to achieve through the fundraiser.              |
| `initialCommitments` | Initial amount committed to the fundraiser.                         |
| `deadline`           | Deadline date and time for the fundraiser.                          |
| `initiatives`        | Array of initiatives associated with the fundraiser.                |
| `metadata`           | Metadata details (like title, description, image, url, etc.).       |
| `creators`           | List of creators or contributors to the fundraiser.                 |
| `incomes`            | Array of income sources for the fundraiser.                         |
| `purchases`          | Details of purchases made with the fundraiser's funds.              |


### Initiatives
Each item in the initiatives array represents an individual initiative for your fundraising campaign. They contain:

| Parameter     | Description                                                   |
|---------------|---------------------------------------------------------------|
| `title`       | Name or title of the initiative.                               |
| `link`        | URL link related to the initiative.                            |
| `description` | Brief description about the initiative.                        |
| `image`       | Image representing the initiative.                             |
| `builders`    | Array of contributors or builders associated with the initiative. |

### Metadata
This section provides metadata for your campaign, useful for SEO and sharing purposes.

| Parameter     | Description                                                    |
|---------------|----------------------------------------------------------------|
| `title`       | Title of your campaign for metadata.                            |
| `description` | Description about your campaign for metadata.                   |
| `image`       | Image representing your campaign for metadata.                  |
| `url`         | URL of your campaign site.                                      |
| `siteName`    | Name of your website or platform.                               |
| `type`        | Type of content (e.g., profile).                                |
| `twitter`     | Twitter handle associated with the campaign or creator.         |

### Creators
A list of individuals or entities that have contributed to or created the fundraiser.

| Parameter | Description                               |
|-----------|-------------------------------------------|
| `name`    | Name of the creator or contributor.        |
| `link`    | Link to the creator's profile or website.  |

### Incomes
Details the various income sources for the fundraiser.

| Parameter  | Description                                                     |
|------------|-----------------------------------------------------------------|
| `name`     | Name of the income source.                                       |
| `contract` | Contract address associated with the income source.             |
| `balance`  | (Optional) Balance of funds in the contract.                    |
| `link`     | (Optional) Link related to the income source.                   |

### Purchases
Represents purchases made using the fundraiser's proceeds.

| Parameter | Description                                                  |
|-----------|--------------------------------------------------------------|
| `name`    | Name of the purchase item.                                    |
| `link`    | Link related to the purchase or purchase details.             |
| `tx`      | Transaction ID for the purchase.                              |
| `amount`  | Amount spent on the purchase.                                 |
