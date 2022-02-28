import Header from './header';
import Banner from './banner';
import Main from './main';
import Footer from './footer';

export default function Homepage() {
    return (
        <>
        <Header />
        <div class="Homepage container">
            <Banner />
            <Main />
            <Footer />
        </div>
        </>
    );
}  // end Homepage