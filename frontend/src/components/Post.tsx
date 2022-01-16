interface postProps {
    header: string;
    postText: string;
    author?: string;
    date: any
}

export default function Post({
    header, 
    postText, 
    author, 
    date}: postProps) {

        return (
        <div>
            <h2>{header}</h2>
            <div>
                <p>{postText}</p>
                <p>{date.toDateString()}</p>
                <p>{author}</p>
            </div>
        </div>
    )
}
