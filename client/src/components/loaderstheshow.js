export async function videosLoaderShow(){
    const response = await fetch ('/api/theshow')
    if (!response.ok) {
        throw new Error('Failed to fetch shows');
    }
    const data = await response.json()
    console.log(data)
    return data
}