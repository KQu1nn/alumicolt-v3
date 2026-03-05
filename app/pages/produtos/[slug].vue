<template>
    <div class="min-h-screen bg-gray-50 flex flex-col">
        <Nav />

        <!-- HEADER -->
        <section class="w-full px-6 md:px-50 py-10 md:py-10">
            <div class="max-w-5xl mx-auto flex flex-col gap-6">
                <div class="flex items-center gap-1">
                    <Icon name="lucide:arrow-left" size="15" class="text-gray-600" />
                    <NuxtLink to="/" class="text-sm text-gray-600 font-semibold">
                        Voltar
                    </NuxtLink>
                </div>


                <nav class="flex items-center gap-2 text-gray-500 text-sm">
                    <NuxtLink to="/" class="hover:text-blue-600 transition">Início</NuxtLink>
                    <Icon name="lucide:chevron-right" size="14" />
                    <NuxtLink to="/" class="hover:text-blue-600 transition">Produtos</NuxtLink>
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
                    <div class="flex flex-col gap-3">
                        <p class="text-gray-600 leading-relaxed text-base md:text-[17px]">
                            {{ product.shortDescription }}
                        </p>
                    </div>
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
                <div class="flex flex-col gap-3">
                    <p v-for="(paragraph, index) in product.description.split('\n\n').filter(p => p.trim())"
                        :key="index" class="text-gray-600 leading-relaxed text-base md:text-[17px]">
                        {{ paragraph.trim() }}
                    </p>
                </div>
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
import fachadaGlazing from '~/assets/images/imagesProd/fachada-glazing.png'
import ripados from '~/assets/images/imagesProd/ripados.png'
import gradis from '~/assets/images/imagesProd/gradis.png'
import portasEntrada from '~/assets/images/imagesProd/portas-de-entrada.avif'
import box from '~/assets/images/imagesProd/box.webp'
import temperados from '~/assets/images/imagesProd/temperados.png'
import claraboias from '~/assets/images/imagesProd/claraboias.jpg'
import contramarco from '~/assets/images/imagesProd/contramarco.png'
import brise from '~/assets/images/imagesProd/brise.jpg'
import guardaCorpo from '~/assets/images/imagesProd/guarda-corpo.webp'
import esquadria from '~/assets/images/imagesProd/esquadrias.jpg'

const route = useRoute()
const lojaUrl = 'https://alumicolt-test.rf.gd'

