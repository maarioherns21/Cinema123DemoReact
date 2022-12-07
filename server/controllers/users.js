import myUserSchema from "../model/user.js";


const fetchUser = async (req, res) => {
  const users = myUserSchema.User;

  try {
    const fetchUser = await users.find();

    res.json(fetchUser);
  } catch (error) {
    console.log(error.message);

    res.json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { username, password } = req.body;

  const newUser = new myUserSchema.User({ username, password });
  try {
    const saveUser = await newUser.save();

    res.status(200).json(saveUser);
  } catch (error) {
    console.log(error.message);

    res.json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await myUserSchema.User.findByIdAndRemove(id);

    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error.message);

    res.status(401).json({ message: error.message });
  }
};


const UCTRL = {"fetchUser": fetchUser, "createUser": createUser, "deleteUser": deleteUser}

export default UCTRL