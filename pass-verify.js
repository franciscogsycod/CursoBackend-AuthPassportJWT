const bcrypt = require('bcrypt');

async function verifyPassword() {
    const myPass = 'admin26102021'
    const hash = '$2b$10$fCPBycTvsaqji7uvHDTPn.ZwR62qOftWdYMIbdFSYwCYjb3b2PKCC';
    const result = await bcrypt.compare(myPass, hash);
    
    // eslint-disable-next-line no-console
    console.log(result);
};

verifyPassword();