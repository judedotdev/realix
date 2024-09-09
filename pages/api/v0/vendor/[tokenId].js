import Cors from "cors";
import { products } from "@/data/vendor"

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const corsMiddleware = Cors({
    origin: [
        "https://realix.vercel.app",
    ],
    methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

// noinspection JSUnusedGlobalSymbols
export default async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, corsMiddleware);

    const { tokenId } = req.query;

    const HOST = 'https://realix.vercel.app'

    if (products[tokenId]) {

        const metadata = {
            'name': `${products[tokenId].name}`,
            'description': `${products[tokenId].description}`,
            'attributes': [
                {
                    "trait_type": "Category",
                    "value": products[tokenId].category,
                },
                {
                    "trait_type": "Brand",
                    "value": products[tokenId].brand,
                },
                {
                    "trait_type": "Color",
                    "value": products[tokenId].color,
                },
                {
                    "trait_type": "Price",
                    "value": products[tokenId].price,
                },
                {
                    "trait_type": "Condition",
                    "value": products[tokenId].condition,
                }
            ],
            'image': `${HOST}/${products[tokenId].image}`,
            'background_color': '000000'
        }

        res.status(200).json(metadata);
    } else {
        res.status(404).end(`Vendor NFT #${tokenId} not minted`)
    }
}