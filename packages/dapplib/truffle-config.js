require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stone deny range proof gentle light army genre'; 
let testAccounts = [
"0x42c60ceda96f3b61a39ee4a14dc42a2927f08c85eaa3498c64cdf6133c357673",
"0xbbf62d044a7244e02f7793434adad3a3de362a3a96578490773f58e8b84da932",
"0xcb3f693a0ae5269f8e55e88fb76bc7f5319923a34336ce7ef9378710b431d115",
"0x20fd504b203d43818fdc8dcb2e6e1b8e3ff0f44b072ffd40aaad4b27363bc412",
"0x072a5ecc1ca1aa4c19364508704f3bf1c8844d2bc8ed8a504a1ae07f7fba4fa4",
"0x51103b03ae88de444c3ff34408cc31baaf07a7da8da5e1c6c6c1d46693a29259",
"0x274320feda43e892e826547f3d7bc6c554f7ac31835c3bca7c45ede5b42faea5",
"0x61b2100633faab9f460f5713034d9ccc943b2ec0ac25fa2017281d1631557f59",
"0xf400702157911cd540cd32e973c6b7dabc5f597ae3f1e765f3b349d1d684bdde",
"0x29029d80d220f0f131cc447534c6f8ae990452031bbef63d19b514f037277a4a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

