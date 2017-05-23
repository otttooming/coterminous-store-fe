import React from 'react'
import Head from 'next/head'
export default ({children, title={title}}) => (
  <div>
      <Head>
          <title>{title} This page has a title 🤔</title>
          <link rel='stylesheet' id='desirees-style-css'  href='https://www.aadliaare.ee/wp-content/themes/desirees/dist/styles/style.min.css?ver=3' type='text/css' media='all' />

          <style>{`
            body {
              color: #333;
            }
          `}</style>
      </Head>

      <header>
      </header>
    </div>
)