import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Navigate } from "react-router-dom";

const handleLogin = (username: string,  
  password: string,  
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,  
  setError: React.Dispatch<React.SetStateAction<string | null>>, 
  setData: React.Dispatch<React.SetStateAction<any>>) => {
  setLoading(true);
  setError(null);
  setData(null);

  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.text()) 
    .then((data) => {
      setData(data)
      localStorage.setItem("token", data)
    })
    .catch((error) => {
      setError('Error during login: ' + error.message);  
      console.error('Error during login:', error);
    })
    .finally(() => {
      setLoading(false);  
    });
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);  
  const [data, setData] = useState(null);  
  const [error, setError] = useState(null);       

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Grouporder Login</CardTitle>
        <CardDescription>Enter your email and password to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            onClick={() => handleLogin(username, password, setLoading, setError, setData)} 
            disabled={loading}  
          >
            {loading ? 'Logging in...' : 'Login'} 
          </Button>

          {error && <div className="text-red-500 mt-2">{error}</div>}  
          {data && <Navigate to="/Orders"></Navigate>}  
        </div>
      </CardContent>
    </Card>
  )
}
