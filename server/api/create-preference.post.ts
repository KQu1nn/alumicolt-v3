import { MercadoPagoConfig, Preference } from "mercadopago";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { items, payerEmail, paymentMethod } = await readBody(event);

    try {
        const client = new MercadoPagoConfig({ accessToken: config.mercadopagoAccessToken });
        const preference = new Preference(client);

        const body: any = {
            items: items.map((item: any) => ({
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                unit_price: item.price,
                currency_id: "BRL",
            })),
            payer: { email: payerEmail || "test@test.com" },
            back_urls: {
                success: `${event.node.req.headers.origin}/payment/success`,
                failure: `${event.node.req.headers.origin}/payment/failure`,
                pending: `${event.node.req.headers.origin}/payment/pending`,
            },
            auto_return: "approved",
            notification_url: `${event.node.req.headers.origin}/api/webhook/mercadopago`,
        };

        if (paymentMethod === "pix") {
            body.payment_methods = {
                excluded_payment_types: [
                    { id: "credit_card" },
                    { id: "ticket" },
                ],
                installments: 1,
            };
            body.binary_mode = true; // essencial para PIX
            // Expira em 30 minutos
            body.expires_at = new Date(Date.now() + 30 * 60 * 1000);


            const result = await preference.create({ body });
            

            return {
                qrCodeBase64: result.point_of_interaction?.transaction_data?.qr_code_base64 || null,
                qrCode: result.point_of_interaction?.transaction_data?.qr_code || null,
            };
            console.log("Preferência PIX criada:", result);
        } else {
            body.payment_methods = { excluded_payment_types: [] };
            const result = await preference.create({ body });
            
            return { preferenceId: result.id, initPoint: result.init_point };
            console.log("Preferência PIX criada:", result);
        }
    } catch (error: any) {
        console.error("Erro ao criar preferência:", error);
        throw createError({ statusCode: 500, message: error.message || "Erro ao criar preferência" });
    }
});
