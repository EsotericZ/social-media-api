const router = require('express').Router();
const { createUser,
        getAllUsers,
        getUserById,
        addFriendToUserById,
        updateUserById,
        deleteUserById
     } = require('../../../controllers/userController');

router.route('/')
    .post(createUser)
    .get(getAllUsers);

router.put('/:userId/friends/:friendId', addFriendToUserById);

router.route('/:userId')
     .get(getUserById)
     .put(updateUserById)
     .delete(deleteUserById);

module.exports = router;