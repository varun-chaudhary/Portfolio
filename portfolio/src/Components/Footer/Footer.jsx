import React from 'react';

const Footer = ({ darkMode }) => {
    return (
        <div>
            <footer className="rounded-lg m-10 mx-4 md:mx-28"
                style={{
                    backgroundColor: darkMode ? "#191924" : "white",
                    boxShadow: "0 0 3px #0070ff"
                }}>
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="text-sm text-center" style={{ color: darkMode ? "#FFFFFF" : "#000000" }}>
                        <p>&copy; 2025 Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
