import './styles/global.css';
import HomePage from './pages/HomePage';

/**
 * CorenexLIMS — App Root
 *
 * Route structure (extend with React Router as needed):
 *
 * /            → HomePage
 * /features    → FeaturesPage
 * /pricing     → PricingPage
 * /modules/:id → ModulePage
 * /blog        → BlogPage
 * /contact     → ContactPage
 * /login       → LoginPage
 * /signup      → SignupPage
 */

export default function App() {
  return (
    <div id="app">
      {/* Swap <HomePage /> for a <Router> + <Routes> setup when adding multi-page routing */}
      <HomePage />
    </div>
  );
}
