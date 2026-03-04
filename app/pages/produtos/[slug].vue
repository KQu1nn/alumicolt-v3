<!-- pages/produtos/[slug].vue -->
<template>
    <div class="min-h-screen bg-gray-50 flex flex-col">
        <Nav />

        <!-- HEADER -->
        <section class="w-full px-6 md:px-50 py-10 md:py-10">
            <div class="max-w-5xl mx-auto flex flex-col gap-6">

                <!-- Breadcrumb -->
                <nav class="flex items-center gap-2 text-gray-500 text-sm">
                    <NuxtLink to="/" class="hover:text-blue-600 transition">Início</NuxtLink>
                    <Icon name="lucide:chevron-right" size="14" />
                    <NuxtLink to="/produtos" class="hover:text-blue-600 transition">Produtos</NuxtLink>
                    <Icon name="lucide:chevron-right" size="14" />
                    <span class="text-blue-600 font-semibold">{{ product.title }}</span>
                </nav>

                <!-- Linha e Subtítulo -->
                <div class="flex items-center gap-2">
                    <span class="w-10 h-[2px] bg-blue-600"></span>
                    <p class="text-blue-600 font-bold tracking-widest text-sm uppercase">Detalhes do Produto</p>
                </div>

                <!-- Título e Descrição -->
                <div class="flex flex-col gap-3">
                    <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        {{ product.title }}
                    </h1>
                    <p class="text-gray-600 text-base md:text-lg max-w-2xl">
                        {{ product.description }}
                    </p>
                </div>
            </div>
        </section>

        <!-- CONTEÚDO -->
        <section class="flex-1 max-w-5xl mx-auto px-6 md:px-12 py-5 md:py-10 flex flex-col gap-12">

            <!-- IMAGEM PRINCIPAL -->
            <div
                class="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 flex items-center justify-center p-4">
                <div class="w-full bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                    <img :src="product.image" :alt="`Imagem de ${product.title}`"
                        class="max-h-[450px] w-auto object-contain transition-transform duration-300 hover:scale-[1.02]" />
                </div>
            </div>

            <!-- DESCRIÇÃO -->
            <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                <h2 class="text-2xl font-bold text-blue-700">Sobre o produto</h2>
                <p class="text-gray-600 leading-relaxed text-base md:text-[17px]">
                    {{ product.description }}
                </p>
            </div>

            <!-- ESPECIFICAÇÕES -->
            <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-2xl font-bold text-blue-700 mb-6">Especificações Técnicas</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    <div v-for="spec in product.specs" :key="spec.label"
                        class="flex flex-col bg-gray-50 rounded-xl px-5 py-4 border border-gray-100 hover:border-blue-200 transition">
                        <span class="text-gray-500 text-sm">{{ spec.label }}</span>
                        <span class="text-gray-900 font-semibold text-base">{{ spec.value }}</span>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="flex flex-col sm:flex-row gap-4 mt-6">
                <NuxtLink to="/"
                    class="flex-1 text-center border border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition">
                    ← Voltar
                </NuxtLink>

                <a :href="lojaUrl" target="_blank"
                    class="flex-1 text-center bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition shadow-md">
                    Ver na Loja
                </a>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script setup>
// ✅ Importações corretas das imagens locais
import fachadaGlazing from '~/assets/images/imagesProd/fachada-glazing.png'
import ripados from '~/assets/images/imagesProd/ripados.png'
import gradis from '~/assets/images/imagesProd/gradis.jpg'
import portasEntrada from '~/assets/images/imagesProd/portas-de-entrada.avif'
import box from '~/assets/images/imagesProd/box.webp'

const route = useRoute()
const lojaUrl = 'https://alumicolt-test.rf.gd'

