const api = {
  readUserList: async () => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/hyesunie/demo/users"
      );
      if (response.ok) {
        return await response.json();
      }

      throw new Error("readUserList 요청에 대한 응답 잘못 됐습니다.");
    } catch (e) {
      // error 페이지로 전환
      console.log(e);
    }
  },
};

export default api;
