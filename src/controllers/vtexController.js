const axios = require('axios');

const getPedido = async (req, res) => {
    const orderId = req.params.id;
    // Las credenciales ya se cargan desde el .env y no persisten vulnerabilidades
    const { VTEX_APP_KEY, VTEX_APP_TOKEN, VTEX_ACCOUNT_NAME } = process.env;

    const config = {
        headers: {
            'X-VTEX-API-AppKey': VTEX_APP_KEY,
            'X-VTEX-API-AppToken': VTEX_APP_TOKEN,
            'Accept': 'application/json'
        }
    };

    try {
        const url = `https://${VTEX_ACCOUNT_NAME}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}`;
        const response = await axios.get(url, config);
        res.json({ status: "OK", data: response.data });
    } catch (error) {
        console.error('Error al obtener el pedido de VTEX:', error.message);
        res.status(500).json({ status: "ERROR", message: 'Error de conector de pedidos' });
    }
};

module.exports = {
    getPedido
};
