import Footer from './footer/footer';
import Header from './header/header';

export default async function Layout({ children = <></> }) {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
