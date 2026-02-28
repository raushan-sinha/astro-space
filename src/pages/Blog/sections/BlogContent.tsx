const BlogContent = () => {
    return (
        <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">

            <div className="grid md:grid-cols-2 gap-8">

                {/* APOD */}
                <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-cyan-500/20 hover:shadow-xl transition duration-500">
                    <h2 className="text-xl font-semibold text-cyan-400 mb-3">
                        Astronomy Picture of the Day (APOD)
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        NASA’s APOD API delivers a stunning astronomical image
                        every day along with a scientific explanation. It’s one of
                        the most popular endpoints used in educational and space
                        themed applications.
                    </p>
                </article>

                {/* Mars Rover */}
                <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-orange-500/20 hover:shadow-xl transition duration-500">
                    <h2 className="text-xl font-semibold text-orange-400 mb-3">
                        Mars Rover Photos API
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Access real images taken by Mars rovers like Curiosity
                        and Perseverance. Developers can filter by date, camera,
                        and rover name to build immersive red-planet experiences.
                    </p>
                </article>

                {/* Asteroids */}
                <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-purple-500/20 hover:shadow-xl transition duration-500">
                    <h2 className="text-xl font-semibold text-purple-400 mb-3">
                        Near Earth Object (NEO) API
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Track asteroids and near-earth objects in real time.
                        This API provides velocity, approach distance, and
                        hazard classification data for space monitoring apps.
                    </p>
                </article>

                {/* Earth Imagery */}
                <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-blue-500/20 hover:shadow-xl transition duration-500">
                    <h2 className="text-xl font-semibold text-blue-400 mb-3">
                        Earth Imagery API
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Retrieve satellite imagery of Earth by latitude and longitude.
                        Perfect for mapping, environmental research, and geospatial
                        visual applications.
                    </p>
                </article>

            </div>
        </section>
    );
}

export default BlogContent;