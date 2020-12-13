import "reflect-metadata";
import { observable } from "mobx";
import { IKeyValueMap } from "mobx/lib/types/observablemap";

class myClass {
	@observable
	a: IKeyValueMap = {};
}
