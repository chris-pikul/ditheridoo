import Footer from './widgets/Footer';
import Header from './widgets/Header';
import Input from './widgets/Input';
import Output from './widgets/Output';
import Settings from './widgets/Settings';
import Toolbar from './widgets/Toolbar';

export function Application() {
    return (
        <>
            <Header />
            <Toolbar />
            <Settings />
            <Input />
            <Output />
            <Footer />
        </>
    );
}
