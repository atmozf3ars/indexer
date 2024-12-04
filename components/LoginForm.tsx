import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LoginFormProps {
    onLogin: (password: string) => void
    error: string
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin, error }) => {
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onLogin(password)
    }

    return (
        <motion.div
            className="bg-white/80 dark:bg-gray-900/80 p-8 rounded-lg shadow-md w-96 relative z-10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-300">INNERCIRCLE.STORE</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Password
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10"
                            placeholder="Enter password"
                        />
                    </div>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button type="submit" className="w-full">
                    Login
                </Button>
            </form>
        </motion.div>
    )
}

