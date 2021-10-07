/*object with method*/

let facebookProfile = {
    fullName: "mich dav",
    friends: 300,
    messages: ["a new dawn..", "how are y'all...", "someone gota take me home tonight"],
    postMessage: function (any) {
        return facebookProfile.messages.splice(-1, 0, "oh yea! there you go again.")
    },
    deleteMessage: function (num) {
        return facebookProfile.messages.pop(num)
    },
    addFriend: function () {
        return facebookProfile.friends + 1
    },
    removeFriend: function () {
        return facebookProfile.friends - 1
    }
}; 
