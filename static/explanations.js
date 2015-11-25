var explanations = {
0:'',
1:'',
2:'',
3:'',
4:'',
5:'',
6:'',
7:'',
8:'',
9:'push a single byte of unformatted input from STDIN (push sys.stdin.read(1))',
10:'',
11:'',
12:'',
13:'',
14:'',
15:'',
16:'',
17:'',
18:'',
19:'',
20:'',
21:'',
22:'',
23:'',
24:'',
25:'',
26:'',
27:'',
28:'',
29:'',
30:'',
31:'',
32:'push the # of elements on the stack (push len(stack))',
33:'pop a: push a! (factorial(a))',
34:'string literal, reads until next " and pushes value onto stack. An implied " is present at EOF if needed.',
35:'pop a: push list(a)',
36:'pop a: push str(a)',
37:'pop a,b: push a%b; pop "a",[b]: push "a"%[b]',
38:'pop a,b: push (a & b)',
39:'pushes next character onto stack as character literal (length-1 string)',
40:'rotates stack right by 1',
41:'rotates stack left by 1',
42:'pop a,b: push a*b; pop "a",b: repeat "a" b times, push "a" ("a"*b); pop a,[b] or [b],a: apply a* to each element in the array',
43:'pop a,b: push a+b; pop "a","b": push concatenation of "a" and "b"; pop [a],[b]: push [a][b] (append [b] to [a]); pop a,[b] or [b],a: apply a* to each element in the array',
44:'read value from stdin and push',
45:'pop a,b: push a-b',
46:'pop a: write a to stdout; pop f: f. (call f and execute . recursively)',
47:'pop a,b: push a/b (float division); pop [a]: rotate [a] right by 1, push [a]',
48:'push 0',
49:'push 1',
50:'push 2',
51:'push 3',
52:'push 4',
53:'push 5',
54:'push 6',
55:'push 7',
56:'push 8',
57:'push 9',
58:'): numeric literal delimiter: pushes the string between it and the following : as a numeric value, or 0 if it cannot be converted. An implicit : is present at EOF if needed.',
59:'pop a: push a,a',
60:'pop a,b: push 1 if a<b else 0',
61:'pop a,b: push 1 if a==b else 0',
62:'pop a,b: push 1 if a>b else 0',
63:'NOP, extended expressions if -e flag is passed',
64:'pop a,b: push a,b (rotate top 2 elements)',
65:'pop a: push abs(a)',
66:'pop a,b: push a random integer in [a,b) (randrange(a,b))',
67:'pop a: push cos(a)',
68:'pop a: push a-1',
69:'pop a: push erf(a); pop [a],b: push [a][b] (bth item in [a]) (also works for strings)',
70:'pop a: push Fib(a) (Fib(0)=0, Fib(1)=Fib(2)=1)',
71:'push a random float in the range [0,1) (push random())',
72:'if stack is empty: push "Hello, World!"',
73:'pop a,b,c: push b if a is truthy, else push c',
74:'pop a: push a random integer in [0,a) (randrange(a)); pop [a] or "a": push a random element from [a] or "a" (random.choice([a]|"a"))',
75:'pop a: push ceil(a)',
76:'pop a: push floor(a)',
77:'pop f,[a], execute f for each element in [a], using the element as a temporary stack, push [a] (similar to map(f,[a]))',
78:'if stack is empty: push the lyrics to "99 Bottles of Beer"',
79:'pop "a" or [a]: push ord(c) for each c in "a" or [a], starting from the end. If a list is popped and it contains strings of length > 1, the strings are exploded in-place (["ABC"] -> [65,66,67], [["A","B","CD"]] -> [65,66,67,68])',
80:'pop a: push the a-th prime (zero-indexed)',
81:"if stack is empty: push the program's source code",
82:'pop f,[a]: call f, using [a] as a temporary stack, push [a] (similar to reduce(f,[a])); pop "a" or [a]: push reversed value ("a".reverse() or [a][::-1]); pop a: push [1,2,...,a] (range(1,a+1))',
83:'pop a: push sin(a); pop "a" or [a]: push sorted(a)',
84:'pop a: push tan(a)',
85:'pop [a],[b]: push union of [a] and [b]',
86:'pop a,b: push uniform(a,b) (random float between a and b)',
87:'loop delimiter: peek top of stack, repeat code in loop while a evaluates to true',
88:'pop a: discard',
89:'pop a: push !bool(a) (logical negate, opposite of b)',
90:'pop [a],[b]: push zip([a],[b]); pop a, zip the next a lists',
91:'begin list literal, values are delimited by commas (,)',
92:'pop a,b: push a/b (integer division); pop [a]: rotate [a] left by 1, push [a]',
93:'end list literal',
94:'pop a,b: push pow(a,b)',
95:'pop a: push ln(a)',
96:'function literal delimiter, pushes function whose body contains all of the commands until the next `. An implied ` is present at EOF if needed.',
97:'invert the stack ([a,b,c,d] -> [d,c,b,a])',
98:'pop a: push 0 if a==0 else 1; pop "a" or [a]: push 0 if len(a)==0 else 1; pop f: push 0 if len(f)==0 else 1',
99:'pop a: push character at ordinal a%256; pop [a],b: push [a].count(b); pop "a","b": push "a".count("b")',
100:'pop [a]: dequeue b from [a], push [a],b',
101:'pop a: push exp(a)',
102:'pop a: push the Fibonacci index of a if a is a Fibonacci number, else -1; pop "a",[b]: push "a".format(*[b])',
103:'pop a,b: push gcd(a,b)',
104:'pop a,b: push sqrt(a*a+b*b) (Euclidean norm)',
105:'pop "a": push atof(a); pop [a]: push each element from [a], starting from end (flatten)',
106:'pop "a",[b]: push "a".join([b]) (converting values in [b] to strings with $ if necessary)',
107:'pop all elements from stack, convert to list (in the order they were on the stack, starting from the top), and push',
108:'pop "a" or [a] or f: push len(a) (or len(f))',
109:'pop a: push int(a),frac(a) (modf(a))',
110:'pop a,b: push a b times; pop f,b: call f b times',
111:'pop [a],b: push b to [a], push [a]',
112:'pop a: push 1 if a is prime else 0; pop [a]: pop b from [a], push [a],b',
113:'pop [a],b: enqueue b in [a], push [a]',
114:'pop "a": push each character in "a", starting from the end (explode string); pop a: push [0,1,...,a-1] (range(0,a))',
115:'pop a: push sgn(a)',
116:'pop all elements from stack, flatten any lists and explode any strings, and push them in the same order they were popped (full stack flatten/explode)',
117:'pop a: push a+1',
118:'pop a: seed the RNG with a (random.seed(a))',
119:'pop a: push the full factorization of a (18 -> [[2,1],[3,2]])',
120:'pop a,b: push [a,b) (range(a,b))',
121:'pop a: push the prime factors of a (18 -> [2,3])',
122:'pop a: repeat . a times (pop a times and print to stdout)',
123:'pop a: rotate stack right a times',
124:'pop a,b: push (a | b)',
125:'pop a: rotate stack left a times',
126:'pop a: push ~a (unary bitwise negate)',
127:'terminate the program (without implicit stack popping and printing)',
128:'pop a,b: push a+bi; pop [a]: pop pairs of real numerics b,c from [a] and push b+ci (appending 0 to [a] if len([a]) is odd)',
129:'pop entire stack and print to stdout',
130:'pop entire stack (clear stack)',
131:'pop a: push asin(a)',
132:'pop a: push acos(a)',
133:'pop a: push atan(a)',
134:'pop a,b: push atan2(a,b)',
135:'pop a: push asinh(a)',
136:'pop a: push acosh(a)',
137:'pop a: push atanh(a)',
138:'pop a: push repr(a)',
139:'push i, the imaginary unit (sqrt(-1) or 0+1i)',
140:'pop a, push 0+ai; pop [a], push [a] with every element multiplied by i',
141:'pop a: push 1/a',
142:'pop a: push sinh(a)',
143:'pop a: push cosh(a)',
144:'pop a: push tanh(a)',
145:'pop [a]: push mean([a])',
146:'pop "a","b","c": push "a".replace("b","c")',
147:'pop "a": push "a".strip()',
148:'pop "a": push "a".lstrip()',
149:'pop "a": push "a".rstrip()',
150:'pop "a": push "a".upper()',
151:'pop "a": push "a".lower()',
152:'pop "a": push "a".title()',
153:'pop "a": push "a".swapcase()',
154:'pop [a]: push mode([a])',
155:'pop a,b: push abs(a)*sgn(b)',
156:'pop "a": push a function whose code is "a"',
157:'pop [a],[b]: push the result of pairwise addition of [a] and [b], padding the shorter with 0s',
158:'pop z: push phase(z)',
159:'pop f: call f',
160:'pop z: push the complex conjugate of z',
161:'pop a,[b]: push [b].index(a) (0-based, -1 if not found)',
162:'pop a: if bool(a) push a, else terminate the program (conditional exit); terminate the program if the stack is empty',
163:'',
164:'pop [a]: push enumerate([a]) ([[i,a[i]] for i in range(len(a))])',
165:'',
166:'pop a: push a*a',
167:'pop a: push degrees(a)',
168:'pop a,b: push int(a,b) (interpret a as a base-b int)',
169:'pop a: push a+2',
170:'pop a: push a-2',
171:'pop a: push a/2 (float division)',
172:'pop a: push a/4 (float division)',
173:'pop a,b: push a string representing a in base b',
174:'pop a,b: insert b at position a, indexed from the bottom of the stack',
175:'pop a,b: insert b at position a, indexed from the top of the stack',
176:'pop [a],[b]: push [[a][i] if [b][i] for i in len(a)], pads [b] with 0s if necessary',
177:'pop a: push totient(a) (# of integers <= a that are coprime with a)',
178:'pop a: push pi(a) (# of primes <= a)',
179:'duplicate stack ([a,b,c] => [a,b,c,a,b,c])',
180:'pop a,b: push 1 if a and b are coprime else 0',
181:'',
182:'',
183:'',
184:'',
185:'',
186:'pop [a] or "a": push median([a]/"a") (using ordinals if string)',
187:'',
188:'',
189:'',
190:'',
191:'',
192:'',
193:'',
194:'',
195:'',
196:'',
197:'duplicate each element on stack ([a,b,c] => [a,a,b,b,c,c])',
198:'pop a: make a total copies of each element on stack (3 [a,b,c] -> [a,a,a,b,b,b,c,c,c])',
199:'pop a: pop a elements and push a list containing those elements in their original order',
200:'',
201:'',
202:'',
203:'push pi',
204:'push e',
205:'',
206:'pop f: while value on top of stack is truthy (peek), call f',
207:'',
208:'',
209:'pop a: push 10**a',
210:'pop a: push log(a) (log base 10)',
211:'pop a: push 2**a',
212:'pop a: push lg(a) (log base 2)',
213:'',
214:'',
215:'',
216:'',
217:'',
218:'',
219:'',
220:'',
221:'pop "a": push b64decode("a")',
222:'pop "a": push b64encode("a")',
223:'',
224:'',
225:'',
226:'pop a: push Gamma(a)',
227:'pop [a]: push product([a])',
228:'pop [a]: push sum([a])',
229:'',
230:'',
231:'pop a: push 2*a',
232:'',
233:'',
234:'',
235:'',
236:'',
237:'push phi (golden ratio)',
238:'push "" (empty string)',
239:'pop [a],[b]: push intersection of [a] and [b]',
240:'',
241:'pop a: push -a (unary negate)',
242:'pop a,b: push a>=b',
243:'pop a,b: push a<=b',
244:'',
245:'',
246:'',
247:'pop a: push int(a)',
248:'pop a: push radians(a)',
249:'',
250:'',
251:'pop a: push sqrt(a)',
252:'',
253:'',
254:'print the entire stack without popping, separated by spaces',
255:''
};