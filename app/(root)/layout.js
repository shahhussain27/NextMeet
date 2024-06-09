import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import LeftSideBar from "@components/layout/LeftSideBar";
import RightSideBar from "@components/layout/RightSideBar";
import MainContainer from "@components/layout/MainContainer";
import BottomBar from "@components/layout/BottomBar";
import "../globals.css";

export const metadata = {
  title: "NextMeet",
  description: "Generated by Next.js",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}  `}>
          <main className="flex flex-row">
          <LeftSideBar />
          <MainContainer>
           
            {children}
          </MainContainer>
          <RightSideBar />
          </main>
          <BottomBar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
