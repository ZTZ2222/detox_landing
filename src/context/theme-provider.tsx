"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

/**
 * Provides a theme context for the application using NextThemesProvider
 * @param {Object} props - The properties passed to the ThemeProvider
 * @param {React.ReactNode} props.children - The child components to be wrapped by the theme provider
 * @param {...any} props.props - Additional properties to be spread onto the NextThemesProvider
 * @returns {JSX.Element} A NextThemesProvider component wrapping the children
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
