const bcrypt = require('bcrypt');

async function hashPassword() {
    const myPass = 'admin26102021'
    const hash = await bcrypt.hash(myPass, 10);
    // eslint-disable-next-line no-console
    console.log(hash);
}

hashPassword();
