export default function Experience(){
    return (
        <section id="experience" className="py-16 md:py-24 bg-white border-y border-border border-[#ebeef1]">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="font-display text-3xl md:text-4xl mb-8 font-bold">Experience</h2>
                <ol className="relative border-l border-border border-[#ebeef1]">
                    <li className="ml-6 pb-10">
                        <span className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-red-500"></span>
                        <h3 className="font-semibold">IT Developer - Elefin Indonesia</h3>
                        <p className="text-sm text-gray-500">2024 - Present</p>
                        <ul>
                            <li className="mt-2 text-gray-500">- Built <span className="font-bold">internal B2B backoffice systems</span> (React, Redux).</li>
                            <li className="mt-2 text-gray-500">- Implemented <span className="font-bold">Meeting Notes module</span>: autosave, offline retry, draft badges, participant roles.</li>
                            <li className="mt-2 text-gray-500">- Enhanced maintainability with <span className="font-bold">custom hooks & folder refactor</span>, reducing bugs & onboarding time.</li>
                            <li className="mt-2 text-gray-500">- Strengthened app security: mitigated <span className="font-bold">HTML injection.</span></li>
                        </ul>
                    </li>
                </ol>
            </div>
        </section>
    )
}