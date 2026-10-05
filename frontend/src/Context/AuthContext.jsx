// src/Context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react'
import API from '../api/axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkCurrentUser = async () => {
      try {
        const res = await API.get('/users/current-user')
        if (res.data.success) {
          setUser(res.data.data)
        }
      } catch (error) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    checkCurrentUser()
  }, [])

  const register = async (userData) => {
    try {
      const res = await API.post('/users/register', userData)
      return res.data
    } catch (error) {
      throw error.response?.data?.message || "Registration failed"
    }
  }

  const login = async (credentials) => {
    try {
      const res = await API.post('/users/login', credentials)
      if (res.data.success) {
        setUser(res.data.data.user)
      }
      return res.data
    } catch (error) {
      throw error.response?.data?.message || "Login failed"
    }
  }

  const logout = async () => {
    try {
      await API.post('/users/logout')
      setUser(null)
    } catch (error) {
      console.error("Logout error:", error)
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)