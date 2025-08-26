import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Router from "./Routes/Router";
// import { ThemeProvider } from "./provider/ThemeProvider";
// import { LanguageProvider } from "./provider/LanguageProvider";
import Authprovider from "./provider/AuthProvider";
// import AuthProvider from "./provider/AuthProvider.jsx";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider>
      <LanguageProvider> */}
        <Authprovider>
        <QueryClientProvider client={queryClient}>
          <div className="max--screen-xl mx-auto">
            <RouterProvider router={Router}></RouterProvider>
          </div>
        </QueryClientProvider>
        </Authprovider>
      {/* </LanguageProvider>
    </ThemeProvider> */}
  </StrictMode >,
)