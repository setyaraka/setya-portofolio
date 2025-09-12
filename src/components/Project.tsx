import Image from "next/image";

export default function Project(){
    return (
        <section id="projects" className="py-16 md:py-24 bg-white border-y border-border border-[#ebeef1]">
            <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold">Projects</h2>
                <a href="#" className="text-sm hover:text-[#2563EB]">View all →</a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <article className="group rounded-2xl border border-border border-[#ebeef1] bg-surface p-3 backdrop-blur hover:-translate-y-1 hover:shadow-xl/30 transition">
                    {/* <span className="aspect-[16/10] rounded-xl bg-gradient-to-br from-black/5 to-black/0 grid place-content-center text-muted">Screenshot</span> */}
                    <div className="aspect-[16/10] relative rounded-xl bg-gradient-to-br from-black/5 to-black/0 grid place-content-center text-muted">
                        <Image 
                            src={"/assets/vaultiva.png"}
                            fill
                            alt="Picture of Vaultiva"
                        />
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 text-xs rounded-full bg-[#2563EB]-soft text-[#2563EB]">Next.js</span>
                            <span className="px-2 py-0.5 text-xs rounded-full bg-success/15 text-success">Tailwind</span>
                        </div>
                        <h3 className="font-semibold text-lg">Vaultiva — Secure File Sharing</h3>
                        <p className="mt-1 text-sm text-muted line-clamp-2">Password protected links, expiry, watermark, audit logs.</p>
                        <div className="mt-3 flex gap-3">
                            <a className="text-sm underline underline-offset-4 hover:text-[#2563EB]" href="#" target="_blank" rel="noreferrer">Live</a>
                            <a className="text-sm underline underline-offset-4 hover:text-[#2563EB]" href="#" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </article>

                <article className="group rounded-2xl border border-border border-[#ebeef1] bg-surface p-3 backdrop-blur hover:-translate-y-1 hover:shadow-xl/30 transition">
                    <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-black/5 to-black/0 grid place-content-center text-muted">Screenshot</div>
                    <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 text-xs rounded-full bg-fuchsia-500/15 text-fuchsia-600">Angular</span>
                        <span className="px-2 py-0.5 text-xs rounded-full bg-sky-500/15 text-sky-600">NestJS</span>
                    </div>
                    <h3 className="font-semibold text-lg">Sweet Memories — Web Diary</h3>
                    <p className="mt-1 text-sm text-muted line-clamp-2">Bilingual romantic diary with animations & audio.</p>
                    <div className="mt-3 flex gap-3">
                        <a className="text-sm underline underline-offset-4 hover:text-[#2563EB]" href="#">Live</a>
                        <a className="text-sm underline underline-offset-4 hover:text-[#2563EB]" href="#">GitHub</a>
                    </div>
                    </div>
                </article>

                <article className="group rounded-2xl border border-border border-[#ebeef1] bg-surface p-3 backdrop-blur hover:-translate-y-1 hover:shadow-xl/30 transition">
                    <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-black/5 to-black/0 grid place-content-center text-muted">Screenshot</div>
                    <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 text-xs rounded-full bg-violet-500/15 text-violet-600">Next.js</span>
                            <span className="px-2 py-0.5 text-xs rounded-full bg-amber-500/15 text-amber-600">LLM</span>
                        </div>
                        <h3 className="font-semibold text-lg">Papra.ai — PDF Summarizer</h3>
                        <p className="mt-1 text-sm text-muted line-clamp-2">Chunked summarization pipeline with streaming UI.</p>
                        <div className="mt-3 flex gap-3">
                            <a className="text-sm underline underline-offset-4 hover:text-[#2563EB]" href="#">Live</a>
                            <a className="text-sm underline underline-offset-4 hover:text-[#2563EB]" href="#">GitHub</a>
                        </div>
                    </div>
                </article>
            </div>
            </div>
        </section>
    )
}