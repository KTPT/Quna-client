import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(
      (App: JSX.IntrinsicAttributes) => (props: JSX.IntrinsicAttributes) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return {...page, styleTags};
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore*/}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
