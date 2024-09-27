    const User = require("../model/userModel");

    const create = async (req, res) => {
    try {
        const user = new User(req.body);
        if (!user.data) {
        return res.status(400).send({ msg: " user data not found" });
        }
        await userData.save();
        res.status(200).json({ msg: "User created successed" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

    const getAll = async (req, res) => {
    try {
        const users = await User.find();
        if (!userData) {
        return res.status(404).send({ msg: " users data not found" });
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

    const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);
        if (!userExists) {
        return res.status(404).send({ msg: " user data not found" });
        }
        res.status(200).json(userExists);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

    const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);
        if (!userExists) {
        return res.status(404).send({ msg: " user data not found" });
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
        });
        res.status(200).json(updateData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

    const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findByIdAndDelete(id);
        if (!userExists) {
        return res.status(404).send({ msg: " user data not found" });
        }
        res.status(200).json({ msg: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

    module.exports = {
    create,
    getAll,
    getOne,
    update,
    deleteUser,
    };
