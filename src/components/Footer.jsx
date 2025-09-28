import React from 'react';
import { Twitter, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { IoLogoInstagram, IoLogoTiktok, IoLogoFacebook } from "react-icons/io5";
import logo from '../assets/logo_dark.png';

const Footer = () => {
  return (
    <footer className="bg-blue-950  pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={logo}
                alt="Asahikarimulya Logo" 
                className="h-14 w-12"
              />
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-white">
              Asa Hikari Mulya adalah pusat pelatihan bahasa Jepang terpercaya yang mempersiapkan Anda untuk bekerja di Jepang melalui program Specified Skilled Worker (SSW) dan Magang. Dapatkan pelatihan intensif, sertifikasi resmi, dan penempatan kerja dengan kurikulum berbasis kebutuhan pasar kerja Jepang.
            </p>
              <iframe
                title="Lokasi Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31618.58296907286!2d111.476565!3d-7.86124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a18cbe9a9b4d%3A0xc2a43dddf592cecb!2sPT%20ASA%20HIKARI%20MULYA%20(LPK)!5e0!3m2!1sid!2sid!4v1758374208964!5m2!1sid!2sid" // ganti dengan URL embed map kamu
                className="border-0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                width={320}
                height={220}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
          
          {/* Menus */}
          <div className='text-white'>
            <h4 className="text-lg font-bold  mb-4">Menus</h4>
            <ul className="space-y-2">
              <li><a href="#home" className=" hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#about" className=" hover:text-blue-600 transition-colors">Kelas</a></li>
              <li><a href="#registration" className=" hover:text-blue-600 transition-colors">Pengajar</a></li>
              <li><a href="#event-info" className=" hover:text-blue-600 transition-colors">Mitra Asa Hikari Mulya</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className='text-white'>
            <h4 className="text-lg font-bold  mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                <p className=" text-sm">
                  Pusat Pelatihan dan Pendidikan Bahasa Serta Budaya Jepang<br />
                  Jl. Betoro Katong, Nomor 22, Kelurahan Nologaten,<br />
                  Kecamatan Ponorogo, Kabupaten Ponorogo, Kode Pos 63411
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600" size={16} />
                <p className=" text-sm">asahikarimulya82@gmail.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600" size={16} />
                <p className=" text-sm">6281 395 554 334</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="text-md font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="https://www.tiktok.com/@asahikarimulya.official?_t=ZS-8ymiuOWavwu&_r=1" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
                  <IoLogoTiktok size={16} />
                </a>
                <a href="https://www.instagram.com/asahikarimulya.official?igsh=bzIwb3gzdXVjY2Iy" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
                  <IoLogoInstagram size={16} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550357071704" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
                <IoLogoFacebook size={16}/>
                </a>
                <a href="https://www.youtube.com/@asahikarimulyaofficiall" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 text-white">
          <div className="text-center  text-sm">
            <p>© 2025 Asa Hikari Mulya. All rights reserved. Powered by <a href="#" className="text-blue-600 hover:underline">SavanaIt</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;