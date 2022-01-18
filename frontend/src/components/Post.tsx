import { InterfacePost } from '../interfaces'

export default function Post({
    header, 
    postText, 
    author, 
    date}: InterfacePost) {


        console.log(postText, typeof postText)
        return (
        <div>
            <h2>{header}</h2>
            <div>
                <p>{postText}</p>
                <p>{date}</p>
                <p>{author}</p>
            </div>
        </div>
    )
}
