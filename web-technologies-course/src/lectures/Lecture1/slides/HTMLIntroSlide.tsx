import React from 'react';

const HTMLIntroSlide: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Вступ до HTML</h2>
      <p className="mb-4">HTML (HyperText Markup Language) - це стандартна мова розмітки для створення веб-сторінок.</p>
      <div className="flex justify-center mb-6">
        <div className="bg-blue-100 p-4 rounded-lg max-w-md">
          <p className="font-semibold">В цій лекції ми дізнаємося:</p>
          <p>• Структуру HTML-документа</p>
          <p>• Основні теги HTML</p>
          <p>• Як створити просту веб-сторінку</p>
        </div>
      </div>
    </div>
  );
};

export default HTMLIntroSlide;