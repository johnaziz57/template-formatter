import { ErrorNode, ParseTree, RuleNode, TerminalNode } from "antlr4";
import { ArrContext,
    JsonContext,
    ObjContext,
    ObjPairContext,
    PairContext,
    PairValueContext,
    TemplateOperatorPairContext,
    TemplateOperatorValueContext,
    ValueContext
} from "./antlr/JSONParser";
import JSONVisitor from "./antlr/JSONVisitor";

export const TemplateVisitor: JSONVisitor<void> = {
    visit: function (tree: ParseTree): void {
        throw new Error("Function not implemented.");
    },
    visitChildren: function (node: RuleNode): void {
        throw new Error("Function not implemented.");
    },
    visitTerminal: function (node: TerminalNode): void {
        throw new Error("Function not implemented.");
    },
    visitErrorNode: function (node: ErrorNode): void {
        throw new Error("Function not implemented.");
    }
}

export class TemplateVisitorClass implements JSONVisitor<void> {
    visitJson (ctx: JsonContext) {
        console.log("CCC");
    };
    visitObj?: ((ctx: ObjContext) => void) | undefined;
    visitObjPair?: ((ctx: ObjPairContext) => void) | undefined;
    visitPair?: ((ctx: PairContext) => void) | undefined;
    visitTemplateOperatorPair?: ((ctx: TemplateOperatorPairContext) => void) | undefined;
    visitPairValue?: ((ctx: PairValueContext) => void) | undefined;
    visitArr?: ((ctx: ArrContext) => void) | undefined;
    visitTemplateOperatorValue?: ((ctx: TemplateOperatorValueContext) => void) | undefined;
    visitValue?: ((ctx: ValueContext) => void) | undefined;
    visit(tree: ParseTree): void {

    }
    visitChildren(node: RuleNode): void {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node: TerminalNode): void {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node: ErrorNode): void {
        throw new Error("Method not implemented.");
    }

}