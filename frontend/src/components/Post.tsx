import { InterfacePost } from '../interfaces'

export default function Post({
    header, 
    postText, 
    author, 
    date}: InterfacePost) {

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
