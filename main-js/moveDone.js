import { fillDown } from "../helpers/fillDown.js";
import { allUp } from "../helpers/allUp.js";
import { delay } from "../helpers/pureHelpers/delay.js";
import { deleting } from "../helpers/deleting.js";

export async function moveDone(global) {
    const delay_length = 500
    await delay(delay_length); // Delay before executing the first step
    fillDown(global);
  
    await deleting(global,delay_length)

    await delay(delay_length); // Delay before executing the second step
    allUp(global);
  
    await deleting(global)
  
    await delay(delay_length); // Delay before executing the last fillDown calls
    fillDown(global);
    fillDown(global);
    fillDown(global);
}