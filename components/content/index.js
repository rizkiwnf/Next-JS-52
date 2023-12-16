import Menu from "../menu";
import withAuth from "../with-auth";

function Content() {
  return (
    <div className="background-black">
      <p>Content</p>
    </div>
  )
}

export default withAuth(Content);