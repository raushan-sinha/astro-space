import { BLOGDATA } from "../blogData";

const BlogContent = () => {
    return (
        <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">

            <div className="grid md:grid-cols-2 gap-8">

                {/* APOD */}
                {BLOGDATA.map((item, idx) => (
                    <article key={idx} className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 ${item.hoverColor} hover:shadow-xl transition duration-500`}>
                        <h2 className={`text-xl font-semibold ${item.textColor} mb-3`}>
                            {item.heading}
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {item.para}
                        </p>
                    </article>
                ))}

            </div>
        </section>
    );
}

export default BlogContent;