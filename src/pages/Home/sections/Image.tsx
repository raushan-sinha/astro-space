interface ImageProps {
    src: string,
    alt: string
}

const Image = ({ src, alt }: ImageProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className="w-full h-56 sm:h-72 lg:h-80 object-cover object-center transition-transform duration-500 hover:scale-105"
        />
    );
}

export default Image;