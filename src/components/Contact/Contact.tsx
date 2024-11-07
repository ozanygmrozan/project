import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white p-6">
      <div className="container mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">İletişim</h1>
        <p className="text-lg mb-4">
          Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Adres</h2>
            <p>123 Cadde Adı, Şehir, Ülke</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Telefon</h2>
            <p>+90 123 456 78 90</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">E-posta</h2>
            <p>info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
