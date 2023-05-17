const tslint_json = {
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* 启用增加编译 */
    "target": "es5",                          /* target用于指定编译之后的版本目标 version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT' */
    "module": "commonjs",                     /* 用来制定要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext' */
    "lib": [
      "es6",
      "dom"
    ],                             /* lib用于指定要求包含在编译中的库文件，如果要使用一些ES6的新语法，需要引入ES6这个库，或者也可以写ES2015 */
    // "allowJs": true,                       /* allowJs设置的值为true或false，用来指定是否允许编译JS文件，默认是false，即不编译JS文件 */
    // "checkJs": true,                       /* checkJs的值为true或false，用来指定是否检查和报告JS文件中的错误，默认是false */
    // "jsx": "preserve",                     /* 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react' */
    // "declaration": true,                   /* declaration的值为true或false，用来指定是否在编译的时候生成相应的'.d.ts'声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和声明文件。但是declaration和allowJs不能同时设为true */
    // "declarationMap": true,                /* 值为true或false，指定是否为声明文件'.d.ts'生成map文件 */
    // "sourceMap": true,                     /* sourceMap的值为true或false，用来指定编译时是否生成'.map'文件 */
    // "outFile": "./",                       /* outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名，比如甚至为'./dist/main.js'，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置 */
    // "outDir": "./",                        /* outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹 */
    // "rootDir": "./",                       /* 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译 */
    // "composite": true,                     /* 是否编译构建引用项目 */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* removeComments值为true或false，用于指定是否将编译后的文件中的注释删掉，设为true的话即删掉注释，默认为false */
    // "noEmit": true,                        /* 不生成编译文件，这个一般很少用了 */
    // "importHelpers": true,                 /* importHelpers的值为true或false，指定是否引入'tslib'里的辅助工具函数，默认为false */
    // "downlevelIteration": true,            /* 当target为'ES5'或'ES3'时，为'for-of'、'spread'和'destructuring'中的迭代器提供完全支持 */
    // "isolatedModules": true,               /* isolatedModules的值为true或false，指定是否将每个文件作为单独的模块，默认为true，他不可以和declaration同时设定 */

    /* Strict Type-Checking Options */
    // "strict": true,                           /* strict的值为true或false，用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个严格类型检查，默认为false */
    // "noImplicitAny": true,                 /* noImplicitAny的值为true或false，如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为any类型，如果noImplicitAny设为true，则如果没有设置明确的类型会报错，默认为false */
    "strictNullChecks": true,              /* strictNullChecks的值为true或false，当设为true时，null和undefined值不能赋值给非这两种类型的值，别的类型的值也不能赋给他们，除了any类型，还有个例外就是undefined可以赋值 */
    // "strictFunctionTypes": true,           /* strictFunctionTypes的值为true或false，用来指定是否使用函数参数双向协变监查 */
    // "strictBindCallApply": true,           /* strictBindCallApply的值为true或false，设为true后会对bind、call和apply绑定的方法的参数的检测是严格检测的 */
    // "strictPropertyInitialization": true,  /* strictPropertyInitialization的值为true或false，设为true后会检查类的undefined属性是否已经在构造函数里初始化，如果要开启这项，需要同时开启strictNullCheck，默认为false */
    // "noImplicitThis": true,                /* 当this表达式的值为any类型的时候，生成一个错误 */
    // "alwaysStrict": true,                  /* alwaysStrict的值为true或false，指定始终以严格模式检查每个模块，并且在编译之后的JS文件中加入'use strict'字符串，用来告诉浏览器该JS为严格模式 */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* noUnusedLocals的值为true或false，用于检查是否有定义了但是没有使用的变量，对于这个一点的检测，使用ESLint可以在你书写代码的时候做提示，你可以配合使用。它的默认值为false */
    // "noUnusedParameters": true,            /* noUnusedParameters的值为true或false，用于检查是否又在函数体中没有使用的参数，这个也可以配合ESLint来做检查。他的默认为false */
    // "noImplicitReturns": true,             /* noImplicitReturns的值为true或false，用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示，默认为false */
    // "noFallthroughCasesInSwitch": true,    /* noFallthroughCasesInSwitch的值为true或false，用于检查switch中是否有case没有使用break跳出switch，默认为false */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* moduleResolution用于选择模块解析策略: 'node' (Node.js) or 'classic' (TypeScript pre-1.6)两种类型 */
    // "baseUrl": "./",                       /* baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响 */
    // "paths": {},                           /* paths用于设置模块名到基于baseUrl的路径映射 */
    // "rootDirs": [],                        /* rootDirs可以指定一个路径列表，在构建时编译器会将这个路径列表中的路径中的内容都放到一个文件夹中 */
    // "typeRoots": [],                       /* typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载。 */
    // "types": [],                           /* types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来 */
    // "allowSyntheticDefaultImports": true,  /* allowSyntheticDefaultImports的值为true或false，用来指定允许从没有默认导出的模块中默认导入。 */
    "esModuleInterop": true,                   /* 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性 */
    // "preserveSymlinks": true,              /* 不把符合链接解析为其真实路径，具体可以了解下webpack和nodejs的symlink相关知识 */
    // "allowUmdGlobalAccess": true,          /* 允许从模块访问UMD全局值 */

    /* Source Map Options */
    // "sourceRoot": "",                      /* sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件位置，这个值会被写进.map文件里 */
    // "mapRoot": "",                         /* mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性 */
    // "inlineSourceMap": true,               /* inlineSourceMap值为true或false，指定是否将map文件的内容和js文件编译在一个同一个js文件中，如果设为true，则map的内容会以 //# sourceMappingURL=然后接base64字符串的形式插入在js文件底部 */
    // "inlineSources": true,                 /* inlineSources的值为true或false，用于指定是否进一步将.ts文件的内容也包含到输出文件中 */

    /* Experimental Options */
    "experimentalDecorators": true,        /* experimentalDecorators的值为true或false，用于指定是否启用实验性的装饰器特效 */
    "emitDecoratorMetadata": true,         /* emitDecoratorMetadata的值为true或false，用于指定是否为装饰器提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库 */
  },
  "files": [],                            // files可以配置一个数组列表，里面包含指定文件的相对或绝对路径，编译器在编译的时候只会编译包含在files中列出的文件。如果不知道，则取决于有没有设置include选项，如果没有include选项，则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件，而不是某个文件夹，而且不能使用 * ? **/ 等通配符
  "include": [],                          /* include也可以指定要编译的路径列表，但是和files的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符，比如'./src'即表示要编译src文件夹下的所有文件以及子文件夹的文件 */
  "exclude": [],                          /* exclude表示要排除的、不编译的文件，他也可以指定一个列表，规则和include一样，可以是文件可以是文件夹，可以是相对路径或绝对路径，可以使用通配符 */
  "extends": [],                          /* extends可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件的配置会覆盖当前文件定义的配置。TS在3.2版本开始，支持继承一个来自Node.js包的tsconfig.json配置文件 */
  "compileOnSave": true,                  /* compileOnSave的值是true或false，如果设为true，在我们编辑了项目中文件保存的时候，编辑器会根据tsconfig.json的配置重新生成文件，不过这个要编辑器支持 */ 
  // "references": []                     /* 一个对象数组，指定要引用的项目 */
}
