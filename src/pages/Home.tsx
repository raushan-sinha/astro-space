import axios from 'axios';
import { useEffect, useState } from 'react';
const API_KEY = import.meta.env.VITE_SPACE_API_KEY;

//TODO: Type safety for API Response data -
interface ApodResponse {
    date: string,
    explanation: string,
    title: string,
    media_type: 'image' | 'video',
    url: string,
    hdurl: string
}

const Home = () => {
    const [spaceData, setSpaceData] = useState<ApodResponse>();
    // const [loading, setLoading] = useState<boolean>(false);
    const [showError, setShowError] = useState<string>('');

    useEffect(() => {
        const handleResponse = async () => {
            try {
                const response = await axios.get(API_KEY);
                setSpaceData(response.data);
            } catch (error) {
                setShowError('Network error');
                console.error('Error', error);
            }
        }

        handleResponse();
    }, []);

    return (
        <>
            <main className="relative min-h-screen bg-black text-white overflow-hidden p-5">

                {/* 🌌 Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-black animate-gradient bg-[length:300%_300%]" />
                <div className="absolute top-40 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

                {/* 🌍 Content */}
                <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">

                    <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden transition duration-500 hover:shadow-cyan-500/20">

                        {/* 🖼 Medium Image */}
                        <figure className="w-full overflow-hidden">
                            {spaceData?.media_type === 'image' && (
                                <img
                                    src={spaceData.hdurl}
                                    alt={spaceData.title}
                                    className="w-full h-56 sm:h-72 lg:h-80 object-cover object-center transition-transform duration-500 hover:scale-105"
                                />
                            )}
                        </figure>

                        {/* 📝 Text Content */}
                        <div className="p-6 sm:p-8 space-y-5">

                            <time className="text-xs tracking-widest uppercase text-cyan-400">
                                {spaceData?.date}
                            </time>

                            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                                {spaceData?.title}
                            </h1>

                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                {spaceData?.explanation}
                            </p>

                        </div>

                    </article>

                    {showError && (
                        <p className="text-red-500">{showError}</p>
                    )}

                </section>

                {/* 🎨 Background Animation */}
                <style>
                    {`
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient {
        animation: gradient 18s ease infinite;
      }
    `}
                </style>

            </main>
        </>
    )
}

export default Home;