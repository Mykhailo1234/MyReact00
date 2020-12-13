import { renderEntireTree } from '../render'
let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi how are you?", likesCount: 12 },
            { id: 2, message: "It's a good!", likesCount: 15 }
        ]
    },

    dialogsPage: {
        messages: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Good!" },
        ],

        dialogs: [
            { id: 1, name: "Misha" },
            { id: 2, name: "Inna" },
            { id: 3, name: "Vadim" },
            { id: 4, name: "Sasha" }
        ]
    }
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}

export default state