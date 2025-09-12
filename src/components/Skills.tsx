import skillList from "@/data/SkillLists";

export default function Skills(){

    const hexToRgb = (hex: string) => {
        const h = hex.replace('#','');
        const bigint = parseInt(h, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r} ${g} ${b}`;
    };
    
    return (
        <section id="skills" className="py-16 md:py-24 supports-[backdrop-filter]:bg-[#f9fafb] border-border border-[#ebeef1]">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">Skills</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    { skillList.map((skill, idx) => {
                        const rgb = hexToRgb(skill.borderColor);
                        return (
                            <li key={idx}>
                                <a href={skill.url} target="_blank" rel="noreferrer"
                                    style={{ ['--skill-rgb' as string]: rgb }}
                                    className={`group inline-flex items-center w-full justify-center gap-2 rounded-xl px-3 py-2
                                            bg-white text-zinc-800 border border-zinc-200
                                            dark:bg-white/5 dark:text-zinc-100 dark:border-white/10
                                            transition hover:scale-[1.02]
                                            focus:outline-none focus:ring-2 focus:ring-[rgb(var(--skill-rgb)/0.5)] focus:ring-offset-2
                                            hover:border-[rgb(var(--skill-rgb)/0.6)]`}
                                    aria-label={skill.name}>
                                        {skill.logo}
                                        <span className="font-medium">{skill.name}</span>
                                    </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}