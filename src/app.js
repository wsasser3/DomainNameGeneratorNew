/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function domainNameGen() {
  let pronounArray = ["my", "his", "your"];
  let adjectiveArray = ["hot", "dirty", "sleeping"];
  let nounArray = ["brain", "car", "puppy"];
  let suffixArray = [".com", ".org", ".net"];
  let domainName = "";
  for (let i = 0; i < pronounArray.length; i++) {
    for (let j = 0; j < adjectiveArray.length; j++) {
      for (let k = 0; k < nounArray.length; k++) {
        for (let l = 0; l < suffixArray.length; l++) {
          domainName +=
            pronounArray[i] + adjectiveArray[j] + nounArray[k] + suffixArray[l];
        }
      }
    }
  }
  return domainName;
}

console.log(domainNameGen());
//domainNameGen();
