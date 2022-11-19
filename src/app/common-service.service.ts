import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  
  constructor() { }

  sendAudio(audioUrl: any) {
   //making an API call here
   //For now, assume we are making an API call and getting a response
   let sampleJSON = {
    "CreatedAt": "2022-05-12T23:50:21.817Z",
    "LastModified": "2022-05-12T23:50:21.817Z",
    "Order": [
      "skdhfskhbdf;ksb",
      "sdkfjbnskfcbnknkwef"
    ],
    "Blocks": [
      {
        "id": "sdgflsdflhjsvdlfvsljdhfv",
        "Category": "Data",
        "Attributes": [
          {
            "key": "DataSet",
            "value": "1_Iris"
          },
          {
            "key": "Title",
            "value": "TheDataSet"
          },
          {
            "key": "Description",
            "value": "1_Iris"
          },
          {
            "key": "parameters",
            "value": [
              {
                "key": "depth",
                "value": "4"
              }
            ]
          },
          {
            "key": "DataSet",
            "value": "1_Iris"
          }
        ]
      }
    ]
  }

  return sampleJSON;
}

}
