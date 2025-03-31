import { Facebook, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Branding & Trust Badges */}
        <div>
          <h1 className="text-3xl font-bold">
          <Link href="/">
          <Image
            src="/footer.png"
            alt="logo"
            width={200}
            height={60}
            className="h-20 py-1 w-auto object-contain"
          />
        </Link>

          </h1>
          <p className="mt-2 text-gray-700 text-sm">
            AI-powered career development for everyone, from students to job-seekers.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <img src="/F3.png" alt="Charity Navigator" className="h-12" />
            <img src="/F2.png" alt="Gold Transparency 2024" className="h-12" />
            <img src="/F1.png" alt="NCDA Member" className="h-12" />
          </div>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold">Coach</h2>
            <ul className="text-sm text-gray-600 space-y-2 mt-2">
              <li>About Coach</li>
              <li>Help Center</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">HireTrack</h2>
            <ul className="text-sm text-gray-600 space-y-2 mt-2">
              <li>Home</li>
              <li>Mission</li>
              <li>Ask a Question</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Social Media & Legal */}
        <div>
          <h2 className="font-semibold">Connect with us</h2>
          <div className="flex space-x-4 mt-2">

            {/* <FaLinkedin className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
            <FaFacebook className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" /> */}
            <Facebook className="text-white text-2xl cursor-pointer " />
            <Linkedin className="text-white text-2xl cursor-pointer " />
            <Mail className="text-white text-2xl cursor-pointer " />
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <p className="mb-1">Privacy Policy | Terms and Conditions</p>
            <p>
            © Copyright {currentYear}. All Rights Reserved HireTrack<br />
             
            </p>
          </div>
        </div>
      </div>

      {/* Accessibility Button */}
     
    </footer>
  );
}
