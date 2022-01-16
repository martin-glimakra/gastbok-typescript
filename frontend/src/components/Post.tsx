interface post {
    header: string;
    postText: string;
    author?: string;
    date: Date
}

export default function Post({
    header, 
    postText, 
    author, 
    date}: post) {

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
