import { useEffect, useState } from "react";

export default function useGameCover({gamesId}) {
    const [gameCovers, setGameCovers] = useState([]);

    useEffect(() => {
        let covers = {};
        async function getGameCovers() {
            console.log(gamesId);
            try{
            for (const id of gamesId){
                const res = await fetch(`https://m1.dysnomia.studio/api/Games/screenshots/${id}`);

                if (!res.ok) {
                    throw new Error(await res.text());
                }

                console.log("zeza")

                const cover = await res.json();
                covers[id] = cover[0].url;
                console.log(covers)
            }

            setGameCovers(covers);
        }catch(error) {
                console.error(error);
            }
        }
        getGameCovers();
    }, []);

    return gameCovers;
}