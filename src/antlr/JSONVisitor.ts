// Generated from JSON.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JSONParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class JSONVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JSONParser.json`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson?: (ctx: JsonContext) => Result;
	/**
	 * Visit a parse tree produced by `JSONParser.obj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObj?: (ctx: ObjContext) => Result;
	/**
	 * Visit a parse tree produced by `JSONParser.helperOrPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHelperOrPair?: (ctx: HelperOrPairContext) => Result;
	/**
	 * Visit a parse tree produced by `JSONParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;
	/**
	 * Visit a parse tree produced by `JSONParser.helperPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHelperPair?: (ctx: HelperPairContext) => Result;
	/**
	 * Visit a parse tree produced by `JSONParser.helperIncompleteObj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHelperIncompleteObj?: (ctx: HelperIncompleteObjContext) => Result;
	/**
	 * Visit a parse tree produced by `JSONParser.pairValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPairValue?: (ctx: PairValueContext) => Result;
	/**
	 * Visit a parse tree produced by `JSONParser.arr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArr?: (ctx: ArrContext) => Result;
	/**
	 * Visit a parse tree produced by `JSONParser.helperOrValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHelperOrValue?: (ctx: HelperOrValueContext) => Result;
	/**
	 * Visit a parse tree produced by `JSONParser.helper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHelper?: (ctx: HelperContext) => Result;
	/**
	 * Visit a parse tree produced by `JSONParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

