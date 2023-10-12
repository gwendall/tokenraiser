import NextHead from 'next/head';
import React from 'react';
import data from '~/data';

const viewportContent = [
  'minimum-scale=1.0',
  'maximum-scale=1.0',
  'initial-scale=1.0',
  'user-scalable=no',
  'width=device-width',
].join(', ');

type HeadProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  siteName?: string;
  type?: string;
  twitter?: string;
};

export default function Head({
  title = data.metadata.title,
  description = data.metadata.description,
  image = data.metadata.image,
  url = data.metadata.url,
  siteName = data.metadata.siteName,
  type = data.metadata.type,
  twitter = data.metadata.twitter,
}: HeadProps) {
  return (
    <NextHead>
      {
        title ? (
          <>
            <title>{title}</title>
            <meta data-rh="true" name="title" content={ title } />
            <meta data-rh="true" name="og:title" content={ title } />
            <meta data-rh="true" name="twitter:title" content={ title } />
          </>
        ) : null
      }
      {
        description ? (
          <>
            <meta data-rh="true" name="description" content={ description } />
            <meta data-rh="true" name="og:description" content={ description } />
            <meta data-rh="true" name="twitter:description" content={ description } />
          </>
        ) : null
      }
      {
        image ? (
          <>
            <meta data-rh="true" name="image" content={ image } />
            <meta data-rh="true" name="og:image" content={ image } />
            <meta data-rh="true" name="twitter:image" content={ image } />
          </>
        ) : null
      }
      <meta data-rh="true" name="og:type" content={ type } />
      <meta data-rh="true" name="og:site_name" content={ siteName } />
      <meta data-rh="true" name="og:url" content={ url } />
      <meta name="viewport" content={ viewportContent } />
      <meta name="theme-color" content="#000000" />
      {
twitter ? (
        <>
          <meta data-rh="true" name="twitter:card" content="summary_large_image" />
          <meta data-rh="true" name="twitter:site" content={ `@${twitter}` } />
          <meta data-rh="true" name="twitter:creator" content={ `@${twitter}` } />      
        </>
      ) : null
}
    </NextHead>
  );
}