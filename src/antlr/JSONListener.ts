// Generated from JSON.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { JsonContext } from "./JSONParser";
import { ObjContext } from "./JSONParser";
import { ObjPairContext } from "./JSONParser";
import { PairContext } from "./JSONParser";
import { TemplateOperatorPairContext } from "./JSONParser";
import { PairValueContext } from "./JSONParser";
import { ArrContext } from "./JSONParser";
import { TemplateOperatorValueContext } from "./JSONParser";
import { ValueContext } from "./JSONParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JSONParser`.
 */
export default class JSONListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JSONParser.json`.
	 * @param ctx the parse tree
	 */
	enterJson?: (ctx: JsonContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.json`.
	 * @param ctx the parse tree
	 */
	exitJson?: (ctx: JsonContext) => void;
	/**
	 * Enter a parse tree produced by `JSONParser.obj`.
	 * @param ctx the parse tree
	 */
	enterObj?: (ctx: ObjContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.obj`.
	 * @param ctx the parse tree
	 */
	exitObj?: (ctx: ObjContext) => void;
	/**
	 * Enter a parse tree produced by `JSONParser.objPair`.
	 * @param ctx the parse tree
	 */
	enterObjPair?: (ctx: ObjPairContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.objPair`.
	 * @param ctx the parse tree
	 */
	exitObjPair?: (ctx: ObjPairContext) => void;
	/**
	 * Enter a parse tree produced by `JSONParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;
	/**
	 * Enter a parse tree produced by `JSONParser.templateOperatorPair`.
	 * @param ctx the parse tree
	 */
	enterTemplateOperatorPair?: (ctx: TemplateOperatorPairContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.templateOperatorPair`.
	 * @param ctx the parse tree
	 */
	exitTemplateOperatorPair?: (ctx: TemplateOperatorPairContext) => void;
	/**
	 * Enter a parse tree produced by `JSONParser.pairValue`.
	 * @param ctx the parse tree
	 */
	enterPairValue?: (ctx: PairValueContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.pairValue`.
	 * @param ctx the parse tree
	 */
	exitPairValue?: (ctx: PairValueContext) => void;
	/**
	 * Enter a parse tree produced by `JSONParser.arr`.
	 * @param ctx the parse tree
	 */
	enterArr?: (ctx: ArrContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.arr`.
	 * @param ctx the parse tree
	 */
	exitArr?: (ctx: ArrContext) => void;
	/**
	 * Enter a parse tree produced by `JSONParser.templateOperatorValue`.
	 * @param ctx the parse tree
	 */
	enterTemplateOperatorValue?: (ctx: TemplateOperatorValueContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.templateOperatorValue`.
	 * @param ctx the parse tree
	 */
	exitTemplateOperatorValue?: (ctx: TemplateOperatorValueContext) => void;
	/**
	 * Enter a parse tree produced by `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

