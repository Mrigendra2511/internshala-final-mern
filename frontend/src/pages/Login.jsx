// src/pages/Login.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext' 

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login({ email, password })
      alert('Login successful! 🚀')
      navigate('/')
    } catch (err) {
      setError(typeof err === 'string' ? err : 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-[#fafafa]">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-[#333333] text-center mb-2">
          Login to Internshala
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Hi, welcome back! Please enter your details.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-[#008bdc] text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Must be at least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-[#008bdc] text-sm"
            />
          </div>

          <div className="text-right">
            <span className="text-xs text-[#008bdc] font-semibold cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#008bdc] text-white font-semibold py-2.5 rounded-lg hover:bg-[#0670b8] transition duration-200 disabled:opacity-60"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          New to Internshala?{' '}
          <Link to="/register" className="text-[#008bdc] font-semibold hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login