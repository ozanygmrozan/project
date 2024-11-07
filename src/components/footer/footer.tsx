import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-4">Müşteri Hizmetleri</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Yardım Merkezi</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">İade</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Sipariş Durumu</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Kargo Bilgileri</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Şirket</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Hakkımızda</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Kariyer</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Gizlilik Politikası</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Şartlar ve Koşullar</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Bizi Takip Edin</h4>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Uygulamamızı İndirin</h4>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600">
              <img src="google-play-badge.png" alt="Google Play" />
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600">
              <img src="app-store-badge.png" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-500">&copy; 2024 Şirketiniz. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
