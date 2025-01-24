import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { signal } from '@preact/signals-react'
/*import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import slice from './slice.js'*/

import Header from './components/Header'
import Home from './pages/Home'

import './styles/main.css'

/*
const autoLogin = async () => {
    const timeout = new Promise((_, reject) => { setTimeout(() => reject(new Error('Request timed out')), 5000) })
    try {
        const response = await Promise.race([
            fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL + '/auto-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: document.cookie })
            }),
            timeout
        ])

        if (!response.ok) throw new Error('Network response was not ok')

        let data = await response.json()
        if (!data.success) return null

        return data.user
    }
    catch (error) { return null }
}

const user = signal(await autoLogin())
*/

/*
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

const store = configureStore({
    reducer: { slice }
})
*/

const router = createBrowserRouter([
    {
        element: <><Header /><Outlet /></>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    /*<Provider store={store}>
        <QueryClientProvider client={queryClient}>*/
            <RouterProvider router={router} />
        /*</QueryClientProvider>
    </Provider>*/
)