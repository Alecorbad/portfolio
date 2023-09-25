import {lastValueFrom, Observable} from "rxjs";
import {DataResponse, ListDataResponse} from "./http.models";
import {HttpErrorResponse} from "@angular/common/http";


/* Funzioni per gestire le chiamate API */

export async function  asyncCallPromise<T>(block: () => Observable<DataResponse<T>>,
  onSuccess: (response: DataResponse<T>) => void,
  onError?: (response: DataResponse<T>) => void,showSpinner? : boolean){
  try {
    const response = await lastValueFrom(block());
    if (response.code !== 0){
      // this.showError(response.message ?? Constants.ERROR_DEFAULT_MESSAGE);
      // onError?.call(this, response);
      // return { success: false, response: response };
    }
    onSuccess(response);
    return { success: true, response: response };
  } catch (e) {
    if (e instanceof HttpErrorResponse && e.status == 401){
      //this.navigate(['/signin']);
      // this.modalLayoutMasterService.modalLoginOpening.next(null);
    } else {
      onError?.call({}, DataResponse.error<T>());
    }
    return { success: false };
  }
}

export async function asyncCallListPromise<T>(block: () => Observable<ListDataResponse<T>>,
  onSuccess: (response: ListDataResponse<T>) => void,
  onError?: (response: ListDataResponse<T>) => void,showSpinner? : boolean){
  try {
    const response = await lastValueFrom(block());
    if (response.code !== 0){
      // this.showError(response.message ?? Constants.ERROR_DEFAULT_MESSAGE);
      // onError?.call(this, response);
      // return { success: false, response: response };
    }
    onSuccess(response);
    return { success: true, response: response };
  } catch (e) {
    if (e instanceof HttpErrorResponse && e.status == 401){
      // //this.navigate(['/signin']);
      // this.modalLayoutMasterService.modalLoginOpening.next(null);
    } else {
      onError?.call({}, ListDataResponse.error<T>());
    }
    return { success: false };
  }
}


export function asyncCall<T>(block: () => Observable<DataResponse<T>>,
  onSuccess: (response: DataResponse<T>) => void,
  onError?: (response: DataResponse<T>) => void){
  asyncCallPromise(block, onSuccess, onError).then();
}

export function asyncListCall<T>(block: () => Observable<ListDataResponse<T>>,
  onSuccess: (response: ListDataResponse<T>) => void, showSpinner? : boolean,
  onError?: (response: ListDataResponse<T>) => void){
  asyncCallListPromise(block, onSuccess, onError,showSpinner).then();
}
