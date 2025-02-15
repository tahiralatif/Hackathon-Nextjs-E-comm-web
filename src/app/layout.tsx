import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import ReduxProvider from "./redux/provider";
 import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export const metadata = {
  title: "Comforty",
  description: "Comforty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        
          
          <ReduxProvider>
          <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

            <Navbar />
            {children}
            <Footer />
          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
