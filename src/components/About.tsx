export default function About(){
    return (
        <section id="about" className="py-16 md:py-24 bg-[#f9fafb]">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
                <h2 className="font-display text-3xl md:text-4xl mb-4 font-bold">About Me</h2>
                <p className="text-muted">
                    I’m a fullstack engineer with 2.5+ years of experience building secure, production-grade web applications. I specialize in modern front-end architectures (React, Angular) and backend systems (NestJS, Supabase, PostgreSQL), with a strong focus on security-first development and scalable workflows.
                </p>
            </div>
            <div className="md:col-span-3">
                <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border border-[#ebeef1] bg-white p-5 backdrop-blur">
                    <p className="text-sm text-muted">Focus</p>
                    <p className="font-semibold">Secure Web Apps, UI Engineering, Accessibility</p>
                </div>
                <div className="rounded-2xl border border-border border-[#ebeef1] bg-white p-5 backdrop-blur">
                    <p className="text-sm text-muted">Currently</p>
                    <p className="font-semibold">Building Secure Web Apps & exploring AI Projects</p>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}