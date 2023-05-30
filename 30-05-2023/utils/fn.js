export const cE = (type) => document.createElement (type);


export const tweetGen = (tweetData) => {
    const wrapperEL = cE ("div");
    const userImageEl = cE ('img');
    const contentEl = cE ("div");
    const nameEl = cE ('span');
    const userNameEl = cE ('span');
    const textContentEl = cE ('p');
    const reactionEl = cE ('p');
    const imagePlaceholder =
    "https://www.svgrepo.com/show/273962/user.svg";

   
    wrapperEL.className = 'tweet';
    userImageEl.src = tweetData.user?.image || imagePlaceholder;
    ("https://www.svgrepo.com/show/273962/user.svg");
    userImageEl.alt = tweetData.user?.username;
    contentEl.className = 'tweet__content';

    nameEl.textContent = tweetData.user?.firstName;
    userNameEl.textContent = tweetData.user?.username;
    userNameEl.className = 'username';
    nameEl.className = 'name';
    textContentEl.textContent = tweetData.body;
    reactionEl.textContent = tweetData.reactions;


    contentEl.append(nameEl, userNameEl, textContentEl,reactionEl)
    wrapperEL.append(userImageEl,contentEl);


    return wrapperEL;
}

