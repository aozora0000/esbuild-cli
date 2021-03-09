const { argv } = require('process')
const { build } = require('esbuild')
const path = require('path')
// optionsの定義
const options = {
  // 以下のdefineプロパティを設定しない場合Reactのプロジェクトの実行時にエラーが出ます
  define: { 'process.env.NODE_ENV': process.env.NODE_ENV },
  entryPoints: [path.resolve(__dirname, 'src/app.ts')],
  minify: argv[2] === 'production',
  bundle: true,
  target: 'node',
  platform: 'node',
  outdir: path.resolve(__dirname, 'dist'),
  tsconfig: path.resolve(__dirname, 'tsconfig.json')
}
// Buildの実行
build(options).catch(err => {
  process.stderr.write(err.stderr)
  process.exit(1)
})
