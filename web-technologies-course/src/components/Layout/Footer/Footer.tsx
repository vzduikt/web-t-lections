import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Курс WEB-технології та WEB-дизайн</p>
      </div>
    </footer>
  );
};

export default Footer;