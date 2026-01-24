<template>
  <div>
    <Nav />

    <section class="max-w-4xl mx-auto px-6 py-24 mt-20">
      <div v-if="loading" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p class="text-gray-500 mt-4">Carregando...</p>
      </div>

      <div v-else-if="order" class="space-y-8">
        <!-- Status do Pagamento -->
        <div 
          v-if="paymentStatus === 'approved'" 
          class="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
        >
          <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-green-800 mb-2">Pagamento Aprovado!</h1>
          <p class="text-green-700 mb-4">Obrigado pela sua compra, {{ order.customer_name }}!</p>
          <p class="text-sm text-green-600">Pedido #{{ order.id }}</p>
        </div>

        <div 
          v-else-if="paymentStatus === 'pending'" 
          class="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center"
        >
          <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-yellow-800 mb-2">Pagamento Pendente</h1>
          <p class="text-yellow-700 mb-4">Aguardando confirmação do pagamento...</p>
          <p class="text-sm text-yellow-600">Pedido #{{ order.id }}</p>
        </div>

        <div 
          v-else-if="paymentStatus === 'rejected'" 
          class="bg-red-50 border border-red-200 rounded-lg p-8 text-center"
        >
          <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-red-800 mb-2">Pagamento Rejeitado</h1>
          <p class="text-red-700 mb-4">Não foi possível processar seu pagamento.</p>
          <p class="text-sm text-red-600 mb-4">Pedido #{{ order.id }}</p>
          <button 
            @click="tentarNovamente"
            class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            Tentar Novamente
          </button>
        </div>

        <div 
          v-else 
          class="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center"
        >
          <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-blue-800 mb-2">Pedido Criado!</h1>
          <p class="text-blue-700 mb-4">Aguardando pagamento...</p>
          <p class="text-sm text-blue-600">Pedido #{{ order.id }}</p>
        </div>

        <!-- Informações do Pagamento -->
        <div v-if="order.payment_detail" class="bg-white border rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Informações do Pagamento</h2>
          
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Método:</span>
              <span class="font-medium">{{ getPaymentMethodName(order.payment_detail) }}</span>
            </div>
            <div v-if="order.payment_detail.transaction_amount" class="flex justify-between">
              <span class="text-gray-600">Valor:</span>
              <span class="font-medium">R$ {{ order.payment_detail.transaction_amount.toFixed(2) }}</span>
            </div>
            <div v-if="order.payment_detail.date_approved" class="flex justify-between">
              <span class="text-gray-600">Data de Aprovação:</span>
              <span class="font-medium">{{ formatDate(order.payment_detail.date_approved) }}</span>
            </div>
          </div>
        </div>

        <!-- Detalhes do Pedido -->
        <div class="bg-white border rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Detalhes do Pedido</h2>

          <div class="space-y-4">
            <div v-for="item in orderItems" :key="item.id" class="flex gap-4 border-b pb-4">
              <div class="flex-1">
                <p class="font-medium">{{ item.product_name }}</p>
                <p class="text-sm text-gray-500">Quantidade: {{ item.quantity }}</p>
              </div>
              <p class="font-semibold">R$ {{ item.total_price.toFixed(2) }}</p>
            </div>

            <div class="flex justify-between font-bold text-lg pt-4">
              <span>Total</span>
              <span class="text-blue-600">R$ {{ order.total_amount.toFixed(2) }}</span>
            </div>
          </div>
        </div>

        <!-- Endereço de Entrega -->
        <div class="bg-white border rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Endereço de Entrega</h2>
          <p class="text-gray-700">
            {{ order.shipping_street }}, {{ order.shipping_number }}
            <span v-if="order.shipping_complement">- {{ order.shipping_complement }}</span>
          </p>
          <p class="text-gray-700">
            {{ order.shipping_neighborhood }} - {{ order.shipping_city }}/{{ order.shipping_state }}
          </p>
          <p class="text-gray-700">CEP: {{ order.shipping_cep }}</p>
        </div>

        <!-- Ações -->
        <div class="flex gap-4 justify-center">
          <NuxtLink
            to="/produtos"
            class="px-6 py-3 border rounded-lg hover:bg-gray-50"
          >
            Continuar Comprando
          </NuxtLink>
          <button
            @click="acompanharPedido"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Acompanhar Pedido
          </button>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <p class="text-red-500 mb-4">Pedido não encontrado.</p>
        <NuxtLink to="/" class="text-blue-600 hover:underline">
          Voltar para home
        </NuxtLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const supabase = useSupabaseClient()

const loading = ref(true)
const order = ref(null)
const orderItems = ref([])
const paymentStatus = ref('')

onMounted(async () => {
  const orderId = route.params.id
  paymentStatus.value = route.query.status || ''

  try {
    // Buscar pedido
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single()

    if (orderError) throw orderError
    order.value = orderData

    // Buscar itens do pedido
    const { data: itemsData, error: itemsError } = await supabase
      .from('order_items')
      .select('*')
      .eq('order_id', orderId)

    if (itemsError) throw itemsError
    orderItems.value = itemsData

    // Se tiver status na query, atualizar
    if (paymentStatus.value && paymentStatus.value !== orderData.payment_status) {
      let newStatus = 'pending'
      
      if (paymentStatus.value === 'approved') {
        newStatus = 'paid'
      } else if (paymentStatus.value === 'rejected') {
        newStatus = 'cancelled'
      }

      await supabase
        .from('orders')
        .update({ 
          payment_status: paymentStatus.value,
          status: newStatus
        })
        .eq('id', orderId)
    }

  } catch (error) {
    console.error('Erro ao carregar pedido:', error)
  } finally {
    loading.value = false
  }
})

const getPaymentMethodName = (detail) => {
  const methods = {
    pix: 'PIX',
    credit_card: 'Cartão de Crédito',
    debit_card: 'Cartão de Débito',
    bolbancario: 'Boleto Bancário'
  }
  return methods[detail.payment_method_id] || detail.payment_type_id || 'Mercado Pago'
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString('pt-BR')
}

const tentarNovamente = () => {
  router.push('/checkout')
}

const acompanharPedido = () => {
  alert('Funcionalidade de acompanhamento em desenvolvimento!')
}
</script>