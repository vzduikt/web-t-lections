import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lecture1 from '@/lectures/Lecture1';
import Lecture2 from '@/lectures/Lecture2';
import Lecture3 from './lectures/Lecture3';
import Lecture4 from './lectures/Lecture4';
import Lecture5 from './lectures/Lecture5';
import { Header, HomePage, Footer } from '@components';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lecture1" element={<Lecture4 />} />
            <Route path="/lecture2" element={<Lecture1 />} />
            <Route path="/lecture3" element={<Lecture2 />} />
            <Route path="/lecture4" element={<Lecture3 />} />
            <Route path="/lecture5" element={<Lecture5 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
