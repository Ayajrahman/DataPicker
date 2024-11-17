// src/pages/_app.js or src/app/layout.js (for Next.js 13+ app directory)
import { DateProvider } from "../context/DateContext";

function MyApp({ Component, pageProps }) {
  return (
    <DateProvider>
      <Component {...pageProps} />
    </DateProvider>
  );
}

export default MyApp;
