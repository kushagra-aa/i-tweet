import { Comment } from '../typings'

export const fetchComments = async (tweetId: string) => {
  const res = await fetch(`/api/getComments?tweetId=${tweetId}`)
  const comments: Comment[] = await res.json()
  console.log('comments in fetch :>> ', comments);
  return comments
}