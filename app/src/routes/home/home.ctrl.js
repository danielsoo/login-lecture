"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["a", "b", "C"],
    pw: ["a", "b", "c"],
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "Failed",
        });
    },
};

module.exports = {
    output,
    process,
};