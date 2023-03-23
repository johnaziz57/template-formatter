// Generated from src/antlr/JSON.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JSONParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JSONVisitor<Result> extends ParseTreeVisitor<Result> {
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
	 * Visit a parse tree produced by `JSONParser.objPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjPair?: (ctx: ObjPairContext) => Result;

	/**
	 * Visit a parse tree produced by `JSONParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;

	/**
	 * Visit a parse tree produced by `JSONParser.templateOperatorPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateOperatorPair?: (ctx: TemplateOperatorPairContext) => Result;

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
	 * Visit a parse tree produced by `JSONParser.templateOperatorValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateOperatorValue?: (ctx: TemplateOperatorValueContext) => Result;

	/**
	 * Visit a parse tree produced by `JSONParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

