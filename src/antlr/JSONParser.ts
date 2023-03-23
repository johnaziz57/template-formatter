// Generated from src/antlr/JSON.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JSONListener } from "./JSONListener";
import { JSONVisitor } from "./JSONVisitor";


export class JSONParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly START_BLOCK_2 = 10;
	public static readonly ELSE_BLOCK_2 = 11;
	public static readonly END_BLOCK_2 = 12;
	public static readonly L_OPERATOR_2 = 13;
	public static readonly R_OPERATOR_2 = 14;
	public static readonly T_EXPRESSION = 15;
	public static readonly STRING = 16;
	public static readonly NUMBER = 17;
	public static readonly WS = 18;
	public static readonly RULE_json = 0;
	public static readonly RULE_obj = 1;
	public static readonly RULE_objPair = 2;
	public static readonly RULE_pair = 3;
	public static readonly RULE_templateOperatorPair = 4;
	public static readonly RULE_pairValue = 5;
	public static readonly RULE_arr = 6;
	public static readonly RULE_templateOperatorValue = 7;
	public static readonly RULE_value = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"json", "obj", "objPair", "pair", "templateOperatorPair", "pairValue", 
		"arr", "templateOperatorValue", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "','", "'}'", "':'", "'['", "']'", "'true'", "'false'", 
		"'null'", undefined, undefined, undefined, "'{{'", "'}}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "START_BLOCK_2", "ELSE_BLOCK_2", "END_BLOCK_2", 
		"L_OPERATOR_2", "R_OPERATOR_2", "T_EXPRESSION", "STRING", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JSONParser._LITERAL_NAMES, JSONParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JSONParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JSON.g4"; }

	// @Override
	public get ruleNames(): string[] { return JSONParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JSONParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JSONParser._ATN, this);
	}
	// @RuleVersion(0)
	public json(): JsonContext {
		let _localctx: JsonContext = new JsonContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JSONParser.RULE_json);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.value();
			this.state = 19;
			this.match(JSONParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public obj(): ObjContext {
		let _localctx: ObjContext = new ObjContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JSONParser.RULE_obj);
		let _la: number;
		try {
			this.state = 34;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 21;
				this.match(JSONParser.T__0);
				this.state = 22;
				this.pair();
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JSONParser.T__1) {
					{
					{
					this.state = 23;
					this.match(JSONParser.T__1);
					this.state = 24;
					this.pair();
					}
					}
					this.state = 29;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 30;
				this.match(JSONParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 32;
				this.match(JSONParser.T__0);
				this.state = 33;
				this.match(JSONParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objPair(): ObjPairContext {
		let _localctx: ObjPairContext = new ObjPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JSONParser.RULE_objPair);
		try {
			this.state = 38;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JSONParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this.pair();
				}
				break;
			case JSONParser.START_BLOCK_2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.templateOperatorPair();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JSONParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(JSONParser.STRING);
			this.state = 41;
			this.match(JSONParser.T__3);
			this.state = 42;
			this.pairValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateOperatorPair(): TemplateOperatorPairContext {
		let _localctx: TemplateOperatorPairContext = new TemplateOperatorPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JSONParser.RULE_templateOperatorPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.match(JSONParser.START_BLOCK_2);
			this.state = 45;
			this.pair();
			this.state = 46;
			this.match(JSONParser.END_BLOCK_2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pairValue(): PairValueContext {
		let _localctx: PairValueContext = new PairValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JSONParser.RULE_pairValue);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JSONParser.START_BLOCK_2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.templateOperatorValue();
				}
				break;
			case JSONParser.T__0:
			case JSONParser.T__4:
			case JSONParser.T__6:
			case JSONParser.T__7:
			case JSONParser.T__8:
			case JSONParser.STRING:
			case JSONParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arr(): ArrContext {
		let _localctx: ArrContext = new ArrContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JSONParser.RULE_arr);
		let _la: number;
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.match(JSONParser.T__4);
				this.state = 53;
				this.value();
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JSONParser.T__1) {
					{
					{
					this.state = 54;
					this.match(JSONParser.T__1);
					this.state = 55;
					this.value();
					}
					}
					this.state = 60;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 61;
				this.match(JSONParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.match(JSONParser.T__4);
				this.state = 64;
				this.match(JSONParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateOperatorValue(): TemplateOperatorValueContext {
		let _localctx: TemplateOperatorValueContext = new TemplateOperatorValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JSONParser.RULE_templateOperatorValue);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				this.match(JSONParser.START_BLOCK_2);
				this.state = 68;
				this.value();
				this.state = 69;
				this.match(JSONParser.ELSE_BLOCK_2);
				this.state = 70;
				this.value();
				this.state = 71;
				this.match(JSONParser.END_BLOCK_2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 73;
				this.match(JSONParser.START_BLOCK_2);
				this.state = 74;
				this.value();
				this.state = 75;
				this.match(JSONParser.END_BLOCK_2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JSONParser.RULE_value);
		try {
			this.state = 86;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JSONParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this.match(JSONParser.STRING);
				}
				break;
			case JSONParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this.match(JSONParser.NUMBER);
				}
				break;
			case JSONParser.T__0:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 81;
				this.obj();
				}
				break;
			case JSONParser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 82;
				this.arr();
				}
				break;
			case JSONParser.T__6:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 83;
				this.match(JSONParser.T__6);
				}
				break;
			case JSONParser.T__7:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 84;
				this.match(JSONParser.T__7);
				}
				break;
			case JSONParser.T__8:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 85;
				this.match(JSONParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14[\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03\x1C\n\x03\f\x03\x0E\x03\x1F\v\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03%\n\x03\x03\x04\x03\x04\x05\x04)\n\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x05\x075\n\x07\x03\b\x03\b\x03\b\x03\b\x07\b;\n\b\f\b\x0E\b>" +
		"\v\b\x03\b\x03\b\x03\b\x03\b\x05\bD\n\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tP\n\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\nY\n\n\x03\n\x02\x02\x02\v\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x02\x02^\x02\x14\x03\x02" +
		"\x02\x02\x04$\x03\x02\x02\x02\x06(\x03\x02\x02\x02\b*\x03\x02\x02\x02" +
		"\n.\x03\x02\x02\x02\f4\x03\x02\x02\x02\x0EC\x03\x02\x02\x02\x10O\x03\x02" +
		"\x02\x02\x12X\x03\x02\x02\x02\x14\x15\x05\x12\n\x02\x15\x16\x07\x02\x02" +
		"\x03\x16\x03\x03\x02\x02\x02\x17\x18\x07\x03\x02\x02\x18\x1D\x05\b\x05" +
		"\x02\x19\x1A\x07\x04\x02\x02\x1A\x1C\x05\b\x05\x02\x1B\x19\x03\x02\x02" +
		"\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02" +
		"\x02\x1E \x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x07\x05\x02\x02!%" +
		"\x03\x02\x02\x02\"#\x07\x03\x02\x02#%\x07\x05\x02\x02$\x17\x03\x02\x02" +
		"\x02$\"\x03\x02\x02\x02%\x05\x03\x02\x02\x02&)\x05\b\x05\x02\')\x05\n" +
		"\x06\x02(&\x03\x02\x02\x02(\'\x03\x02\x02\x02)\x07\x03\x02\x02\x02*+\x07" +
		"\x12\x02\x02+,\x07\x06\x02\x02,-\x05\f\x07\x02-\t\x03\x02\x02\x02./\x07" +
		"\f\x02\x02/0\x05\b\x05\x0201\x07\x0E\x02\x021\v\x03\x02\x02\x0225\x05" +
		"\x10\t\x0235\x05\x12\n\x0242\x03\x02\x02\x0243\x03\x02\x02\x025\r\x03" +
		"\x02\x02\x0267\x07\x07\x02\x027<\x05\x12\n\x0289\x07\x04\x02\x029;\x05" +
		"\x12\n\x02:8\x03\x02\x02\x02;>\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03" +
		"\x02\x02\x02=?\x03\x02\x02\x02><\x03\x02\x02\x02?@\x07\b\x02\x02@D\x03" +
		"\x02\x02\x02AB\x07\x07\x02\x02BD\x07\b\x02\x02C6\x03\x02\x02\x02CA\x03" +
		"\x02\x02\x02D\x0F\x03\x02\x02\x02EF\x07\f\x02\x02FG\x05\x12\n\x02GH\x07" +
		"\r\x02\x02HI\x05\x12\n\x02IJ\x07\x0E\x02\x02JP\x03\x02\x02\x02KL\x07\f" +
		"\x02\x02LM\x05\x12\n\x02MN\x07\x0E\x02\x02NP\x03\x02\x02\x02OE\x03\x02" +
		"\x02\x02OK\x03\x02\x02\x02P\x11\x03\x02\x02\x02QY\x07\x12\x02\x02RY\x07" +
		"\x13\x02\x02SY\x05\x04\x03\x02TY\x05\x0E\b\x02UY\x07\t\x02\x02VY\x07\n" +
		"\x02\x02WY\x07\v\x02\x02XQ\x03\x02\x02\x02XR\x03\x02\x02\x02XS\x03\x02" +
		"\x02\x02XT\x03\x02\x02\x02XU\x03\x02\x02\x02XV\x03\x02\x02\x02XW\x03\x02" +
		"\x02\x02Y\x13\x03\x02\x02\x02\n\x1D$(4<COX";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JSONParser.__ATN) {
			JSONParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JSONParser._serializedATN));
		}

		return JSONParser.__ATN;
	}

}

