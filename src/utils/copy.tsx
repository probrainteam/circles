export const doCopy = (text: string) => {
  // 출처 : https://kyounghwan01.github.io/blog/React/clipboard-copy/#%E1%84%89%E1%85%A5%E1%84%85%E1%85%A9%E1%86%AB
  // 흐름 1.
  if (!document.queryCommandSupported("copy")) {
    return alert("복사하기가 지원되지 않는 브라우저입니다.");
  }

  // 흐름 2.
  const textarea: HTMLTextAreaElement = document.createElement("textarea");
  textarea.value = text;
  // textarea.style.top = 0;
  // textarea.style.left = 0;
  // textarea.style.position = "fixed";

  // 흐름 3.
  document.body.appendChild(textarea);
  // focus() -> 사파리 브라우저 서포팅
  textarea.focus();
  // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
  textarea.select();
  // 흐름 4.
  document.execCommand("copy");
  // 흐름 5.
  document.body.removeChild(textarea);
  alert("클립보드에 복사되었습니다.");
};
