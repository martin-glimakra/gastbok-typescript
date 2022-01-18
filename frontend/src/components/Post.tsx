import { InterfacePost } from '../interfaces'

export default function Post(props: InterfacePost) {

    const {
        header,
        postText, 
        author, 
        date} = props


        // console.log(postText, typeof postText)
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
