import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Send login request to the backend
      const response = await axios.post('https://vie-rase-backend.onrender.com/api/login', { email, password });

      // Store userId in local storage
      localStorage.setItem('userId', response.data.userId);

      // Optionally store token for authentication
      localStorage.setItem('token', response.data.token);

      // Call the onLogin function passed as a prop
      onLogin(email, password);

      // Redirect to the homepage or another page
      router.push('/SubmitManuscript');
    } catch (error: any) {
      toast.error('An error occurred during login.');
      console.error('Login error:', error.response?.data || error.message); // Log error details
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full sm:max-w-md p-6 sm:p-8 bg-white rounded-lg shadow-lg">
        <Link
          href="/"
          className="text-white text-xl px-4 py-2 bg-primary rounded-lg absolute left-0 top-0 cursor-pointer"
        >
          X
        </Link>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-primary">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 pr-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
                placeholder="Your Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-2"
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} className="text-gray-500" />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} className="text-gray-500" />
                )}
              </button>
            </div>
          </div>
          <div className="text-right text-sm text-gray-600 hover:text-gray-800">
            <Link href="/ForgotPassword">Forgot Password?</Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-primary text-white font-semibold py-2 rounded-lg mt-4 transition-colors duration-200 ${loading ? 'bg-opacity-60 cursor-not-allowed' : 'hover:bg-primary-dark'}`}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="loader ease-linear rounded-full border-2 border-t-2 border-white h-6 w-6 animate-spin"></div>
                <div className="ml-3">Loading...</div>
              </div>
            ) : (
              'Login'
            )}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-700">
          New here?{' '}
          <Link href="/signup" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
