import BlogContent from "./sections/BlogContent";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";

const Blog = () => {
    return (
        <main className="relative min-h-screen bg-black text-white overflow-hidden">

            {/* 🌌 Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-black animate-gradient bg-[length:300%_300%]" />
            <div className="absolute top-32 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

            {/* Hero Section */}
            <HeroSection />

            {/* Blog Content */}
            <BlogContent />

            {/* Services Section */}
            <ServicesSection />

        </main>
    )
}

export default Blog;