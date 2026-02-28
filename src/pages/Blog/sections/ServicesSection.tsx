const ServicesSection = () => {
    return (
        <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 text-center hover:shadow-lg hover:shadow-indigo-500/20 transition duration-500">

                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    Why Use NASA APIs?
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                    NASA provides free and publicly accessible APIs that empower
                    developers, researchers, educators, and students to integrate
                    real scientific data into their applications. With structured
                    RESTful endpoints and JSON responses, these APIs make space
                    innovation more accessible than ever.
                </p>

            </div>

        </section>
    );
}

export default ServicesSection;