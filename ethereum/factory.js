import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xdbf410dBFaFc928F825d356E5702cE7F2E8913Ed'
)

export default instance
