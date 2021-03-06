import suggestions from "../../data.json";
import { CommentInterface, ReplyInterface, SuggestionInterface, UserInterface } from "../../types";

type addNewFeedback = {
  type: "ADD_NEW_FEEDBACK",
  payload: {
    id: string|number
    title: string
    description: string
    category: string
  }
}
type editFeedback = {
  type: "EDIT_FEEDBACK",
  payload: {
    id: string|number,
    title: string
    description: string
    category: string
    status: string
  }
}

type deleteFeedback = {
  type: "DELETE_FEEDBACK",
  payload:  number| string
}
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

type ActionType = addNewFeedback |editFeedback |deleteFeedback|addNewComment | replyAction | upvoteAction

const suggestionsReducer = (
  // state = [],
  state: SuggestionInterface[]  = suggestions.productRequests,
  action: ActionType
) => {
  switch(action.type){
    case "ADD_NEW_FEEDBACK":
      return [...state, {
        ...action.payload,
        status: "suggestion",
        comments: [],
        upvotes: 0,

      }]

    case "EDIT_FEEDBACK": 
      return state.map(suggestion => suggestion.id === action.payload.id?
        {
          ...suggestion,
          title: action.payload.title,
          description: action.payload.description,
          category: action.payload.category,
          status: action.payload.status,
        }
        :suggestion)
     
     case "DELETE_FEEDBACK": 
        return state.filter(suggestion => suggestion.id !== action.payload)   
    case "REPLY": 
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
