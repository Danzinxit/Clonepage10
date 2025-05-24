'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Code2, Copy, Rocket, Shield, Zap, Clock, Gift, Star, Check, Book } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const glassCard = 'bg-white/30 dark:bg-blue-900/30 backdrop-blur-lg border border-white/40 dark:border-blue-800/40 shadow-xl rounded-3xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl';
const animatedButton = 'relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 bg-[length:200%_200%] animate-gradient-x text-white font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-600 transition-all duration-300';

export default function Home() {
  const [openTestimonial, setOpenTestimonial] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-purple-200 dark:from-blue-950 dark:via-blue-900 dark:to-purple-900 animate-gradient-bg">
      {/* Hero Section */}
      <motion.section className="relative py-20 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <Badge className="mb-4 bg-blue-500 text-white hover:bg-blue-600">Oferta Especial</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-500 to-blue-400 animate-gradient-x">
            Clone Sites com Perfeição
          </h1>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-3xl mx-auto">
              A ferramenta definitiva para replicar qualquer site com precisão absoluta.
            </p>
            <p className="text-xl md:text-blue-700 font-semibold mb-2 max-w-3xl mx-auto text-center">
              <span className="inline-block mr-2">🚀 Clonagem automática de páginas</span>
              <span className="inline-block mr-2">🎯 Pixel Meta & Google em 1 clique</span>
              <span className="inline-block mr-2">🛠️ Edição visual igual Elementor</span>
              <span className="inline-block">🔒 Tudo vitalício e permanente</span>
            </p>
            <p className="text-xl font-bold text-blue-700 md:text-2xl mb-8 max-w-3xl mx-auto text-center">
              Tecnologia avançada para resultados profissionais.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }} className="w-full flex justify-center">
              <a
                href="https://pay.cakto.com.br/b8vcnjr_401742"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-8 py-4 flex items-center justify-center gap-2 font-bold rounded-xl shadow-lg bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 bg-[length:200%_200%] text-white transition-all duration-300 hover:brightness-110 hover:shadow-2xl focus:ring-4 focus:ring-blue-300 border-0 animate-gradient-x relative overflow-hidden w-full max-w-xs"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
              >
                Garantir Minha Vaga
                <Rocket className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section className="py-20 px-4" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-900 dark:text-blue-100">
            Recursos Exclusivos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -16, scale: 1.06, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)', filter: 'brightness(1.08)' }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 flex flex-col items-center bg-gradient-to-br from-white/60 via-blue-100/60 to-blue-200/60 dark:from-blue-900/60 dark:via-blue-950/60 dark:to-blue-900/60 backdrop-blur-2xl border border-white/50 dark:border-blue-800/50 shadow-2xl rounded-3xl">
                <span className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 shadow-lg">
                  <Zap className="h-12 w-12 text-blue-600 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                </span>
                <h3 className="text-2xl font-extrabold mb-3 text-blue-900 dark:text-blue-100">Clonagem Instantânea</h3>
                <p className="text-muted-foreground text-center text-lg">
                  Clone qualquer site em segundos com nossa tecnologia de última geração.
                </p>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ y: -16, scale: 1.06, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)', filter: 'brightness(1.08)' }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 flex flex-col items-center bg-gradient-to-br from-white/60 via-blue-100/60 to-blue-200/60 dark:from-blue-900/60 dark:via-blue-950/60 dark:to-blue-900/60 backdrop-blur-2xl border border-white/50 dark:border-blue-800/50 shadow-2xl rounded-3xl">
                <span className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 shadow-lg">
                  <Shield className="h-12 w-12 text-blue-600 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                </span>
                <h3 className="text-2xl font-extrabold mb-3 text-blue-900 dark:text-blue-100">100% Seguro</h3>
                <p className="text-muted-foreground text-center text-lg">
                  Proteção total dos dados e conformidade com todas as normas de segurança.
                </p>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ y: -16, scale: 1.06, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)', filter: 'brightness(1.08)' }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 flex flex-col items-center bg-gradient-to-br from-white/60 via-blue-100/60 to-blue-200/60 dark:from-blue-900/60 dark:via-blue-950/60 dark:to-blue-900/60 backdrop-blur-2xl border border-white/50 dark:border-blue-800/50 shadow-2xl rounded-3xl">
                <span className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 shadow-lg">
                  <Star className="h-12 w-12 text-blue-600 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                </span>
                <h3 className="text-2xl font-extrabold mb-3 text-blue-900 dark:text-blue-100">Qualidade Premium</h3>
                <p className="text-muted-foreground text-center text-lg">
                  Resultados profissionais com fidelidade pixel-perfect em cada clone.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Tudo que você precisa Section */}
      <motion.section className="py-20 px-4" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 dark:text-blue-100">
            Tudo que você precisa para vender mais em um só lugar!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileHover={{ y: -12, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', filter: 'brightness(1.04)' }} className="transition-all">
              <Card className="p-6 text-center bg-white/80 dark:bg-blue-900/80 shadow-xl rounded-2xl border border-white/40 dark:border-blue-800/40 transition-all duration-300">
                <motion.img 
                  src="/sire.png" 
                  alt="Estrutura própria"
                  className="w-24 h-24 mx-auto mb-4"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-bold mb-2">Estrutura própria Grátis com 1 clique!</h3>
                <p className="text-sm text-muted-foreground">
                  Com apenas um clique você publica seu site, mesmo que não tenha uma hospedagem.
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileHover={{ y: -12, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', filter: 'brightness(1.04)' }} className="transition-all">
              <Card className="p-6 text-center bg-white/80 dark:bg-blue-900/80 shadow-xl rounded-2xl border border-white/40 dark:border-blue-800/40 transition-all duration-300">
                <motion.img 
                  src="/elementor.png" 
                  alt="Pressel no Brasil e Gringa"
                  className="w-24 h-24 mx-auto mb-4"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-bold mb-2">Pressel no Brasil e Gringa</h3>
                <p className="text-sm text-muted-foreground">
                  Crie pressel para anunciar na gringa ou no Brasil com extrema facilidade.
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} whileHover={{ y: -12, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', filter: 'brightness(1.04)' }} className="transition-all">
              <Card className="p-6 text-center bg-white/80 dark:bg-blue-900/80 shadow-xl rounded-2xl border border-white/40 dark:border-blue-800/40 transition-all duration-300">
                <motion.img 
                  src="/whats.png" 
                  alt="WhatsApp Própria"
                  className="w-24 h-24 mx-auto mb-4"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-bold mb-2">WhatsApp Própria na Página</h3>
                <p className="text-sm text-muted-foreground">
                  Você pode alterar ou incluir um botão de WhatsApp com seu número em qualquer página.
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} whileHover={{ y: -12, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', filter: 'brightness(1.04)' }} className="transition-all">
              <Card className="p-6 text-center bg-white/80 dark:bg-blue-900/80 shadow-xl rounded-2xl border border-white/40 dark:border-blue-800/40 transition-all duration-300">
                <motion.img 
                  src="/faceadds.png" 
                  alt="Pixel do Meta Ads"
                  className="w-24 h-24 mx-auto mb-4"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-bold mb-2">Pixel do Meta Ads</h3>
                <p className="text-sm text-muted-foreground">
                  Facilidade para adicionar pixel do Facebook, direto pelo painel de edição do CLONADOR 10.
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} whileHover={{ y: -12, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', filter: 'brightness(1.04)' }} className="transition-all">
              <Card className="p-6 text-center bg-white/80 dark:bg-blue-900/80 shadow-xl rounded-2xl border border-white/40 dark:border-blue-800/40 transition-all duration-300">
                <motion.img 
                  src="/googleads.png" 
                  alt="Pixel do Google Ads"
                  className="w-24 h-24 mx-auto mb-4"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-bold mb-2">Pixel do Google Ads</h3>
                <p className="text-sm text-muted-foreground">
                  Em menos de 5 segundos você pode clonar qualquer página de venda e editar. E o melhor é que a Vercel já vai hospedar tudo pra você.
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} whileHover={{ y: -12, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', filter: 'brightness(1.04)' }} className="transition-all">
              <Card className="p-6 text-center bg-white/80 dark:bg-blue-900/80 shadow-xl rounded-2xl border border-white/40 dark:border-blue-800/40 transition-all duration-300">
                <motion.img 
                  src="/Editor-150x150.png" 
                  alt="Alteração da Página"
                  className="w-24 h-24 mx-auto mb-4"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-bold mb-2">Alteração da Página</h3>
                <p className="text-sm text-muted-foreground">
                  Vai clonar uma página e quer alterar alguma coisa? CLONADOR 10 você consegue alterar qualquer elemento da página.
                </p>
              </Card>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">
              Tenha uma página para anunciar em minutos!{' '}
              <span className="bg-orange-500 text-white px-2 py-1 rounded">
                Sem perder tempo mexendo com ferramentas complexas
              </span>
            </h3>
            <p className="text-xl font-semibold text-blue-600">
              Ferramenta completa feita de afiliado para afiliado!
            </p>
          </div>
        </div>
      </motion.section>

      {/* Para quem é Section */}
      <motion.section className="py-20 px-4" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 dark:text-blue-100">
            Para quem CLONADOR 10
          </h2>
          <div className="space-y-4">
            {[
              'Afiliados que ainda não tem estrutura própria',
              'Para quem anuncia no Google, Bing e Facebook Ads',
              'Quer Clonar páginas brasileiras e Gringas',
              'Para quem não quer perder tempo com ferramentas complexas',
              'Já tentou usar diversas ferramentas e não conseguiu clonar',
              'Conquistar sua liberdade financeira e parar de se preocupar com contas',
              'Para você que sofre com bloqueios na conta de anúncios',
            ].map((item, idx) => (
              <motion.div key={item} className="flex items-start gap-3" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx }} viewport={{ once: true }}>
                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Treinamento Section */}
      <motion.section className="py-20 px-4 bg-white/50 dark:bg-blue-950/50" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900 dark:text-blue-100">
            Treinamento completo!
          </h2>
          <p className="text-center text-xl mb-12">
            Não te entregamos somente a ferramenta, mas um treinamento completo e suporte para melhor experiência com a plataforma.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div className="space-y-6" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-semibold mb-6">Você terá acesso a:</h3>
              <div className="space-y-4">
                {[
                  'Como ativar a ferramenta',
                  'Como usar todos os recursos da ferramenta',
                  'Como criar e configurar sua hospedagem 100% grátis!',
                  'Como publicar a página usando WordPress',
                ].map((item, idx) => (
                  <motion.div key={item} className="flex items-center gap-3" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx }} viewport={{ once: true }}>
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <p className="text-lg">{item}</p>
                  </motion.div>
                ))}
                <motion.div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600 text-white p-4 rounded-xl shadow-lg mt-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
                  <span className="bg-white/20 rounded-full p-2"><svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z' /></svg></span>
                  <p className="text-lg font-semibold">Suporte: Suporte via WhatsApp para qualquer dúvida</p>
                </motion.div>
                <motion.div className="flex items-center gap-3 bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 text-white p-4 rounded-xl shadow-lg" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }}>
                  <span className="bg-white/20 rounded-full p-2"><svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' /></svg></span>
                  <p className="text-lg font-semibold">Bônus: Modelos de páginas de vendas prontas</p>
                </motion.div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.97 }}
                className="mt-6 flex justify-center"
              >
                <a
                  href="https://pay.cakto.com.br/b8vcnjr_401742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-lg py-4 flex items-center justify-center gap-2 font-bold rounded-2xl shadow-xl bg-gradient-to-r from-green-600 via-green-500 to-lime-400 bg-[length:200%_200%] transition-all duration-300 hover:brightness-110 hover:shadow-2xl focus:ring-4 focus:ring-green-300 border-0 animate-gradient-x relative overflow-hidden max-w-xs text-white"
                  style={{ boxShadow: '0 8px 32px 0 rgba(31, 135, 38, 0.18)' }}
                >
                  Quero Acesso ao Treinamento
                </a>
              </motion.div>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <img 
                src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg"
                alt="Pessoa trabalhando no computador"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section className="py-20 px-4" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-900 dark:text-blue-100">
            Oferta Exclusiva
          </h2>
          <motion.div 
            className="p-8 relative overflow-hidden bg-white/30 dark:bg-blue-900/30 backdrop-blur-lg border border-white/40 dark:border-blue-800/40 shadow-2xl rounded-3xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400 animate-pulse shadow-lg"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Acesso Vitalício
            </motion.div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Plano Completo</h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg line-through text-muted-foreground">R$ 997</span>
                <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 animate-pulse">
                  97% OFF
                </Badge>
              </div>
              <p className="text-5xl font-extrabold mb-4 text-blue-600">R$ 29,90</p>
              <p className="text-muted-foreground">Pagamento único</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <motion.div className="flex items-start gap-2" initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
                <motion.span whileInView={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 0.7 }}>
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                </motion.span>
                <span>Clonagem ilimitada de sites</span>
              </motion.div>
              <motion.div className="flex items-start gap-2" initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                <motion.span whileInView={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 0.7 }}>
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                </motion.span>
                <span>Suporte técnico prioritário</span>
              </motion.div>
              <motion.div className="flex items-start gap-2" initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                <motion.span whileInView={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 0.7 }}>
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                </motion.span>
                <span>Hospedagem premium incluída</span>
              </motion.div>
              <motion.div className="flex items-start gap-2" initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
                <motion.span whileInView={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 0.7 }}>
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                </motion.span>
                <span>Atualizações gratuitas</span>
              </motion.div>
              <motion.div className="flex items-start gap-2" initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
                <motion.span whileInView={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 0.7 }}>
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                </motion.span>
                <span>Templates exclusivos</span>
              </motion.div>
              <motion.div className="flex items-start gap-2" initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }}>
                <motion.span whileInView={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 0.7 }}>
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                </motion.span>
                <span>Exportação em múltiplos formatos</span>
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex justify-center">
              <a
                href="https://pay.cakto.com.br/b8vcnjr_401742"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-lg py-6 font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 max-w-xs text-white"
              >
                Aproveitar Oferta Exclusiva
                <Gift className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
            <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2 mt-4">
              <Clock className="h-4 w-4" />
              Oferta por tempo limitado
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Depoimentos Section */}
      <motion.section className="py-20 px-4 bg-gradient-to-br from-blue-100 via-blue-300 to-purple-200 dark:from-blue-950 dark:via-blue-900 dark:to-purple-900" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
            <span className="text-blue-400">Depoimentos</span> <span className="text-blue-900 dark:text-blue-100">dos web designers<br/>que amaram o Clone page 10</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                avatar: null,
                name: 'Micael Douglas',
                role: 'Web designer',
                text: 'O Clonador 10 facilitou demais meu trabalho! Agora consigo clonar qualquer site em minutos, sem complicação. Recomendo para todo mundo que quer agilidade e resultado profissional.'
              },
              {
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                name: 'Jonatas Marques',
                role: 'Web designer',
                text: 'Nunca foi tão fácil clonar páginas! O Clonador 10 me ajudou a entregar projetos muito mais rápido e com qualidade. A função de edição visual é sensacional.'
              },
              {
                avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
                name: 'Vitor',
                role: 'Web designer',
                text: 'Eu sempre tive dificuldade para replicar sites de clientes, mas com o Clonador 10 ficou simples. O recurso de pixel e a hospedagem automática são diferenciais incríveis.'
              },
              {
                avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
                name: 'Arthur - Orion Studio',
                role: 'Web designer',
                text: 'O Clonador 10 mudou minha rotina! Consigo clonar, editar e publicar sites completos em poucos cliques. É a melhor ferramenta para quem trabalha com web.'
              },
              {
                avatar: null,
                name: 'Micael Douglas',
                role: 'Web designer',
                text: 'Além de clonar sites, consigo personalizar tudo facilmente. O suporte é ótimo e a plataforma é muito intuitiva. Vale cada centavo!' 
              },
            ].map((item, idx) => (
              <motion.div
                key={item.name + idx}
                className={`bg-white rounded-2xl p-6 shadow-lg text-black flex flex-col gap-2 cursor-pointer transition-all duration-300 ${openTestimonial === idx ? 'ring-2 ring-blue-400 scale-105 z-10' : ''}`}
                onClick={() => setOpenTestimonial(openTestimonial === idx ? null : idx)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <div className="flex items-center gap-3 mb-2">
                  {item.avatar ? (
                    <img src={item.avatar} alt={item.name} className="rounded-full w-10 h-10 object-cover" />
                  ) : (
                    <span className="bg-neutral-700 rounded-full w-10 h-10 flex items-center justify-center text-2xl">👤</span>
                  )}
                  <div>
                    <div className="font-bold text-black">{item.name}</div>
                    <div className="text-xs text-gray-600">{item.role}</div>
                  </div>
                </div>
                <motion.div
                  animate={{ height: openTestimonial === idx ? 'auto' : 64, overflow: openTestimonial === idx ? 'visible' : 'hidden' }}
                  transition={{ duration: 0.4 }}
                  className="text-black font-medium"
                  layout
                >
                  {item.text}
                </motion.div>
                <motion.div animate={{ rotate: openTestimonial === idx ? 180 : 0 }} className="mx-auto mt-2 text-blue-400">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Garantia Section */}
      <motion.section className="py-20 px-4 bg-white/50 dark:bg-blue-950/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            <motion.img 
              src="/7diasdegaranita.png" 
              alt="Selo de garantia de 7 dias" 
              className="mx-auto mb-8 w-48 h-48 object-cover rounded-full shadow-2xl border-4 border-blue-200"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              100% Seguro
            </motion.div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-900 dark:text-blue-100">
            Faça o Teste Por 07 Dias
          </h2>
          <p className="text-xl mb-4 font-medium">
            A Extensão é validada e prática de usar.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Mas é claro que se por algum motivo você achar que não é para você, basta nos enviar uma mensagem em até 07 dias que devolveremos o seu dinheiro.
          </p>
          <motion.div 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 flex justify-center"
          >
            <a
              href="https://pay.cakto.com.br/b8vcnjr_401742"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs mx-auto text-lg py-4 flex items-center justify-center gap-2 font-bold rounded-2xl shadow-xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-[length:200%_200%] transition-all duration-300 hover:brightness-110 hover:shadow-2xl focus:ring-4 focus:ring-blue-300 border-0 animate-gradient-x relative overflow-hidden text-white"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
            >
              Quero Testar por 7 Dias
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 8, rotate: 15 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-block"
              >
                <Gift className="ml-2 h-5 w-5" />
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 dark:text-blue-100">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white dark:bg-blue-900/50 rounded-lg">
              <AccordionTrigger className="px-6">Como recebo o acesso a ferramenta?</AccordionTrigger>
              <AccordionContent className="px-6">
                Após a confirmação do pagamento, você receberá um email com as instruções de acesso e download da ferramenta.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white dark:bg-blue-900/50 rounded-lg">
              <AccordionTrigger className="px-6">Funciona em qualquer plataforma?</AccordionTrigger>
              <AccordionContent className="px-6">
                Sim, nossa ferramenta é compatível com Windows, Mac e Linux.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white dark:bg-blue-900/50 rounded-lg">
              <AccordionTrigger className="px-6">Preciso investir em hospedagem?</AccordionTrigger>
              <AccordionContent className="px-6">
                Não, oferecemos hospedagem premium incluída no pacote.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white dark:bg-blue-900/50 rounded-lg">
              <AccordionTrigger className="px-6">Preciso de WordPress para usar?</AccordionTrigger>
              <AccordionContent className="px-6">
                Não, nossa ferramenta é independente e não requer WordPress ou qualquer outro CMS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-white dark:bg-blue-900/50 rounded-lg">
              <AccordionTrigger className="px-6">Preciso Contratar Hospedagem e Domínio?</AccordionTrigger>
              <AccordionContent className="px-6">
                Não, a hospedagem já está incluída no pacote. Você só precisa de um domínio se desejar um endereço personalizado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="bg-white dark:bg-blue-900/50 rounded-lg">
              <AccordionTrigger className="px-6">Quantas Páginas posso Clonar?</AccordionTrigger>
              <AccordionContent className="px-6">
                Não há limite! Você pode clonar quantas páginas desejar com sua licença vitalícia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="bg-white dark:bg-blue-900/50 rounded-lg">
              <AccordionTrigger className="px-6">Vou ter algum suporte?</AccordionTrigger>
              <AccordionContent className="px-6">
                Sim! Oferecemos suporte técnico prioritário para todos os clientes através do nosso canal de atendimento.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <motion.footer className="bg-white/70 dark:bg-blue-950/80 py-12 px-4 shadow-inner backdrop-blur-xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-medium">
            © 2024 Clone page 10. Todos os direitos reservados.
          </p>
        </div>
      </motion.footer>
    </main>
  );
}