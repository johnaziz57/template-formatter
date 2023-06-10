import JSONVisitor from "./antlr/JSONVisitor";

export class TemplateVisitorClass implements JSONVisitor {
    visitJson(ctx: any) {
        throw new Error("Method not implemented.");
    }
    visitObj(ctx: any) {
        throw new Error("Method not implemented.");
    }
    visitObjPair(ctx: any) {
        throw new Error("Method not implemented.");
    }
    visitPair(ctx: any) {
        throw new Error("Method not implemented.");
    }
    visitTemplateOperatorPair(ctx: any) {
        throw new Error("Method not implemented.");
    }
    visitPairValue(ctx: any) {
        throw new Error("Method not implemented.");
    }
    visitArr(ctx: any) {
        throw new Error("Method not implemented.");
    }
    visitTemplateOperatorValue(ctx: any) {
        throw new Error("Method not implemented.");
    }
    visitValue(ctx: any) {
        throw new Error("Method not implemented.");
    }

}