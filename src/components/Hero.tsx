import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    return (
        <section className="hero-bg relative hero-bg-animated overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="text-sm uppercase tracking-widest text-muted mb-3 animate-fadeSlideUp">Fullstack Developer</p>
                    <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] animate-fadeSlideUp animate-delay-1">
                        Hi, I’m <span className="text-red-500">Setya Pangga Raka Pangestu</span>.<br className="hidden sm:block" />
                        I build elegant, scalable web apps end-to-end.
                    </h1>
                    <p className="mt-5 text-muted max-w-xl animate-fadeSlideUp animate-delay-2">
                        Focused on React/Next.js, Angular, and TypeScript on the frontend, 
                        plus NestJS, Prisma, and PostgreSQL on the backend. Open for remote opportunities.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3 animate-fadeSlideUp animate-delay-3">
                        <a href="#projects" className="rounded-xl px-5 py-3 bg-red-500 text-white hover:bg-[#991B1B] active:bg-[#7F1D1D] transition focus-ring">View Projects</a>
                        <Link href="#contact" scroll={true} className="rounded-xl px-5 py-3 border border-border border-[#ebeef1] hover:border-[#2563EB] hover:text-[#2563EB] hover:border-accent transition focus-ring">
                            Hire Me
                        </Link>
                    </div>
                    
                    <div className="mt-10 flex gap-6 text-sm text-muted animate-fadeSlideUp animate-delay-4">
                        <div><span className="text-2xl font-bold text-red-500">3</span> Projects</div>
                        <div><span className="text-2xl font-bold text-red-500">2</span> Years</div>
                        <div><span className="text-2xl font-bold text-red-500">21</span> Tech Skills</div>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative animate-fadeScale animate-delay-2 mx-auto aspect-square w-72 sm:w-80 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 p-1">
                        <div className="h-full w-full rounded-3xl border border-border border-[#ebeef1] backdrop-blur">
                            <Image
                                src={"/assets/raka.jpg"}
                                fill
                                className="object-cover rounded-3xl"
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}