class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      })
    }
  }
}

const Sdev = new User('SDeV');
const Sardor = new User('Sardor');
const Ilhom = new User('Ilhom');

const room = new ChatRoom();

room.register(Sdev);
room.register(Sardor);
room.register(Ilhom);

Sdev.send('Hello!', Sardor);
Sardor.send('Hello hello!',Sdev )
Ilhom.send('Vsem privet')
