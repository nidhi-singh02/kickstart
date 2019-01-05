import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3BF75D7db65182b8a211E597f79da9a629152BDf'
);

export default instance;
