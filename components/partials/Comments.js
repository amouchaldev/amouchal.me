import {DiscussionEmbed} from "disqus-react"
const DisqusComments = ({ post }) => {
  const disqusShortname = "amc-5"
  const disqusConfig = {
    url: "https://amouchal.me/" + post.slug,
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div className="mt-5">
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;