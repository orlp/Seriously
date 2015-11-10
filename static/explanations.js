var explanations = {
    1:'',
    2:'',
    3:'',
    4:'',
    5:'',
    6:'',
    7:'',
    8:'',
    9:'',
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
    33:'push a! (factorial(a))',
    34:'string literal, reads until next " and pushes value onto stack. An implied " is present at EOF if needed.',
    35:'',
    36:'push str(a)',
    37:'push a%b',
    38:'push (a & b)',
    39:'pushes next character onto stack as character literal (length-1 string)',
    40:'rotates stack right by 1',
    41:'rotates stack left by 1',
    42:'repeat "a" b times, push "a" ("a"*b)',
    43:'push [a][b] (append [b] to [a])',
    44:'read value from stdin and push',
    45:'push a-b',
    46:'\x9f. (call \x9f and execute . recursively)',
    47:'rotate [a] right by 1, push [a]',
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
    58:'is present at EOF if needed.',
    59:'push a,a',
    60:'push 1 if a<b else 0',
    61:'push 1 if a==b else 0',
    62:'push 1 if a>b else 0',
    63:'NOP, extended expressions if -e flag is passed',
    64:'push a,b (rotate top 2 elements)',
    65:'push abs(a)',
    66:'',
    67:'push cos(a)',
    68:'',
    69:'push erf(a)',
    70:'push Fib(a) (Fib(0)=0, Fib(1)=Fib(2)=1)',
    71:'',
    72:'print "Hello, World!" to stdout',
    73:'push b if a is truthy, else push c',
    74:'',
    75:'push ceil(a)',
    76:'push floor(a)',
    77:'pop [a] n times where n is the arity of \x9f, execute R n times using \x9f and each [a], push each [a] (similar to map(\x9f,[a]))',
    78:'print the lyrics to "99 Bottles of Beer" to stdout',
    79:'push ord(c) for each c in "a" or [a], starting from the end. If a list is popped and it contains strings of length > 1, the strings are exploded in-place (["ABC"] -> [65,66,67], [["A","B","C"]] -> [65,66,67])',
    80:'push the a-th prime (zero-indexed)',
    81:'print the program\'s source code to stdout',
    82:'push [1,2,...,a] (range(1,a+1))',
    83:'push sin(a)',
    84:'push tan(a)',
    85:'push union of [a] and [b]',
    86:'',
    87:'peek top of stack, repeat code in loop while a evaluates to true',
    88:'',
    89:'',
    90:'push zip([a],[b])',
    91:'begin list literal, values are delimited by commas (,)',
    92:'rotate [a] left by 1, push [a]',
    93:'end list literal',
    94:'push pow(a,b)',
    95:'push ln(a)',
    96:'function literal delimiter, pushes function whose body contains all of the commands until the next `. An implied ` is present at EOF if needed.',
    97:'invert the stack ([a,b,c,d] -> [d,c,b,a])',
    98:'push 0 if len(\x9f)==0 else 1',
    99:'push character at ordinal a%256',
    100:'dequeue b from [a], push [a],b',
    101:'push exp(a)',
    102:'push the Fibonacci index of a if a is a Fibonacci number, else -1',
    103:'push gcd(a,b)',
    104:'push sqrt(a*a+b*b) (Euclidean norm)',
    105:'push each element from [a], starting from end (flatten)',
    106:'push "a".join([b]) (converting values in [b] to strings with $ if necessary)',
    107:'pop all elements from stack, convert to list (in the order they were on the stack, starting from the top), and push',
    108:'push len(a) (or len(\x9f))',
    109:'push int(a),frac(a) (modf(a))',
    110:'call \x9f b times',
    111:'push b to [a], push [a]',
    112:'pop b from [a], push [a],b',
    113:'enqueue b in [a], push [a]',
    114:'push [0,1,...,a-1] (range(0,a))',
    115:'push sgn(a)',
    116:'pop all elements from stack, flatten any lists and explode any strings, and push them in the same order they were popped (full stack flatten/explode)',
    117:'',
    118:'',
    119:'',
    120:'push [a,b) (range(a,b))',
    121:'',
    122:'repeat . a times (pop a times and print to stdout)',
    123:'rotate stack right a times',
    124:'push (a | b)',
    125:'rotate stack left a times',
    126:'push ~a (unary bitwise negate)',
    127:'terminate the program',
    128:'pop pairs of real numerics b,c from [a] and push b+ci (appending 0 to [a] if len([a]) is odd)',
    129:'pop entire stack and print to stdout',
    130:'pop entire stack (clear stack)',
    131:'push asin(a)',
    132:'push acos(a)',
    133:'push atan(a)',
    134:'push atan2(a,b)',
    135:'push asinh(a)',
    136:'push acosh(a)',
    137:'push atanh(a)',
    138:'',
    139:'push i, the imaginary unit (sqrt(-1) or 0+1i)',
    140:'pop a, push 0+ai',
    141:'',
    142:'push sinh(a)',
    143:'push cosh(a)',
    144:'push tanh(a)',
    145:'',
    146:'',
    147:'',
    148:'',
    149:'',
    150:'',
    151:'',
    152:'',
    153:'',
    154:'',
    155:'push abs(a)*sgn(b)',
    156:'',
    157:'',
    158:'push phase(z)',
    159:'call \x9f',
    160:'push the complex conjugate of z',
    161:'',
    162:'',
    163:'',
    164:'',
    165:'',
    166:'push a*a',
    167:'push degrees(a)',
    168:'',
    169:'push a+2',
    170:'push a-2',
    171:'push a/2 (division style determined by if a is integer or float)',
    172:'push a/4 (division style determined by if a is integer or float)',
    173:'',
    174:'insert b at position a, indexed from the bottom of the stack',
    175:'insert b at position a, indexed from the top of the stack',
    176:'',
    177:'',
    178:'',
    179:'duplicate stack ([a,b,c] => [a,b,c,a,b,c])',
    180:'',
    181:'',
    182:'',
    183:'',
    184:'',
    185:'',
    186:'',
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
    198:'',
    199:'',
    200:'',
    201:'',
    202:'',
    203:'push pi',
    204:'push e',
    205:'',
    206:'',
    207:'',
    208:'',
    209:'',
    210:'',
    211:'',
    212:'',
    213:'',
    214:'',
    215:'',
    216:'',
    217:'',
    218:'',
    219:'',
    220:'',
    221:'',
    222:'',
    223:'',
    224:'',
    225:'',
    226:'push Gamma(a)',
    227:'push product([a])',
    228:'push sum([a])',
    229:'',
    230:'',
    231:'',
    232:'',
    233:'',
    234:'',
    235:'',
    236:'',
    237:'push phi (golden ratio)',
    238:'',
    239:'push intersection of [a] and [b]',
    240:'',
    241:'push -a (unary negate)',
    242:'push a>=b',
    243:'push a<=b',
    244:'',
    245:'',
    246:'',
    247:'push int(a)',
    248:'push radians(a)',
    249:'',
    250:'',
    251:'push sqrt(a)',
    252:'',
    253:'',
    254:'',
    255:''
};