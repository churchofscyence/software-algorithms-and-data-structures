import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  convertToNumberArray(value:any){

    if(typeof value == "string"){

      const regex = /^\d+(,\d+)*$/;
      if(regex.test(value) ){

        let array = value.split(",");
        let numberArray:number[] = [];

        for(let i = 0; i < array.length; i++){
          numberArray.push(parseInt(array[i]));
        }

        return numberArray;
      }

    }else{
      return [];
    }
    return [];

  };
}
