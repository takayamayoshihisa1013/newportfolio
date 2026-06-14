export type workDescription = {
    pageTitle: string;
    imgs?: string[];
    mov?: string[];
    alt: string;
    description: string;
}

export type workData = {
    id: number;
    title: string;
    img: string;
    alt: string;
    date: string;
    frontLang?: readonly string[];
    backLang?: readonly string[];
    otherLang?: readonly string[];
    explain: string;
    description: workDescription[];
}

export const worksData: workData[] = [
    {
        id: 1,
        title: "全国天気now",
        img: "/image/work/work1.png",
        alt: "全国天気now",
        date: "2022-06-01",
        frontLang: ["HTML", "CSS", "JavaScript"],
        explain: "全国の天気情報をリアルタイムで確認できるアプリケーションです。",
        description: [
            {
                pageTitle: "ホーム画面",
                imgs: ["/image/work/work1.png"],
                alt: "ホーム画面",
                description: "初めて制作した作品です。ホーム画面では、全国の主要都市の現在の天気情報が一覧で表示されます。ユーザーは都市名をクリックして、詳細な天気情報を見ることができます。"
            },
        ]
    },
    {
        id: 2,
        title: "洋服のECサイト",
        img: "/image/work/work2.png",
        alt: "洋服のECサイト",
        date: "2024-03-01",
        frontLang: ["HTML", "CSS", "JavaScript"],
        backLang: ["Python", "Flask", "MySQL"],
        explain: "ユーザーが洋服を購入できるECサイトです。商品検索、商品出品、カート機能、購入（実際の決済は行いません）、サイト管理などの機能を実装しています。",
        description: [
            {
                pageTitle: "TOPページ",
                imgs: ["/image/work/work27.png"],
                alt: "TOPページ",
                description: "TOPページでは、商品検索機能や人気商品のスライドショー（サイト内で購入回数が多い順）が表示されます。また、ログイン後は出品ページやカートページなどに飛ぶこともできます。各商品をクリックすると、商品詳細ページに移動します。"
            },
            {
                pageTitle: "商品一覧ページ",
                imgs: ["/image/work/work20.png"],
                alt: "商品一覧ページ",
                description: "商品一覧ページでは、商品を検索することが可能で、価格や人気順でソートできます。各商品をクリックすると、詳細ページに移動します。"
            },
            {
                pageTitle: "商品ページ",
                imgs: ["/image/work/work21.png", "/image/work/work22.png"],
                alt: "商品ページ",
                description: "商品ページでは、選択した洋服の詳細情報が表示されます。ユーザーはサイズや色を選択し、カートに追加できます。"
            },
            {
                pageTitle: "カートページ",
                imgs: ["/image/work/work23.png"],
                alt: "カートページ",
                description: "カートページでは、選択した洋服が表示され、数量の変更や削除が可能です。購入手続きに進むこともできます。"
            },
            {
                pageTitle: "売上管理ページ",
                imgs: ["/image/work/work26.png"],
                alt: "売上管理ページ",
                description: "売上管理ページでは、ユーザーが出品した商品の管理や売上を確認できます。"
            },
            {
                pageTitle: "管理者ページ",
                imgs: ["/image/work/work24.png", "/image/work/work25.png"],
                alt: "管理者ページ",
                description: "管理者ページでは、アクセス数や売上データの確認、お問い合わせの対応、ユーザーや商品の管理、トップページのイベントバナー更新が行えます。また、不適切な商品やユーザーの削除も可能です。"
            },
            
        ]
    },
    {
        id: 3,
        title: "キーボードアプリ",
        img: "/image/work/work3.png",
        alt: "キーボードアプリ",
        date: "2024-07-10",
        backLang: ["Python", "Tkinter", "SQLite"],
        explain: "U-22プログラミングコンテストに出展した作品です。クリック操作と音声入力による検索が可能な、子供や高齢者向けのキーボードアプリケーションです。ローマ字入力がわからない方々でも直感的に操作ができるように設計しました。",
        description: [
            {
                pageTitle: "メイン画面",
                imgs: ["/image/work/work34.png", "/image/work/work30.png", "/image/work/work31.png", "/image/work/work32.png"],
                alt: "メイン画面",
                description: "メイン画面では、大きな文字のボタンが表示され、各ボタンを押すことでその文字が入力され、検索を行うことができます。画面下部のボタンから平仮名やカタカナ、記号、英字への切り替えが可能です。"
            },
            {
                pageTitle: "メイン画面（音声入力画面）",
                imgs: ["/image/work/work33.png"],
                alt: "メイン画面（音声入力画面）",
                description: "検索ボタンの横にある音声ボタンを押すと、音声入力モードに切り替わります。マイクに向かって話しかけると、その音声がテキストに変換され、検索が実行されます。"
            },
            {
                pageTitle: "文字の場所変更画面",
                imgs: ["/image/work/work35.png"],
                alt: "文字の場所変更画面",
                description: "ボタンの場所を自分で押しやすい位置に自由に変更できる画面です。"
            },
        ]
    },
    {
        id: 4,
        title: "クッションのECサイト",
        img: "/image/work/work4.png",
        alt: "クッションのECサイト",
        date: "2024-08-05",
        frontLang: ["HTML", "CSS", "JavaScript"],
        backLang: ["Python", "Django", "MySQL"],
        explain: "Djangoを使って作ったクッションのECサイトです。ユーザーがクッションを閲覧、購入できる機能を備えています（実際の決済は行いません）。",
        description: [
            {
                pageTitle: "Topページ",
                imgs: ["/image/work/work47.png", "/image/work/work40.png", "/image/work/work43.png", "/image/work/work44.png"],
                alt: "Topページ",
                description: "Topページでは、新着順で商品が表示されています。各商品をクリックすると、詳細ページに移動します。また、ログイン後はカートページにアクセスでき、商品の購入手続きを行えるようになります。"
            },
            {
                pageTitle: "商品一覧ページ",
                imgs: ["/image/work/work41.png"],
                alt: "商品一覧ページ",
                description: "商品一覧ページでは、商品を検索することが可能です。また、ユーザーは価格や人気順でのソートにも対応しています。各商品をクリックすると、詳細ページに移動します。"
            },
            {
                pageTitle: "商品ページ",
                imgs: ["/image/work/work42.png"],
                alt: "商品ページ",
                description: "商品ページでは、選択したクッションの詳細情報が表示されます。ユーザーはサイズや色を選択し、カートに追加できます。"
            },
            {
                pageTitle: "カートページ",
                imgs: ["/image/work/work45.png"],
                alt: "カートページ",
                description: "カートページでは、選択したクッションが表示され、数量の変更や削除が可能です。購入手続きに進むこともできます。"
            },
            {
                pageTitle: "購入履歴ページ",
                imgs: ["/image/work/work46.png"],
                alt: "購入履歴ページ",
                description: "購入履歴ページでは、ユーザーが過去に購入したクッションの履歴を確認できます。"
            },
        ]
    },
    {
        id: 5,
        title: "SNSサイト「Emodama」",
        img: "/image/work/work5.png",
        alt: "SNSサイトEmodama",
        date: "2025-02-20",
        frontLang: ["HTML", "CSS", "JavaScript", "React"],
        backLang: ["Python", "Flask", "MySQL"],
        explain: "就職作品プレゼンテーションで制作した作品です。感情を共有することに特化したSNSサイトで、ユーザーは感情に基づいた投稿、コメント、いいねなどを行うことができます。発表当時は実際に公開していましたが、現在はサーバーを停止しています。HAL東京、HAL名古屋、HAL大阪の3校合同の就職作品学内コンペで銀賞を取ることができ、さらにHAL東京の優秀作品に選ばれました。",
        description: [
            {
                pageTitle: "作品紹介動画",
                mov: ["https://drive.google.com/file/d/1SjHGtjrYkx9MamJmv0tm6NdNuZqvFvOb/preview?usp=drive_link"],
                alt: "作品紹介動画",
                description: "就職作品プレゼンテーションで実際に使った作品紹介動画です。"
            },
            {
                pageTitle: "使用技術",
                imgs: ["/image/work/work511.png"],
                alt: "使用技術",
                description: "フロントエンドにはReact、バックエンドにはFlask。サーバーにはAzureを採用し、データベースにはMySQL、画像などのデータはAzure storageに保存しています。"
            },
            {
                pageTitle: "タイムラインページ",
                imgs: ["/image/work/work50.png", "/image/work/work51.png"],
                alt: "タイムラインページ",
                description: "タイムラインページでは、ユーザーの感情に基づいた投稿が表示されます。ユーザーは投稿にコメントやいいねを付けることができます。また、いいねも感情に応じて選択できます。"
            },
            {
                pageTitle: "投稿画面",
                imgs: ["/image/work/work52.png"],
                alt: "投稿画面",
                description: "投稿画面では、ユーザーが感情に基づいた投稿を作成できます。"
            },
            {
                pageTitle: "プロフィールページ（自分）",
                imgs: ["/image/work/work53.png"],
                alt: "プロフィールページ（自分）",
                description: "プロフィールページ（自分）では、プロフィール情報やフォロー・フォロワー数、自分の投稿が表示されます。歯車のボタンからプロフィール変更画面に移動できます。"
            },
            {
                pageTitle: "プロフィール変更画面",
                imgs: ["/image/work/work54.png"],
                alt: "プロフィール変更画面",
                description: "プロフィール変更画面では、ユーザーが自分のプロフィール情報を編集できます。ユーザー名や自己紹介文、アイコンの変更が可能です。"
            },
            {
                pageTitle: "プロフィールページ（自分以外のユーザー）",
                imgs: ["/image/work/work55.png"],
                alt: "プロフィールページ（自分以外のユーザー）",
                description: "プロフィールページ（自分以外のユーザー）では、他のユーザーのプロフィール情報やそのユーザーの投稿、フォロー・フォロワー数を閲覧できます。また、フォロー・フォロー解除も可能です。チャットボタンを押すとチャットページに移動し、会話を開始できます。"
            },
            {
                pageTitle: "フォローリストページ",
                imgs: ["/image/work/work56.png"],
                alt: "フォローリストページ",
                description: "フォローリストページでは、ユーザーがフォローしている人々の一覧を確認できます。"
            },
            {
                pageTitle: "通知ページ",
                imgs: ["/image/work/work57.png"],
                alt: "通知ページ",
                description: "通知ページでは、いいねやコメント、フォローなどのユーザーに関連する通知が表示されます。"
            },
            {
                pageTitle: "ブックマークページ",
                imgs: ["/image/work/work58.png"],
                alt: "ブックマークページ",
                description: "ブックマークページでは、ユーザーが保存した投稿を閲覧できます。"
            },
            {
                pageTitle: "チャットページ",
                imgs: ["/image/work/work59.png"],
                alt: "チャットページ",
                description: "チャットページでは、ユーザーと1対1で会話を行うことができます。"
            },
            {
                pageTitle: "設定ページ",
                imgs: ["/image/work/work510.png", "/image/work/work512.png"],
                alt: "設定ページ",
                description: "設定ページでは、ユーザーがアカウント設定や通知設定などを管理できます。また、ダークモードの切り替えも可能です。"
            },
        ]
    },
    {
        id: 6,
        title: "家計簿アプリ",
        img: "/image/work/work6.png",
        alt: "家計簿アプリ",
        date: "2026-05-06",
        frontLang: ["HTML", "CSS", "React", "TypeScript"],
        backLang: ["Python", "FastAPI", "SQLite"],
        otherLang: ["Electron"],
        explain: "日々の支出を簡単に記録・管理できる家計簿アプリです。店舗名や金額、利用日を登録し、月ごとの支出状況をグラフで可視化できます。支出の推移を直感的に把握できるため、無駄遣いの発見や予算管理をサポートします。",
        description: [
            {
                pageTitle: "トップ画面",
                imgs: ["/image/work/work60.png"],
                alt: "トップ画面",
                description: "月ごとの支出額を棒グラフで表示し、お金の使い方を一目で確認できます。過去の記録も月単位で管理でき、支出傾向の把握に役立ちます。"
            },
            {
                pageTitle: "支出記録画面",
                imgs: ["/image/work/work61.png", "/image/work/work62.png"],
                alt: "支出記録画面",
                description: "支出内容を登録・編集・削除できる画面です。月ごとに設定した予算を超過した場合は金額を強調表示し、使い過ぎに気付きやすい設計にしています。"
            },
        ]
    },
]