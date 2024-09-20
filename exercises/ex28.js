/*
Create an object called facebookProfile. The object should have 
3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the 
index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
    Name: "Christian Jimenez",
    NumberFriends: 300,
    messages: ["Hello","Love u guys","Happy friday","Lovely weekend"],

    postMessage: function addMessage(text){
        this.messages.push(text);
        return this.messages;
    },

    deleteMesage: function removeMesage(text){
        for(let i = 0; i < this.messages.length; i++){
            if(text == this.messages[i])
                this.messages.splice(i,1);
        }
        return this.messages;
    },

    addFriend: function incFriends(){
        return this.NumberFriends+=1;
    },

    delFriends: function decFriends(){
        return this.NumberFriends-+1;
    }
}

console.log(facebookProfile.postMessage("Hi"))
console.log(facebookProfile.deleteMesage("Hello"))
console.log(facebookProfile.delFriends())
console.log(facebookProfile.addFriend())
