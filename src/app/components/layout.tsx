import Footer from './footer/footer';
import FooterCTA from './footerCta/footercta';
import Header from './header/header';

export default async function Layout({
  children = <></>,
  CTAtitle = 'Drop us a line or two, we are open for creative minds and collaborations!',
  CTAbtntext = 'Contact Us'
}) {
  return (
    <>
      <div>
        {/* <Header /> */}
        <main>{children}</main>
        <FooterCTA CTAtitle={CTAtitle} CTAbtntext={CTAbtntext} />
        <Footer />
      </div>
    </>
  );
}
