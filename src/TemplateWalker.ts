import { ParserRuleContext } from "antlr4";
import JSONListener from "./antlr/JSONListener";
import {
    ArrContext,
    JsonContext,
    ObjContext,
    ObjPairContext,
    PairContext,
    PairValueContext,
    TemplateOperatorPairContext,
    TemplateOperatorValueContext,
    ValueContext,
} from "./antlr/JSONParser";

export class TemplateWalker extends JSONListener {
    private distance = 0
    private output = "";

    getOutput = (): string => {
        return this.output;
    }

    enterJson = (ctx: JsonContext) => {
        // this.output += "{\n";
        this.increaseDistance();
    };
    exitJson = (ctx: JsonContext) => {
        // this.output += "\n}";
        this.decreaseDistance();
    };
    enterObj = (ctx: ObjContext) => {
        this.output += this.getNewLinePadding() + "{";
        this.increaseDistance();
    };
    exitObj = (ctx: ObjContext) => {
        this.output += this.getNewLinePadding()+"}";
        this.decreaseDistance();
    };
    enterObjPair = (ctx: ObjPairContext) => {
        throw new Error("Method not implemented.");
        this.output += ctx.getText();
    };
    exitObjPair = (ctx: ObjPairContext) => {
        //this.output += ctx.getText();
    };
    enterPair = (ctx: PairContext) => {
        this.output += this.getNewLinePadding() + ctx.getText();
    };
    exitPair = (ctx: PairContext) => {
        // this.output += ctx.getText();
    };
    enterTemplateOperatorPair = (ctx: TemplateOperatorPairContext) => {
        this.output += this.getNewLinePadding() + ctx.getText();
    };
    exitTemplateOperatorPair = (ctx: TemplateOperatorPairContext) => {
        // this.output += ctx.getText();
    };
    enterPairValue = (ctx: PairValueContext) => {
        this.output += ctx.getText();
    };
    exitPairValue = (ctx: PairValueContext) => {
        // this.output += ctx.getText();
    };
    enterArr = (ctx: ArrContext) => {
        this.output += ctx.getText();
    };
    exitArr = (ctx: ArrContext) => {
        // this.output += ctx.getText();
    };
    enterTemplateOperatorValue = (ctx: TemplateOperatorValueContext) => {
        this.output += ctx.getText();
    };
    exitTemplateOperatorValue = (ctx: TemplateOperatorValueContext) => {
        // this.output += ctx.getText();
    };
    enterValue = (ctx: ValueContext) => {
        this.output += ctx.getText();
    };
    exitValue = (ctx: ValueContext) => {
        // this.output += ctx.getText();
    };

    private getPadding(): string {
        return " ".repeat(this.distance);
    }
    private getNewLinePadding(): string {
        return "\n" + this.getPadding();
    }   

    private increaseDistance() {
        this.distance += 4
    }
    private decreaseDistance() {
        this.distance -= 4
    }
}
