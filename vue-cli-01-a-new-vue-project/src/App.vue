<template>
    <header><h1>My Friends</h1></header>
    <NewFriend
        @add-friend="addFriend"
    />
    <ul>
        <FriendContact v-for="friend in friends" :key="friend.id"
            :id="friend.id"
            :name="friend.name"
            :phone-number="friend.phone"
            :email-address="friend.email"
            :is-favorite="friend.favorite"
            @toggle-favorite="toggleFriendFavorite(friend.id)"
            @delete-friend="deleteFriend(friend.id)"
        />
    </ul>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue'

export default {
    data() {
        return {
            friends: [
                {
                    id: "kenji",
                    name: "Kenji Prahyudi",
                    phone: "123456789",
                    email: "kenji@localhost.com",
                },
                {
                    id: "cyndi",
                    name: "Cyndi Gunarian",
                    phone: "098765432",
                    email: "cyndi@localhost.com",
                    favorite: true,
                },
            ]
        };
    },
    methods: {
        toggleFriendFavorite(friendId) {
            const identifiedFriend = this.friends.find(friend => friend.id === friendId);
            if (identifiedFriend.favorite === undefined) {
                identifiedFriend.favorite = false;
            }
            identifiedFriend.favorite = !identifiedFriend.favorite;
        },
        addFriend(name, phone, email) {
            this.friends.push({
                id: `${Date.now()}_${name.toLowerCase().split(' ').join('-')}`,
                name: name,
                phone: phone,
                email: email,
            });
        },
        deleteFriend(friendId) {
            this.friends = this.friends.filter(friend => friend.id !== friendId);
        }
    },
    components: {
        FriendContact,
        NewFriend,
    },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li, #app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>