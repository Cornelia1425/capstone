import React from 'react';

export default function ListenHere(){
    const houselist = "https://open.spotify.com/embed/playlist/03U5PFCbznOcmWd9E5EmFx?utm_source=generator&theme=0";

    const hiphoplist = "https://open.spotify.com/embed/playlist/2mYRMzVzbS2mUEudfLSE64?utm_source=generator&theme=0"

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <h1 className='text-2xl font-bold mb-4'>House Music Gospel</h1>
                <iframe
                    className="rounded-md shadow-md"
                    src={houselist}
                    width="300"
                    height="380"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title="Spotify Playlist"
                ></iframe>

            <h1 className='text-2xl font-bold mb-4'>Hip Hop Music Gospel</h1>
                <iframe 
                    className="rounded-md shadow-md"
                    src={hiphoplist}
                    width="300"
                    height="380"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title="Spotify Playlist"
                ></iframe>      
        </div>
    );
};

