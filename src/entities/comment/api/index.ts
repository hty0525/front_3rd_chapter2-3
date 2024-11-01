export const commentApis = {
  fetchComments: async (postId: number): Promise<Comments> => {
    const response = await fetch(`/api/comments/post/${postId}`);
    return await response.json();
  },

  addComment: async (comment: ReqAddCommentBody) => {
    const response = await fetch("/api/comments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
    return await response.json();
  },

  editComment: async (comment: CommentDetail) => {
    const response = await fetch(`/api/comments/${comment.id}`, {
      method: "PUT",
      body: JSON.stringify(comment),
    });
    return await response.json();
  },

  deleteComment: async (id: number) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  },

  likeComment: async ({ id, likes }: { id: number; likes: number }) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes }),
    });
    return response;
  },
};
