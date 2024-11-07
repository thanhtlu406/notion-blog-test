import { AppPropsWithLayout } from "../types"

// Extend the Window interface to include turnstile
declare global {
  interface Window {
    turnstile?: {
      render: (
        id: string,
        options: { sitekey: string; callback: (token: string) => void }
      ) => void
    }
  }
}
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
import Script from "next/script"
import { useState } from "react"
import React from "react"
import { CONFIG } from "site.config"

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  const [isVerify, setVerify] = useState(false)

  const handleVerify = async (token: string) => {
    setTimeout(() => {
      if (token) {
        setVerify(true)
      } else {
        setVerify(false)
      }
    }, 500)
  }
  const isProduction = CONFIG.isProd
  return (
    <React.Fragment>
      {isProduction && (
        <React.Fragment>
          {" "}
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            onLoad={() => {
              window.turnstile?.render("#turnstile-widget", {
                sitekey: CONFIG.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
                callback: handleVerify,
              })
            }}
          />
          {!isVerify && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", // Full viewport height
              }}
            >
              <div id="turnstile-widget"></div>
            </div>
          )}
        </React.Fragment>
      )}
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
        </Hydrate>
      </QueryClientProvider>
    </React.Fragment>
  )
}

export default App
