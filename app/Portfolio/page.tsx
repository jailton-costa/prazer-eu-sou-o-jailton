'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Rodape from '../components/Rodape'
import { motion } from 'framer-motion'
import { Code2, Briefcase, GraduationCap, Sparkles, Linkedin, Mail, MapPin, Instagram, ChartScatter, ChartSpline, GithubIcon, LinkedinIcon, MailIcon, InstagramIcon, BellElectric, BellRing, Link2Icon, Link2, LinkIcon } from 'lucide-react'
import { SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiPostgresql, SiMongodb, SiPrisma, SiTailwindcss, SiPython, SiGit } from 'react-icons/si'
import Link from 'next/link'
import { link } from 'fs'


const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const iconMap: Record<string, React.ReactNode> = {
    'Next.js': <SiNextdotjs />,
    'React.js': <SiReact />,
    'TypeScript': <SiTypescript />,
    'Node.js': <SiNodedotjs />,
    'PostgreSQL': <SiPostgresql />,
    'MongoDB': <SiMongodb />,
    'Prisma': <SiPrisma />,
    'Tailwind CSS': <SiTailwindcss />,
    'Python': <SiPython />,
    'Git': <SiGit />
}

const habilidades = [
    'Next.js', 'React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Python', 'Git'
]

const experiencias = [
    {
        papel: 'Desenvolvedor back-end',
        empresa: 'devChat CLI',
        periodo: '2026 - em andamento',
        destaque: 'Chat em tempo real no terminal utilizando WebSocket e Node.js.',
        link: 'https://prazer-eu-sou-o-jailton.vercel.app/projeto/devChatCLI'
    },
    {
        papel: 'Desenvolvedor Front-end',
        empresa: 'Island Tainho',
        periodo: '2025 - 2025',
        destaque: 'Portal turístico com foco em UX e integração de APIs de geolocalização.',
        link: 'https://prazer-eu-sou-o-jailton.vercel.app/projeto/islandTainho'
    },
    {
        papel: 'Desenvolvedor Front-end',
        empresa: 'Inklua Ticket',
        periodo: '2024 - 2025',
        destaque: 'Plataforma de ingressos com foco em acessibilidade e usabilidade.',
        link: 'https://prazer-eu-sou-o-jailton.vercel.app/projeto/inkluaTicket'
    },
]

const educacao = [
    {
        curso: 'Ciência de dados e inteligência artificial - CDIA',
        instituicao: 'UniSenai',
        periodo: '2026'
    }, {
        curso: 'Codificando o futuro - Desenvolvimento de Software',
        instituicao: 'Senai',
        periodo: '2024 - 2025'
    },

]

const projetos = [
    {
        nome: 'DevChat CLI',
        descricao: 'Chat em tempo real no terminal.',
        tag: 'CLI + WebSocket',
        link: 'https://prazer-eu-sou-o-jailton.vercel.app/projeto/devChatCLI'
    },
    {
        nome: 'Island Tainho',
        descricao: 'Portal turístico de Florianópolis.',
        tag: 'PWA',
        link: 'https://prazer-eu-sou-o-jailton.vercel.app/projeto/islandTainho'
    },{
        nome: 'my-game',
        descricao: 'Jogo de aventura estilo RPG.',
        tag: 'Game',
        link: 'https://prazer-eu-sou-o-jailton.vercel.app/projeto/myGame'
    },
    {
        nome: 'Inklua Ticket',
        descricao: 'Venda de ingressos com inclusão.',
        tag: 'E-commerce',
        link: 'https://prazer-eu-sou-o-jailton.vercel.app/projeto/inkluaTicket'
    }
]

