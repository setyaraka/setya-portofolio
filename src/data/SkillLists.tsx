import AngularLogo from "@/components/Icons/AngularLogo";
import BootstrapLogo from "@/components/Icons/BootstrapLogo";
import CloudflareLogo from "@/components/Icons/CloudflareLogo";
import JasmineLogo from "@/components/Icons/JasmineLogo";
import JavascriptLogo from "@/components/Icons/JavascriptLogo";
import KarmaLogo from "@/components/Icons/KarmaLogo";
import LottiFilesLogo from "@/components/Icons/LottiFilesLogo";
import MaterialUILogo from "@/components/Icons/MaterialUILogo";
import NestJsLogo from "@/components/Icons/NestJsLogo";
import NextLogo from "@/components/Icons/NextLogo";
import NgZorroLogo from "@/components/Icons/NgZorroLogo";
import NodeJsLogo from "@/components/Icons/NodeJsLogo";
import PostgreSqlLogo from "@/components/Icons/PostgreSqlLogo";
import PrismaOrmLogo from "@/components/Icons/PrismaOrmLogo";
import RailwayLogo from "@/components/Icons/RailwayLogo";
import ReactLogo from "@/components/Icons/ReactLogo";
import ReduxLogo from "@/components/Icons/ReduxLogo";
import SupabaseLogo from "@/components/Icons/SupabaseLogo";
import TailwindLogo from "@/components/Icons/TailwindLogo";
import TypeScriptLogo from "@/components/Icons/TypeScriptLogo";
import VercelLogo from "@/components/Icons/VercelLogo";
import { ReactNode } from "react";

interface SkillItem {
    url: string;
    name: string;
    borderColor: string;
    logo: ReactNode;
}

const skillList: SkillItem[] = [
    {
        url: "https://react.dev",
        name: "React",
        borderColor: "#61DAFB",
        logo: <ReactLogo />
    },
    {
        url: "https://redux.js.org/",
        name: "Redux",
        borderColor: "#764abc",
        logo: <ReduxLogo />
    },
    {
        url: "https://nextjs.org",
        name: "Next.js",
        borderColor: "black",
        logo: <NextLogo />
    },
    {
        url: "https://mui.com/",
        name: "Material UI",
        borderColor: "#1FA6CA",
        logo: <MaterialUILogo />
    },
    {
        url: "https://angular.dev",
        name: "Angular",
        borderColor: "#DD0031",
        logo: <AngularLogo />
    },
    {
        url: "https://ng.ant.design/docs/introduce/en",
        name: "Ng-Zorro",
        borderColor: "#148EFF",
        logo: <NgZorroLogo />
    },
    {
        url: "https://getbootstrap.com",
        name: "Bootstrap",
        borderColor: "#9013fe",
        logo: <BootstrapLogo />
    },
    {
        url: "https://tailwindcss.com",
        name: "Tailwind",
        borderColor: "#38BDF8",
        logo: <TailwindLogo />
    },
    {
        url: "https://lottiefiles.com/",
        name: "LottieFiles",
        borderColor: "#00deb2",
        logo: <LottiFilesLogo />
    },
    {
        url: "https://jasmine.github.io/",
        name: "Jasmine",
        borderColor: "#8a4182",
        logo: <JasmineLogo />
    },
    {
        url: "https://karma-runner.github.io",
        name: "Karma",
        borderColor: "#409B83",
        logo: <KarmaLogo />
    },
    {
        url: "",
        name: "JavaScript",
        borderColor: "#F0DB4F",
        logo: <JavascriptLogo />
    },
    {
        url: "https://www.typescriptlang.org/",
        name: "TypeScript",
        borderColor: "#3178C6",
        logo: <TypeScriptLogo />
    },
    {
        url: "https://nodejs.org",
        name: "Node.js",
        borderColor: "#5FA04E",
        logo: <NodeJsLogo />
    },
    {
        url: "https://nestjs.com",
        name: "NestJS",
        borderColor: "#E0234E",
        logo: <NestJsLogo />
    },
    {
        url: "https://www.postgresql.org/",
        name: "PostgreSQL",
        borderColor: "#336791",
        logo: <PostgreSqlLogo />
    },
    {
        url: "https://supabase.com/",
        name: "Supabase",
        borderColor: "#249361",
        logo: <SupabaseLogo />
    },
    {
        url: "https://www.prisma.io/",
        name: "Prisma ORM",
        borderColor: "black",
        logo: <PrismaOrmLogo />
    },
    {
        url: "https://vercel.com/",
        name: "Vercel",
        borderColor: "black",
        logo: <VercelLogo />
    },
    {
        url: "https://railway.com/",
        name: "Railway",
        borderColor: "black",
        logo: <RailwayLogo />
    },
    {
        url: "https://www.cloudflare.com/",
        name: "Cloudflare R2",
        borderColor: "#F38020",
        logo: <CloudflareLogo />
    },
]

export default skillList;