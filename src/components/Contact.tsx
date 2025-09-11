export default function Contact(){
    const media = [
        {
            url: "https://www.linkedin.com/in/setyapanggarakapangestu/",
            name: "LinkedIn"
        },
        {
            url: "https://github.com/setyaraka",
            name: "GitHub"
        },
        {
            url: "https://www.instagram.com/setyarakap/",
            name: "Instagram"
        }
    ]
    
    return (
        <section id="contact" className="py-16 md:py-24 bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl mb-6 text-center">Let’s work together</h2>
            <p className="text-center text-muted mb-8">Tell me about your project or just say hi.</p>
            <form className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                <input className="rounded-xl bg-white/70 dark:bg-white/[.05] border border-border border-[#ebeef1] px-4 py-3 placeholder-gray-500" placeholder="Your name" required />
                <input type="email" className="rounded-xl bg-white/70 dark:bg-white/[.05] border border-border border-[#ebeef1] px-4 py-3 focus-ring placeholder-gray-500" placeholder="Email address" required />
                </div>
                <textarea rows={5} className="rounded-xl bg-white/70 dark:bg-white/[.05] border border-border border-[#ebeef1] px-4 py-3 focus-ring placeholder-gray-500" placeholder="Message"></textarea>
                <button className="justify-self-start rounded-xl px-5 py-3 bg-red-500 text-white text-primary-fg hover:bg-[#991B1B] active:bg-[#7F1D1D] transition focus-ring ">Send Message</button>
            </form>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm">
                { media.map((item, idx) => {
                    return <a key={idx} className="hover:text-[#2563EB]" href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                })}
            </div>
            </div>
        </section>
    )
}