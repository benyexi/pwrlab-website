import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import Facilities from "./pages/Facilities";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/research" component={Research} />
        <Route path="/projects" component={Projects} />
        <Route path="/publications" component={Publications} />
        <Route path="/team" component={Team} />
        <Route path="/facilities" component={Facilities} />
        <Route path="/news" component={News} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
