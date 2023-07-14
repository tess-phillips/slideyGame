import { fillDown } from "../helpers/fillDown.js";
import { allUp } from "../helpers/allUp.js";
import { fullRowCheck } from "../helpers/pureHelpers/fullRowCheck.js";
import { deleteRow } from "../helpers/deleteRow.js";
import { delay } from "../helpers/pureHelpers/delay.js";

export async function moveDone(global) {
    const delay_length = 1000
    await delay(delay_length); // Delay before executing the first step
    fillDown(global);
  
    await delay(delay_length); // Delay before executing the second step
    allUp(global);
  
    var check = fullRowCheck(global);
    while (check !== "notFull") {
      await delay(delay_length); // Delay before executing the deleteRow function
      deleteRow(global, check);
  
      await delay(500); // Delay before filling down after deleting a row
      fillDown(global);
  
      check = fullRowCheck(global);
    }
  
    await delay(delay_length); // Delay before executing the last fillDown calls
    fillDown(global);
    fillDown(global);
    fillDown(global);
}