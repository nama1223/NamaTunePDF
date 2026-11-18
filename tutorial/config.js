window.NAMA_TUTORIAL_CONFIG = {
  appId: 'namatunepdf',
  assetBase: 'tutorial/img/',
  buttonImage: 'tutorial/img/tutorial-button.png',
  bridge: 'NamaTunePDFTutorialBridge',
  introTitle: 'NamaTunePDFの使い方',
  introText: '楽譜のPDFの傾き補正と並べ替えの使い方を、実際の画面を触りながら案内しナマ。',
  chapters: [
    {
      id: 'intro', page: 'correct', title: 'はじめに', desc: '画面の構成と、この案内の使い方', icon: 'wave', since: 1,
      steps: [
        { pose: 'wave', text: 'やあやあ！我こそは生物[ナマモノ] ナマ。NamaTunePDFの案内役を仰せつかってナマ。この案内はいつでも✕ボタンでやめられて、やめた後も{{btnPos}}のボタンから見直せナマ。' },
        { target: '.tabbar', pose: 'point', text: '画面の上は3つのタブに分かれてナマ。「傾き補正」で傾きを直して、「並べ替え」で順番を整えて、「設定」で保存の決まりを決めるナマ。' },
        { target: '#btnOpenFile', pose: 'point', text: '楽譜を開くのは右上の「開く」からナマ。PDFでも画像でも開けて、複数まとめても開けナマ。画面へ直接ドロップしても開けナマ。' },
        { target: '#canvasArea', pose: 'point', text: '開いた楽譜はここに大きく出るナマ。ページをめくると、ここが切り替わりナマ。' },
        { target: '#nt-btn', pose: 'thumbs_up', text: 'この案内は、{{btnPos}}のこのボタンからいつでも開き直せナマ。新しい章が増えると赤い印が付きナマ。' }
      ]
    },
    {
      id: 'correct', page: 'correct', title: '傾き補正', desc: '傾きを直す・補助線・クロップ・保存', icon: 'yay', since: 1,
      steps: [
        { pose: 'wave', prepare: 'saveCorrectState', text: '傾き補正の章ナマ。スキャンで傾いた楽譜を、まっすぐに直す画面ナマ。楽譜を開いてから進むと、実際に試せナマ。章を最後まで進めれば、試した傾きや線は元に戻しナマ。' },
        { target: '.zoom-ctrl-compact', mode: 'free', pose: 'point', text: 'まずは表示の大きさナマ。−と＋で拡げたり縮めたり、「合わせる」で画面にぴったりにできナマ。試しに押してみるナマ。' },
        { target: '.page-nav', mode: 'free', pose: 'point', text: 'ページの移動はここナマ。◀▶で前後へ、真ん中の数字を入れるとそのページへ飛びナマ。試しにめくってみるナマ。' },
        { target: '#angleSlider', mode: 'free', pose: 'point', text: '傾きの直しはこのスライダーナマ。左右に動かすと楽譜が回って、0.01°刻みで細かく合わせられナマ。試しに動かしてみるナマ。' },
        { target: '.grid3', mode: 'free', pose: 'point', text: '−1°と＋1°で1°ずつ、真ん中の0で傾きをまっすぐにリセットできナマ。試しに押してみるナマ。' },
        { target: '.angle-row', pose: 'point', text: '両脇の↺と↻は90°回転ナマ。横向きにスキャンした楽譜を、一気に縦向きに直せナマ。' },
        { target: '.apply-col', pose: 'point', text: '「全ページに同じ角度」で、今の傾きを全部のページへ一気に写せナマ。同じ傾きでスキャンした時に便利ナマ。「このページをリセット」は、今のページだけ傾きを0に戻しナマ。' },
        { target: '.guide-add-row', mode: 'tap', pose: 'point', text: '補助線ナマ。「水平線」「垂直線」を押すと、楽譜の上に線が出るナマ。線はドラッグで動かせるので、五線に重ねて傾きの目安にするナマ。試しに押してみるナマ。いらなくなったら、下の「すべて消す」で消せナマ。' },
        { target: '#btnCropMode', mode: 'tap', pose: 'point', text: 'クロップナマ。「範囲選択」を押すと、楽譜の上で範囲を囲めるようになりナマ。余白を切り落として保存したい時に使うナマ。試しに押してみるナマ。' },
        { target: '#btnExportNormal', pose: 'point', prepare: 'restoreCorrectState', text: '直し終わったら、ここから保存ナマ。「補正済みPDF」を押すと、傾きや範囲を反映したPDFを書き出せナマ。形式や画質は、開いた画面で選べナマ。' },
        { target: '#btnExportSplit', pose: 'point', text: '「A3→A4分割保存」ナマ。A3の楽譜を、A4を2枚に分けて保存できナマ。見開きでスキャンした時に便利ナマ。' },
        { target: '#thumbListC', mode: 'tap', pose: 'point', text: 'ページ一覧ナマ。縮小版を押すと、そのページへ飛べナマ。試しに押してみるナマ。' }
      ]
    },
    {
      id: 'sort', page: 'sort', title: '並べ替え', desc: '順番を整える・区切り・保存', icon: 'thinking', since: 1,
      steps: [
        { pose: 'wave', text: '並べ替えの章ナマ。ページの順番を入れ替えたり、区切りを入れたり、要らないページを消したりできナマ。楽譜を開いてから進むと、実際のページで試せナマ。ここでの並べ替えは、保存するまで元のファイルには反映されないナマ。' },
        { target: '#sortGrid', pose: 'point', text: 'ページはここに並ぶナマ。ドラッグで掴んで、好きな順番へ並べ替えられナマ。' },
        { target: '#btnSortSelectAll', mode: 'tap', pose: 'point', text: '「全選択」ナマ。押すと全部のページが選ばれて、もう一度押すと選択が外れナマ。試しに押してみるナマ。' },
        { target: '#btnSortAddDivider', pose: 'point', text: '「区切りを追加」で、ここに区切りの目印が入りナマ。区切りは、後で分けて保存する時の境目になりナマ。まとめて追加したい時は、横の「まとめて追加」からナマ。' },
        { target: ['#btnSortRotL', '#btnSortRotR'], pose: 'point', text: '選んだページは、ここで90°回せナマ。横向きのページだけ縦向きに直したい時に便利ナマ。' },
        { target: ['#btnSortUndo', '#btnSortRedo'], pose: 'point', text: '↩と↪は元に戻すとやり直しナマ。並べ替えや削除を間違えても、ここから戻せナマ。' },
        { target: ['#btnSortDelete', '#btnInsertBlank'], pose: 'point', text: '選んだページは「削除」で消せて、「白紙挿入」で白いページを足せナマ。' },
        { target: '#btnSortExport', pose: 'point', text: '「この順で保存」ナマ。並べた順番のまま、新しいPDFとして書き出せナマ。' },
        { target: '#btnSortSplit', pose: 'point', text: '「区切りで分割保存」ナマ。区切りごとに分けて保存できて、パートごとのPDFに分けたい時に便利ナマ。' },
        { target: '#btnReturnToCorrect', pose: 'point', text: '「補正タブに返す」ナマ。並べた順番を補正タブへ戻して、傾きの直しへ続けられナマ。' }
      ]
    },
    {
      id: 'settings', page: 'settings', title: '設定', desc: '保存の形式・品質・保存先・プリセット', icon: 'yay', since: 1, keepChanges: true,
      steps: [
        { pose: 'wave', text: '設定の章ナマ。保存の決まりをここで決めるナマ。この章で変えた内容は、そのまま残りナマ。' },
        { target: '#cfg_outFormat', mode: 'free', pose: 'point', text: '保存の形式ナマ。「JPEG」は小さく、「PNG」は画質を落とさず残せナマ。傾き補正・並べ替え保存の両方に効きナマ。試しに変えてみるナマ。' },
        { target: '#cfg_jpegQuality', mode: 'free', pose: 'point', text: 'JPEGの品質ナマ。数字が大きいほどきれいに残るけれど、ファイルも大きくなるナマ。試しに動かしてみるナマ。' },
        { target: '#cfg_splitFileName', mode: 'free', pose: 'point', text: '分割保存のファイル名ナマ。{seq}は連番、{name}は区切り名、{file}は元のファイル名に置き換わりナマ。試しに入れてみるナマ。' },
        { target: '#cfg_dirLabel', pose: 'point', text: '保存先フォルダナマ。「フォルダを選択」で決めると、保存したPDFがそのままそのフォルダへ入りナマ。' },
        { target: '#cfg_presetBody', mode: 'free', pose: 'point', text: '区切り名のプリセットナマ。パート名などを1行ずつ書いて、「このアプリに保存」で残せナマ。試しに1行入れてみるナマ。' },
        { target: '#settings-tutorial-btn-cb', mode: 'free', pose: 'point', text: 'この案内ボタン自体の表示もここで切り替えられナマ。要らなくなったら、ここで消せナマ。' },
        { target: '#btnPwaInstall', pose: 'point', text: '「アプリとしてインストール」ナマ。ホーム画面へ置くと、ブラウザの枠なしで素早く開けナマ。' }
      ]
    }
  ]
};
