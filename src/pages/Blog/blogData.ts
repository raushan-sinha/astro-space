export interface BlogContent {
    heading: string,
    para: string,
    textColor: string,
    hoverColor: string
}

export const BLOGDATA: BlogContent[] = [
    {
        heading: "Astronomy Picture of the Day (APOD)",
        para:
            "NASA's APOD API delivers a stunning astronomical image every day along with a scientific explanation. It's one of the most popular endpoints used in educational and space themed applications.",
        textColor: "text-cyan-400",
        hoverColor: "hover:shadow-cyan-500/20",
    },
    {
        heading: "Mars Rover Photos API",
        para:
            "Access real images taken by Mars rovers like Curiosity and Perseverance. Developers can filter by date, camera, and rover name to build immersive red-planet experiences.",
        textColor: "text-orange-400",
        hoverColor: "hover:shadow-orange-500/20",
    },
    {
        heading: "Near Earth Object (NEO) API",
        para:
            "Track asteroids and near-earth objects in real time. This API provides velocity, approach distance, and hazard classification data for space monitoring apps.",
        textColor: "text-purple-400",
        hoverColor: "hover:shadow-purple-500/20",
    },
    {
        heading: "Earth Imagery API",
        para:
            "Retrieve satellite imagery of Earth by latitude and longitude. Perfect for mapping, environmental research, and geospatial visual applications.",
        textColor: "text-blue-400",
        hoverColor: "hover:shadow-blue-500/20",
    },
]