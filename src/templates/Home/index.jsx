import { Component } from 'react';

import './styles.css';
import { Posts } from '../../components/Posts';

import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';

export class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 10,
    };

    async componentDidMount() {
        const { page, postsPerPage } = this.state;
        const postsAndPhotos = await loadPosts();
        this.setState({ posts: postsAndPhotos.slice(page, postsPerPage), allPosts: postsAndPhotos });
    }

    loadMorePosts = () => {
        const { page, postsPerPage, allPosts, posts } = this.state;
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);
        this.setState({ posts, page: nextPage });
    };

    render() {
        // Declara this.state.posts para const de nome "posts"
        const { posts, page, postsPerPage, allPosts } = this.state;
        const noMorePosts = page + postsPerPage >= allPosts.length;
        return (
            <section className="container">
                <Posts posts={posts} />
                <div className="button-container">
                    <Button disabled={noMorePosts} text="Load more posts" handleClick={this.loadMorePosts} />
                </div>
            </section>
        );
    }
}
