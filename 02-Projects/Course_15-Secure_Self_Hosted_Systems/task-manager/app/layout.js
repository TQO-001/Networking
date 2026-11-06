import './globals.css';

export const metadata = {
  title: 'Task Ledger | Course 15',
  description: 'A private, identity-protected task manager portfolio project.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
