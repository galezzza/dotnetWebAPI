import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Layout, Menu} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const items = [
  {key: "home", label : <Link href={"/"}>Home</Link>},
  {key: "books", label : <Link href={"/books"}>Books</Link>}
]

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh"}}>
          <Header>
            <Menu 
              theme="dark" 
              mode="horizontal" 
              items={items} 
              style={{flex: 1, minWidth: 0}}/>
          </Header>{" "}
          <Content style={{padding: "0 48px"}}>
            {children}
          </Content>
          <Footer style={{textAlign: "center"}}>
            Book store 2025 Created by galezzza
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
