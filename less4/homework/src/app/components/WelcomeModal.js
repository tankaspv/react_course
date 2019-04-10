import React from 'react';

export default class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    render() {
     const {modal} = this.state;

     if (modal) {
        return (
            <React.Fragment>
                <div className="backdrop">
                    <div className="modal">
                        <h1>Welcome Title!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus esse eius hic illum? 
                            Illo earum fugiat eum dolorem dolorum, porro repudiandae quisquam numquam et voluptatum iusto id 
                            molestias nulla est ab, nisi laudantium pariatur quo libero qui ducimus voluptatem! 
                            Quibusdam voluptates modi nam maiores rem nisi ullam. Dignissimos deleniti non incidunt labore, 
                            ullam doloremque velit ad molestiae! Reprehenderit ut quia culpa omnis, 
                            dolor eligendi quidem amet iste maiores enim animi nesciunt illo dicta natus. 
                        </p>

                        <button className="close" onClick={() => {
                            this.setState({modal: false})
                        }}>X</button>

                    </div>
                </div>
            </React.Fragment>
        );
     } else{
         return null;
     }
    }

    componentDidMount() {
        this.setState({modal: true});
    }
}