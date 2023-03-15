// Generated from JSON.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import JSONListener from "./JSONListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class JSONParser extends Parser {
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
	public static readonly EOF = Token.EOF;
	public static readonly RULE_json = 0;
	public static readonly RULE_obj = 1;
	public static readonly RULE_objPair = 2;
	public static readonly RULE_pair = 3;
	public static readonly RULE_templateOperatorPair = 4;
	public static readonly RULE_pairValue = 5;
	public static readonly RULE_arr = 6;
	public static readonly RULE_templateOperatorValue = 7;
	public static readonly RULE_value = 8;
	public static readonly literalNames: (string | null)[] = [ null, "'{'", 
                                                            "','", "'}'", 
                                                            "':'", "'['", 
                                                            "']'", "'true'", 
                                                            "'false'", "'null'", 
                                                            null, null, 
                                                            null, "'{{'", 
                                                            "'}}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "START_BLOCK_2", 
                                                             "ELSE_BLOCK_2", 
                                                             "END_BLOCK_2", 
                                                             "L_OPERATOR_2", 
                                                             "R_OPERATOR_2", 
                                                             "T_EXPRESSION", 
                                                             "STRING", "NUMBER", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"json", "obj", "objPair", "pair", "templateOperatorPair", "pairValue", 
		"arr", "templateOperatorValue", "value",
	];
	public get grammarFileName(): string { return "JSON.g4"; }
	public get literalNames(): (string | null)[] { return JSONParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return JSONParser.symbolicNames; }
	public get ruleNames(): string[] { return JSONParser.ruleNames; }
	public get serializedATN(): number[] { return JSONParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, JSONParser._ATN, JSONParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public json(): JsonContext {
		let localctx: JsonContext = new JsonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, JSONParser.RULE_json);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 18;
			this.value();
			this.state = 19;
			this.match(JSONParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public obj(): ObjContext {
		let localctx: ObjContext = new ObjContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, JSONParser.RULE_obj);
		let _la: number;
		try {
			this.state = 34;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 21;
				this.match(JSONParser.T__0);
				this.state = 22;
				this.pair();
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2) {
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
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objPair(): ObjPairContext {
		let localctx: ObjPairContext = new ObjPairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, JSONParser.RULE_objPair);
		try {
			this.state = 38;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 36;
				this.pair();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pair(): PairContext {
		let localctx: PairContext = new PairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, JSONParser.RULE_pair);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public templateOperatorPair(): TemplateOperatorPairContext {
		let localctx: TemplateOperatorPairContext = new TemplateOperatorPairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, JSONParser.RULE_templateOperatorPair);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pairValue(): PairValueContext {
		let localctx: PairValueContext = new PairValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, JSONParser.RULE_pairValue);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 48;
				this.templateOperatorValue();
				}
				break;
			case 1:
			case 5:
			case 7:
			case 8:
			case 9:
			case 16:
			case 17:
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arr(): ArrContext {
		let localctx: ArrContext = new ArrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, JSONParser.RULE_arr);
		let _la: number;
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 52;
				this.match(JSONParser.T__4);
				this.state = 53;
				this.value();
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2) {
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
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public templateOperatorValue(): TemplateOperatorValueContext {
		let localctx: TemplateOperatorValueContext = new TemplateOperatorValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, JSONParser.RULE_templateOperatorValue);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
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
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, JSONParser.RULE_value);
		try {
			this.state = 86;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 79;
				this.match(JSONParser.STRING);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 80;
				this.match(JSONParser.NUMBER);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 81;
				this.obj();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 82;
				this.arr();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 83;
				this.match(JSONParser.T__6);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 84;
				this.match(JSONParser.T__7);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 7);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,18,89,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,
	0,1,1,1,1,1,1,1,1,5,1,26,8,1,10,1,12,1,29,9,1,1,1,1,1,1,1,1,1,3,1,35,8,
	1,1,2,1,2,3,2,39,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,3,5,51,8,5,
	1,6,1,6,1,6,1,6,5,6,57,8,6,10,6,12,6,60,9,6,1,6,1,6,1,6,1,6,3,6,66,8,6,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,78,8,7,1,8,1,8,1,8,1,8,1,8,
	1,8,1,8,3,8,87,8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,0,92,0,18,1,0,0,0,
	2,34,1,0,0,0,4,38,1,0,0,0,6,40,1,0,0,0,8,44,1,0,0,0,10,50,1,0,0,0,12,65,
	1,0,0,0,14,77,1,0,0,0,16,86,1,0,0,0,18,19,3,16,8,0,19,20,5,0,0,1,20,1,1,
	0,0,0,21,22,5,1,0,0,22,27,3,6,3,0,23,24,5,2,0,0,24,26,3,6,3,0,25,23,1,0,
	0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,
	0,30,31,5,3,0,0,31,35,1,0,0,0,32,33,5,1,0,0,33,35,5,3,0,0,34,21,1,0,0,0,
	34,32,1,0,0,0,35,3,1,0,0,0,36,39,3,6,3,0,37,39,3,8,4,0,38,36,1,0,0,0,38,
	37,1,0,0,0,39,5,1,0,0,0,40,41,5,16,0,0,41,42,5,4,0,0,42,43,3,10,5,0,43,
	7,1,0,0,0,44,45,5,10,0,0,45,46,3,6,3,0,46,47,5,12,0,0,47,9,1,0,0,0,48,51,
	3,14,7,0,49,51,3,16,8,0,50,48,1,0,0,0,50,49,1,0,0,0,51,11,1,0,0,0,52,53,
	5,5,0,0,53,58,3,16,8,0,54,55,5,2,0,0,55,57,3,16,8,0,56,54,1,0,0,0,57,60,
	1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,61,1,0,0,0,60,58,1,0,0,0,61,62,5,
	6,0,0,62,66,1,0,0,0,63,64,5,5,0,0,64,66,5,6,0,0,65,52,1,0,0,0,65,63,1,0,
	0,0,66,13,1,0,0,0,67,68,5,10,0,0,68,69,3,16,8,0,69,70,5,11,0,0,70,71,3,
	16,8,0,71,72,5,12,0,0,72,78,1,0,0,0,73,74,5,10,0,0,74,75,3,16,8,0,75,76,
	5,12,0,0,76,78,1,0,0,0,77,67,1,0,0,0,77,73,1,0,0,0,78,15,1,0,0,0,79,87,
	5,16,0,0,80,87,5,17,0,0,81,87,3,2,1,0,82,87,3,12,6,0,83,87,5,7,0,0,84,87,
	5,8,0,0,85,87,5,9,0,0,86,79,1,0,0,0,86,80,1,0,0,0,86,81,1,0,0,0,86,82,1,
	0,0,0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,17,1,0,0,0,8,27,34,38,
	50,58,65,77,86];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JSONParser.__ATN) {
			JSONParser.__ATN = new ATNDeserializer().deserialize(JSONParser._serializedATN);
		}

		return JSONParser.__ATN;
	}


	static DecisionsToDFA = JSONParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class JsonContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(JSONParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_json;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterJson) {
	 		listener.enterJson(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitJson) {
	 		listener.exitJson(this);
		}
	}
}


