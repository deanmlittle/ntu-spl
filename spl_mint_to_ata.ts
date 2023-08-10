import { Keypair, Connection, PublicKey, Commitment } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';
import { keypair, mint_address } from "./config"


// Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

const token_decimals = 1_000_000n;

// Mint address
// const mint = new PublicKey("???");

(async () => {
    try {
        // Create an associated token account!
        // const tokenAccount = ???
        // console.log(`You've successfully created or found an existing ATA account:\n${tokenAccount.address.toBase58()}\n`)

        // Mint some tokens to the account!
        // const txhash = ??? 
        // console.log(`Success! Check out your mint TX here:\nhttps://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch(error: any) {
        if (error.name === "TokenAccountNotFoundError") {
            console.log("Failed to find Token Account. This is probably because we are trying to use it before a block has been found confirming it. Wait a few seconds and try again.")
        } else {
            console.log(`Oops, something went wrong: ${error}`)
        }
    }
})()