import { Keypair } from "@solana/web3.js"
import "dotenv/config"

const startsWith = process.env["STARTS_WITH"].toLowerCase()
const endsWith = process.env["ENDS_WITH"].toLowerCase()
let keypair = Keypair.generate()

const startsWithBoolean = (keypair) =>
  keypair.publicKey.toBase58().toLowerCase().startsWith(startsWith)
const endsWithBoolean = (keypair) =>
  endsWith.length > 0
    ? keypair.publicKey.toBase58().toLowerCase().endsWith(endsWith)
    : true

let counter = 1
while (!startsWithBoolean(keypair) || !endsWithBoolean(keypair)) {
  keypair = Keypair.generate()
  counter += 1
}
console.log(
  `Public key starts with ${startsWith}${
    endsWith ? " and ends with " + endsWith : ""
  } was successfully generated: ${keypair.publicKey.toBase58()}.\n Counter: ${counter}`
);
