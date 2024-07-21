import React from "react";

const Footer: React.FC = () => {
    return (
    <footer className="footer footer-center text-base-content fixed bottom-0 left-0 w-full bg-gray-800 p-4">
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
    </footer>
)
    ;
};

export default Footer;