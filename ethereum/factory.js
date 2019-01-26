import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9D60aecE8674D013931e164A56fd425fd8c0Aae2'
);

export default instance;
