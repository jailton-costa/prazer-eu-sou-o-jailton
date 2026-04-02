import React from 'react'
import Navbar from '../components/Navbar'
import Rodape from '../components/Rodape'
import { Code2, Briefcase, GraduationCap, Sparkles, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react'

const habilidades = [
    'React.js', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Git'
]

const experiencias = [
    {
        papel: 'Desenvolvedor Front-end',
        empresa: 'island Tainho',
        periodo: '2025 - 2025',
        destaque: 'um portal turístico para Florianópolis, focando em UX e integração de APIs de geolocalização.'
    },
    {
        papel: 'Desenvolvedor Front-end',
        empresa: 'Inklua Ticket',
        periodo: '2024 - 2025',
        destaque: 'Participação no desenvolvimento da plataforma de ingressos com foco em acessibilidade e usabilidade.'
    }
]

const educacao = [
    {
        curso: 'Codificando o futuro - Desenvolvimento de Software',
        instituicao: 'Senai / Curso técnico',
        periodo: '2024 - 2025'
    },
    {
        curso: 'Ciência de dados e inteligência artificial',
        instituicao: 'UniSenai / Curso superior',
        periodo: '2026 '
    }
]

const projetos = [
    {
        nome: 'DevChat CLI',
        descricao: 'Chat em tempo real para desenvolvedores direto no terminal.',
        tag: 'CLI + WebSocket'
    },
    {
        nome: 'Island Tainho',
        descricao: 'Portal turístico para ajudar visitantes a explorar Florianópolis.',
        tag: 'PWA + geolocalização'
    },
    {
        nome: 'Inklua Ticket',
        descricao: 'Plataforma de venda de ingressos online focada em inclusão.',
        tag: 'E-commerce de eventos'
    }
]

export default function page() {
    return (
        <div className='min-h-screen bg-background text-foreground font-montserrat flex flex-col'>
            <Navbar />

            <main className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8'>
                <section className='flex flex-col md:flex-row gap-6 rounded-2xl border border-verde-100 p-6 shadow-lg bg-gray-900'>
                    <img
                        src='/jaja123.JPG'
                        alt='Foto de perfil'
                        className='h-44 w-44 rounded-2xl object-cover border-2 border-verde-100'
                    />
                    <div className='flex-1'>
                        <h1 className='text-4xl font-bold text-verde-100'>Jailton Costa Pereira</h1>
                        <p className='mt-2 text-verde-100 text-lg'>Desenvolvedor Full Stack com foco em entregar projetos de alto valor através de código limpo, UX e colaboração ágil.</p>
                        <div className='mt-4 grid grid-cols-2 gap-3 text-sm text-gray-200'>
                            <div className='flex items-center gap-2'><MapPin className='w-4 h-4 text-verde-100' /> Florianópolis, SC</div>
                            <div className='flex items-center gap-2'><Mail className='w-4 h-4 text-verde-100' /> Jailton.jpc09@gmail.com</div>
                            <div className='flex items-center gap-2'><Instagram className='w-4 h-4 text-verde-100' /><a href="https://www.instagram.com/jailton_costa_3/" target="_blank" rel="noopener noreferrer" className='hover:text-verde-100 hover:underline'>Jailto_costa_3</a></div>
                            <div className='flex items-center gap-2'><Linkedin className='w-4 h-4 text-verde-100' /><a href="https://www.linkedin.com/in/jailton-costa-pereira/" target="_blank" rel="noopener noreferrer" className='hover:text-verde-100 hover:underline'>Jailton-costa-pereira</a></div>
                        </div>
                    </div>
                </section>

                <section className='mt-8 rounded-2xl border border-verde-100 p-6 bg-gray-900'>
                    <h2 className='text-2xl font-semibold text-verde-100 flex items-center gap-2'><Sparkles className='w-6 h-6' />Sobre mim</h2>
                    <p className='mt-3 text-azul-100 leading-relaxed'>Minha carreira é dedicada a unir tecnologia, criatividade e impacto humano. Trabalho com desenvolvimento web e projetos ágeis para entregar soluções que aceleram resultados e reduzem fricções no dia a dia.</p>
                </section>

                <section className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='rounded-2xl border border-azul-100 p-6 bg-gray-900'>
                        <h2 className='text-2xl font-semibold text-azul-100 flex items-center gap-2'><Code2 className='w-6 h-6' />Habilidades</h2>
                        <ul className='mt-4 grid grid-cols-2 gap-2 text-azul-100'>
                            {habilidades.map((item) => (
                                <li key={item} className='rounded-2xl border border-azul-200 bg-azul-950 px-3 py-2'>• {item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='rounded-2xl border border-verde-100 p-6 bg-gray-900'>
                        <h2 className='text-2xl font-semibold text-verde-100 flex items-center gap-2'><Briefcase className='w-6 h-6' />Experiência</h2>
                        <div className='mt-4 space-y-4'>
                            {experiencias.map((item) => (
                                <article key={`${item.papel}-${item.empresa}`} className='rounded-2xl border border-azul-300 p-3 bg-gray-800'>
                                    <h3 className='text-lg font-semibold text-azul-100'>{item.papel}</h3>
                                    <p className='text-sm text-gray-300'>{item.empresa} · {item.periodo}</p>
                                    <p className='mt-1 text-azul-100'>{item.destaque}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='mt-8 rounded-2xl border border-azul-100 p-6 bg-gray-900'>
                    <h2 className='text-2xl font-semibold text-azul-100 flex items-center gap-2'><GraduationCap className='w-6 h-6' />Educação</h2>
                    <div className='mt-4 grid gap-4'>
                        {educacao.map((item) => (
                            <div key={`${item.curso}-${item.instituicao}`} className='rounded-2xl border border-azul-300 p-3 bg-gray-800'>
                                <h3 className='text-lg font-semibold text-azul-100'>{item.curso}</h3>
                                <p className='text-sm text-gray-300'>{item.instituicao} · {item.periodo}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='mt-8 rounded-2xl border border-verde-100 p-6 bg-gray-900'>
                    <h2 className='text-2xl font-semibold text-verde-100 flex items-center gap-2'><Sparkles className='w-6 h-6' />Projetos recentes</h2>
                    <div className='mt-4 grid gap-4'>
                        {projetos.map((item) => (
                            <div key={item.nome} className='rounded-2xl border  border-verde-300 p-3 bg-gray-800'>
                                <h3 className='text-lg font-semibold text-verde-100'>{item.nome}</h3>
                                <p className='text-verde-100'>{item.descricao}</p>
                                <span className='text-sm text-gray-300'>{item.tag}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Rodape />
        </div>
    )
}
