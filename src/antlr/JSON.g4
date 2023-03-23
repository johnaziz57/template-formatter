
/** Taken from "The Definitive ANTLR 4 Reference" by Terence Parr */

// Derived from http://json.org
grammar JSON;

json
   : value EOF
   ;

obj
   : '{' pair (',' pair)* '}'
   | '{' '}'
//   | '{' objPair '}'
//   | '{' pair (',' objPair)* '}'
   ;


objPair
    : pair
    | templateOperatorPair
    ;

pair
   : STRING ':' pairValue
   ;

templateOperatorPair
    : START_BLOCK_2 pair END_BLOCK_2
    ;

pairValue
    : templateOperatorValue
    | value
    ;

arr
   : '[' value (',' value)* ']'
   | '[' ']'
   ;

templateOperatorValue
    : START_BLOCK_2 value ELSE_BLOCK_2 value END_BLOCK_2
    | START_BLOCK_2 value END_BLOCK_2
    ;

value
   : STRING
   | NUMBER
   | obj
   | arr
   | 'true'
   | 'false'
   | 'null'
   ;

START_BLOCK_2
    : L_OPERATOR_2 '#' (SAFECODEPOINT)+ [WS]* R_OPERATOR_2
    ;

ELSE_BLOCK_2
    : L_OPERATOR_2 'else' R_OPERATOR_2
    ;

END_BLOCK_2
    : L_OPERATOR_2 '/' (SAFECODEPOINT)+ [WS]* R_OPERATOR_2
    ;

L_OPERATOR_2
    : '{{'
    ;

R_OPERATOR_2
    : '}}'
    ;

// TODO define operators with 3 curly braces `{{{`

T_EXPRESSION
    : L_OPERATOR_2 [WS]* (SAFECODEPOINT)+ [WS]* R_OPERATOR_2
    ;

STRING
   : '"' (ESC | SAFECODEPOINT)* '"'
   ;



fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;


fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;


fragment HEX
   : [0-9a-fA-F]
   ;


fragment SAFECODEPOINT
   : ~ ["\\\u0000-\u001F]
   ;


NUMBER
   : '-'? INT ('.' [0-9] +)? EXP?
   ;


fragment INT
   : '0' | [1-9] [0-9]*
   ;

// no leading zeros

fragment EXP
   : [Ee] [+\-]? INT
   ;

// \- since - means "range" inside [...]

WS
   : [ \t\n\r] + -> skip
   ;
