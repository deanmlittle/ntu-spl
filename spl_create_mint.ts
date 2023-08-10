import { Keypair, Connection, Commitment } from "@solana/web3.js";
import { createMint } from '@solana/spl-token';
import { keypair } from "./config"

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

(async () => {
    try {
        // Create mint
        // const mint = ???
        // console.log(`You've created a new mint account:\n\n${mint.toBase58()}\n\nSave this address so you can use it to mint SPL tokens!`)
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()