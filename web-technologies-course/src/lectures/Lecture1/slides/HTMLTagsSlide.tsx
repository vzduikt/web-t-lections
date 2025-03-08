import React from 'react';

const HTMLTagsSlide: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-2">Заголовки:</h3>
          <div className="bg-gray-100 p-3 rounded-lg mb-4">
            <p><code className="bg-gray-200 px-1 rounded">h1</code> - найважливіший заголовок</p>
            <p><code className="bg-gray-200 px-1 rounded">h2</code> - підзаголовок</p>
            <p><code className="bg-gray-200 px-1 rounded">h3</code> - ...</p>
            <p><code className="bg-gray-200 px-1 rounded">h6</code> - найменш важливий заголовок</p>
          </div>
          
          <h3 className="font-bold mb-2">Текст:</h3>
          <div className="bg-gray-100 p-3 rounded-lg">
            <p><code className="bg-gray-200 px-1 rounded">p</code> - параграф</p>
            <p><code className="bg-gray-200 px-1 rounded">br</code> - перенос рядка</p>
            <p><code className="bg-gray-200 px-1 rounded">strong</code> або <code className="bg-gray-200 px-1 rounded">b</code> - жирний текст</p>
            <p><code className="bg-gray-200 px-1 rounded">em</code> або <code className="bg-gray-200 px-1 rounded">i</code> - курсив</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Списки:</h3>
          <div className="bg-gray-100 p-3 rounded-lg mb-4">
            <p><code className="bg-gray-200 px-1 rounded">ul</code> - маркований список</p>
            <p><code className="bg-gray-200 px-1 rounded">ol</code> - нумерований список</p>
            <p><code className="bg-gray-200 px-1 rounded">li</code> - елемент списку</p>
          </div>
          
          <h3 className="font-bold mb-2">Посилання і зображення:</h3>
          <div className="bg-gray-100 p-3 rounded-lg">
            <p><code className="bg-gray-200 px-1 rounded">a</code> - посилання</p>
            <p><code className="bg-gray-200 px-1 rounded">img</code> - зображення</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLTagsSlide;