// Generated from JSON.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { JsonContext } from "./JSONParser";
import { ObjContext } from "./JSONParser";
import { HelperOrPairContext } from "./JSONParser";
import { PairContext } from "./JSONParser";
import { HelperPairContext } from "./JSONParser";
import { HelperIncompleteObjContext } from "./JSONParser";
import { PairValueContext } from "./JSONParser";
import { ArrContext } from "./JSONParser";
import { HelperOrValueContext } from "./JSONParser";
import { HelperContext } from "./JSONParser";
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
	 * Enter a parse tree produced by `JSONParser.helperOrPair`.
	 * @param ctx the parse tree
	 */
	enterHelperOrPair?: (ctx: HelperOrPairContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.helperOrPair`.
	 * @param ctx the parse tree
	 */
	exitHelperOrPair?: (ctx: HelperOrPairContext) => void;
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
	 * Enter a parse tree produced by `JSONParser.helperPair`.
	 * @param ctx the parse tree
	 */
	enterHelperPair?: (ctx: HelperPairContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.helperPair`.
	 * @param ctx the parse tree
	 */
	exitHelperPair?: (ctx: HelperPairContext) => void;
	/**
	 * Enter a parse tree produced by `JSONParser.helperIncompleteObj`.
	 * @param ctx the parse tree
	 */
	enterHelperIncompleteObj?: (ctx: HelperIncompleteObjContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.helperIncompleteObj`.
	 * @param ctx the parse tree
	 */
	exitHelperIncompleteObj?: (ctx: HelperIncompleteObjContext) => void;
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
	 * Enter a parse tree produced by `JSONParser.helperOrValue`.
	 * @param ctx the parse tree
	 */
	enterHelperOrValue?: (ctx: HelperOrValueContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.helperOrValue`.
	 * @param ctx the parse tree
	 */
	exitHelperOrValue?: (ctx: HelperOrValueContext) => void;
	/**
	 * Enter a parse tree produced by `JSONParser.helper`.
	 * @param ctx the parse tree
	 */
	enterHelper?: (ctx: HelperContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.helper`.
	 * @param ctx the parse tree
	 */
	exitHelper?: (ctx: HelperContext) => void;
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

