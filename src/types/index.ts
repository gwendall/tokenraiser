import { Chain } from 'wagmi/chains';

export type Builder = {
    name: string;
    link: string;
};

export type Initiative = {
    title: string;
    link: string;
    description: string;
    image: string;
    builders: Builder[];
};

export type Income = {
    name: string;
    contract: string;
    balance?: number;
    link?: string;
};

export type Purchase = {
    name: string;
    link: string;
    tx: string;
    amount: number;
};

export type Metadata = {
    title: string;
    description: string;
    image: string;
    url: string;
    siteName: string;
    type: string;
    twitter: string;
};

export type TokenRaiserData = {
    activeChain: Chain;
    title: string;
    description: string;
    tagline: string;
    image: string;
    fundraiseGoal: number;
    initialCommitments: number;
    deadline: string;
    story: string;
    initiatives: Initiative[];
    metadata: Metadata;
    creators: Builder[];
    incomes: Income[];
    purchases: Purchase[];
};
