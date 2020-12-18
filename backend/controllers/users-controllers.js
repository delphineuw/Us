// CRUD Examples

// Create User
const will = User.build({ firstName: 'Will', lastName: 'Smith' });

// Save User to Database
const saveUser = async () => {
  try {
    // const will = await User.create({ firstName: 'Will', lastName: 'Smith' });
    await will.save();
    console.log('Jane was saved to the database!');
  } catch (error) {
    console.error('Unable to save User:', error);
  }
};

// saveUser();

// Delete User from Database
const deleteUser = async () => {
  try {
    await will.destroy();
    console.log('Jane was removed from the database!');
  } catch (error) {
    console.error('Unable to delete User:', error);
  }
};

// deleteUser();

// Get Users from Database
const selectAll = async () => {
  try {
    const users = await User.findAll();
    console.log('All users:', JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Unable to fetch:', error);
  }
};

// selectAll();

// Get Users from Database
const selectOne = async () => {
  try {
    const users = await User.findAll({
      where: {
        id: 2
      }
    });
    console.log('One users:', JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Unable to fetch:', error);
  }
};

// selectOne();
