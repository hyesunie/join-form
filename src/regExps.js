const regExps = {
  id: [
    {
      reg: new RegExp("^.{8,14}$", "g"),
      error: "글자 수를 확인해주세요. (8자~14자)",
    },
  ],
  password: [
    {
      reg: new RegExp("^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^+-=])(?=S+$).*$"),
      error: "영문자, 숫자, 특수문자를 포함 해야합니다.",
    },
  ],
};

export default regExps;
