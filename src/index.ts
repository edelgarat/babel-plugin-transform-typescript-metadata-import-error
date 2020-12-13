import "reflect-metadata";
import { action, observable } from "mobx";
import { IKeyValueMap } from "mobx/lib/types/observablemap";

class B {
	@observable
	a: IKeyValueMap = {};

	@action.bound
	someFunc() {
		return 5;
	}
}

const b = new B();
