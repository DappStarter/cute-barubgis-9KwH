require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food champion rice stereo erupt harvest office army gasp'; 
let testAccounts = [
"0xdf7067dda630980a39f146f5435adb10b22f2aaeb6f87628f024ff3bfaf0a32d",
"0x23cce6d3b1e6f47783e01aa2646213f982f281562b67efc944b2e4f2156c3c6b",
"0xa0e084fab56b870c28afad215c7ceb6193c2861c31e830e8c0b2f1e550ea9a8b",
"0x1d92b1e5b37f6989b1d2ee6d68b336db95f5dc7ae3d3890a400b827ea6a90691",
"0x1dd8843bb3816fc40013118668aa7f2ef96ded788cf24351077102f8d9655ceb",
"0xe841b8533ff6dd0a409ff0c467b369427c64092cd2ac94d62b170137a3beff09",
"0xe21c85fb670e501f62ce34a4d08e68c83f54195750ecd6fc040083e1bb3b094b",
"0x8241eaacf1ed1ce9aebc84dfd5a597161d23af8754fc9161440e2b17ea275e2c",
"0x5153be8b26ddff9610b06c925888612cd553cded3b500fa9bcecbc8f131e1eda",
"0x8bf8b2054d3c3576b7a4c0244056f185e056b68158d51c79a4637455b595d1e1"
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

