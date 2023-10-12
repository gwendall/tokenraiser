import { useQueries } from 'react-query';
import { formatEther } from 'viem';
import { EthereumAddress } from '~/utils';
import viemClient from '~/utils/viemClient';
import data from '~/data';
import { Income } from '~/types';

export default function useFundraiseStatus() {
    const result = useQueries(data.incomes.map(({
        name,
        link,
        contract,
        balance: hardcodedBalance,
    }) => ({
        queryKey: ['incomes', name, contract].filter(Boolean),
        queryFn: async () => {
            const balance = contract ? +formatEther(await viemClient.getBalance({
                address: contract as EthereumAddress,
            })) : hardcodedBalance ? hardcodedBalance : 0;
            return {
                name,
                link,
                contract,
                balance,
            };
        },
    })));
    const isLoading = result.some((r) => r.isLoading);
    const incomes = result.map((r) => r.data).filter(Boolean) as Income[];
    const incomesTotal = incomes.reduce((acc, {
        balance = 0,
    }) => acc + balance, 0);
    const donatedTotal = incomesTotal + data.initialCommitments;
    const toFundraise = data.fundraiseGoal - donatedTotal;
    const progress = Math.min(1, donatedTotal / data.fundraiseGoal);
    const isRaiseComplete = progress >= 1;
    return {
        isLoading,
        incomes,
        donatedTotal,
        toFundraise,
        progress,
        isRaiseComplete,
    };
}