export default function Page() {
    const [EmailCop, setEmailCop] = useState("")
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='min-h-screen border-shadow shadow-2xl shadow-amarelo-300 bg-background text-foreground'>
            <Navbar />


            <main className='mx-auto max-w-6xl px-4 py-10'>

                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className='grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 rounded-2xl p-6 bg-verde-300'
                >
                    <motion.div
                        whileHover={{ y: -4 }}
                        className='relative overflow-hidden rounded-2xl bg-gray-950 p-2'
                    >
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            src='/jaja123.JPG'
                            alt='Foto de Jailton Costa Pereira'
                            className='h-44 w-full rounded-2xl object-cover'
                        />
                        <div className="flex flex-col justify-end items-start absolute gap-5 p-2">
                            <div className=' rounded-full bg-black/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-verde-100'>1º front-end</div>
                            <div className=' rounded-full bg-black/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-verde-100'>2º back-end</div>
                            <div className=' rounded-full bg-black/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-verde-100'>3º Full Stack</div>
                        </div>
                    </motion.div>

                    <div className='flex flex-col justify-between gap-6'>
                        <div className='space-y-5'>
                            <div className='flex flex-col gap-3'>
                                <div className='inline-flex items-center gap-3 rounded-2xl bg-gray-950 px-4 py-3 text-sm text-azul-100 shadow-sm shadow-black/20'>
                                    <BellRing className='h-5 w-5 text-verde-100' />
                                    <div>
                                        <p className='text-xs uppercase tracking-[0.2em] text-azul-100/80'>Olá, sou o Jailton</p>
                                        <h1 className='text-4xl font-bold text-verde-100'>Jailton Costa Pereira</h1>
                                    </div>
                                </div>
                                <p className='text-lg leading-8 text-azul-100'>Desenvolvedor Full Stack que transforma ideias em produtos reais, com foco em UX, performance e código limpo.</p>
                            </div>

                            <div className='grid gap-3 sm:grid-cols-2 text-sm font-semibold text-gray-200'>
                                <div className='rounded-2xl bg-gray-950 p-4'>
                                    <p className='text-xs uppercase tracking-[0.2em] text-azul-100/80'>Localização</p>
                                    <p className='mt-3 flex items-center gap-2'><MapPin className='h-4 w-4 text-verde-100' /> Florianópolis, SC</p>
                                </div>
                                <div className='rounded-2xl bg-gray-950 p-4'>
                                    <p className='text-xs uppercase tracking-[0.2em] text-azul-100/80'>Email</p>
                                    <a href='mailto:jailton.jpc09@gmail.com' className='mt-3 flex items-center gap-2 underline hover:text-verde-100'><Mail className='h-4 w-4 text-verde-100' /> jailton.jpc09@gmail.com</a>
                                </div>
                                <div className='rounded-2xl bg-gray-950 p-4'>
                                    <p className='text-xs uppercase tracking-[0.2em] text-azul-100/80'>LinkedIn</p>
                                    <p className='mt-3 flex items-center gap-2'><Linkedin className='h-4 w-4 text-verde-100' />
                                        <a href='https://www.linkedin.com/in/jailton-costa-pereira/' target='_blank' rel='noopener noreferrer' className='hover:text-verde-100 underline'>linkedin.com/in/jailton-costa-pereira</a>
                                    </p>
                                </div>
                                <div className='rounded-2xl bg-gray-950 p-4'>
                                    <p className='text-xs uppercase tracking-[0.2em] text-azul-100/80'>GitHub</p>
                                    <p className='mt-3 flex items-center gap-2'><GithubIcon className='h-4 w-4 text-verde-100' />
                                        <a href='https://github.com/jailton-costa' target='_blank' rel='noopener noreferrer' className='hover:text-verde-100 underline'>github.com/jailton-costa</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className='mt-8 bg-gray-950 text-azul-100 rounded-2xl p-6 flex flex-col gap-3'
                >
                    <h2 className='text-2xl font-semibold mb-4 flex items-center gap-2 text-azul-100'>
                        <ChartSpline /> Como tudo começou?
                    </h2>

                    <p className='font-sans  text-azul-100'>
                        Minha jornada com tecnologia começou de forma prática, desmontando caixas de som, explorando PCs e tentando entender como as coisas funcionavam por dentro. Mas a virada real veio quando tive contato com programação através do evento Programando o Futuro. Ali ficou claro que eu não queria só usar tecnologia, eu queria construir.
                        <br /><br />
                        O início não foi linear. Foram muitos erros de código, tentativas frustradas e ajustes constantes. Mas esse processo foi essencial para desenvolver raciocínio, disciplina e consistência. Com o tempo, evoluí tecnicamente, construí projetos relevantes e, principalmente, formei conexões que agregaram muito à minha trajetória.
                        <br /><br />
                        Esse esforço resultou em conquistas concretas, como o reconhecimento com o melhor projeto do SENAI Florianópolis em 2025, além da conclusão do curso com certificação.
                        <br /><br />
                        Hoje, sigo avançando no UniSenai, direcionando minha formação para Ciência de Dados e Inteligência Artificial, com foco em ampliar impacto e construir soluções cada vez mais sofisticadas.
                    </p>
                </motion.div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 bg-gray-950 rounded-2xl p-4'>

                    {/* HABILIDADES */}
                    <section className=''>
                        <h2 className='text-2xl font-semibold mb-4 flex items-center gap-2 text-azul-100'>
                            <Code2 /> Habilidades
                        </h2>

                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 text-azul-100'>
                            {habilidades.map((item, i) => (
                                <motion.div
                                    key={`${item}`}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={i}
                                    whileHover={{ scale: 1.05 }}
                                    className=' flex gap-2 p-2 border border-azul-100 rounded-2xl bg-gray-900'
                                >
                                    <span className='text-xl'>
                                        {iconMap[item]}
                                    </span>
                                    <span className='text-sm font-medium'>
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className=''>
                        <h2 className='text-2xl font-semibold text-azul-100 flex items-center gap-2'><GraduationCap className='w-6 h-6' />Educação</h2>
                        <div className='mt-4 grid gap-4'>
                            {educacao.map((item, i) => (
                                <motion.div
                                    key={`${item.curso}-${item.instituicao}`}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={i}
                                    whileHover={{ scale: 1.05 }}
                                    className='p-2 border border-azul-100 rounded-2xl bg-gray-900'
                                >
                                    <h3 className='text-lg font-semibold text-azul-100'>{item.curso}</h3>
                                    <p className='text-sm text-gray-300'>{item.instituicao} · {item.periodo}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>


                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 rounded-2xl gap-10 bg-verde-300 text-verde-100 p-6'>
                    {/* EXPERIÊNCIA */}
                    <section className=''>
                        <h2 className='text-2xl font-semibold mb-4 flex items-center gap-3'>
                            <Briefcase /> Experiência Em Projetos Academicos
                        </h2>

                        <div className='grid gap-4'>
                            {experiencias.map((item, i) => (
                                <Link key={item.empresa} href={item.link} target="_blank" rel="noopener noreferrer">
                                    <motion.div
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        custom={i}
                                        whileHover={{ scale: 1.05 }}
                                        className='p-4 border rounded-2xl bg-verde-300'
                                    >
                                        <h3 className='font-semibold text-lg'>{item.empresa}  -  {item.papel}</h3>
                                        <p className='text-sm text-white'>{item.destaque}</p>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className=''>
                        <h2 className='text-2xl font-semibold mb-4 flex items-center gap-2'>
                            <Sparkles /> Projetos
                        </h2>

                        <div className='grid gap-4'>
                            {projetos.map((item, i) => (
                                <Link key={item.nome} href={item.link} target="_blank" rel="noopener noreferrer">
                                    <motion.div
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        custom={i}
                                        whileHover={{ scale: 1.05 }}
                                        className='p-4 border rounded-2xl bg-verde-300'
                                    >
                                        <h3 className='font-bold'>{item.nome}</h3>
                                        <p className='text-white'>{item.descricao}</p>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
                <motion.div
                    className="animateTopBottom p-6 mt-8 rounded-2xl border border-verde-100 bg-verde-300 text-center text-gray-200 shadow-lg"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                >
                    <p className="text-lg font-semibold text-verde-100  leading-relaxed flex items-start justify-start">
                       <LinkIcon className=" mt-1" />
                        Obrigado por chegar até aqui. Se você busca alguém comprometido com resultado,
                        evolução constante e soluções bem construídas, vale a conversa.
                    </p>
                    <div className="grid md:grid-cols-4 justify-center gap-4 p-6">
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText("jailton.jpc09@gmail.com");
                                setEmailCop("Email copiado!");
                                setTimeout(() => setEmailCop(""), 1500);
                            }}
                            className="btEmail"
                        >
                            <MailIcon className="w-5 h-5" />
                            {EmailCop ? EmailCop : "Copiar email"}
                        </button>

                        <button
                            onClick={() => window.open("https://www.linkedin.com/in/jailton-costa-pereira", "_blank")}
                            className="btAzul"
                        >
                            <LinkedinIcon className="w-5 h-5" />
                            Linkedin
                        </button>

                        <button
                            onClick={() => window.open("https://www.github.com/jailton-costa", "_blank")}
                            className="btGitHub"
                        >
                            <GithubIcon className="w-5 h-5" />
                            GitHub
                        </button>
                        <button
                            onClick={() => window.open("https://www.instagram.com/jailton_costa_3/", "_blank")}
                            className="btInstagram"
                        >
                            <InstagramIcon className="w-5 h-5" />
                            Instagram
                        </button>
                    </div>
                </motion.div>


            </main>

            <Rodape />
        </motion.div >
    )
}