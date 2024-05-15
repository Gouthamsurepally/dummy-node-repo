let os= require('os');

// info about current user

let user=os.userInfo();
console.log(user);

 // method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} in seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    Totalmemory:os.totalmem(),
    freememory:os.freemem()
};

console.log(currentOS);