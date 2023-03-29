import axios from "axios";

const endPoint = import.meta.env.VITE_end_point
const walletId = import.meta.env.VITE_wallet_id
const adminKey = import.meta.env.VITE_admin_key
const completeLink = import.meta.env.VITE_complete_link

const headers = {
    'Content-Type': 'application/json',
    'X-API-KEY': adminKey,
};

const body = {
    // "onchainwallet": "string", // xpub for onchain wallet
    "lnbitswallet": walletId,
    "description": "string",
    // "webhook": "string",
    "completelink": completeLink,
    "completelinktext": "Thank you for Purchase! Click Here to Proceed",
    // "custom_css": "string",
    "time": 60, // minutes
    "amount": 100, // sats
    "extra": "{\"mempool_endpoint\": \"https://mempool.space\", \"network\": \"Mainnet\"}"
}

function payWithLightning() {
    axios.post(`https://${endPoint}/satspay/api/v1/charge`, body, { headers })
        .then(response => {
            console.log(response.data);
            window.location.replace(`https://${endPoint}/satspay/${response.data.id}`)
        })
        .catch(error => {
            console.error(error);
        });
}

export const lnbitsDocs = `https://${endPoint}/docs`

export default function payButton() {
    return (
        <button
            className="flex ml-auto text-white bg-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-amber-700 rounded"
            onClick={payWithLightning}
        >Pay with ⚡️</button>
    )
}
