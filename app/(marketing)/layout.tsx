import Navbar from '@/components/marketing/navbar';
// import MarketingFooter from '@/components/marketing/footer';
// import '@/styles/marketing.css';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}