// ✅ Cada produto aponta para a imagem importada
const allProducts = [
    {
        title: 'Fachadas Glazing',
        slug: 'fachadas-glazing',
        image: fachadaGlazing,
        description: 'Soluções sofisticadas em pele de vidro que unem estética contemporânea, eficiência térmica e máxima luminosidade.',
        specs: [
            { label: 'Material', value: 'Alumínio e vidro temperado' },
            { label: 'Acabamento', value: 'Anodizado ou pintado eletrostático' },
            { label: 'Aplicação', value: 'Fachadas comerciais e residenciais' },
            { label: 'Personalização', value: 'Sob medida conforme projeto' },
        ]
    },
    {
        title: 'Ripados',
        slug: 'ripados',
        image: ripados,
        description: 'Perfis em alumínio com design moderno, ideais para compor fachadas e ambientes internos com leveza e ventilação controlada.',
        specs: [
            { label: 'Material', value: 'Alumínio extrudado' },
            { label: 'Acabamento', value: 'Pintura eletrostática ou anodizado' },
            { label: 'Aplicação', value: 'Fachadas, divisórias e interiores' },
            { label: 'Personalização', value: 'Cores e dimensões sob medida' },
        ]
    },
    {
        title: 'Gradis e Portões',
        slug: 'gradis-e-portoes',
        image: gradis,
        description: 'Segurança e durabilidade com acabamento refinado. Produzidos sob medida para atender projetos residenciais e corporativos.',
        specs: [
            { label: 'Material', value: 'Alumínio estrutural' },
            { label: 'Acabamento', value: 'Pintura eletrostática' },
            { label: 'Abertura', value: 'Deslizante, pivotante ou basculante' },
            { label: 'Personalização', value: 'Sob medida' },
        ]
    },
    {
        title: 'Portas de Entrada',
        slug: 'portas-de-entrada',
        image: portasEntrada,
        description: 'Portas robustas, elegantes e de alto padrão, desenvolvidas para oferecer segurança e impacto visual logo na chegada.',
        specs: [
            { label: 'Material', value: 'Alumínio e vidro temperado' },
            { label: 'Acabamento', value: 'Anodizado, escovado ou pintado' },
            { label: 'Abertura', value: 'Pivotante ou de correr' },
            { label: 'Vidro', value: 'Temperado 8mm ou laminado' },
        ]
    },
    {
        title: 'Boxes para Banheiro',
        slug: 'boxes-para-banheiro',
        image: box,
        description: 'Funcionalidade e estilo em soluções de vidro temperado com acabamentos de qualidade e montagem precisa.',
        specs: [
            { label: 'Material', value: 'Vidro temperado 8mm' },
            { label: 'Perfis', value: 'Alumínio anodizado ou inox' },
            { label: 'Abertura', value: 'Articulada, deslizante ou dobrável' },
            { label: 'Acabamento', value: 'Fosco, transparente ou fumê' },
        ]
    },
    // Os outros produtos podem usar imagens repetidas por enquanto
    {
        title: 'Kits Temperados',
        slug: 'kits-temperados',
        image: box,
        description: 'Conjuntos completos para portas e janelas com vidro temperado, pensados para facilitar a instalação com desempenho garantido.',
        specs: [
            { label: 'Composição', value: 'Vidro + ferragens + perfis' },
            { label: 'Vidro', value: 'Temperado de 8mm a 12mm' },
            { label: 'Aplicação', value: 'Portas, janelas e divisórias' },
            { label: 'Instalação', value: 'Kit completo para montagem fácil' },
        ]
    },
    {
        title: 'Claraboias',
        slug: 'claraboias',
        image: fachadaGlazing,
        description: 'Iluminação natural com eficiência e resistência. Ideais para aproveitar a luz do dia sem abrir mão da proteção.',
        specs: [
            { label: 'Material', value: 'Alumínio e vidro ou policarbonato' },
            { label: 'Vedação', value: 'Borracha EPDM de alta durabilidade' },
            { label: 'Aplicação', value: 'Coberturas planas e inclinadas' },
            { label: 'Personalização', value: 'Dimensões sob medida' },
        ]
    },
    {
        title: 'Brises',
        slug: 'brises',
        image: ripados,
        description: 'Controle solar com elegância. Nossos brises em alumínio combinam funcionalidade e apelo arquitetônico.',
        specs: [
            { label: 'Material', value: 'Alumínio extrudado' },
            { label: 'Orientação', value: 'Horizontal ou vertical' },
            { label: 'Acabamento', value: 'Pintura eletrostática' },
            { label: 'Personalização', value: 'Ângulo, cor e dimensão sob medida' },
        ]
    },
    {
        title: 'Guarda-Corpo',
        slug: 'guarda-corpo',
        image: gradis,
        description: 'Segurança sem abrir mão do design. Soluções em vidro e alumínio para varandas, escadas e sacadas com visual leve e moderno.',
        specs: [
            { label: 'Material', value: 'Alumínio e vidro temperado' },
            { label: 'Vidro', value: 'Temperado ou laminado 10mm' },
            { label: 'Fixação', value: 'Embutida, lateral ou sobre o piso' },
            { label: 'Norma', value: 'NBR 14718' },
        ]
    },
    {
        title: 'Esquadrias sob medida',
        slug: 'esquadrias-sob-medida',
        image: fachadaGlazing,
        description: 'Projetos personalizados para cada obra, com alta performance em vedação, isolamento e design funcional.',
        specs: [
            { label: 'Material', value: 'Alumínio série 25 ou 30' },
            { label: 'Vidro', value: 'Simples, duplo ou laminado' },
            { label: 'Abertura', value: 'Correr, maxim-ar, projetar ou fixo' },
            { label: 'Personalização', value: 'Projeto totalmente personalizado' },
        ]
    }
]

const product = computed(() =>
    allProducts.find(p => p.slug === route.params.slug) ?? allProducts[0]
)

useHead({
    title: computed(() => `${product.value.title} — Alumicolt`),
    meta: [
        { name: 'description', content: computed(() => product.value.description) }
    ]
})
</script>