const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: 회원가입
 *     description: 신규 회원 정보를 입력하여 가입을 처리합니다
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                  type: string
 *                  description: 신규 유저 아이디
 *               userpw:
 *                  type: string
 *                  description: 신규 유저 비밀번호
 *               email:
 *                  type: string
 *                  format: email
 *                  description: 신규 유저 이메일
 *               name:
 *                  type: string
 *                  description: 신규 유저 이름
 *               phone:
 *                  type: string
 *                  description: 신규 유저 번호
 *     responses:
 *       201:
 *         description: 가입 성공
 *       400:
 *         description: 잘못된 요청
 *       500:
 *         description: 서버 에러 오류
 *
 */
/**
 * @swagger
 * /login:
 *   post:
 *     summary: LOGIN
 *     description:  로그인 합니다
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                  type: string
 *                  description: 사용자 아이디
 *               userpw:
 *                  type: string
 *                  description: 사용자 비밀번호
 *     responses:
 *       201:
 *         description: 로그인 성공
 *       400:
 *         description: 잘못된 요청
 *       500:
 *         description: 서버 에러 오류
 */
/**
 * @swagger
 * /user:
 *   post:
 *     summary: 기존 회원 정보 수정
 *     description: 유저가 본인 정보를 수정합니다
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                  type: string
 *                  description: 사용자 아이디
 *               email:
 *                  type: string
 *                  format: email
 *                  description: 사용자 새 이메일
 *               name:
 *                  type: string
 *                  description: 사용자 새 이름
 *               phone:
 *                  type: string
 *                  description: 사용자 새 번호
 *     responses:
 *       201:
 *         description: 정보 수정 성공
 *       400:
 *         description: 잘못된 요청
 *       500:
 *         description: 서버 에러 오류
 *   delete:
 *     summary: 회원 탈퇴
 *     description: 계정을 삭제합니다
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *                 description: 기존 유저 계정 삭제
 *     responses:
 *       200:
 *         description: 회원 탈퇴 성공
 *       400:
 *         description: 잘못된 요청
 *       500:
 *         description: 서버 에러 오류
 */

router.post("/signup", (req, res) => {
  res.status(201).send("신규 계정을 생성합니다.");
});

router.post("/login", (req, res) => {
  res.status(201).send("로그인을 합니다.");
});

router.put("/user", (req, res) => {
  res.status(201).send("기존 유저 정보를 수정합니다.");
});

router.delete("/user", (req, res) => {
  res.status(201).send("회원탈퇴 안녕히 가세요");
});

module.exports = router;
