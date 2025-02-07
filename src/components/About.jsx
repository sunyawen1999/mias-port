const aboutItems = [
    {
        label: 'Years of working experience',
        number: 2
    }
];

const About = () => {
    return (
        <section 
        id="about"
        className="section"
        >
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] reveal-up">
                        Welcome! I&apos;m Mia, a professional web developer who is now pursuing a master's degree in Electrical and Computer Engineering at uOttawa, effortlessly turning transforming complex designs into smooth digital experiences ! 🎓👩🏻‍💻
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7 reveal-up">
                        {
                            aboutItems.map(({ label, number}, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>

                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;