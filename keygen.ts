import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58'

//Generate a new keypair
let kp = Keypair.generate()
const wallet = bs58.encode(Buffer.from(kp.secretKey));
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}

To save your wallet, copy and paste the following into your config file:

[${kp.secretKey}]

Your base58-encoded private key is:\n${wallet}`)