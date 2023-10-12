import React from 'react';
import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import Markdown from 'react-markdown';
import useSound from 'use-sound';
import CountdownTimer from '~/components/CountdownTimer';
import ExternalLink from '~/components/ExternalLink';
import Head from '~/components/Head';
import data from '~/data';
import useFundraiseStatus from '~/hooks/useFundraiseStatus';
import { formatAmount } from '~/utils';
import SuccessConfetti from '~/components/SuccessConfetti';
import { Table, TableRow } from '~/components/Table';
import Progress from '~/components/Progress';

export default function LandingPage() {
  const {
    isLoading,
    incomes = [],
    donatedTotal,
    toFundraise,
    progress,
    isRaiseComplete,
  } = useFundraiseStatus();
  const formatAmount2 = (amount: number, decimals: number) => isLoading ? '-' : formatAmount(amount, decimals);
  const [playSound] = useSound(
    '/rocky.mp3',
    {
      volume: 0.8,
      loop: true, 
    },
  );
  React.useEffect(() => {
    // if (isRaiseComplete) playSound();
  }, [isRaiseComplete, playSound]);
  return (
    <>
      <div style={ { marginTop: 30, textAlign: 'left' } }>
        <Head title={ data.title } description={ data.description } />
        {
          isRaiseComplete ? (
            <h1 style={ { color:'#229000', fontSize: '3rem', textAlign: 'center', margin: 0 } }>WE DID IT!!!</h1>
          ) : null
        }
        <div style={ { marginTop: 40 } }>
          <Markdown>{data.story}</Markdown>
        </div>
        <h1 style={ { marginTop: 15 } }>Raised as of now</h1>
        <Table>
          {
            incomes.map(({
              name,
              link,
              contract,
              balance,
            }) => (
              <ExternalLink
                href={ link || `https://etherscan.io/address/${contract}` }
                key={ `income-${name}-${link}` }
              >
                <TableRow>
                  <td style={ { flex: 1 } }>{name}</td>
                  <td style={ { textAlign: 'right' } }>{balance ? formatAmount2(balance, 2) : 0} ETH</td>
                </TableRow>
              </ExternalLink>
            ))
          }
          {
            data.purchases.map(({
              name,
              link,
              tx,
              amount,
            }) => (
              <ExternalLink
                href={ link || `https://etherscan.io/tx/${tx}` }
                key={ `purchase-${name}-${link}-${tx}-${amount}` }
              >
                <TableRow>
                  <td style={ { flex: 1 } }>{name}</td>
                  <td style={ { textAlign: 'right' } }>{amount ? formatAmount2(amount, 2) : 0} ETH</td>
                </TableRow>
              </ExternalLink>
            ))
          }
        </Table>
        <Table style={ { borderTop: 0 } }>
          <TableRow>
            <td style={ { flex: 1 } }>Total raised</td>
            <td style={ { textAlign: 'right' } }>{formatAmount2(donatedTotal, 2)} ETH</td>
          </TableRow>
          <TableRow>
            <td style={ { flex: 1 } }>Goal</td>
            <td style={ { textAlign: 'right' } }>{formatAmount2(data.fundraiseGoal, 2)} ETH</td>
          </TableRow>
          <TableRow style={ { color: isLoading ? '' : toFundraise > 0 ? '#d60000' : '#229000' } }>
            <td style={ { flex: 1 } }>{isLoading ? '-' : toFundraise > 0 ? 'Still missing' : 'Extra ETH'}</td>
            {
              data.fundraiseGoal > donatedTotal ? (
                <td style={ { textAlign: 'right' } }>{formatAmount2(data.fundraiseGoal - donatedTotal, 2)} ETH</td>
              ) : (
                <td style={ { textAlign: 'right' } }>
                  {formatAmount2(donatedTotal - data.fundraiseGoal, 2)} ETH
                </td>                                
              )
            }
          </TableRow>
        </Table>
        <Table style={
 {
          borderTop: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        } 
}>
          <Progress value={ progress }>
            {
progress > 0.18 ? (
            <div>{ formatAmount(progress * 100, 0)}% complete</div>
            ) : null
}
          </Progress>
            {
progress < 0.18 ? (
              <div style={
 {
                color: 'black',
                marginLeft: 10
              } 
}>{formatAmount(progress * 100, 0)}% complete</div>
            ) : null
}
        </Table>
        {
          isRaiseComplete ? null : (
            <div style={ { textAlign: 'center', marginTop: 10, color: '#d60000' } }>
              <CountdownTimer targetDate={ data.deadline } />
            </div>                
          )
        }
        <h1 style={ { marginBottom: 0, marginTop: 40 } }>How can I help?</h1>
        <div style={
          {
            marginTop: 5,
            marginBottom: 25,
          } 
        }>These are all vetted community initiatives. Pick one (or several) you like!</div>
        <div>
          {
            data.initiatives.map(({
              title,
              link,
              description,
              image,
              builders = [],
            }) => (
              <div
                key={ `initiative-${title}` }
                style={
                  {
                    marginBottom: 24,
                    display: 'flex',
                    flexDirection: 'row',
                  } 
                }
              >
                <div style={
                  {
                    width: 64,
                    marginRight: 12,
                  } 
                }>
                  <ExternalLink href={ link }>
                    <Image
                      src={ image }
                      alt={ title }
                      width={ 64 }
                      height={ 64 }
                    />
                  </ExternalLink>
                </div>
                <div style={ { flex: 1, position: 'relative', top: -3 } }>
                  <div>
                    <ExternalLink href={ link } style={ { display:'inline-block' } }>
                      <div>{title}</div>
                    </ExternalLink>
                  </div>
                  <div>{description}</div>
                  <div>
                    <span style={ { marginRight: 8 } }>Made by</span>
                    {
                      builders.map((builder, index) => (
                        <React.Fragment key={ `builder-${builder}-${index}` }>
                          <ExternalLink href={ `https://twitter.com/${builder}` } style={ { display:'inline-block' } }>
                            <div>{builder}</div>
                          </ExternalLink>
                          {index < builders.length - 1 ? <span style={ { marginLeft: 5, marginRight: 5 } }>&</span> : null}
                        </React.Fragment>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div style={
          {
            fontWeight: 'bold',
            marginTop: 30,
          } 
        }>Have a beautiful day!</div>
        <div style={ { marginTop: 20, marginBottom: 5 } }>---</div>
        <div style={
          {
            textAlign: 'left',
            color: 'rgba(0,0,0,0.5)',
          } 
        }>
          <span>Made by </span>
          {
            data.creators.map((creator, index) => (
              <React.Fragment key={ `creator-${creator.name}-${index}` }>
                <ExternalLink href={ creator.link } style={ { display:'inline-block' } }>
                  <div>{creator.name}</div>
                </ExternalLink>
                {index < data.creators.length - 1 ? <span style={ { marginLeft: 5, marginRight: 5 } }>&</span> : null}
              </React.Fragment>
            ))
          }
        </div>
      </div>
      {
        isRaiseComplete ? (
        <SuccessConfetti />
        ) : null
      }
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    host: ctx.req.headers.host || null,
  },
});