import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from '../components/ui/Image';
import SpaceInfoCard from '../components/ui/SpaceInfoCard';
import Loading from '../components/ui/Loading';
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
    const [loading, setLoading] = useState<boolean>(true);
    const [showError, setShowError] = useState<string>('');

    useEffect(() => {
        const handleResponse = async () => {
            try {
                const response = await axios.get(API_KEY);
                setSpaceData(response.data);
            } catch (error) {
                setShowError('Network error');
                console.error('Error', error);
            } finally {
                setLoading(false);
            }
        }

        handleResponse();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <main className="relative min-h-screen bg-black text-white overflow-hidden p-5">

                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-black animate-gradient bg-[length:300%_300%]" />
                    <div className="absolute top-40 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

                    {/* Content */}
                    <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">

                        <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden transition duration-500 hover:shadow-cyan-500/20">

                            {/* Medium Image */}
                            <figure className="w-full overflow-hidden">
                                {spaceData?.media_type === 'image' && (
                                    <Image src={spaceData.hdurl} alt={spaceData.title} />
                                )}
                            </figure>

                            {/* 📝 Text Content */}
                            {spaceData && (
                                <SpaceInfoCard date={spaceData?.date} title={spaceData?.title} explanation={spaceData?.explanation} />
                            )}

                        </article>

                        {showError && (
                            <p className="text-red-500">{showError}</p>
                        )}

                    </section>

                </main>
            )}


        </>
    )
}

export default Home;