import { getEntriesData } from "../adapters/supabaseAdapter.js";

export async function getEntries(req, res) {
    try {
        const data = await getEntriesData();
        console.log('data', data);
        res.json(data);
    } catch (err) {
        console.log('err', err);
        res.status(500).send(err);
    }
}