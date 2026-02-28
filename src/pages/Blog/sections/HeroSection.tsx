const HeroSection = () => {
    return (
        <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-14 text-center">
            <header>
                <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    NASA Space APIs & Cosmic Data Services
                </h1>

                <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                    Explore publicly available APIs and space data services
                    provided by NASA. From astronomy pictures to asteroid tracking,
                    discover how developers can access real cosmic intelligence.
                </p>
            </header>
        </section>
    );
}

export default HeroSection;