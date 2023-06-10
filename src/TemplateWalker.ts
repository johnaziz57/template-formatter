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
        this.distance = 0;
        this.output = "";
    };
    exitJson = (ctx: JsonContext) => {};

    enterObj = (ctx: ObjContext) => {
        this.output += this.getNewLinePadding() + "{";
        this.increaseDistance();
    };
    exitObj = (ctx: ObjContext) => {
        this.decreaseDistance();
        this.output += this.getNewLinePadding()+"}";
    };

    enterObjPair = (ctx: ObjPairContext) => {};
    exitObjPair = (ctx: ObjPairContext) => {};

    enterPair = (ctx: PairContext) => {
        this.output += this.getNewLinePadding() + ctx.STRING().getText() + " : ";
    };
    exitPair = (ctx: PairContext) => {};

    enterTemplateOperatorPair = (ctx: TemplateOperatorPairContext) => {};
    exitTemplateOperatorPair = (ctx: TemplateOperatorPairContext) => {};

    enterPairValue = (ctx: PairValueContext) => {};
    exitPairValue = (ctx: PairValueContext) => {};

    enterArr = (ctx: ArrContext) => {};
    exitArr = (ctx: ArrContext) => {};
    
    enterTemplateOperatorValue = (ctx: TemplateOperatorValueContext) => {};
    exitTemplateOperatorValue = (ctx: TemplateOperatorValueContext) => {};

    enterValue = (ctx: ValueContext) => {
        if (ctx.obj() || ctx.arr()) {return}

        this.output += ctx.getText();
    };
    exitValue = (ctx: ValueContext) => {};

    private getNewLinePadding(): string {
        return "\n" + this.getPadding();
    }   

    private getPadding(): string {
        return " ".repeat(this.distance);
    }

    private increaseDistance() {
        this.distance += 4
    }
    private decreaseDistance() {
        this.distance -= 4
    }
}
