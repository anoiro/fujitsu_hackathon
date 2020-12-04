import firebase from '@/plugins/firebase'

var database = firebase.database();
let room = "chat_room";
database.ref(room).push({
    title: "タイトル",
    body: "本文",
});

database.ref(room)
.on("value", (data)=> {
    if (data) {
        const rootList = data.val();
        const key = data.key;
        let list = [];
        // データオブジェクトを配列に変更する
        if(rootList != null) {
            Object.keys(rootList).forEach((val, key) => {
                rootList[val].id = val;
                list.push(rootList[val]);
            })
        }

    }
});