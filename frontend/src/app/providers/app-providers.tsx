import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

interface AppProvidersProps{
    children: ReactNode
}

export const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <BrowserRouter>
            <ConfigProvider>
                {children}
            </ConfigProvider>
        </BrowserRouter>
    )
}