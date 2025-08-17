// utils/questionStatus.js

// function to create initial question status array
export const initializeQuestionStatus = (totalQuestions) => {
  return Array.from({ length: totalQuestions }, (_, i) => ({
    id: i + 1,             // question number
    status: "unattempted", // default status
  }));
};

// function to update a particular question's status
export const updateQuestionStatus = (prevStatuses, index, newStatus) => {
  return prevStatuses.map((q, i) =>
    i === index ? { ...q, status: newStatus } : q
  );
};
