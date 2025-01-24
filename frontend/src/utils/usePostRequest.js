export const usePostRequest = async (endpoint, requestBody) => {
    try {
        const response = await fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL + '/' + endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`)

        const data = await response.json()
        return data
    }
    catch (error) { return { success: false, msg: "An error occurred while processing your request." } }
}