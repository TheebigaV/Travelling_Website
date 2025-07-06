import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';


export const metadata = {
  title: 'Wanderlust Travels',
  description: 'Plan your perfect trip!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