const allProducts = [
    {
        title: 'Fachadas Glazing',
        slug: 'fachadas-glazing',
        image: fachadaGlazing,
        shortDescription: 'Soluções sofisticadas em pele de vidro que unem estética contemporânea, eficiência térmica e máxima luminosidade.',
        description: `A fachada glazing é um sistema de fachada em vidro muito utilizado na arquitetura moderna, caracterizado pela fixação dos painéis de vidro à estrutura do prédio sem perfis metálicos aparentes na parte externa. Também é conhecida como pele de vidro estrutural.

Nesse sistema, os vidros são colados ou fixados à estrutura de alumínio por meio de silicone estrutural de alta resistência ou fitas especiais com função estrutural. Isso permite que o vidro suporte ações como vento, variações térmicas e movimentações naturais da edificação com segurança.

Visualmente, a principal característica da fachada glazing é o aspecto contínuo e uniforme do vidro, proporcionando um design sofisticado, moderno e minimalista. Externamente, a edificação apresenta uma superfície praticamente toda envidraçada.`,
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
        shortDescription: 'Perfis em alumínio com design moderno, ideais para compor fachadas e ambientes internos com leveza e ventilação controlada.',
        description: `Os ripados em alumínio são elementos arquitetônicos versáteis, amplamente utilizados em fachadas, divisórias, pergolados e ambientes internos. Sua estrutura linear cria ritmo visual e confere personalidade aos projetos, sendo uma das tendências mais marcantes da arquitetura contemporânea.

Fabricados em alumínio extrudado de alta resistência, os ripados são leves, duráveis e não sofrem com corrosão, oxidação ou ataques de insetos — o que os torna ideais tanto para ambientes internos quanto externos. O acabamento pode ser personalizado em diversas cores por pintura eletrostática ou anodização.

Além da estética, os ripados oferecem funcionalidade: permitem ventilação controlada, filtram a luz natural e criam jogos de sombra que valorizam os ambientes. São produzidos sob medida, adaptando-se a qualquer dimensão ou composição de projeto.`,
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
        shortDescription: 'Segurança e durabilidade com acabamento refinado. Produzidos sob medida para atender projetos residenciais e corporativos.',
        description: `Os gradis e portões em alumínio são soluções que unem segurança, durabilidade e design refinado para delimitar e proteger propriedades residenciais e comerciais. Diferente do ferro, o alumínio não enferruja, exigindo muito menos manutenção ao longo do tempo.

A fabricação é totalmente sob medida, permitindo que cada peça seja desenvolvida de acordo com as necessidades do projeto — seja em termos de altura, largura, espaçamento entre barras ou estilo do acabamento. Os portões podem ser deslizantes, pivotantes ou basculantes, com opção de automação.

O acabamento em pintura eletrostática garante alta resistência a riscos, intempéries e variações climáticas, mantendo a aparência impecável por muitos anos. Cada peça passa por controle de qualidade rigoroso antes da entrega e instalação.`,
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
        shortDescription: 'Portas robustas, elegantes e de alto padrão, desenvolvidas para oferecer segurança e impacto visual logo na chegada.',
        description: `As portas de entrada em alumínio e vidro temperado são o cartão de visitas de qualquer edificação. Combinando robustez estrutural com elegância visual, elas transmitem sofisticação desde o primeiro contato, valorizando imóveis residenciais e comerciais.

Produzidas com perfis de alumínio de alta resistência e vidros temperados de 8mm ou laminados, essas portas oferecem segurança real sem sacrificar a leveza estética. Os acabamentos disponíveis incluem anodizado natural, escovado, champagne e diversas opções de pintura eletrostática.

O sistema de abertura pode ser pivotante — com movimento suave e impacto visual marcante — ou de correr, ideal para vãos maiores. Todas as peças são fabricadas sob medida e instaladas com precisão milimétrica para garantir vedação, alinhamento e durabilidade excepcionais.`,
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
        shortDescription: 'Funcionalidade e estilo em soluções de vidro temperado com acabamentos de qualidade e montagem precisa.',
        description: `Os boxes para banheiro em vidro temperado são a escolha ideal para quem busca funcionalidade, higiene e elegância no ambiente. O vidro temperado, além de extremamente resistente, é fácil de limpar e confere sensação de amplitude ao espaço.

Trabalhamos com espessura de 8mm, atendendo às normas técnicas de segurança vigentes. Os perfis em alumínio anodizado ou acabamento inox garantem resistência à umidade e ao contato constante com produtos de limpeza, sem perder o brilho ou a forma ao longo do tempo.

Os sistemas de abertura incluem portas articuladas, deslizantes e dobráveis, cada um indicado para diferentes configurações de banheiro. O vidro pode ser transparente, fosco ou fumê, permitindo combinar privacidade e estilo conforme a preferência do cliente.`,
        specs: [
            { label: 'Material', value: 'Vidro temperado 8mm' },
            { label: 'Perfis', value: 'Alumínio anodizado ou inox' },
            { label: 'Abertura', value: 'Articulada, deslizante ou dobrável' },
            { label: 'Acabamento', value: 'Fosco, transparente ou fumê' },
        ]
    },
    {
        title: 'Kits Temperados',
        slug: 'kits-temperados',
        image: temperados,
        shortDescription: 'Conjuntos completos para portas e janelas com vidro temperado, pensados para facilitar a instalação com desempenho garantido.',
        description: `Os kits temperados são conjuntos completos que reúnem vidro temperado, perfis de alumínio e ferragens em um único pacote pensado para facilitar a execução de projetos com agilidade e qualidade garantida. São ideais para construtoras, vidraçarias e profissionais da construção civil.

O vidro temperado utilizado passa por processo térmico que aumenta sua resistência mecânica em até cinco vezes em relação ao vidro comum. Em caso de quebra, fragmenta-se em pequenos pedaços sem arestas cortantes, oferecendo mais segurança aos usuários.

Os kits são disponibilizados em espessuras de 8mm a 12mm e podem ser aplicados em portas, janelas, divisórias e sacadas. Toda a composição é fornecida pronta para montagem, reduzindo desperdício de material e tempo de instalação em obra.`,
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
        image: claraboias,
        shortDescription: 'Iluminação natural com eficiência e resistência. Ideais para aproveitar a luz do dia sem abrir mão da proteção.',
        description: `As claraboias são elementos arquitetônicos que permitem a entrada de luz natural em ambientes internos, reduzindo o consumo de energia elétrica e criando atmosferas mais agradáveis e valorizadas. São amplamente utilizadas em residências, galpões, áreas de lazer e edifícios comerciais.

Fabricadas com estrutura em alumínio e cobertura em vidro temperado ou policarbonato, as claraboias são projetadas para suportar cargas de vento, chuva e impacto, garantindo segurança e estanqueidade ao longo de toda a sua vida útil. A vedação em borracha EPDM assegura total proteção contra infiltrações.

Cada claraboia é produzida sob medida, adaptando-se tanto a coberturas planas quanto inclinadas. O projeto leva em conta orientação solar, volume de luz desejado e integração com o restante da fachada ou cobertura, resultando em uma solução técnica e esteticamente integrada.`,
        specs: [
            { label: 'Material', value: 'Alumínio e vidro ou policarbonato' },
            { label: 'Vedação', value: 'Borracha EPDM de alta durabilidade' },
            { label: 'Aplicação', value: 'Coberturas planas e inclinadas' },
            { label: 'Personalização', value: 'Dimensões sob medida' },
        ]
    },
    {
        title: 'Contramarcos',
        slug: 'contramarcos',
        image: contramarco,
        shortDescription: 'Acabamento técnico que garante encaixe perfeito das esquadrias, com estética limpa e melhor vedação.',
        description: `Os contramarcos são peças técnicas essenciais para a instalação correta de esquadrias, garantindo o encaixe preciso entre a janela ou porta e a alvenaria. Além da função estrutural, proporcionam um acabamento limpo e profissional que valoriza o resultado final da obra.

Fabricados em alumínio extrudado, os contramarcos são resistentes, leves e não estão sujeitos à corrosão ou deformação por umidade — problemas comuns em contramarcos de madeira ou aço. Seu perfil é projetado para facilitar a instalação e assegurar vedação eficiente contra vento e água.

Disponíveis em diferentes larguras para atender variadas espessuras de parede, os contramarcos podem ser fornecidos com acabamento anodizado ou em pintura eletrostática, harmonizando com qualquer esquadria e com o estilo arquitetônico do projeto.`,
        specs: [
            { label: 'Material', value: 'Alumínio extrudado' },
            { label: 'Acabamento', value: 'Pintura eletrostática ou anodizado' },
            { label: 'Aplicação', value: 'Fachadas, divisórias e interiores' },
            { label: 'Personalização', value: 'Cores e dimensões sob medida' },
        ]
    },
    {
        title: 'Brises',
        slug: 'brises',
        image: brise,
        shortDescription: 'Controle solar com elegância. Nossos brises em alumínio combinam funcionalidade e apelo arquitetônico.',
        description: `Os brises em alumínio são elementos de controle solar que protegem fachadas e ambientes internos da incidência direta do sol, reduzindo o calor e o ofuscamento sem bloquear completamente a visão ou a ventilação natural. São amplamente utilizados na arquitetura bioclimática e em projetos de eficiência energética.

Com orientação horizontal ou vertical, os brises podem ser fixos ou reguláveis, permitindo ao usuário controlar a entrada de luz conforme o horário e a necessidade. O alumínio extrudado garante leveza estrutural e alta resistência às intempéries, sendo ideal para uso externo de longo prazo.

O acabamento por pintura eletrostática oferece grande variedade de cores, permitindo que os brises se tornem elementos de destaque na composição estética da fachada. Cada conjunto é projetado e fabricado sob medida, considerando a orientação solar do imóvel e as exigências do projeto arquitetônico.`,
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
        image: guardaCorpo,
        shortDescription: 'Segurança sem abrir mão do design. Soluções em vidro e alumínio para varandas, escadas e sacadas com visual leve e moderno.',
        description: `O guarda-corpo em alumínio e vidro temperado é uma solução de proteção coletiva obrigatória em varandas, sacadas, escadas e mezaninos, conforme a norma NBR 14718. Além de cumprir sua função de segurança, agrega leveza visual e sofisticação ao ambiente.

O vidro temperado ou laminado de 10mm utilizado nas painéis oferece alta resistência a impactos e, em caso de ruptura do laminado, os fragmentos permanecem unidos pela película interna, evitando acidentes. Os perfis em alumínio garantem fixação sólida e acabamento duradouro mesmo em ambientes expostos à umidade e ao sol.

Os sistemas de fixação podem ser embutidos na laje, laterais ou sobre o piso, adaptando-se às diferentes condições estruturais de cada obra. Todos os projetos seguem as especificações normativas e são desenvolvidos para garantir segurança máxima com o mínimo de interferência visual.`,
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
        image: esquadria,
        shortDescription: 'Projetos personalizados para cada obra, com alta performance em vedação, isolamento e design funcional.',
        description: `As esquadrias sob medida em alumínio são a solução definitiva para projetos que exigem desempenho técnico e personalização total. Cada peça é desenvolvida a partir das especificações do arquiteto ou cliente, atendendo com precisão às demandas de vedação, isolamento acústico, térmico e estética.

Utilizamos perfis das séries 25 e 30, com possibilidade de vidros simples, duplos ou laminados, de acordo com o nível de desempenho exigido pelo projeto. Os sistemas de abertura disponíveis incluem correr, maxim-ar, projetar, fixo e combinações entre eles, oferecendo flexibilidade total na concepção dos vãos.

O processo produtivo inclui análise de projeto, fabricação em ambiente controlado e instalação técnica especializada. O resultado é uma esquadria que se integra perfeitamente à arquitetura, com alto padrão de acabamento e desempenho comprovado ao longo do tempo.`,
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