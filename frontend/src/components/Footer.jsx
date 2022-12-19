import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <footer className="footer">
            <div>
                <Link>About Us</Link>
                <Link>Privacy Policy</Link>
                <Link>Cookie Policy</Link>
                <Link>Billing Policy</Link>
            </div>

            <div>
                <Link>Contact Us</Link>
                <Link>FAQs</Link>
                <Link>Safety Tips</Link>
            </div>

            <div>
                <Link>Our Facebook</Link>
                <Link>Our Instagram</Link>
                <Link>Our Twitter</Link>
                <Link>Our YouTube</Link>
            </div>

            <p>© 2022 Copyright | Sawwam</p>
        </footer>
    )
}