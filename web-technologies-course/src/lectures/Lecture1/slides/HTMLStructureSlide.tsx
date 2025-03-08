import React from 'react';

const HTMLStructureSlide: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Базова структура HTML-документа</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Основні елементи:</h3>
          <p><code className="bg-gray-200 px-1 rounded">!DOCTYPE html</code> - оголошення типу документа</p>
          <p><code className="bg-gray-200 px-1 rounded">html</code> - кореневий елемент</p>
          <p><code className="bg-gray-200 px-1 rounded">head</code> - метаінформація</p>
          <p><code className="bg-gray-200 px-1 rounded">title</code> - заголовок сторінки</p>
          <p><code className="bg-gray-200 px-1 rounded">body</code> - вміст сторінки</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Приклад:</h3>
          <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-auto">
            {`<!DOCTYPE html>
<html>
<head>
  <title>Заголовок сторінки</title>
</head>
<body>
  <!-- Вміст сторінки -->
</body>
</html>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default HTMLStructureSlide;