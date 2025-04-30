
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CMAProgram from "./pages/programs/CMAProgram";
import CDCSProgram from "./pages/programs/CDCSProgram";
import PMPProgram from "./pages/programs/PMPProgram";
import CIAProgram from "./pages/programs/CIAProgram";
import CISAProgram from "./pages/programs/CISAProgram";
import EnglishProgram from "./pages/programs/EnglishProgram";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs/cma" element={<CMAProgram />} />
          <Route path="/programs/cdcs" element={<CDCSProgram />} />
          <Route path="/programs/pmp" element={<PMPProgram />} />
          <Route path="/programs/cia" element={<CIAProgram />} />
          <Route path="/programs/cisa" element={<CISAProgram />} />
          <Route path="/programs/english" element={<EnglishProgram />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
