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
        { target: '#btnOpenFile', pose: 'point', text: '楽譜を開くのは右上の「開く」からナマ。PDFでも画像でも開けて、複数をまとめて開くと、ファイル名の順に並んで読み込まれナマ。画面へ直接ドロップしても開けナマ。' },
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
        { target: '.guide-add-row', mode: 'tap', pose: 'point', text: '補助線ナマ。「水平線」「垂直線」を押すと、楽譜の上に線が出るナマ。線はドラッグで動かせるので、五線に重ねて傾きの目安にするナマ。試しに押してみるナマ。補助線はあくまで画面上の目安で、書き出したPDFには残らナマ。いらなくなったら、下の「すべて消す」で消せナマ。' },
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
        { target: '#sortGrid', pose: 'point', text: 'ここへPDFを落として、ページを足すこともできナマ。すでにページがある時は、捨てて入れ直すか、前か後ろに足すかを選べナマ。複数をまとめて落とすと、ファイル名の順に、ファイルの境目に区切りを入れてつながりナマ。' },
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
        { target: ['#langBtnJa', '#langBtnEn'], pose: 'point', text: '言語の切り替えナマ。設定の一番上で、日本語と英語を切り替えられナマ。画面の文字が全部その言語になり、次に開いた時もそのままの言語で始まりナマ。' },
        { target: '#cfg_outFormat', mode: 'free', pose: 'point', text: '保存の形式ナマ。「JPEG」は小さく、「PNG」は画質を落とさず残せナマ。傾き補正・並べ替え保存の両方に効きナマ。試しに変えてみるナマ。' },
        { target: '#cfg_jpegQuality', mode: 'free', pose: 'point', text: 'JPEGの品質ナマ。数字が大きいほどきれいに残るけれど、ファイルも大きくなるナマ。試しに動かしてみるナマ。' },
        { target: '#cfg_splitFileName', mode: 'free', pose: 'point', text: '分割保存のファイル名ナマ。{seq}は連番、{name}は区切り名、{file}は元のファイル名に置き換わりナマ。試しに入れてみるナマ。' },
        { target: '#cfg_dirLabel', pose: 'point', text: '保存先フォルダナマ。「フォルダを選択」で決めると、保存したPDFがそのままそのフォルダへ入りナマ。' },
        { target: '#cfg_presetBody', mode: 'free', pose: 'point', text: '区切り名のプリセットナマ。パート名などを1行ずつ書いて、「このアプリに保存」で残せナマ。試しに1行入れてみるナマ。' },
        { target: '#settings-tutorial-btn-cb', mode: 'free', pose: 'point', text: 'この案内ボタン自体の表示もここで切り替えられナマ。要らなくなったら、ここで消せナマ。' },
        { target: '#btnPwaInstall', pose: 'point', text: '「アプリとしてインストール」ナマ。ホーム画面へ置くと、ブラウザの枠なしで素早く開けナマ。' }
      ]
    }
  ],
  en: {
    introTitle: 'How to Use NamaTunePDF',
    introText: "Let's walk through fixing the tilt of sheet-music PDFs and reordering their pages, touching the real screen as we go, nama.",
    chapters: [
    {
      id: 'intro', page: 'correct', title: 'First Steps', desc: 'The layout, and how this guide works', icon: 'wave', since: 1,
      steps: [
        { pose: 'wave', text: 'Hello, hello! It is I, Nama, the living [Nama] creature, nama. I will be your guide for NamaTunePDF, nama. You can stop this guide anytime with the ✕ button, and open it again later from the button at the {{btnPos}}, nama.' },
        { target: '.tabbar', pose: 'point', text: 'The top of the screen has three tabs, nama. Fix tilt in "Deskew", put pages in order in "Reorder", and set the save rules in "Settings", nama.' },
        { target: '#btnOpenFile', pose: 'point', text: 'Open your sheet music from "Open" at the top right, nama. It takes PDFs and images, and when you open several files at once, they load in filename order, nama. You can also drop files straight onto the screen, nama.' },
        { target: '#canvasArea', pose: 'point', text: 'The opened sheet music shows up big here, nama. Turn a page and this view switches with it, nama.' },
        { target: '#nt-btn', pose: 'thumbs_up', text: 'You can reopen this guide anytime from this button at the {{btnPos}}, nama. When a new chapter is added, it gets a red mark, nama.' }
      ]
    },
    {
      id: 'correct', page: 'correct', title: 'Deskew', desc: 'Fix tilt, guides, crop, and save', icon: 'yay', since: 1,
      steps: [
        { pose: 'wave', prepare: 'saveCorrectState', text: 'The Deskew chapter, nama. This is the screen for straightening sheet music that was scanned at a tilt, nama. Open a score first and you can try everything for real, nama. Anything you try in this chapter, tilts and lines alike, is put back when you finish the chapter, nama.' },
        { target: '.zoom-ctrl-compact', mode: 'free', pose: 'point', text: 'First, the view size, nama. Use − and + to zoom in and out, and "Fit" to match the screen, nama. Try pressing them, nama.' },
        { target: '.page-nav', mode: 'free', pose: 'point', text: 'Move between pages here, nama. ◀▶ go back and forth, and typing the number in the middle jumps to that page, nama. Try turning a page, nama.' },
        { target: '#angleSlider', mode: 'free', pose: 'point', text: 'Fix the tilt with this slider, nama. Move it left or right and the score rotates, in fine steps of 0.01°, nama. Try sliding it, nama.' },
        { target: '.grid3', mode: 'free', pose: 'point', text: '−1° and +1° step by a degree, and the 0 in the middle resets the tilt to straight, nama. Try pressing them, nama.' },
        { target: '.angle-row', pose: 'point', text: 'The ↺ and ↻ on both sides rotate by 90°, nama. A score scanned sideways becomes upright in one go, nama.' },
        { target: '.apply-col', pose: 'point', text: '"Apply to all pages" copies the current tilt onto every page at once, nama. Handy when the whole score was scanned at the same tilt, nama. "Reset this page" returns only the current page to 0, nama.' },
        { target: '.guide-add-row', mode: 'tap', pose: 'point', text: 'Guides, nama. Press "Horizontal" or "Vertical" and a line appears over the score, nama. Drag the line to move it, and lay it over the staff lines as a tilt reference, nama. Try pressing one, nama. Guides are only an on-screen reference, and never appear in the exported PDF, nama. When you are done with them, clear them with "Clear all" below, nama.' },
        { target: '#btnCropMode', mode: 'tap', pose: 'point', text: 'Crop, nama. Press "Select area" and you can draw a box on the score, nama. Use it when you want to save with the margins cut off, nama. Try pressing it, nama.' },
        { target: '#btnExportNormal', pose: 'point', prepare: 'restoreCorrectState', text: 'When you are done fixing, save from here, nama. Press "Corrected PDF" to export a PDF with the tilt and crop applied, nama. The format and quality can be chosen on the screen that opens, nama.' },
        { target: '#btnExportSplit', pose: 'point', text: '"Split A3→A4", nama. An A3 score can be saved split into two A4 pages, nama. Handy for scores scanned as a spread, nama.' },
        { target: '#thumbListC', mode: 'tap', pose: 'point', text: 'The page list, nama. Press a thumbnail to jump to that page, nama. Try pressing one, nama.' }
      ]
    },
    {
      id: 'sort', page: 'sort', title: 'Reorder', desc: 'Reorder pages, dividers, and save', icon: 'thinking', since: 1,
      steps: [
        { pose: 'wave', text: 'The Reorder chapter, nama. Swap the order of pages, add dividers, and delete pages you do not need, nama. Open a score first and you can try with real pages, nama. Reordering here does not touch your original file until you save, nama.' },
        { target: '#sortGrid', pose: 'point', text: 'The pages line up here, nama. Drag them to rearrange into any order you like, nama.' },
        { target: '#sortGrid', pose: 'point', text: 'You can also drop PDFs here to add pages, nama. When pages are already here, you choose whether to discard them and start over, or add the new pages before or after, nama. Drop several files at once and they join in filename order, with a divider at each file boundary, nama.' },
        { target: '#btnSortSelectAll', mode: 'tap', pose: 'point', text: '"Select all", nama. Press it and every page is selected; press it again and the selection clears, nama. Try pressing it, nama.' },
        { target: '#btnSortAddDivider', pose: 'point', text: '"Add divider" puts a divider mark here, nama. Dividers become the split points when you save pages in separate files later, nama. To add many at once, use "Add in bulk" next to it, nama.' },
        { target: ['#btnSortRotL', '#btnSortRotR'], pose: 'point', text: 'Selected pages can be rotated 90° here, nama. Handy when only the sideways pages need to stand upright, nama.' },
        { target: ['#btnSortUndo', '#btnSortRedo'], pose: 'point', text: '↩ and ↪ are undo and redo, nama. If you misplace or delete a page, you can step back from here, nama.' },
        { target: ['#btnSortDelete', '#btnInsertBlank'], pose: 'point', text: 'Selected pages can be removed with "Delete", and "Insert blank" adds a white page, nama.' },
        { target: '#btnSortExport', pose: 'point', text: '"Save in this order", nama. Exports a new PDF in exactly the order you arranged, nama.' },
        { target: '#btnSortSplit', pose: 'point', text: '"Save split by dividers", nama. Saves the pages split at the dividers, handy for making one PDF per part, nama.' },
        { target: '#btnReturnToCorrect', pose: 'point', text: '"Send back to Deskew", nama. Sends the arranged order back to the Deskew tab, so you can keep fixing tilts from there, nama.' }
      ]
    },
    {
      id: 'settings', page: 'settings', title: 'Settings', desc: 'Format, quality, save folder, and presets', icon: 'yay', since: 1, keepChanges: true,
      steps: [
        { pose: 'wave', text: 'The Settings chapter, nama. The save rules are decided here, nama. Changes you make in this chapter stay as they are, nama.' },
        { target: ['#langBtnJa', '#langBtnEn'], pose: 'point', text: 'The language switch, nama. At the very top of Settings, you can switch between Japanese and English, nama. Every label on the screen changes to that language, and the app starts in the same language next time, nama.' },
        { target: '#cfg_outFormat', mode: 'free', pose: 'point', text: 'The save format, nama. "JPEG" stays small, and "PNG" keeps the quality untouched, nama. It applies to both Deskew and Reorder saves, nama. Try changing it, nama.' },
        { target: '#cfg_jpegQuality', mode: 'free', pose: 'point', text: 'JPEG quality, nama. A bigger number looks cleaner, but the file grows too, nama. Try sliding it, nama.' },
        { target: '#cfg_splitFileName', mode: 'free', pose: 'point', text: 'The file name for split saves, nama. {seq} becomes the number, {name} the divider name, and {file} the original file name, nama. Try typing in it, nama.' },
        { target: '#cfg_dirLabel', pose: 'point', text: 'The save folder, nama. Decide it with "Choose folder" and saved PDFs go straight into that folder, nama.' },
        { target: '#cfg_presetBody', mode: 'free', pose: 'point', text: 'Divider-name presets, nama. Write part names one per line, and keep them with "Save in this app", nama. Try typing a line, nama.' },
        { target: '#settings-tutorial-btn-cb', mode: 'free', pose: 'point', text: 'The guide button itself can be shown or hidden here too, nama. When you no longer need it, turn it off here, nama.' },
        { target: '#btnPwaInstall', pose: 'point', text: '"Install as an app", nama. Put it on the home screen and it opens quickly, without the browser frame, nama.' }
      ]
    }
    ]
  }

};
