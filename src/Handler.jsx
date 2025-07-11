import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import axios from "axios";
import Post from "./Post"

export default function Handler() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(0);
    const [count, setCount] = useState(1);

    useEffect(() => {
        (async function getData() {
            setLoading(true);
            try {
                const res = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${count}`
                );
                setPosts(res.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setStatus(err.status);
            }
        })();
    }, [count]);

    return loading ? (
        status === 404 ? (
            <h1 className="headings">Bad request</h1>
        ) : (
            <h1 className="headings">Loading ...</h1>
        )
    ) : (
        <div className="posts-container">
            <div className="button-container">
                <button disabled={count == 1} onClick={() => setCount(count - 1)}>
                    <FaChevronLeft />
                </button>
                <button style={{ color: "blue" }}>{count}</button>
                <button disabled={count == 10} onClick={() => setCount(count + 1)}>
                    <FaChevronRight />
                </button>
            </div>
            {posts.map((el, i) => (
                <Post key={i} id={el.id} title={el.title} body={el.body} />
            ))}
        </div>
    );
}