export class JsonContext extends ParserRuleContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public EOF(): TerminalNode { return this.getToken(JSONParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_json; }
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterJson) {
			listener.enterJson(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitJson) {
			listener.exitJson(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitJson) {
			return visitor.visitJson(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjContext extends ParserRuleContext {
	public pair(): PairContext[];
	public pair(i: number): PairContext;
	public pair(i?: number): PairContext | PairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PairContext);
		} else {
			return this.getRuleContext(i, PairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_obj; }
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterObj) {
			listener.enterObj(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitObj) {
			listener.exitObj(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitObj) {
			return visitor.visitObj(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjPairContext extends ParserRuleContext {
	public pair(): PairContext | undefined {
		return this.tryGetRuleContext(0, PairContext);
	}
	public templateOperatorPair(): TemplateOperatorPairContext | undefined {
		return this.tryGetRuleContext(0, TemplateOperatorPairContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_objPair; }
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterObjPair) {
			listener.enterObjPair(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitObjPair) {
			listener.exitObjPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitObjPair) {
			return visitor.visitObjPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(JSONParser.STRING, 0); }
	public pairValue(): PairValueContext {
		return this.getRuleContext(0, PairValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_pair; }
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterPair) {
			listener.enterPair(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitPair) {
			listener.exitPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitPair) {
			return visitor.visitPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateOperatorPairContext extends ParserRuleContext {
	public START_BLOCK_2(): TerminalNode { return this.getToken(JSONParser.START_BLOCK_2, 0); }
	public pair(): PairContext {
		return this.getRuleContext(0, PairContext);
	}
	public END_BLOCK_2(): TerminalNode { return this.getToken(JSONParser.END_BLOCK_2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_templateOperatorPair; }
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterTemplateOperatorPair) {
			listener.enterTemplateOperatorPair(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitTemplateOperatorPair) {
			listener.exitTemplateOperatorPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitTemplateOperatorPair) {
			return visitor.visitTemplateOperatorPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairValueContext extends ParserRuleContext {
	public templateOperatorValue(): TemplateOperatorValueContext | undefined {
		return this.tryGetRuleContext(0, TemplateOperatorValueContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_pairValue; }
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterPairValue) {
			listener.enterPairValue(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitPairValue) {
			listener.exitPairValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitPairValue) {
			return visitor.visitPairValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_arr; }
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterArr) {
			listener.enterArr(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitArr) {
			listener.exitArr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitArr) {
			return visitor.visitArr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateOperatorValueContext extends ParserRuleContext {
	public START_BLOCK_2(): TerminalNode { return this.getToken(JSONParser.START_BLOCK_2, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public ELSE_BLOCK_2(): TerminalNode | undefined { return this.tryGetToken(JSONParser.ELSE_BLOCK_2, 0); }
	public END_BLOCK_2(): TerminalNode { return this.getToken(JSONParser.END_BLOCK_2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_templateOperatorValue; }
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterTemplateOperatorValue) {
			listener.enterTemplateOperatorValue(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitTemplateOperatorValue) {
			listener.exitTemplateOperatorValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitTemplateOperatorValue) {
			return visitor.visitTemplateOperatorValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(JSONParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JSONParser.NUMBER, 0); }
	public obj(): ObjContext | undefined {
		return this.tryGetRuleContext(0, ObjContext);
	}
	public arr(): ArrContext | undefined {
		return this.tryGetRuleContext(0, ArrContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_value; }
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


