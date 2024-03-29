import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';
import { cn } from '@/lib/utils';
import Layout from '@/components/Layout';
import { Toaster } from "@/components/ui/toaster"
import { NextSeo, DefaultSeo } from 'next-seo';
import dynamic from 'next/dynamic'
import { APP_NAME, WC_PROJECT_ID, WEBSITE_URL, SUPABSE_API_KEY, SUPABSE_APP_URL } from '@/assets/constant';
import { Avalanche, AvalancheTestnet } from '@particle-network/chains';
import { AuthCoreContextProvider } from '@particle-network/auth-core-modal';
import { UserContextProvider } from '@/providers/UserContext';
import {createConfig, WagmiConfig, mainnet} from 'wagmi'
import {http, createPublicClient} from 'viem'
import {avalancheFuji} from 'wagmi/chains'
//import {metaMask, injected} from 'wagmi/connectors'

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'

//import { SessionProvider } from 'next-auth/react';
const PWAInstall = dynamic(() => import('../components/PwaInstall'), {
  ssr: false,
})

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps <{
  initialSession: Session
}>) {


      // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient(
{
  supabaseUrl : SUPABSE_APP_URL,
  supabaseKey : SUPABSE_API_KEY
}
  ))

  const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
      chain: mainnet,
      transport: http()
    }),
  })
  return (
 
   
    <AuthCoreContextProvider
    options={{
      projectId: "5d8ff4b5-9f56-42b9-94a9-3e571dd76971",
      clientKey: "coEAg8IqDkfoJRvQEs7E77VQo2TMEoXaCmwAYBGw",
      appId: "2425631a-545c-46b6-8e9f-d57303ce9d68",
      erc4337: {
        name: 'SIMPLE',
        version: '1.0.0',
      },
      wallet: {
        visible: true,
        customStyle: {
            supportChains: [AvalancheTestnet ],
        }
      }
    }}
  >
     <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
     <QueryClientProvider client={queryClient}>
    
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        
       >
       
    <WagmiConfig config={config}>
      <Layout>
  
        <NextNProgress color="#4f46e5" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}  />
         <>
         <DefaultSeo
            title='Paxfy'
            description='Paxfy - decentralized video-sharing platform. designed to revolutionize your digital content experience.Take control of your content'
            openGraph={{
              url: `${WEBSITE_URL}`,
              title: 'Paxfy',
              description: 'Paxfy - decentralized video-sharing platform. designed to revolutionize your digital content experience.Take control of your content',
              images: [
                {
                  url: `/img/website-banner.png`,
                  width: 800,
                  height: 600,
                  alt: 'Og Image Alt',
                  type: 'image/jpeg',
                },
                {
                  url: `/img/website-banner.png`,
                  width: 900,
                  height: 800,
                  alt: 'Og Image Alt Second',
                  type: 'image/jpeg',
                },
              ],
              siteName: `${APP_NAME}`,
            }}
            twitter={{
              handle: '@paxfy',
              site: '@paxfy',
              cardType: 'summary_large_image',
            }}
         />
        
         <Component {...pageProps} />
        
         <PWAInstall />

         </>

    </Layout>
    </WagmiConfig>
    <Toaster />
    </ThemeProvider>
    
    </QueryClientProvider>
    </SessionContextProvider>
    </AuthCoreContextProvider>
   
  ) 
}
