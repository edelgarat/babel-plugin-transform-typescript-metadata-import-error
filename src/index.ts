import "reflect-metadata";
import {SomeTypeDeclaration} from "test-package/file-with-declaration";

const someDecorator: PropertyDecorator = (target, propertyKey) => {}

class Test {
	@someDecorator
	someProperty: SomeTypeDeclaration = 5;
}

console.log(new Test().someProperty)