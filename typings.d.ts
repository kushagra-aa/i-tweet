export interface Tweet extends TweetBody {
    _id: string
    _createdAt: string
    _updated_at: string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean
}

type TweetBody = {
    text: string
    username: string
    profileImg: string
    image?: string
}

type CommentBody = {
    comment: string
    tweetId: string
    username: string
    profileImg: string
}

export interface Comment extends CommentBody {
    _createdAt: string
    _id: string
    _rev: string
    _type: 'comment'
    _updated_at: string
    tweet: {
        _ref: string
        _type: 'reference'
    }
}