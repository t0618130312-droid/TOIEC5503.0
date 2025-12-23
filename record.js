// record.js
function saveQuizRecord(type, correct, total) {
  const record = {
    quiz: type,                 // 測驗類型
    correct: correct,           // 答對題數
    total: total,               // 總題數
    score: Math.round((correct / total) * 100), // 百分制
    time: new Date().toLocaleString()
  };

  const records = JSON.parse(localStorage.getItem("quizRecords")) || [];
  records.push(record);
  localStorage.setItem("quizRecords", JSON.stringify(records));
}
