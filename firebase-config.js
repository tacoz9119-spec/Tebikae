/* ===== Firebaseの設定 =====
   Hongaki・Kousei・Bunpitu と同じ Firebase の設定です（同じアカウントでログインできます）。
   Firebaseの画面（プロジェクトの設定）に、次のような部分が表示されます。

     const firebaseConfig = {
       apiKey: "……",
       authDomain: "……",
       ……
     };

   設定を変えるときは、その部分（const firebaseConfig = { から }; まで）をそのままコピーして、
   下の const firebaseConfig = { …… }; と入れ替えてください。
   この値は公開されても問題のない値です（メモはログインした本人しか読み書きできないよう、ルールで守ります）。 */

const firebaseConfig = {  apiKey: "AIzaSyBz9d7UDB91Jz_7i3-7AUu7x88l-i3ctFs",  authDomain: "genko-script.firebaseapp.com",  projectId: "genko-script",  storageBucket: "genko-script.firebasestorage.app",  messagingSenderId: "83518733081",  appId: "1:83518733081:web:cfff85e9d1201c717e6388"

};

/* ↓ここから下は変更しないでください */
window.TEBIKAE_FIREBASE = (typeof firebaseConfig !== 'undefined') ? firebaseConfig : null;
