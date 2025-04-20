import './Footer.css';

export default function Footer() {
    return (
        <footer id='app-footer'>
            <span>© {new Date().getFullYear()} Chris Pikul, All Rights Reserved.</span>
        </footer>
    );
}
