import AuthPage from "./sign-up/page";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
    {children}
    </>
  );
}