import { DocumentInsertResponse, MaybeDocument } from "nano";

export interface IPerson extends MaybeDocument {
	name: string;
	dob: string;
}


export class Person implements IPerson{

	_id: string | undefined;
	_rev: string | undefined;
	name: string;
	dob: string;

	constructor(name: string, dob: string) {
		this._id = undefined;
		this._rev = undefined;
		this.name = name;
		this.dob = dob;
	}

	processAPIResponse(response: DocumentInsertResponse) {
    if (response.ok) {
      this._id = response.id
      this._rev = response.rev
    }
  }

}