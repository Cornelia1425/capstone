async function fetchData(endpoint){
    const response = await fetch (`/api/${endpoint}`)
    return response.json()

    // try {
    //     const response = await fetch(`/api/${endpoint}`);
    //     if (!response.ok) {
    //         throw new Error(`Failed to fetch data from ${endpoint}`);
    //     }
    //     const data = await response.json();  // Parse JSON once
    //     console.log(`Fetched data from ${endpoint}:`, data);  // Log data for debugging
    //     return data;
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    //     throw error; // Rethrow error for handling in calling code
    // }
  
}

export const videosLoader = {
    interviews: ()=>fetchData('interviews'),
    theshow: ()=>fetchData('theshow')
}
