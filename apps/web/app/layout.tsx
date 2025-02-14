import '@mantine/core/styles.css';
import classes from './layout.module.css';

import { Plus_Jakarta_Sans } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import { theme, variablesResolver } from '@/theme/theme';

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer';
import { Content } from '@/components/Content/Content';
import { Gtm } from '@/components/Gtm';

export const metadata = {
  title: 'Sunodo',
  description: 'The easiest way to build, deploy and manage Cartesi Rollups DApps',
};

const font = Plus_Jakarta_Sans({
  display: 'swap',
  weight: ['400', '700'],
  subsets: ['latin-ext'],
});

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" forceColorScheme="light" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={classes.wrapper}>
        <Gtm />
        <MantineProvider theme={theme} cssVariablesResolver={variablesResolver}>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
