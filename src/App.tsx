import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ArticlesGrid from "./components/ArticlesGrid";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AIToolsPage from "./pages/AIToolsPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import { Toaster } from "./components/ui/sonner";

function HomePage() {
  return (
    <>
      <Hero />
      <ArticlesGrid />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background" dir="rtl">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-tools" element={<AIToolsPage />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
