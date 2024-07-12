
import AuthProvider from "./components/authProvider";
import Navbar from "./components/navbar";
import "./globals.css";



export const metadata = {
  title: "Next-auth-tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className="bg-gray-100">
        <AuthProvider>
        <Navbar/>
        <div className="m-2">{children}</div>
        </AuthProvider>
        </body>
    </html>
  );
}
