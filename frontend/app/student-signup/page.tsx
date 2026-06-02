'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Eye,
  EyeOff,
  GraduationCap,
  Mail,
  Lock
} from 'lucide-react'

import {
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'

import {
  auth,
  googleProvider
} from '@/lib/firebase'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

export default function StudentLoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    try {
      setLoading(true)
      setError('')

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      router.push('/student-dashboard')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      setLoading(true)
      setError('')

      await signInWithPopup(
        auth,
        googleProvider
      )

      router.push('/student-dashboard')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">

      <div className="absolute inset-0 opacity-30" />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }}
        className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity
        }}
        className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative z-10 grid min-h-screen lg:grid-cols-2">

        <div className="hidden lg:flex flex-col justify-center px-16">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="h-10 w-10 text-primary" />

              <h1 className="text-4xl font-bold">
                InCrafto
              </h1>
            </div>

            <h2 className="mb-6 text-6xl font-bold leading-tight">
              Craft Your
              <span className="block gradient-text">
                Future Today
              </span>
            </h2>

            <p className="mb-10 max-w-xl text-lg text-muted-foreground">
              Join thousands of students learning
              Web Development, Python, AI,
              Digital Marketing and more.
            </p>

            <div className="space-y-4">

              <div className="glass rounded-xl p-4">
                🚀 Live Projects & Industry Experience
              </div>

              <div className="glass rounded-xl p-4">
                🎯 Placement & Career Support
              </div>

              <div className="glass rounded-xl p-4">
                📚 Expert Trainers & Updated Curriculum
              </div>

            </div>

          </motion.div>

        </div>

        <div className="flex items-center justify-center px-6 py-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >

            <Card className="border-white/10 backdrop-blur-xl">

              <CardContent className="p-8">

                <div className="mb-8 text-center">

                  <h1 className="text-3xl font-bold">
                    Welcome Back
                  </h1>

                  <p className="mt-2 text-muted-foreground">
                    Login to continue your learning journey
                  </p>

                </div>

                <form
                  onSubmit={handleLogin}
                  className="space-y-5"
                >

                  <div className="relative">

                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />

                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="pl-10 h-12"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                    />

                  </div>

                  <div className="relative">

                    <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />

                    <Input
                      type={
                        showPassword
                          ? 'text'
                          : 'password'
                      }
                      placeholder="Password"
                      className="pl-10 pr-12 h-12"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute right-3 top-3"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>

                  </div>

                  {error && (
                    <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-500">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 w-full"
                  >
                    {loading
                      ? 'Please wait...'
                      : 'Login'}
                  </Button>

                </form>

                <div className="my-6 flex items-center">
                  <div className="flex-1 border-t" />
                  <span className="px-3 text-sm text-muted-foreground">
                    OR
                  </span>
                  <div className="flex-1 border-t" />
                </div>

                <Button
                  variant="outline"
                  onClick={handleGoogleLogin}
                  className="h-12 w-full"
                >
                  Continue with Google
                </Button>

                <div className="mt-8 text-center">

                  <p className="text-sm text-muted-foreground">

                    Don't have an account?{' '}

                    <Link
                      href="/student-signup"
                      className="font-semibold text-primary hover:underline"
                    >
                      Create Account
                    </Link>

                  </p>

                </div>

              </CardContent>

            </Card>

          </motion.div>

        </div>

      </div>

    </div>
  )
}