const Loading = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20">
            <div className="flex flex-col items-center space-y-6">

                {/* Spinner */}
                <div className="w-14 h-14 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin shadow-lg shadow-cyan-500/30" />

                {/* Loading Text */}
                <p className="text-cyan-400 text-lg tracking-widest uppercase animate-pulse">
                    Loading Space Data...
                </p>

            </div>
        </div>
    );
}

export default Loading;