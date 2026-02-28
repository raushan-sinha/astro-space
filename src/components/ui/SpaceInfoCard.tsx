interface SpaceInfoProps {
    date: string,
    title: string,
    explanation: string
}

const SpaceInfoCard = ({ date, title, explanation }: SpaceInfoProps) => {
    return (
        <div className="p-6 sm:p-8 space-y-5">

            <time className="text-xs tracking-widest uppercase text-cyan-400">
                {date}
            </time>

            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                {title}
            </h1>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {explanation}
            </p>

        </div>
    );
}

export default SpaceInfoCard;