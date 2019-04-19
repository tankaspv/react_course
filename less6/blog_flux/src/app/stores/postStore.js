import {ADD_POST, GET_POST} from '../constants/postConstants';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class postStore extends EventEmitter {
    constructor() {
        super();
        this.posts = [];
        this.getPosts = this.getPosts.bind(this);
        this.change = this.change.bind(this);
        this.addPost = this.addPost.bind(this);
        this.handeActions = this.handeActions.bind(this);
    }

    getPosts(posts) {
        this.posts = posts;
        this.change();
    }

    change() {
        this.emit('change');
    }

    addPost(post) {
        this.posts = [post, ...this.posts];
        this.change();
    }


    handeActions(action) {
        switch (action.type) {
            case ADD_POST:
                this.addPost(action.data)
                break;
            case GET_POST:
                this.getPosts(action.data)
                break;
        }
    }
}

const store = new postStore();
dispatcher.register(store.handeActions)

export default store;