import Navbar from "./components/Navbar";
import Cookies from "./components/Cookies";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>BoomBang Alpha 0.1</title>
        <link rel="icon" href="https://pbs.twimg.com/media/ExjwN2RXEAQO5pn.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Cookies />
      </body>
    </html>
  );
}
