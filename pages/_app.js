import { DateProvider } from "../context/DateContext"; // Adjust the import path based on your file structure

function MyApp({ Component, pageProps }) {
  return (
    <DateProvider>
      {" "}
      {/* Wrap your app with DateProvider */}
      <Component {...pageProps} />
    </DateProvider>
  );
}

export default MyApp;
