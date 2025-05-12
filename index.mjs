import { createUser } from "./userRepository.mjs";
import { db } from "./db.mjs";

async function main(
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
  address3
) {
  //  select
  //  const users = await getUsers();
  //  console.log("사용자 목록 :", users);

  //  insert
  // (userid, usrpw, name, hp, email, gender, ssn1, ssn2, zipcode, address1, address2, address3)
  const newUserid = await createUser(
    "yunki",
    "1111",
    "윤기",
    "000-1111-1111",
    "yunki@yunki.com",
    "남자",
    "111111",
    "1111111",
    "11111",
    "서울 서초구 잠원동",
    "한신아파트",
    "00동 008호"
  );

  /*
  const updateUserCount = await updateUserEmail(2, "apple@naver.com");
  console.log("수정된 사용자 수 :", updateUserCount);

  //delete
  /*
  const deletedCount = await deleteUser(7);
  console.log("삭제된 사용자 수 :", deletedCount);
  */
  await db.end(); //db.pool 종료(보통 사용하지 않음)
}

main();
