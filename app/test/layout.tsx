import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Home from "./page";
import ExampleComponent from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout() {
  return (
<ExampleComponent />
  );
}
