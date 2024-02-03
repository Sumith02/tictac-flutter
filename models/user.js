const pool = require("../config/db");

const UserModel = {

    getUsers: async() => {
        const [result] = await pool.query("SELECT * FROM users");
        return result;
    },
}