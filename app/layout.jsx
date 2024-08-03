import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

//Tutorial: https://www.youtube.com/watch?v=wm5gMKuwSYk&t=213s 53:20

export const metadata = {
    title: "Promptopia",
    description: "Discover and Share AI promts",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
