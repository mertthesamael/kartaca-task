"use client";
import "@/style/reset.scss";
import "@/style/global.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserContextWrapper } from "@/store/userContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ItemContextWrapper } from "@/store/itemContext";
import { inter } from "@/config/font";

export default function RootLayout({ children }) {
  const client = new QueryClient();
  return (
    <html lang="en" className={inter.className}>
      <body>
        <QueryClientProvider client={client}>
          <UserContextWrapper>
            <ItemContextWrapper>
              {/* Background animation ref */}
              <div class="background">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              {children}
              <ToastContainer theme="dark" />
            </ItemContextWrapper>
          </UserContextWrapper>
        </QueryClientProvider>
      </body>
    </html>
  );
}
