import React, { useState } from 'react';

const InteractiveEditorSlide: React.FC = () => {
  const [codeExample, setCodeExample] = useState(`<!DOCTYPE html>
<html>
<head>
  <title>Моя перша веб-сторінка</title>
</head>
<body>
  <h1>Привіт, світ!</h1>
  <p>Це моя перша веб-сторінка.</p>
</body>
</html>`);

  const [previewCode, setPreviewCode] = useState(codeExample);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Спробуйте HTML на практиці</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold mb-2">Редактор коду:</h3>
          <textarea 
            className="w-full h-64 p-3 border border-gray-300 rounded font-mono text-sm"
            value={codeExample}
            onChange={(e) => setCodeExample(e.target.value)}
          />
          <button 
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setPreviewCode(codeExample)}
          >
            Оновити перегляд
          </button>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Результат:</h3>
          <div className="border border-gray-300 rounded h-64 p-4 bg-white">
            <iframe
              title="preview"
              srcDoc={previewCode}
              style={{ width: '100%', height: '100%', border: 'none' }}
              sandbox="allow-same-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveEditorSlide;