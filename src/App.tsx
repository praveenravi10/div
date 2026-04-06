import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/context/ToastContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ToastContainer } from '@/components/ui/ToastContainer';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import Home from '@/pages/Home';

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          {/* Skip-to-main for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[200] px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg focus:outline-none"
          >
            Skip to main content
          </a>

          <div className="min-h-screen bg-dark-bg text-white antialiased font-sans">
            <Navbar />

            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                {/* 404 */}
                <Route
                  path="*"
                  element={
                    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
                      <h1 className="text-8xl font-black text-white/10">404</h1>
                      <h2 className="text-2xl font-semibold text-white">Page not found</h2>
                      <p className="text-gray-400">The page you're looking for doesn't exist.</p>
                      <a
                        href="/"
                        className="mt-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Go home
                      </a>
                    </div>
                  }
                />
              </Routes>
            </ErrorBoundary>

            <Footer />
          </div>

          <ToastContainer />
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
}
