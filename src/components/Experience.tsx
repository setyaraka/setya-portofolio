export default function Experience(){
    return (
        <section id="experience" className="py-16 md:py-24 bg-white border-y border-border border-[#ebeef1]">
            <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl mb-8">Experience</h2>
            <ol className="relative border-l border-border border-[#ebeef1]">
                <li className="ml-6 pb-10">
                <span className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-red-500"></span>
                <h3 className="font-semibold">Frontend Developer — Elefin Indonesia</h3>
                <p className="text-sm text-gray-500">2024 — Present</p>
                <p className="mt-2 text-gray-500">Built internal B2B systems, autosave notes, schedule UI, Redux.</p>
                </li>
                <li className="ml-6 pb-10">
                <span className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-red-500"></span>
                <h3 className="font-semibold">Freelance — Various Clients</h3>
                <p className="text-sm text-gray-500">2022 — 2024</p>
                <p className="mt-2 text-gray-500">Landing pages, dashboards, secure file sharing MVPs.</p>
                </li>
            </ol>
            </div>
        </section>
    )
}