# ESLint rules example


## Configuration

ESLintのオプションの設定は以下２つのいずれかで。  

- JavaScriptのコメント
- `.eslintrc`ファイルか`package.json`内の`eslintConfig`、もしくはCLIで設定ファイルを指定


## Configurable options

- __Enviroments__ : どの環境で実行する想定か
- __Globals__ : スクリプト実行時に追加するグローバル変数
- __Rules__ : 有効にするルールとそのエラーレベル


## Language options

JavaScriptの言語オプションを定義できる。デフォルトでは、ES5の構文のみサポート。設定でES6や[JSX](http://facebook.github.io/jsx/)のサポートを追加可能。  
`.eslintrc`で`ecmaFeatures`プロパティを使って設定する。設定できるオプションは以下。  
全てのオプションがデフォルト`false`。  

- `arrowFunctions`: アロー関数を有効にする
- `binaryLiterals`: 2進数リテラルを有効にする
- `blockBindings`: `let`と`const`を有効にする
- `classes`: クラスを有効にする
- `defaultParams`: デフォルトパラメータを有効にする
- `destructuring`: 分解代入を有効にする
- `forOf`: `for of`ループを有効にする
- `generators`: `generators`を有効にする
- `modules`: モジュールとグローバルのstrictモードを有効にする
- `objectLiteralComputedProperties`: 計算されたプロパティ名を有効にする
- `objectLiteralDuplicateProperties`: strictモードでの重複したプロパティ名を有効にする
- `objectLiteralShorthandMethods`: オブジェクトリテラルのメソッドのショートハンド記法を有効にする
- `objectLiteralShorthandProperties`: オブジェクトリテラルのプロパティのショートハンド記法を有効にする
- `octalLiterals`: 8進数リテラルを有効にする
- `regexUFlag`: 正規表現での`u`フラグを有効にする
- `regexYFlag`: 正規表現での`y`フラグを有効にする
- `restParams`: 可変長引数を有効にする
- `spread`: [spread operator](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator)を有効にする
- `superInFunctions`: 
- `templateStrings`: テンプレート文字列を有効にする
- `unicodeCodePointEscapes`: コードポイントのエスケープを有効にする
- `globalReturn`: グローバルスコープでの`return`を有効にする
- `jsx`: [JSX](http://facebook.github.io/jsx/)を有効にする


## Parser

デフォルトのパーサーは[Espree](https://github.com/eslint/espree)。以下の要件を満たすパーサーであればEspreeの代わりに利用可能。  

1. ローカルにインストールできるnpm
2. [Esprima](http://esprima.org/)と互換性があるインターフェースを持ってる(`parse`メソッドが必要)
3. Esprimaと互換性があるASTとトークンオブジェクトを生成する

パーサーに別の`npm`を利用するのであれば、`.eslintrc`で`parser`オプションを宣言する。  
ESLintに適合するパーサーは以下。  

- [Esprima](http://esprima.org/)
- [Esprima-FB](https://www.npmjs.com/package/esprima-fb)
- [Babel-ESLint](https://www.npmjs.com/package/babel-eslint)

カスタムパーサーを使う場合でも、ES5に無いものは`ecmaFeatures`の設定が必須。  


## Enviroments

定義済みのグローバル変数を設定するのとデフォルトで有効/無効にするルールを決める。使用できるenviromentsは以下。  

- `browser`: ブラウザのグローバル変数
- `node`: Node.jsのグローバル変数とNode.jsに特化したルール
- `worker`: workersのグローバル変数
- `amd`: `amd`の仕様に従って`require()`と`define()`をグローバル変数として定義
- `mocha`: すべてのMochaのテスト用グローバル変数
- `jasmine`: すべてのJasmine(v1.3とv2.0)のテスト用グローバル変数
- `phantomjs`: Phantomjsのグローバル変数
- `jquery`: jqueryのグローバル変数
- `prototypejs`: Prototype.jsのグローバル変数
- `shelljs`: [ShellJS](http://documentup.com/arturadib/shelljs)のグローバル変数
- `meteor`: [meteor](https://www.meteor.com/)のグローバル変数
- `mongo`: [mongo](https://github.com/mongodb/mongo)のグローバル変数
- `applescript`: [applescript](https://developer.apple.com/library/mac/documentation/AppleScript/Conceptual/AppleScriptX/Concepts/ScriptingOnOSX.html#//apple_ref/doc/uid/20000032-BABEBGCF)のグローバル変数
- `es6`: モジュールを除いたすべてのES6の機能を有効にする

JavaScriptのコメントでも設定ファイルの中でも、CLIの`env`オプションでも宣言可能。  

JavaScriptのコメントなら以下のようにする。  
```js
/* eslint-env node, mocha */
```

設定ファイルに記述するなら、`env`で。
```
{
  "env": {
    "browser": true,
    "node": true
  }
}
```

`package.json`に記述するなら、
```json
{
  ...,
  "eslintConfig": {
    "env": {
      "browser": true,
      "node": true
    }
  }
}
```


## Globals

ESLintはデフォルトで、同じファイルで定義されてないけどアクセスしている変数に対して警告を出す。  
`globals`で許可するグローバル変数を定義できる。  

JavaScriptのコメントなら、以下で。  
```js
/* global foo, bar */
```
読み取り専用なら、`false`で。  
```js
/* global foo:false, bar:false */
```

設定ファイルに記述するのであれば、`globals`キーで定義する。上書き可能なら`true`で。読み取り専用なら`false`で。  
```
{
  "globals": {
    "foo": true,
    "bar": false
  }
}
```


## Plugin

サードパーティのプラグインも使えるようになってる。npmでインストールしないといけない。  
設定ファイルに記述する場合、`plugins`キーを使う。`eslint-plugin-`プレフィックスは省略可能。  
```
{
  "plugins": [
    "plugin-name",
    "eslint-plugin-name"
  ]
}
```


## Rule

ESLintは大量のルールを持っていて、それはデフォルトで無効だったり、有効だったりする。どのルールを利用して、どのルールを利用しないかは、JavaScriptのコメントか設定ファイルで定義すればいい。  
ルールの有効無効を切り替えるには、ルールのIDに対して0〜2の値を設定する。  

- __0__: 無効にする
- __1__: 警告にする
- __2__: エラーにする

JavaScriptのコメントで書くなら、以下のようにする。  
```js
/* eslint: quotes: [2, "double"], curly: 1 */
```

設定ファイルの中で定義するなら、以下のようにする。  
```
{
  "rules": {
    "quotes": [2, "double"]
    "curly": 1
  }
}
```


## Shared Settings

設定ファイルに共有設定を追加することができる。設定ファイルに`settings`オブジェクトを追加すれば、全てのルールで共有される。  
カスタムのルールを追加した時などに有用らしい。  

```
{
  "settings": {
    "sharedData": "hoge"
  }
}
```

## Configuration File

設定ファイルを使う手段は２つ。いずれもデフォルトの設定を上書きする。  

- CLIで`-c`オプションをつけて設定ファイルを指定
- `.eslintrc`か`package.json`


## Configuration Hierarcy

優先順位は以下の通り。  

1. JavaScriptのコメント
  1. `/* eslint-disable */`、`/* eslint-enable */`
  2. `/* global */`
  3. `/* eslint */`
  4. `/* eslint-env */`
2. CLIオプション
  1. `--global`
  2. `--rule`
  3. `--env`
  4. `-c`、`--config`
3. プロジェクトの設定
  1. Lint対象のファイルと同じディレクトリの`.eslintrc`
  2. Lint対象のファイルと同じディレクトリの`package.json`
  3. 親のディレクトリの`.eslintrc`、`package.json`を辿る
4. デフォルトの設定
  1. `enviroments.json`
  2. `eslint.json`


## Extending Configuration Files

`extends`で設定ファイルの拡張ができる。


## Comments

`package.json`以外の設定ファイルはコメントが書ける。  


## Ignoring File/Dir

プロジェクトのルートディレクトリに`.eslintignore`をつくれば、無視するファイル、ディレクトリを決められる。  
Lint対象外のパスのグロブパターンを1行毎に記述する。グロブパターンに使われているのは[minimatch](https://github.com/isaacs/minimatch)。  

- `#`始まりの行はコメント扱い
- `!`始まりの行は、その前に無視リストに入れたパターンを否定するパターン
- `{}`は複数のファイルパターンを参照する

`node_modules/**`は常に無視される。  


---

## Links

- [Documentation - ESLint - Pluggable JavaScript linter](http://eslint.org/docs/user-guide/configuring)

