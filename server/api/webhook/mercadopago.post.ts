export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log('Webhook recebido:', body);

  if (body.type === 'payment') {
    const paymentId = body.data.id;

    // Buscar detalhes do pagamento no Mercado Pago
    const mercadopago = require('mercadopago');
    mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN);

    const payment = await mercadopago.payment.findById(paymentId);

    if (payment.status === 'approved') {
      // Atualizar pedido no Supabase ou seu banco
      console.log('Pagamento PIX aprovado!');
    }
  }

  return { received: true };
});
