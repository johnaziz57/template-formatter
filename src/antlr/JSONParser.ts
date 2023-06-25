// Generated from JSON.g4 by ANTLR 4.13.0
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
import JSONVisitor from "./JSONVisitor.js";

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
	public static readonly TEMPLATE_HELPER = 10;
	public static readonly ONE_CLAUSE_HELPER = 11;
	public static readonly START_HELPER_BLOCK_2 = 12;
	public static readonly ELSE_BLOCK_2 = 13;
	public static readonly END_HELPER_BLOCK_2 = 14;
	public static readonly L_CURLY_2 = 15;
	public static readonly R_CURLY_2 = 16;
	public static readonly L_CURLY_3 = 17;
	public static readonly R_CURLY_3 = 18;
	public static readonly STRING = 19;
	public static readonly HELPER_NAME = 20;
	public static readonly NUMBER = 21;
	public static readonly WS = 22;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_json = 0;
	public static readonly RULE_obj = 1;
	public static readonly RULE_helperOrPair = 2;
	public static readonly RULE_pair = 3;
	public static readonly RULE_helperPair = 4;
	public static readonly RULE_helperIncompleteObj = 5;
	public static readonly RULE_pairValue = 6;
	public static readonly RULE_arr = 7;
	public static readonly RULE_helperOrValue = 8;
	public static readonly RULE_helper = 9;
	public static readonly RULE_value = 10;
	public static readonly literalNames: (string | null)[] = [ null, "'{'", 
                                                            "','", "'}'", 
                                                            "':'", "'['", 
                                                            "']'", "'true'", 
                                                            "'false'", "'null'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'{{'", 
                                                            "'}}'", "'{{{'", 
                                                            "'}}}'", null, 
                                                            "'math'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "TEMPLATE_HELPER", 
                                                             "ONE_CLAUSE_HELPER", 
                                                             "START_HELPER_BLOCK_2", 
                                                             "ELSE_BLOCK_2", 
                                                             "END_HELPER_BLOCK_2", 
                                                             "L_CURLY_2", 
                                                             "R_CURLY_2", 
                                                             "L_CURLY_3", 
                                                             "R_CURLY_3", 
                                                             "STRING", "HELPER_NAME", 
                                                             "NUMBER", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"json", "obj", "helperOrPair", "pair", "helperPair", "helperIncompleteObj", 
		"pairValue", "arr", "helperOrValue", "helper", "value",
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
			this.state = 22;
			this.value();
			this.state = 23;
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
			let _alt: number;
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 25;
				this.match(JSONParser.T__0);
				this.state = 26;
				this.helperOrPair();
				this.state = 33;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 28;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===2) {
							{
							this.state = 27;
							this.match(JSONParser.T__1);
							}
						}

						this.state = 30;
						this.helperOrPair();
						}
						}
					}
					this.state = 35;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 36;
					this.match(JSONParser.T__1);
					}
				}

				this.state = 39;
				this.match(JSONParser.T__2);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 41;
				this.match(JSONParser.T__0);
				this.state = 42;
				this.pair();
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2) {
					{
					{
					this.state = 43;
					this.match(JSONParser.T__1);
					this.state = 44;
					this.pair();
					}
					}
					this.state = 49;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 50;
				this.match(JSONParser.T__2);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 52;
				this.match(JSONParser.T__0);
				this.state = 53;
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
	public helperOrPair(): HelperOrPairContext {
		let localctx: HelperOrPairContext = new HelperOrPairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, JSONParser.RULE_helperOrPair);
		try {
			this.state = 58;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 56;
				this.pair();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 57;
				this.helperPair();
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
			this.state = 60;
			this.match(JSONParser.STRING);
			this.state = 61;
			this.match(JSONParser.T__3);
			this.state = 62;
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
	public helperPair(): HelperPairContext {
		let localctx: HelperPairContext = new HelperPairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, JSONParser.RULE_helperPair);
		let _la: number;
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 64;
				this.match(JSONParser.START_HELPER_BLOCK_2);
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 65;
					this.match(JSONParser.T__1);
					}
				}

				this.state = 68;
				this.helperIncompleteObj();
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 69;
					this.match(JSONParser.T__1);
					}
				}

				this.state = 72;
				this.match(JSONParser.ELSE_BLOCK_2);
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 73;
					this.match(JSONParser.T__1);
					}
				}

				this.state = 76;
				this.helperIncompleteObj();
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 77;
					this.match(JSONParser.T__1);
					}
				}

				this.state = 80;
				this.match(JSONParser.END_HELPER_BLOCK_2);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 82;
				this.match(JSONParser.START_HELPER_BLOCK_2);
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 83;
					this.match(JSONParser.T__1);
					}
				}

				this.state = 86;
				this.helperIncompleteObj();
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 87;
					this.match(JSONParser.T__1);
					}
				}

				this.state = 90;
				this.match(JSONParser.END_HELPER_BLOCK_2);
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
	public helperIncompleteObj(): HelperIncompleteObjContext {
		let localctx: HelperIncompleteObjContext = new HelperIncompleteObjContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, JSONParser.RULE_helperIncompleteObj);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 94;
			this.helperOrPair();
			this.state = 101;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 96;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===2) {
						{
						this.state = 95;
						this.match(JSONParser.T__1);
						}
					}

					this.state = 98;
					this.helperOrPair();
					}
					}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			}
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
		this.enterRule(localctx, 12, JSONParser.RULE_pairValue);
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 5:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 19:
			case 21:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 104;
				this.value();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 105;
				this.helper();
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
		this.enterRule(localctx, 14, JSONParser.RULE_arr);
		let _la: number;
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 108;
				this.match(JSONParser.T__4);
				this.state = 109;
				this.helperOrValue();
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2629542) !== 0)) {
					{
					{
					this.state = 111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===2) {
						{
						this.state = 110;
						this.match(JSONParser.T__1);
						}
					}

					this.state = 113;
					this.helperOrValue();
					}
					}
					this.state = 118;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 119;
				this.match(JSONParser.T__5);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 121;
				this.match(JSONParser.T__4);
				this.state = 122;
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
	public helperOrValue(): HelperOrValueContext {
		let localctx: HelperOrValueContext = new HelperOrValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, JSONParser.RULE_helperOrValue);
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 5:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 19:
			case 21:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 125;
				this.value();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 126;
				this.helper();
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
	public helper(): HelperContext {
		let localctx: HelperContext = new HelperContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, JSONParser.RULE_helper);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 129;
			this.match(JSONParser.START_HELPER_BLOCK_2);
			this.state = 139;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===2) {
						{
						this.state = 130;
						this.match(JSONParser.T__1);
						}
					}

					this.state = 135;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 1:
					case 5:
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
					case 19:
					case 21:
						{
						this.state = 133;
						this.value();
						}
						break;
					case 12:
						{
						this.state = 134;
						this.helper();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 142;
				this.match(JSONParser.T__1);
				}
			}

			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 145;
				this.match(JSONParser.ELSE_BLOCK_2);
				this.state = 155;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 147;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===2) {
							{
							this.state = 146;
							this.match(JSONParser.T__1);
							}
						}

						this.state = 151;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 1:
						case 5:
						case 7:
						case 8:
						case 9:
						case 10:
						case 11:
						case 19:
						case 21:
							{
							this.state = 149;
							this.value();
							}
							break;
						case 12:
							{
							this.state = 150;
							this.helper();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 157;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 158;
					this.match(JSONParser.T__1);
					}
				}

				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 166;
			this.match(JSONParser.END_HELPER_BLOCK_2);
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
		this.enterRule(localctx, 20, JSONParser.RULE_value);
		try {
			this.state = 177;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 168;
				this.match(JSONParser.STRING);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 169;
				this.match(JSONParser.NUMBER);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 170;
				this.obj();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 171;
				this.arr();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 172;
				this.match(JSONParser.T__6);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 173;
				this.match(JSONParser.T__7);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 174;
				this.match(JSONParser.T__8);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 175;
				this.match(JSONParser.ONE_CLAUSE_HELPER);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 176;
				this.match(JSONParser.TEMPLATE_HELPER);
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

	public static readonly _serializedATN: number[] = [4,1,22,180,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,1,0,1,0,1,0,1,1,1,1,1,1,3,1,29,8,1,1,1,5,1,32,8,1,10,1,12,1,35,
	9,1,1,1,3,1,38,8,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,46,8,1,10,1,12,1,49,9,1,
	1,1,1,1,1,1,1,1,3,1,55,8,1,1,2,1,2,3,2,59,8,2,1,3,1,3,1,3,1,3,1,4,1,4,3,
	4,67,8,4,1,4,1,4,3,4,71,8,4,1,4,1,4,3,4,75,8,4,1,4,1,4,3,4,79,8,4,1,4,1,
	4,1,4,1,4,3,4,85,8,4,1,4,1,4,3,4,89,8,4,1,4,1,4,3,4,93,8,4,1,5,1,5,3,5,
	97,8,5,1,5,5,5,100,8,5,10,5,12,5,103,9,5,1,6,1,6,3,6,107,8,6,1,7,1,7,1,
	7,3,7,112,8,7,1,7,5,7,115,8,7,10,7,12,7,118,9,7,1,7,1,7,1,7,1,7,3,7,124,
	8,7,1,8,1,8,3,8,128,8,8,1,9,1,9,3,9,132,8,9,1,9,1,9,3,9,136,8,9,5,9,138,
	8,9,10,9,12,9,141,9,9,1,9,3,9,144,8,9,1,9,1,9,3,9,148,8,9,1,9,1,9,3,9,152,
	8,9,5,9,154,8,9,10,9,12,9,157,9,9,1,9,3,9,160,8,9,5,9,162,8,9,10,9,12,9,
	165,9,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,178,8,
	10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,0,206,0,22,1,0,0,0,2,54,1,
	0,0,0,4,58,1,0,0,0,6,60,1,0,0,0,8,92,1,0,0,0,10,94,1,0,0,0,12,106,1,0,0,
	0,14,123,1,0,0,0,16,127,1,0,0,0,18,129,1,0,0,0,20,177,1,0,0,0,22,23,3,20,
	10,0,23,24,5,0,0,1,24,1,1,0,0,0,25,26,5,1,0,0,26,33,3,4,2,0,27,29,5,2,0,
	0,28,27,1,0,0,0,28,29,1,0,0,0,29,30,1,0,0,0,30,32,3,4,2,0,31,28,1,0,0,0,
	32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,36,
	38,5,2,0,0,37,36,1,0,0,0,37,38,1,0,0,0,38,39,1,0,0,0,39,40,5,3,0,0,40,55,
	1,0,0,0,41,42,5,1,0,0,42,47,3,6,3,0,43,44,5,2,0,0,44,46,3,6,3,0,45,43,1,
	0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,0,
	0,0,50,51,5,3,0,0,51,55,1,0,0,0,52,53,5,1,0,0,53,55,5,3,0,0,54,25,1,0,0,
	0,54,41,1,0,0,0,54,52,1,0,0,0,55,3,1,0,0,0,56,59,3,6,3,0,57,59,3,8,4,0,
	58,56,1,0,0,0,58,57,1,0,0,0,59,5,1,0,0,0,60,61,5,19,0,0,61,62,5,4,0,0,62,
	63,3,12,6,0,63,7,1,0,0,0,64,66,5,12,0,0,65,67,5,2,0,0,66,65,1,0,0,0,66,
	67,1,0,0,0,67,68,1,0,0,0,68,70,3,10,5,0,69,71,5,2,0,0,70,69,1,0,0,0,70,
	71,1,0,0,0,71,72,1,0,0,0,72,74,5,13,0,0,73,75,5,2,0,0,74,73,1,0,0,0,74,
	75,1,0,0,0,75,76,1,0,0,0,76,78,3,10,5,0,77,79,5,2,0,0,78,77,1,0,0,0,78,
	79,1,0,0,0,79,80,1,0,0,0,80,81,5,14,0,0,81,93,1,0,0,0,82,84,5,12,0,0,83,
	85,5,2,0,0,84,83,1,0,0,0,84,85,1,0,0,0,85,86,1,0,0,0,86,88,3,10,5,0,87,
	89,5,2,0,0,88,87,1,0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,91,5,14,0,0,91,
	93,1,0,0,0,92,64,1,0,0,0,92,82,1,0,0,0,93,9,1,0,0,0,94,101,3,4,2,0,95,97,
	5,2,0,0,96,95,1,0,0,0,96,97,1,0,0,0,97,98,1,0,0,0,98,100,3,4,2,0,99,96,
	1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,11,1,0,0,0,103,
	101,1,0,0,0,104,107,3,20,10,0,105,107,3,18,9,0,106,104,1,0,0,0,106,105,
	1,0,0,0,107,13,1,0,0,0,108,109,5,5,0,0,109,116,3,16,8,0,110,112,5,2,0,0,
	111,110,1,0,0,0,111,112,1,0,0,0,112,113,1,0,0,0,113,115,3,16,8,0,114,111,
	1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,119,1,0,0,0,
	118,116,1,0,0,0,119,120,5,6,0,0,120,124,1,0,0,0,121,122,5,5,0,0,122,124,
	5,6,0,0,123,108,1,0,0,0,123,121,1,0,0,0,124,15,1,0,0,0,125,128,3,20,10,
	0,126,128,3,18,9,0,127,125,1,0,0,0,127,126,1,0,0,0,128,17,1,0,0,0,129,139,
	5,12,0,0,130,132,5,2,0,0,131,130,1,0,0,0,131,132,1,0,0,0,132,135,1,0,0,
	0,133,136,3,20,10,0,134,136,3,18,9,0,135,133,1,0,0,0,135,134,1,0,0,0,136,
	138,1,0,0,0,137,131,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,
	0,0,140,143,1,0,0,0,141,139,1,0,0,0,142,144,5,2,0,0,143,142,1,0,0,0,143,
	144,1,0,0,0,144,163,1,0,0,0,145,155,5,13,0,0,146,148,5,2,0,0,147,146,1,
	0,0,0,147,148,1,0,0,0,148,151,1,0,0,0,149,152,3,20,10,0,150,152,3,18,9,
	0,151,149,1,0,0,0,151,150,1,0,0,0,152,154,1,0,0,0,153,147,1,0,0,0,154,157,
	1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,
	158,160,5,2,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,145,
	1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,166,1,0,0,0,
	165,163,1,0,0,0,166,167,5,14,0,0,167,19,1,0,0,0,168,178,5,19,0,0,169,178,
	5,21,0,0,170,178,3,2,1,0,171,178,3,14,7,0,172,178,5,7,0,0,173,178,5,8,0,
	0,174,178,5,9,0,0,175,178,5,11,0,0,176,178,5,10,0,0,177,168,1,0,0,0,177,
	169,1,0,0,0,177,170,1,0,0,0,177,171,1,0,0,0,177,172,1,0,0,0,177,173,1,0,
	0,0,177,174,1,0,0,0,177,175,1,0,0,0,177,176,1,0,0,0,178,21,1,0,0,0,30,28,
	33,37,47,54,58,66,70,74,78,84,88,92,96,101,106,111,116,123,127,131,135,
	139,143,147,151,155,159,163,177];

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
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public helperOrPair_list(): HelperOrPairContext[] {
		return this.getTypedRuleContexts(HelperOrPairContext) as HelperOrPairContext[];
	}
	public helperOrPair(i: number): HelperOrPairContext {
		return this.getTypedRuleContext(HelperOrPairContext, i) as HelperOrPairContext;
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
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitObj) {
			return visitor.visitObj(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HelperOrPairContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pair(): PairContext {
		return this.getTypedRuleContext(PairContext, 0) as PairContext;
	}
	public helperPair(): HelperPairContext {
		return this.getTypedRuleContext(HelperPairContext, 0) as HelperPairContext;
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_helperOrPair;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterHelperOrPair) {
	 		listener.enterHelperOrPair(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitHelperOrPair) {
	 		listener.exitHelperOrPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitHelperOrPair) {
			return visitor.visitHelperOrPair(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitPair) {
			return visitor.visitPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HelperPairContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public START_HELPER_BLOCK_2(): TerminalNode {
		return this.getToken(JSONParser.START_HELPER_BLOCK_2, 0);
	}
	public helperIncompleteObj_list(): HelperIncompleteObjContext[] {
		return this.getTypedRuleContexts(HelperIncompleteObjContext) as HelperIncompleteObjContext[];
	}
	public helperIncompleteObj(i: number): HelperIncompleteObjContext {
		return this.getTypedRuleContext(HelperIncompleteObjContext, i) as HelperIncompleteObjContext;
	}
	public ELSE_BLOCK_2(): TerminalNode {
		return this.getToken(JSONParser.ELSE_BLOCK_2, 0);
	}
	public END_HELPER_BLOCK_2(): TerminalNode {
		return this.getToken(JSONParser.END_HELPER_BLOCK_2, 0);
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_helperPair;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterHelperPair) {
	 		listener.enterHelperPair(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitHelperPair) {
	 		listener.exitHelperPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitHelperPair) {
			return visitor.visitHelperPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HelperIncompleteObjContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public helperOrPair_list(): HelperOrPairContext[] {
		return this.getTypedRuleContexts(HelperOrPairContext) as HelperOrPairContext[];
	}
	public helperOrPair(i: number): HelperOrPairContext {
		return this.getTypedRuleContext(HelperOrPairContext, i) as HelperOrPairContext;
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_helperIncompleteObj;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterHelperIncompleteObj) {
	 		listener.enterHelperIncompleteObj(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitHelperIncompleteObj) {
	 		listener.exitHelperIncompleteObj(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitHelperIncompleteObj) {
			return visitor.visitHelperIncompleteObj(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairValueContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public helper(): HelperContext {
		return this.getTypedRuleContext(HelperContext, 0) as HelperContext;
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
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public helperOrValue_list(): HelperOrValueContext[] {
		return this.getTypedRuleContexts(HelperOrValueContext) as HelperOrValueContext[];
	}
	public helperOrValue(i: number): HelperOrValueContext {
		return this.getTypedRuleContext(HelperOrValueContext, i) as HelperOrValueContext;
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
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitArr) {
			return visitor.visitArr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HelperOrValueContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public helper(): HelperContext {
		return this.getTypedRuleContext(HelperContext, 0) as HelperContext;
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_helperOrValue;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterHelperOrValue) {
	 		listener.enterHelperOrValue(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitHelperOrValue) {
	 		listener.exitHelperOrValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitHelperOrValue) {
			return visitor.visitHelperOrValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HelperContext extends ParserRuleContext {
	constructor(parser?: JSONParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public START_HELPER_BLOCK_2(): TerminalNode {
		return this.getToken(JSONParser.START_HELPER_BLOCK_2, 0);
	}
	public END_HELPER_BLOCK_2(): TerminalNode {
		return this.getToken(JSONParser.END_HELPER_BLOCK_2, 0);
	}
	public ELSE_BLOCK_2_list(): TerminalNode[] {
	    	return this.getTokens(JSONParser.ELSE_BLOCK_2);
	}
	public ELSE_BLOCK_2(i: number): TerminalNode {
		return this.getToken(JSONParser.ELSE_BLOCK_2, i);
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
	public helper_list(): HelperContext[] {
		return this.getTypedRuleContexts(HelperContext) as HelperContext[];
	}
	public helper(i: number): HelperContext {
		return this.getTypedRuleContext(HelperContext, i) as HelperContext;
	}
    public get ruleIndex(): number {
    	return JSONParser.RULE_helper;
	}
	public enterRule(listener: JSONListener): void {
	    if(listener.enterHelper) {
	 		listener.enterHelper(this);
		}
	}
	public exitRule(listener: JSONListener): void {
	    if(listener.exitHelper) {
	 		listener.exitHelper(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitHelper) {
			return visitor.visitHelper(this);
		} else {
			return visitor.visitChildren(this);
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
	public ONE_CLAUSE_HELPER(): TerminalNode {
		return this.getToken(JSONParser.ONE_CLAUSE_HELPER, 0);
	}
	public TEMPLATE_HELPER(): TerminalNode {
		return this.getToken(JSONParser.TEMPLATE_HELPER, 0);
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
	// @Override
	public accept<Result>(visitor: JSONVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