export class ObjContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pair_list(): PairContext[] {
		return this.getTypedRuleContexts(PairContext) as PairContext[];
	}
	public pair(i: number): PairContext {
		return this.getTypedRuleContext(PairContext, i) as PairContext;
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_obj;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterObj) {
	 		listener.enterObj(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitObj) {
	 		listener.exitObj(this);
		}
	}
}


export class ObjPairContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pair(): PairContext {
		return this.getTypedRuleContext(PairContext, 0) as PairContext;
	}
	public templateOperatorPair(): TemplateOperatorPairContext {
		return this.getTypedRuleContext(TemplateOperatorPairContext, 0) as TemplateOperatorPairContext;
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_objPair;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterObjPair) {
	 		listener.enterObjPair(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitObjPair) {
	 		listener.exitObjPair(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(JSONParser.STRING, 0);
	}
	public pairValue(): PairValueContext {
		return this.getTypedRuleContext(PairValueContext, 0) as PairValueContext;
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_pair;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterPair) {
	 		listener.enterPair(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitPair) {
	 		listener.exitPair(this);
		}
	}
}


export class TemplateOperatorPairContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public START_BLOCK_2(): TerminalNode {
		return this.getToken(JSONParser.START_BLOCK_2, 0);
	}
	public pair(): PairContext {
		return this.getTypedRuleContext(PairContext, 0) as PairContext;
	}
	public END_BLOCK_2(): TerminalNode {
		return this.getToken(JSONParser.END_BLOCK_2, 0);
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_templateOperatorPair;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterTemplateOperatorPair) {
	 		listener.enterTemplateOperatorPair(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitTemplateOperatorPair) {
	 		listener.exitTemplateOperatorPair(this);
		}
	}
}


export class PairValueContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public templateOperatorValue(): TemplateOperatorValueContext {
		return this.getTypedRuleContext(TemplateOperatorValueContext, 0) as TemplateOperatorValueContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_pairValue;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterPairValue) {
	 		listener.enterPairValue(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitPairValue) {
	 		listener.exitPairValue(this);
		}
	}
}


export class ArrContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_arr;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterArr) {
	 		listener.enterArr(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitArr) {
	 		listener.exitArr(this);
		}
	}
}


export class TemplateOperatorValueContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public START_BLOCK_2(): TerminalNode {
		return this.getToken(JSONParser.START_BLOCK_2, 0);
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
	public ELSE_BLOCK_2(): TerminalNode {
		return this.getToken(JSONParser.ELSE_BLOCK_2, 0);
	}
	public END_BLOCK_2(): TerminalNode {
		return this.getToken(JSONParser.END_BLOCK_2, 0);
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_templateOperatorValue;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterTemplateOperatorValue) {
	 		listener.enterTemplateOperatorValue(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitTemplateOperatorValue) {
	 		listener.exitTemplateOperatorValue(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(JSONParser.STRING, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(JSONParser.NUMBER, 0);
	}
	public obj(): ObjContext {
		return this.getTypedRuleContext(ObjContext, 0) as ObjContext;
	}
	public arr(): ArrContext {
		return this.getTypedRuleContext(ArrContext, 0) as ArrContext;
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_value;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}
