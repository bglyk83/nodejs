import { db } from "./db.mjs";
/*
export async function getUsers() {
  //db.query("select * from member")의 반환은 [rows,fields] 분해 할당
  const [rows] = await db.query("select * from member");
  // console.log(rows);
  return rows;
}
*/
export async function createUser() {
  const [result] = await db.query(
    "insert into member (userid, usrpw, name, hp, email, gender, ssn1, ssn2, zipcode, address1, address2, address3) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      userid,
      usrpw,
      name,
      hp,
      email,
      gender,
      ssn1,
      ssn2,
      zipcode,
      address1,
      address2,
      address3,
    ]
  );
  return result.insertId;
}
/*
export async function updateUserEmail(idx, newEmail) {
  const [result] = await db.query("update member set email=? where idx=?", [
    newEmail,
    idx,
  ]);
  return result.affectedRows; //몇개의 행이 수정됐는지 리턴
}

// delete
export async function deleteUser(idx) {
  const [result] = await db.query("delete from member where idx=?", [idx]);
  return result.affectedRows; //몇개의 행이 삭제됐는지 리턴
} 
  */
