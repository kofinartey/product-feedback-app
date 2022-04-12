import suggestions from "../../data.json";
import { CommentInterface, ReplyInterface, SuggestionInterface, UserInterface } from "../../types";

type addNewComment = {
  type: "ADD_NEW_COMMENT"
  payload: {
    suggestionId: string | number
    comment: CommentInterface
  }
}
type replyAction = {
  type: "REPLY",
  payload: {
    suggestionId:string | number
    commentId: number | string
    reply: ReplyInterface
  }
}
type upvoteAction = {
  type: "UPVOTE";
  payload: string | number
}

type ActionType = addNewComment | replyAction | upvoteAction

const suggestionsReducer = (
  // state = [],
  state: SuggestionInterface[]  = suggestions.productRequests,
  action: ActionType
) => {
  switch(action.type){
    case "REPLY": 
    console.log("reply called")
      return state.map(suggestion => suggestion.id !== action.payload.suggestionId? suggestion: {
        ...suggestion,
        comments: suggestion.comments.map(comment => comment.id !== action.payload.commentId? comment: {
          ...comment,
          replies: [...comment.replies, action.payload.reply]
        })
      })
    case "UPVOTE": 
      return state.map(suggestion => suggestion.id === action.payload?{
        ...suggestion,
        upvotes: suggestion.upvotes + 1
      } : suggestion)
     
    case "ADD_NEW_COMMENT":
      return state.map(suggestion => suggestion.id !== action.payload.suggestionId ? suggestion: {
        ...suggestion,
        comments: [...suggestion.comments, action.payload.comment]
      });
      
      
      default: 
      return state
  }
};

export default suggestionsReducer;
