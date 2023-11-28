// import connection from "../mysql"

class UserService {
  // 操作 mysql 获取数据
  // async list() {
  //     const statement = 'SELECT * FROM user;'
  //     const [result] = await connection.execute(statement)
  //     return result
  // }

  async list() {
    return [{ id: 1, name: 'coder' }]
  }

  async info() {
    return { id: 2, name: 'info' }
  }
}

const userService = new UserService()

export default userService
