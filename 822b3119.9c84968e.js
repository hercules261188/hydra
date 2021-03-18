(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(8),r=(a(0),a(268)),l={id:"basic",hide_title:!0,sidebar_label:"Basic Override syntax"},o={unversionedId:"advanced/override_grammar/basic",id:"version-1.0/advanced/override_grammar/basic",isDocsHomePage:!1,title:"basic",description:"Basic Override syntax",source:"@site/versioned_docs/version-1.0/advanced/override_grammar/basic.md",slug:"/advanced/override_grammar/basic",permalink:"/docs/advanced/override_grammar/basic",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/advanced/override_grammar/basic.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1616027495,sidebar_label:"Basic Override syntax",sidebar:"version-1.0/docs",previous:{title:"Hydra's command line flags",permalink:"/docs/advanced/hydra-command-line-flags"},next:{title:"extended",permalink:"/docs/advanced/override_grammar/extended"}},c=[{value:"Basic Override syntax",id:"basic-override-syntax",children:[]},{value:"Basic examples",id:"basic-examples",children:[{value:"Modifying the Config Object",id:"modifying-the-config-object",children:[]},{value:"Modifying the Defaults List",id:"modifying-the-defaults-list",children:[]}]},{value:"Grammar",id:"grammar",children:[]},{value:"Elements",id:"elements",children:[{value:"Key",id:"key",children:[]},{value:"Quoted values",id:"quoted-values",children:[]},{value:"Whitespaces in unquoted values",id:"whitespaces-in-unquoted-values",children:[]},{value:"Escaped characters in unquoted values",id:"escaped-characters-in-unquoted-values",children:[]},{value:"Primitives",id:"primitives",children:[]}]},{value:"Dictionaries and Lists",id:"dictionaries-and-lists",children:[{value:"Lists",id:"lists",children:[]},{value:"Dictionaries",id:"dictionaries",children:[]},{value:"Sweeper syntax",id:"sweeper-syntax",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Working with your shell",id:"working-with-your-shell",children:[{value:"Bash",id:"bash",children:[]},{value:"Other shells",id:"other-shells",children:[]}]}],s={toc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"basic-override-syntax"},"Basic Override syntax"),Object(r.b)("p",null,"You can manipulate your configuration with overrides (via the command line or the Compose API). This includes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Modifying the the ",Object(r.b)("inlineCode",{parentName:"li"},"Defaults List")),Object(r.b)("li",{parentName:"ul"},"Modifying the config object")),Object(r.b)("p",null,"Overrides matching a config group are modifying the ",Object(r.b)("inlineCode",{parentName:"p"},"Defaults List"),";\nThe rest are manipulating the config object."),Object(r.b)("h2",{id:"basic-examples"},"Basic examples"),Object(r.b)("h3",{id:"modifying-the-config-object"},"Modifying the Config Object"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Overriding a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"foo.bar=value")),Object(r.b)("li",{parentName:"ul"},"Appending a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"+foo.bar=value")),Object(r.b)("li",{parentName:"ul"},"Removing a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"~foo.bar"),", ",Object(r.b)("inlineCode",{parentName:"li"},"~foo.bar=value"))),Object(r.b)("h3",{id:"modifying-the-defaults-list"},"Modifying the Defaults List"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Overriding selected Option: ",Object(r.b)("inlineCode",{parentName:"li"},"db=mysql")),Object(r.b)("li",{parentName:"ul"},"Appending to defaults: ",Object(r.b)("inlineCode",{parentName:"li"},"+db=mysql")),Object(r.b)("li",{parentName:"ul"},"Deleting from defaults: ",Object(r.b)("inlineCode",{parentName:"li"},"~db"),", ",Object(r.b)("inlineCode",{parentName:"li"},"~db=mysql"))),Object(r.b)("h2",{id:"grammar"},"Grammar"),Object(r.b)("p",null,"Hydra supports a rich ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Domain-specific_language"}),"DSL")," in the command line.\nBelow are the parser rules from grammar.\nYou can see the full grammar on GitHub\n(",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/hydra/grammar/OverrideLexer.g4"}),"lexer")," and\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/hydra/grammar/OverrideParser.g4"}),"parser"),")."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-antlr4",metastring:'title="OverrideParser.g4"',title:'"OverrideParser.g4"'}),"// High-level command-line override.\n\noverride: (\n      key EQUAL value?                           // key=value, key= (for empty value)\n    | TILDE key (EQUAL value?)?                  // ~key | ~key=value\n    | PLUS key EQUAL value?                      // +key= | +key=value\n) EOF;\n\n// Keys.\n\nkey : packageOrGroup (AT package)?;              // key | group@pkg\n\npackageOrGroup: package | ID (SLASH ID)+;        // db, hydra/launcher\npackage: (ID | DOT_PATH);                        // db, hydra.launcher\n\n// Elements (that may be swept over).\n\nvalue: element | simpleChoiceSweep;\n\nelement:\n      primitive\n    | listValue\n    | dictValue\n    | function\n;\n\nsimpleChoiceSweep:\n      element (COMMA element)+                   // value1,value2,value3\n;\n\n// Functions.\n\nargName: ID EQUAL;\nfunction: ID POPEN (argName? element (COMMA argName? element )* )? PCLOSE;\n\n// Data structures.\n\nlistValue: BRACKET_OPEN                          // [], [1,2,3], [a,b,[1,2]]\n    (element(COMMA element)*)?\nBRACKET_CLOSE;\n\ndictValue: BRACE_OPEN (dictKeyValuePair (COMMA dictKeyValuePair)*)? BRACE_CLOSE;  // {}, {a:10,b:20}\ndictKeyValuePair: ID COLON element;\n\n// Primitive types.\n\nprimitive:\n      QUOTED_VALUE                               // 'hello world', \"hello world\"\n    | (   ID                                     // foo_10\n        | NULL                                   // null, NULL\n        | INT                                    // 0, 10, -20, 1_000_000\n        | FLOAT                                  // 3.14, -20.0, 1e-1, -10e3\n        | BOOL                                   // true, TrUe, false, False\n        | INTERPOLATION                          // ${foo.bar}, ${env:USER,me}\n        | UNQUOTED_CHAR                          // /, -, \\, +, ., $, %, *, @\n        | COLON                                  // :\n        | ESC                                    // \\\\, \\(, \\), \\[, \\], \\{, \\}, \\:, \\=, \\ , \\\\t, \\,\n        | WS                                     // whitespaces\n    )+;\n")),Object(r.b)("h2",{id:"elements"},"Elements"),Object(r.b)("h3",{id:"key"},"Key"),Object(r.b)("p",null,"Key is the component before the =. A few examples:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"foo.bar           # A config key\nhydra/launcher    # A config group\ngroup@pkg         # A config group assigned to the package pkg\ngroup@pkg1:pkg2   # A config group changing the package from pkg1 to pkg2\n")),Object(r.b)("h3",{id:"quoted-values"},"Quoted values"),Object(r.b)("p",null,"Hydra supports both double quotes and single quoted values.\nQuoted strings can accept any value between the quotes.\nTo include a single quote in a single quoted string escape it : ",Object(r.b)("inlineCode",{parentName:"p"},"\\'"),". Same for double quote in a double quoted string."),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:'title="Double quotes"',title:'"Double','quotes"':!0}),'"hello there"\n"escaped \\"double quote\\""\n"1,2,3"\n"{a:10} ${xyz}"\n"\'single quoted string\'"\n'))),Object(r.b)("div",{className:"col  col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:'title="Single quotes"',title:'"Single','quotes"':!0}),"'hello there'\n'escaped \\'single quote\\''\n'1,2,3'\n'{a:10} ${xyz}'\n'\"double quoted string\"'\n")))),Object(r.b)("h3",{id:"whitespaces-in-unquoted-values"},"Whitespaces in unquoted values"),Object(r.b)("p",null,"Unquoted Override values can contain non leading or trailing whitespaces.\nFor example, ",Object(r.b)("inlineCode",{parentName:"p"},"msg=hello world")," is a legal override (key is ",Object(r.b)("inlineCode",{parentName:"p"},"msg")," and value is the string ",Object(r.b)("inlineCode",{parentName:"p"},"hello world"),").\nNormally, your shell will interpret values with whitespaces as being multiple parameters (",Object(r.b)("inlineCode",{parentName:"p"},"key=a b")," would be interpreted as ",Object(r.b)("inlineCode",{parentName:"p"},"key=a")," and ",Object(r.b)("inlineCode",{parentName:"p"},"b"),").\nTo prevent this you can quote them with a single quote. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ python my_app.py 'msg=hello world'\n")),Object(r.b)("p",null,"Note that trailing and leading whitespace are ignored, the above is equivalent to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ python my_app.py 'msg=    hello world    '\n")),Object(r.b)("h3",{id:"escaped-characters-in-unquoted-values"},"Escaped characters in unquoted values"),Object(r.b)("p",null,"Some otherwise special characters may be included in unquoted values by escaping them with a ",Object(r.b)("inlineCode",{parentName:"p"},"\\"),".\nThese characters are: ",Object(r.b)("inlineCode",{parentName:"p"},"\\()[]{}:=, \\t")," (the last two ones being the whitespace and tab characters)."),Object(r.b)("p",null,"As an example, in the following ",Object(r.b)("inlineCode",{parentName:"p"},"dir")," is set to the string ",Object(r.b)("inlineCode",{parentName:"p"},"job{a=1,b=2,c=3}"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ python my_app.py 'dir=job\\{a\\=1\\,b\\=2\\,c\\=3\\}'\n")),Object(r.b)("h3",{id:"primitives"},"Primitives"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," : oompa10, loompa_12"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"null"),": null"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"int"),": 10, -20, 0, 1_000_000."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"float"),": 3.14, -10e6, inf, -inf, nan."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bool"),": true, false"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dot_path"),": foo.bar"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"interpolation"),": ${foo.bar}, ${env:USER,me}")),Object(r.b)("p",null,"Constants (null, true, false, inf, nan) are case insensitive."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Always single-quote interpolations in the shell."))),Object(r.b)("h2",{id:"dictionaries-and-lists"},"Dictionaries and Lists"),Object(r.b)("h3",{id:"lists"},"Lists"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"foo=[1,2,3]\nnested=[a,[b,[c]]]\n")),Object(r.b)("h3",{id:"dictionaries"},"Dictionaries"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"foo={a:10,b:20}\nnested={a:10,b:{c:30,d:40}}\n")),Object(r.b)("p",null,"Dictionaries are merged, not assigned. The following example illustrates the point:"),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Input config"',title:'"Input','config"':!0}),"db:\n  driver: mysql\n  user: ???\n  pass: ???\n"))),Object(r.b)("div",{className:"col  col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db={user:root,pass:1234}"',title:'"db'}),"db:\n  driver: mysql\n  user: root\n  pass: 1234\n")))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Always single-quote overrides that contains dicts and lists in the shell."))),Object(r.b)("h3",{id:"sweeper-syntax"},"Sweeper syntax"),Object(r.b)("p",null,"A choice sweep is comma separated list with two or more elements:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'key=a,b                       # Simple sweep: ChoiceSweep(a, b)\nkey="a,b","c,d"               # Elements can be quoted strings, ChoiceSweep("a,b", "c,d")\nkey=[a,b],[c,d]               # Elements can be real lists, ChoiceSweep([a,b], [c,d])\nkey={a:10, b:20},{c:30,d:40}  # And dictionaries: ChoiceSweep({a:10, b:20}, {c:30,d:40})\n')),Object(r.b)("p",null,"More sweeping options are described in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"extended"}),"Extended Grammar page"),"."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You may need to quote your choice sweep in the shell."))),Object(r.b)("h3",{id:"functions"},"Functions"),Object(r.b)("p",null,"Hydra supports several functions in the command line.\nSee the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"extended"}),"Extended Grammar page")," for more information."),Object(r.b)("h2",{id:"working-with-your-shell"},"Working with your shell"),Object(r.b)("p",null,"All shells interprets command line inputs and may change what is passed to the process.\nA good way to determine what the shell is doing to your command is to ",Object(r.b)("inlineCode",{parentName:"p"},"echo")," it."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"# bash output\n$ echo foo_{a:10,b:20} ${HOME} [b,c]*\nfoo_a:10 foo_b:20 /home/omry build_helpers\n$ echo 'foo_{a:10,b:20}' '${HOME}' '[b,c]*'\nfoo_{a:10,b:20} ${HOME} [b,c]*\n")),Object(r.b)("p",null,"If in doubt, quote a command line element with a ",Object(r.b)("strong",{parentName:"p"},"single quote")," (",Object(r.b)("inlineCode",{parentName:"p"},"'"),")."),Object(r.b)("p",null,"If you want to pass quotes to Hydra in a shell quoted string, it's best to pass double quotes."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ echo \'"hello world"\'\n"hello world"\n')),Object(r.b)("p",null,"You can use some shell specific commands to change their behavior, but the cost will be that their behavior will change."),Object(r.b)("h3",{id:"bash"},"Bash"),Object(r.b)("p",null,"You can disable braces expansion, filename generation (globing) and hist expansion. Please note that this will change\nyour shell behavior for the current session."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ set +o braceexpand -o noglob +o histexpand\n$ echo key1={a:10,b:20} key2=${HOME} key=[b]*\nkey1={a:10,b:20} key2=/home/omry key=[b]*\n# does not help with () though:\n$ echo key=choice(a,b,c)\nbash: syntax error near unexpected token '('\n$ echo 'key=choice(a,b,c)'\nkey=choice(a,b,c)\n")),Object(r.b)("h3",{id:"other-shells"},"Other shells"),Object(r.b)("p",null,"Send a PR to add information about your favorite shell here."))}b.isMDXComponent=!0},268:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?i.a.createElement(u,o(o({ref:t},s),{},{components:a})):i.a.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);