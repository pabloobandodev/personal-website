import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    }
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          <link rel='shortcut icon' href='/images/spaceship.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </html>
    )
  }
}

export default MyDocument
