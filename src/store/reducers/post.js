import {CREATE_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED} from "../types";

const initialState = {
    allPosts: [],
    bookedPost: [],
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state, allPosts: action.payload, bookedPosts: action.payload.filter(post => post.booked)
            };
        case CREATE_POST:
            return {
                ...state, allPosts: [...state.allPosts, {...action.payload}]
            };
        case REMOVE_POST:
            return {
                ...state,
                allPosts: state.allPosts.filter(post => post.id !== action.payload),
                bookedPosts: state.bookedPosts.filter(post => post.id !== action.payload)
            };
        case TOGGLE_BOOKED:
            const allPosts = state.allPosts.map(post => {
                if (post.id === action.payload) {
                    post.booked = !post.booked
                }
                return post
            });
            return {
                ...state, allPosts, bookedPosts: allPosts.filter(post => post.booked)
            };
        default:
            return state
    }
};
