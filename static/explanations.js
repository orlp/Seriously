var explanations = {
    '1 (SOH)':'',
    '2 (STX)':'',
    '3 (ETX)':'',
    '4 (EOT)':'',
    '5 (ENQ)':'',
    '6 (ACK)':'',
    '7 (bell)':'',
    '8 (backspace)':'',
    '9 (tab)':'',
    '10 (line feed)':'',
    '11 (vertical tab)':'',
    '12 (form feed)':'',
    '13 (carriage return)':'',
    '14 (SO)':'',
    '15 (SI)':'',
    '16 (DLE)':'',
    '17 (DC1)':'',
    '18 (DC2)':'',
    '19 (DC3)':'',
    '20 (DC4)':'',
    '21 (NAK)':'',
    '22 (SYN)':'',
    '23 (ETB)':'',
    '24 (CAN)':'',
    '25 (EM)':'',
    '26 (SUB)':'',
    '27 (ESC)':'',
    '28 (FS)':'',
    '29 (GS)':'',
    '30 (RS)':'',
    '31 (US)':'',
    '32 ( )':' push the # of elements on the stack (push len(stack))',
    '33 (!)':' pop a: push a! (factorial(a))',
    '34 (")':' string literal, reads until next " and pushes value onto stack. An implied " is present at EOF if needed.',
    '35 (#)':'',
    '36 ($)':' pop a: push str(a)',
    '37 (%)':' pop a,b: push a%b',
    '38 (&)':' pop a,b: push (a & b)',
    "39 (')":' pushes next character onto stack as character literal (length-1 string)',
    '40 (()':' rotates stack right by 1',
    '41 ())':' rotates stack left by 1',
    '42 (*)':' pop a,b: push a*b; pop "a",b: repeat "a" b times, push "a" ("a"*b)',
    '43 (+)':' pop a,b: push a+b; pop "a","b": push concatenation of "a" and "b"; pop [a],[b]: push [a][b] (append [b] to [a])',
    '44 (,)':' read value from stdin and push',
    '45 (-)':' pop a,b: push a-b',
    '46 (.)':' pop a: write a to stdout; pop \x9f: \x9f. (call \x9f and execute . recursively)',
    '47 (/)':' pop a,b: push a/b (float division); pop [a]: rotate [a] right by 1, push [a]',
    '48 (0)':' push 0',
    '49 (1)':' push 1',
    '50 (2)':' push 2',
    '51 (3)':' push 3',
    '52 (4)':' push 4',
    '53 (5)':' push 5',
    '54 (6)':' push 6',
    '55 (7)':' push 7',
    '56 (8)':' push 8',
    '57 (9)':' push 9',
    '58 (':'): numeric literal delimiter: pushes the string between it and the following : as a numeric value, or 0 if it cannot be converted. An implicit : is present at EOF if needed.',
    '59 (;)':' pop a: push a,a',
    '60 (<)':' pop a,b: push 1 if a<b else 0',
    '61 (=)':' pop a,b: push 1 if a==b else 0',
    '62 (>)':' pop a,b: push 1 if a>b else 0',
    '63 (?)':' NOP, extended expressions if -e flag is passed',
    '64 (@)':' pop a,b: push a,b (rotate top 2 elements)',
    '65 (A)':' pop a: push abs(a)',
    '66 (B)':'',
    '67 (C)':' pop a: push cos(a)',
    '68 (D)':'',
    '69 (E)':' pop a: push erf(a)',
    '70 (F)':' pop a: push Fib(a) (Fib(0)=0, Fib(1)=Fib(2)=1)',
    '71 (G)':'',
    '72 (H)':' if stack is empty: print "Hello, World!" to stdout',
    '73 (I)':' pop a,b,c: push b if a is truthy, else push c',
    '74 (J)':'',
    '75 (K)':' pop a: push ceil(a)',
    '76 (L)':' pop a: push floor(a)',
    '77 (M)':' pop \x9f: pop [a] n times where n is the arity of \x9f, execute R n times using \x9f and each [a], push each [a] (similar to map(\x9f,[a]))',
    '78 (N)':' if stack is empty: print the lyrics to "99 Bottles of Beer" to stdout',
    '79 (O)':' pop "a" or [a]: push ord(c) for each c in "a" or [a], starting from the end. If a list is popped and it contains strings of length > 1, the strings are exploded in-place (["ABC"] -> [65,66,67], [["A","B","C"]] -> [65,66,67])',
    '80 (P)':' pop a: push the a-th prime (zero-indexed)',
    '81 (Q)':' if stack is empty':" print the program's source code to stdout",
    '82 (R)':' pop \x9f,[a]: call \x9f, using [a] as a temporary stack, push [a] (similar to reduce(\x9f,[a])); pop "a" or [a]: push reversed value ("a".reverse() or [a][::-1]); pop a: push [1,2,...,a] (range(1,a+1))',
    '83 (S)':' pop a: push sin(a)',
    '84 (T)':' pop a: push tan(a)',
    '85 (U)':' pop [a],[b]: push union of [a] and [b]',
    '86 (V)':'',
    '87 (W)':' loop delimiter: peek top of stack, repeat code in loop while a evaluates to true',
    '88 (X)':'',
    '89 (Y)':'',
    '90 (Z)':' pop [a],[b]: push zip([a],[b])',
    '91 ([)':' begin list literal, values are delimited by commas (,)',
    '92 (\\)':' pop a,b: push a/b (integer division); pop [a]: rotate [a] left by 1, push [a]',
    '93 (])':' end list literal',
    '94 (^)':' pop a,b: push pow(a,b)',
    '95 (_)':' pop a: push ln(a)',
    '96 (`)':' function literal delimiter, pushes function whose body contains all of the commands until the next `. An implied ` is present at EOF if needed.',
    '97 (a)':' invert the stack ([a,b,c,d] -> [d,c,b,a])',
    '98 (b)':' pop a: push 0 if a==0 else 1; pop "a" or [a]: push 0 if len(a)==0 else 1; pop \x9f: push 0 if len(\x9f)==0 else 1',
    '99 (c)':' pop a: push character at ordinal a%256',
    '100 (d)':' pop [a]: dequeue b from [a], push [a],b',
    '101 (e)':' pop a: push exp(a)',
    '102 (f)':' pop a: push the Fibonacci index of a if a is a Fibonacci number, else -1',
    '103 (g)':' pop a,b: push gcd(a,b)',
    '104 (h)':' pop a,b: push sqrt(a*a+b*b) (Euclidean norm)',
    '105 (i)':' pop "a": push atof(a); pop [a]: push each element from [a], starting from end (flatten)',
    '106 (j)':' pop "a",[b]: push "a".join([b]) (converting values in [b] to strings with $ if necessary)',
    '107 (k)':' pop all elements from stack, convert to list (in the order they were on the stack, starting from the top), and push',
    '108 (l)':' pop "a" or [a] or \x9f: push len(a) (or len(\x9f))',
    '109 (m)':' pop a: push int(a),frac(a) (modf(a))',
    '110 (n)':' pop a,b: push a b times; pop \x9f,b: call \x9f b times',
    '111 (o)':' pop [a],b: push b to [a], push [a]',
    '112 (p)':' pop a: push 1 if a is prime else 0; pop [a]: pop b from [a], push [a],b',
    '113 (q)':' pop [a],b: enqueue b in [a], push [a]',
    '114 (r)':' pop "a": push each character in "a", starting from the end (explode string); pop a: push [0,1,...,a-1] (range(0,a))',
    '115 (s)':' pop a: push sgn(a)',
    '116 (t)':' pop all elements from stack, flatten any lists and explode any strings, and push them in the same order they were popped (full stack flatten/explode)',
    '117 (u)':'',
    '118 (v)':'',
    '119 (w)':'',
    '120 (x)':' pop a,b: push [a,b) (range(a,b))',
    '121 (y)':'',
    '122 (z)':' pop a: repeat . a times (pop a times and print to stdout)',
    '123 ({)':' pop a: rotate stack right a times',
    '124 (|)':' pop a,b: push (a | b)',
    '125 (})':' pop a: rotate stack left a times',
    '126 (~)':' pop a: push ~a (unary bitwise negate)',
    '127 (\x7f)':' terminate the program',
    '128 (\x80)':' pop a,b: push a+bi; pop [a]: pop pairs of real numerics b,c from [a] and push b+ci (appending 0 to [a] if len([a]) is odd)',
    '129 (\x81)':' pop entire stack and print to stdout',
    '130 (\x82)':' pop entire stack (clear stack)',
    '131 (\x83)':' pop a: push asin(a)',
    '132 (\x84)':' pop a: push acos(a)',
    '133 (\x85)':' pop a: push atan(a)',
    '134 (\x86)':' pop a,b: push atan2(a,b)',
    '135 (\x87)':' pop a: push asinh(a)',
    '136 (\x88)':' pop a: push acosh(a)',
    '137 (\x89)':' pop a: push atanh(a)',
    '138 (\x8a)':'',
    '139 (\x8b)':' push i, the imaginary unit (sqrt(-1) or 0+1i)',
    '140 (\x8c)':' pop a, push 0+ai',
    '141 (\x8d)':'',
    '142 (\x8e)':' pop a: push sinh(a)',
    '143 (\x8f)':' pop a: push cosh(a)',
    '144 (\x90)':' pop a: push tanh(a)',
    '145 (\x91)':'',
    '146 (\x92)':'',
    '147 (\x93)':'',
    '148 (\x94)':'',
    '149 (\x95)':'',
    '150 (\x96)':'',
    '151 (\x97)':'',
    '152 (\x98)':'',
    '153 (\x99)':'',
    '154 (\x9a)':'',
    '155 (\x9b)':' pop a,b: push abs(a)*sgn(b)',
    '156 (\x9c)':'',
    '157 (\x9d)':'',
    '158 (\x9e)':' pop z: push phase(z)',
    '159 (\x9f)':' pop \x9f: call \x9f',
    '160 (\xa0)':' pop z: push the complex conjugate of z',
    '161 (\xa1)':'',
    '162 (\xa2)':'',
    '163 (\xa3)':'',
    '164 (\xa4)':'',
    '165 (\xa5)':'',
    '166 (\xa6)':' pop a: push a*a',
    '167 (\xa7)':' pop a: push degrees(a)',
    '168 (\xa8)':'',
    '169 (\xa9)':' pop a: push a+2',
    '170 (\xaa)':' pop a: push a-2',
    '171 (\xab)':' pop a: push a/2 (division style determined by if a is integer or float)',
    '172 (\xac)':' pop a: push a/4 (division style determined by if a is integer or float)',
    '173 (\xad)':'',
    '174 (\xae)':' pop a,b: insert b at position a, indexed from the bottom of the stack',
    '175 (\xaf)':' pop a,b: insert b at position a, indexed from the top of the stack',
    '176 (\xb0)':'',
    '177 (\xb1)':'',
    '178 (\xb2)':'',
    '179 (\xb3)':' duplicate stack ([a,b,c] => [a,b,c,a,b,c])',
    '180 (\xb4)':'',
    '181 (\xb5)':'',
    '182 (\xb6)':'',
    '183 (\xb7)':'',
    '184 (\xb8)':'',
    '185 (\xb9)':'',
    '186 (\xba)':'',
    '187 (\xbb)':'',
    '188 (\xbc)':'',
    '189 (\xbd)':'',
    '190 (\xbe)':'',
    '191 (\xbf)':'',
    '192 (\xc0)':'',
    '193 (\xc1)':'',
    '194 (\xc2)':'',
    '195 (\xc3)':'',
    '196 (\xc4)':'',
    '197 (\xc5)':' duplicate each element on stack ([a,b,c] => [a,a,b,b,c,c])',
    '198 (\xc6)':'',
    '199 (\xc7)':'',
    '200 (\xc8)':'',
    '201 (\xc9)':'',
    '202 (\xca)':'',
    '203 (\xcb)':' push pi',
    '204 (\xcc)':' push e',
    '205 (\xcd)':'',
    '206 (\xce)':'',
    '207 (\xcf)':'',
    '208 (\xd0)':'',
    '209 (\xd1)':'',
    '210 (\xd2)':'',
    '211 (\xd3)':'',
    '212 (\xd4)':'',
    '213 (\xd5)':'',
    '214 (\xd6)':'',
    '215 (\xd7)':'',
    '216 (\xd8)':'',
    '217 (\xd9)':'',
    '218 (\xda)':'',
    '219 (\xdb)':'',
    '220 (\xdc)':'',
    '221 (\xdd)':'',
    '222 (\xde)':'',
    '223 (\xdf)':'',
    '224 (\xe0)':'',
    '225 (\xe1)':'',
    '226 (\xe2)':' pop a: push Gamma(a)',
    '227 (\xe3)':' pop [a]: push product([a])',
    '228 (\xe4)':' pop [a]: push sum([a])',
    '229 (\xe5)':'',
    '230 (\xe6)':'',
    '231 (\xe7)':'',
    '232 (\xe8)':'',
    '233 (\xe9)':'',
    '234 (\xea)':'',
    '235 (\xeb)':'',
    '236 (\xec)':'',
    '237 (\xed)':' push phi (golden ratio)',
    '238 (\xee)':'',
    '239 (\xef)':' pop [a],[b]: push intersection of [a] and [b]',
    '240 (\xf0)':'',
    '241 (\xf1)':' pop a: push -a (unary negate)',
    '242 (\xf2)':' pop a,b: push a>=b',
    '243 (\xf3)':' pop a,b: push a<=b',
    '244 (\xf4)':'',
    '245 (\xf5)':'',
    '246 (\xf6)':'',
    '247 (\xf7)':' pop a: push int(a)',
    '248 (\xf8)':' pop a: push radians(a)',
    '249 (\xf9)':'',
    '250 (\xfa)':'',
    '251 (\xfb)':' pop a: push sqrt(a)',
    '252 (\xfc)':'',
    '253 (\xfd)':'',
    '254 (\xfe)':'',
    '255 (\xff)':''
};