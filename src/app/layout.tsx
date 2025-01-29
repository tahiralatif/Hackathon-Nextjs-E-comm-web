
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ReduxProvider from "./redux/provider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >

        <ReduxProvider>
        <Navbar/>
        {children}
        <Footer/>
        </ReduxProvider>
       
      </body>
    </html>
  );
}
