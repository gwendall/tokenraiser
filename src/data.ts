/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/indent */
import { mainnet } from 'wagmi/chains';
import { TokenRaiserData } from './types';

const appData: TokenRaiserData = {
    activeChain: mainnet,
    title: 'TokenRaiser',
    description: 'Raise tokens for a good cause',
    tagline: 'Raise tokens for a good cause',
    image: 'banner.png',
    story: "In early 2023, someone [got rekt](https://twitter.com/CryptoNovo311/status/1610485939280744456) of a precious punk. In response, a community quickly came together to assist in its recovery. Various initiatives were launched, including direct donation wallets and the release of several NFT collections, with proceeds aimed at repurchasing the lost token. To streamline these efforts, the [savenovo.com](https://savenovo.com) website was created. Within just 5 days, the community had successfully raised enough tokens to [reacquire the punk](https://twitter.com/cryptopunksbot/status/1613199688877891584). Recognizing the power of united efforts, this website has been made open source. Access the source code and documentation [here](https://github.com/gwendall/tokenraiser). We hope it serves you well!",
    fundraiseGoal: 10,
    initialCommitments: 0,
    deadline: '2024-01-12T19:17:00Z',
    initiatives: [
        {
            title: 'Recovery wallet',
            link: 'https://etherscan.io/address/0xd7da0ae98f7a1da7c3318c32e78a1013c00df935',
            description: 'Make a direct donation to this wallet setup by the community. The proceeds will be used to buy the punk back.',
            image: '/initiatives/wallet.png',
            builders: [
                {
                    name: 'ross_dallbricht',
                    link: 'https://twitter.com/ross_dallbricht',
                },
            ],
        },
        {
            title: 'NovoPixels',
            link: 'https://novopixels.com',
            description: "Mint a unique pixel of Novo\\'s punk. 24x24 tokens, 100% on-chain, randomly assigned. The proceeds will be sent to the recovery wallet.",
            image: '/initiatives/novopixels.gif',
            builders: [
                {
                    name: 'gwendall',
                    link: 'https://twitter.com/gwendall',
                },
                {
                    name: 'franknft_eth',
                    link: 'https://twitter.com/franknft_eth',
                },
            ],
        },
        {
            title: 'GoFundNovo',
            link: 'https://www.desiena.ch/gofundnovo',
            description: "Mint a token redeemable for a future piece of art based on Novo\\'s punk. 2,000 tokens. The proceeds will be sent to the recovery wallet.",
            image: '/initiatives/gofundnovo.png',
            builders: [
                {
                    name: 'Dario_Desiena',
                    link: 'https://twitter.com/Dario_Desiena',
                },
            ],
        },
        {
            title: 'Be careful what you click!',
            link: 'https://app.manifold.xyz/c/cryptonovofundraiser',
            description: 'Mint a playful GIF based on the unfortunate event that happened to Novo. 3,706 tokens. The proceeds will be sent to the recovery wallet.',
            image: '/initiatives/becareful.gif',
            builders: [
                {
                    name: 'punk6987',
                    link: 'https://twitter.com/punk6987',
                },
            ],
        },
        {
            title: 'OnChainNovo',
            link: 'https://opensea.io/collection/onchainnovo',
            description: "Trade a derivative of Novo\\'s punk. 311 tokens, 100% on-chain. The royalties will be sent to the recovery wallet.",
            image: '/initiatives/onchainnovo.png',
            builders: [
                {
                    name: 'hashtagzmedia',
                    link: 'https://twitter.com/hashtagzmedia',
                },
            ],
        },
    ],
    metadata: {
        title: 'TokenRaiser',
        description: "Raise tokens for a good cause",
        image: 'https://tokenraiser.xyz/banner.png',
        url: 'https://tokenraiser.xyz',
        siteName: 'tokenraiser.xyz',
        type: 'profile',
        twitter: 'gwendall',
    },
    creators: [
        {
            name: 'gwendall',
            link: 'https://twitter.com/gwendall',
        },
    ],
    incomes: [
        {
            name: 'Recovery wallet balance',
            contract: '0xd7da0ae98f7a1da7c3318c32e78a1013c00df935',
            balance: 0,
            link: '',
        },
        {
            name: 'NovoPixels contract balance',
            contract: '0x34c89620C13392Fda4A3858D2429BC5B4EcEB8D0',
        },
        {
            name: 'GoFundNovo deployer balance',
            contract: '0xda21efd79e994628e09a3cca4a268879cf15dabf',
        },
    ],
    purchases: [
        {
            name: 'Punk #3706 (we bought it back!)',
            link: 'https://twitter.com/cryptopunksbot/status/1613199688877891584',
            tx: '0xaddb78a3dff8b9499c0f374bb320763e0da8a35bc4405dcff9bfbd0cc6dd8ccf',
            amount: 76.5,
        },
    ],
};

export default appData;