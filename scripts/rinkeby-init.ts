import { ethers } from 'hardhat';

const _gov = '0x5131D4f8B1D5Fa3f50E139eE3E545d5e8C2Bf731';
const _supernova = '0x8Fd650aC7522DA8815BC27ab8a8174f3C9ca355A';

async function main () {
    const gov = await ethers.getContractAt('Governance', _gov);
    console.log (await gov.initialize(_supernova));
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
