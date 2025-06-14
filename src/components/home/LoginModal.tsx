
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function LoginModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - replace with real logic
    onOpenChange(false);
    navigate("/dashboard");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>Access your student portal</DialogDescription>
        </DialogHeader>
        <form className="space-y-6 py-2" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              autoComplete="username"
              placeholder="you@university.ac.tz"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="h-12"
            />
          </div>
          <DialogFooter className="gap-2 flex flex-col items-center">
            <Button className="w-full h-12" type="submit">Login</Button>
            <div className="text-center text-sm">
              New here?{" "}
              <Link to="/register" className="text-blue-600 hover:underline" onClick={() => onOpenChange(false)}>
                Register
              </Link>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
