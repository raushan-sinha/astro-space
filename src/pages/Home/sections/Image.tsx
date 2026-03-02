interface ImageProps {
    src: string,
    alt: string
}

const Image = ({ src, alt }: ImageProps) => {
    return (
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full rounded-xl shadow-lg"
            />
    );
}

export default Image;