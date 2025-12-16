import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import { Noto_Sans_SC } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  display: 'swap',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={notoSansSC.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
      <GoogleAnalytics gaId="G-LS2KMQZ86F" />
    </html>
  );
}
