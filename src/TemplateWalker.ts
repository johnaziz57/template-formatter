import { ParserRuleContext, TerminalNode } from "antlr4";
import JSONListener from "./antlr/JSONListener";
import JSONParser, {
    ArrContext,
    HelperContext,
    JsonContext,
    ObjContext,
    PairContext,
    PairValueContext,
    ValueContext,
    HelperPairContext,
    HelperOrValueContext,
} from "./antlr/JSONParser";

const EMPTY_OBJECT_CHILDREN_COUNT = 2
const EMPTY_ARRAY_CHILDREN_COUNT = 2
const INDENT_SIZE = 2

export class TemplateWalker extends JSONListener {
    private distance = 0;
    private output = "";

    getOutput = (): string => {
        return this.output;
    };

    enterJson = (ctx: JsonContext) => {
        this.distance = 0;
        this.output = "";
    };
    exitJson = (ctx: JsonContext) => {};

    enterObj = (ctx: ObjContext) => {
        if (ctx.children === undefined || ctx.children?.length === EMPTY_OBJECT_CHILDREN_COUNT) {
            this.output += "{}";   
        } else {
            if (ctx.parentCtx?.parentCtx instanceof JsonContext){
                this.output += this.getPadding() + "{";
            } else {
                this.output += this.getNewLinePadding() + "{";
            }
            this.increaseDistance();
        }
    };
    exitObj = (ctx: ObjContext) => {
        if (ctx.children && ctx.children?.length > EMPTY_OBJECT_CHILDREN_COUNT) {
            this.decreaseDistance();
            this.output += this.getNewLinePadding() + "}";
        }
    };

    enterPair = (ctx: PairContext) => {
        this.output +=
            this.getNewLinePadding() + ctx.STRING().getText() + " : ";
    };
    exitPair = (ctx: PairContext) => {
        // this.output += ",";
    };

    enterHelperPair = (ctx: HelperPairContext) => {
        this.output += this.getNewLinePadding() + ctx.START_HELPER_BLOCK_2().getText();
        this.increaseDistance();
    }

    exitHelperPair =  (ctx: HelperPairContext) => {
        this.decreaseDistance();
        this.output +=
            this.getNewLinePadding() + ctx.END_HELPER_BLOCK_2().getText();
    }

    enterPairValue = (ctx: PairValueContext) => {};
    exitPairValue = (ctx: PairValueContext) => {};

    enterArr = (ctx: ArrContext) => {
        if (ctx.children === undefined || ctx.children?.length === EMPTY_ARRAY_CHILDREN_COUNT) {
            this.output += "[]";   
        } else {
            this.output += this.getNewLinePadding() + "[";
            this.increaseDistance();
        }
    };
    exitArr = (ctx: ArrContext) => {
        if (ctx.children && ctx.children?.length > EMPTY_ARRAY_CHILDREN_COUNT) {
            this.decreaseDistance();
            this.output += this.getNewLinePadding() + "]";
        }
    };

    enterHelperOrValue = (ctx: HelperOrValueContext) => {
        this.output += this.getNewLinePadding()
    };

    enterHelper = (ctx: HelperContext) => {
        if (ctx.parentCtx instanceof PairValueContext) {
            this.output += ctx.START_HELPER_BLOCK_2().getText();
        } else {
            this.output += this.getNewLinePadding() + ctx.START_HELPER_BLOCK_2().getText();
        }
        this.increaseDistance();
    };

    exitHelper = (ctx: HelperContext) => {
        this.decreaseDistance();
        this.output +=
            this.getNewLinePadding() + ctx.END_HELPER_BLOCK_2().getText();
    };

    enterValue = (ctx: ValueContext) => {
        if (ctx.obj() || ctx.arr()) {
            return;
        }

        if (ctx.parentCtx instanceof HelperContext) {
            this.output += this.getNewLinePadding() + ctx.getText()
        } else {
            this.output += ctx.getText();
        }        
    };

    exitValue = (ctx: ValueContext) => {};

    visitTerminal = (node: TerminalNode): void => {
        const x = node.getText();
        if (node.symbol.type === JSONParser.ELSE_BLOCK_2) {
            this.decreaseDistance();
            this.output += this.getNewLinePadding() + node.getText();
            this.increaseDistance();
        }
        // T_1 if for ','
        if (node.symbol.type === JSONParser.T__1) {
            this.output += node.getText();
        }
    };

    private getNewLinePadding(): string {
        return "\n" + this.getPadding();
    }

    private getPadding(): string {
        return " ".repeat(this.distance);
    }

    private increaseDistance() {
        this.distance += INDENT_SIZE;
    }
    private decreaseDistance() {
        this.distance -= INDENT_SIZE;
    }

    private getNewLine(): string {
        return "\n"
    }
}
