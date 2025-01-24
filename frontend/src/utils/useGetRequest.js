export const useGetRequest = async (endpoint) => {
    try {
        const response = await fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL + '/' + endpoint)

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        const data = await response.json()
        return data
    }
    catch (error) { return { success: false, msg: "An error occurred while processing your request." } }
}