
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This is a mock login - in a real app, you'd connect this to your authentication system
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: "Welcome back to CBC!",
      });
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/f888d589-1731-4e2a-97b7-3c2d5969b14c.png"
            alt="CBC Logo"
            className="h-16 mx-auto mb-4 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h1 className="text-2xl font-bold text-cbc-navy">Career Building Center</h1>
        </div>
        
        <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-heading text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="rounded border-gray-300" />
                  <Label htmlFor="remember" className="text-sm">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-cbc-gold hover:underline">
                  Forgot password?
                </a>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-cbc-gold hover:bg-amber-600"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 pt-0">
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-cbc-gold hover:underline">
                Sign up
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
