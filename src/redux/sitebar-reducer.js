let initialState = {
  friends: [
    {
      id: 1,
      name: 'Bill',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0v9jLAkJimIHE-IPGIY0W-i1o1XIEVB3ZatRTUc5rqQks7GS&s',
    },
    {
      id: 2,
      name: 'Ted',
      avatar:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',
    },
    {
      id: 3,
      name: 'Ken',
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png',
    },
  ],
  newFriend: '',
};

const sitebarReducer = (state = initialState, action) => {
  return state;
};

export default sitebarReducer;
