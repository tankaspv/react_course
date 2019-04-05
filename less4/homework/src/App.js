import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/style.css';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

const POSTS = [
    {   title: 'Post Title',
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus esse eius hic illum? Illo earum fugiat eum dolorem dolorum, porro repudiandae quisquam numquam et voluptatum iusto id molestias nulla est ab, nisi laudantium pariatur quo libero qui ducimus voluptatem! Quibusdam voluptates modi nam maiores rem nisi ullam. Dignissimos deleniti non incidunt labore, ullam doloremque velit ad molestiae! Reprehenderit ut quia culpa omnis, dolor eligendi quidem amet iste maiores enim animi nesciunt illo dicta natus. Fuga odit illum, atque, veritatis, quo dolor modi, harum molestiae in nam non nesciunt accusamus esse repellendus natus dignissimos accusantium dolorem fugit magnam exercitationem id.',
        postAuthor: 'John'
    },
    {   title: 'Post Title2',
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus esse eius hic illum? Illo earum fugiat eum dolorem dolorum, porro repudiandae quisquam numquam et voluptatum iusto id molestias nulla est ab, nisi laudantium pariatur quo libero qui ducimus voluptatem! Quibusdam voluptates modi nam maiores rem nisi ullam. Dignissimos deleniti non incidunt labore, ullam doloremque velit ad molestiae! Reprehenderit ut quia culpa omnis, dolor eligendi quidem amet iste maiores enim animi nesciunt illo dicta natus. Fuga odit illum, atque, veritatis, quo dolor modi, harum molestiae in nam non nesciunt accusamus esse repellendus natus dignissimos accusantium dolorem fugit magnam exercitationem id.',
        postAuthor: 'Sarah'
    },
    {   title: 'Post Title3',
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus esse eius hic illum? Illo earum fugiat eum dolorem dolorum, porro repudiandae quisquam numquam et voluptatum iusto id molestias nulla est ab, nisi laudantium pariatur quo libero qui ducimus voluptatem! Quibusdam voluptates modi nam maiores rem nisi ullam. Dignissimos deleniti non incidunt labore, ullam doloremque velit ad molestiae! Reprehenderit ut quia culpa omnis, dolor eligendi quidem amet iste maiores enim animi nesciunt illo dicta natus. Fuga odit illum, atque, veritatis, quo dolor modi, harum molestiae in nam non nesciunt accusamus esse repellendus natus dignissimos accusantium dolorem fugit magnam exercitationem id.',
        postAuthor: 'Meredith'
    },
    {   title: 'Post Title4',
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus esse eius hic illum? Illo earum fugiat eum dolorem dolorum, porro repudiandae quisquam numquam et voluptatum iusto id molestias nulla est ab, nisi laudantium pariatur quo libero qui ducimus voluptatem! Quibusdam voluptates modi nam maiores rem nisi ullam. Dignissimos deleniti non incidunt labore, ullam doloremque velit ad molestiae! Reprehenderit ut quia culpa omnis, dolor eligendi quidem amet iste maiores enim animi nesciunt illo dicta natus. Fuga odit illum, atque, veritatis, quo dolor modi, harum molestiae in nam non nesciunt accusamus esse repellendus natus dignissimos accusantium dolorem fugit magnam exercitationem id.',
        postAuthor: 'Maria'
    },
    {   title: 'Post Title5',
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus esse eius hic illum? Illo earum fugiat eum dolorem dolorum, porro repudiandae quisquam numquam et voluptatum iusto id molestias nulla est ab, nisi laudantium pariatur quo libero qui ducimus voluptatem! Quibusdam voluptates modi nam maiores rem nisi ullam. Dignissimos deleniti non incidunt labore, ullam doloremque velit ad molestiae! Reprehenderit ut quia culpa omnis, dolor eligendi quidem amet iste maiores enim animi nesciunt illo dicta natus. Fuga odit illum, atque, veritatis, quo dolor modi, harum molestiae in nam non nesciunt accusamus esse repellendus natus dignissimos accusantium dolorem fugit magnam exercitationem id.',
        postAuthor: 'Alex'
    },
];

class App extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Blog items={POSTS} blogTitle="My Blog Title"/>
                <WelcomeModal/>
            </React.Fragment>
        );
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));