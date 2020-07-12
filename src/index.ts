import { API } from 'homebridge';

import { PLATFORM_NAME } from './settings';
import { Zigbee2mqttPlatform } from './platform'; 

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform("homebridge-z2m", PLATFORM_NAME, ScreenLogicPlatform)
}
