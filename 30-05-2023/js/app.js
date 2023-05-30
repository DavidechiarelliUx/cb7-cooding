import { tweetGen } from "../utils/fn.js";
import { GET } from "../utils/http.js";


const tweetData = {
    id: 1,
    image : "https://robohash.org/hicveldicta.png",
    firstName : "pippo",
    username : "atuny0",
    body: "His mother had always",
    reactions : 1 ,
}

let userList = []
let postList = []
const contentEl= document.querySelector('.content');

contentEl.append(tweetGen(tweetData));


const remoteData = Promise.all([GET("/posts"), GET("/users")]);

remoteData
  .then((data) => {
    postList = data[0].posts;
    userList = data[1].users;
  })
  .then(() =>
    postList
      .map((post) => {
        post.user = userList.find((user) => user.id === post.userId);
        return post;
      })
      .forEach((post) => contentEl.append(tweetGen(post)))
  );


