export const cE = (type) => document.createElement (type);


export const tweetGen = (tweetData) => {
    const wrapperEL = cE ("div");
    const userImageEl = cE ('img');
    const contentEl = cE ("div");
    const nameEl = cE ("p");
    const userNameEl = cE ("p");
    const profileEl = cE("div");
    const textContentEl = cE ('p');
    const reactionEl = cE ('div');
    const likeValueEl = cE ('div');
    const iconEl =cE ("div");
    const imagePlaceholder =
    "https://www.svgrepo.com/show/273962/user.svg";

   
    wrapperEL.className = 'tweet';
    userImageEl.src = tweetData.user?.image || imagePlaceholder;
    ("https://www.svgrepo.com/show/273962/user.svg");
    userImageEl.alt = tweetData.user?.username;
    contentEl.className = 'tweet__content';

    nameEl.textContent = tweetData.user?.firstName;
    userNameEl.textContent = tweetData.user?.username;
    profileEl.className = "tweet__profile";
    userNameEl.className = 'username';
    reactionEl.className = "tweet__reactions";
    likeValueEl.className = "tweet__like__value";
    iconEl.className= "tweet__icon__heart";
    userNameEl.prepend("@");
    nameEl.className = 'name';
    textContentEl.textContent = tweetData.body;
    likeValueEl.textContent = tweetData.reactions;
    
    profileEl.append(nameEl, userNameEl);
    contentEl.append(profileEl,textContentEl,reactionEl)
    wrapperEL.append(userImageEl,contentEl);
    reactionEl.append(iconEl, likeValueEl);

    return wrapperEL;
}

export const followGen = (user) => {
    // image Placeholder
    const imagePlaceholder =
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
  
    const followEl = cE("div");
    const followImgEl = cE("img");
    const followUser = cE("div");
    const followUserInfo = cE("div");
    const followName = cE("p");
    const followUsername = cE("p");
    const followButton = cE("div");
  
    followEl.className = "follow__item";
    followImgEl.className = "follow__image";
    followUserInfo.className = "follow__userInfo";
    followUser.className = "follow__user";
    followName.className = "follow__name";
    followUsername.className = "follow__username";
    followButton.className = "follow__button";
  
    followImgEl.src = user?.image || imagePlaceholder;
    followImgEl.alt = user?.username;
  
    followName.textContent = user?.firstName + " " + user?.lastName;
    followUsername.textContent = "@" + user?.username;
    followButton.textContent = "Segui";
  
    followUserInfo.append(followName, followUsername);
    followUser.append(followUserInfo, followButton);
    followEl.append(followImgEl, followUser);
  
    return followEl;
  };
  