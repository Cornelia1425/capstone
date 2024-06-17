export async function videosLoader(){
    const response = await fetch ('/api/interviews')

    const data = await response.json()
    console.log(data)
    return data
}